import type { postTable } from "$lib/server/db/schema";
import type { InferInsertModel, InferSelectModel } from "drizzle-orm";

export type PostSelectModel = InferSelectModel<typeof postTable>;
export type PostInsertModel = InferInsertModel<typeof postTable>;
