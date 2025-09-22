import { integer, pgTable, varchar, serial, timestamp, foreignKey } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
id: serial("id").primaryKey(),
name: varchar("name", { length: 255 }).notNull(),
age: integer("age").notNull(),
email: varchar("email", { length: 255 }).notNull().unique(),
});

export const postsTable = pgTable("posts", {
id: serial("id").primaryKey(),
title: varchar("title", { length: 255 }).notNull(),
content: varchar("content").notNull(),
createdAt: timestamp("created_at").notNull().defaultNow(),
authorId: integer("author_id").notNull().references(() => usersTable.id, { onDelete: 'cascade' }),
});