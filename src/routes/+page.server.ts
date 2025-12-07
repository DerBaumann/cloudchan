import { db } from "$lib/server/db";
import { postTable } from "$lib/server/db/schema";

export async function load() {
  const posts = await db.select().from(postTable);

  return { posts };
}
