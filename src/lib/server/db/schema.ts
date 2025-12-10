import { pgTable, uuid, varchar, text, timestamp } from "drizzle-orm/pg-core";

export const postTable = pgTable("post", {
  id: uuid().defaultRandom().primaryKey(),
  author: varchar().notNull(),
  content: text().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
