import { boolean, int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Course sessions - represents available time slots for courses.
 * e.g., "Online Summer Camp - Sundays 2-3:30pm, mid-June, 7 weeks"
 */
export const courseSessions = mysqlTable("course_sessions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  nameZh: varchar("nameZh", { length: 255 }),
  description: text("description"),
  descriptionZh: text("descriptionZh"),
  schedule: varchar("schedule", { length: 255 }).notNull(),
  scheduleZh: varchar("scheduleZh", { length: 255 }),
  startDate: varchar("startDate", { length: 64 }).notNull(),
  durationWeeks: int("durationWeeks").notNull(),
  maxSlots: int("maxSlots").notNull().default(10),
  isActive: boolean("isActive").notNull().default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CourseSession = typeof courseSessions.$inferSelect;
export type InsertCourseSession = typeof courseSessions.$inferInsert;

/**
 * Registrations - stores parent/student registration data.
 */
export const registrations = mysqlTable("registrations", {
  id: int("id").autoincrement().primaryKey(),
  sessionId: int("sessionId").notNull(),
  parentEmail: varchar("parentEmail", { length: 320 }).notNull(),
  childAge: int("childAge").notNull(),
  childName: varchar("childName", { length: 255 }),
  /** Parent consented to data usage for academic research and public publication */
  consentResearch: boolean("consentResearch").notNull().default(false),
  /** Parent consented to privacy policy */
  consentPrivacy: boolean("consentPrivacy").notNull().default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Registration = typeof registrations.$inferSelect;
export type InsertRegistration = typeof registrations.$inferInsert;
