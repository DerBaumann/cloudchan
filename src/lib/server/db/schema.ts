import { pgTable, uuid, varchar, text } from "drizzle-orm/pg-core";

export const postTable = pgTable("post", {
  id: uuid().defaultRandom().primaryKey(),
  author: varchar().notNull().unique(),
  content: text().notNull(),
});
