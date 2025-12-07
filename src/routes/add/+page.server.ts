import { db } from "$lib/server/db/index.js";
import { postTable } from "$lib/server/db/schema.js";
import { fail } from "@sveltejs/kit";

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
};
