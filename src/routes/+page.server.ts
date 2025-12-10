import { db } from "$lib/server/db";
import { postTable } from "$lib/server/db/schema";
import { fail } from "@sveltejs/kit";
import { desc } from "drizzle-orm";

export async function load() {
  const posts = await db
    .select()
    .from(postTable)
    .orderBy(desc(postTable.createdAt));

  return { posts };
}

export const actions = {
  async default({ request }) {
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
};
