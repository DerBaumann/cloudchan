import { db } from "$lib/server/db";
import { postTable } from "$lib/server/db/schema";
import { fail } from "@sveltejs/kit";
import { desc } from "drizzle-orm";
import { eq } from "drizzle-orm";

export async function load() {
  const posts = await db
    .select()
    .from(postTable)
    .orderBy(desc(postTable.createdAt));

  return { posts };
}

export const actions = {
  async create({ request }) {
    const data = await request.formData();

    const author = data.get("author")?.toString();
    const content = data.get("content")?.toString();

    if (!author || !content) {
      return fail(422, {
        author,
        error: "Alle Felder müssen ausgefüllt werden!",
      });
    }

    await db.insert(postTable).values({ author, content });
  },

  async delete({ request }) {
    const data = await request.formData();
    const postId = data.get("postId")?.toString();
    console.log("DELETE postId:", postId, typeof postId);

    if (!postId) {
      return fail(400, { error: "Post ID fehlt" });
    }

    await db
      .delete(postTable)
      .where(eq(postTable.id, postId));
  }
};
