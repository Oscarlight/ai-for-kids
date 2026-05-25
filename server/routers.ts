import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, adminProcedure, router } from "./_core/trpc";
import { z } from "zod";
import {
  getActiveSessions,
  getAllSessions,
  getRegistrationCount,
  getRegistrationsBySession,
  getAllRegistrations,
  createRegistration,
  deleteRegistration,
  createSession,
  getSessionById,
} from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ==================== Public Registration Routes ====================
  sessions: router({
    listActive: publicProcedure.query(async () => {
      const sessions = await getActiveSessions();
      const sessionsWithSlots = await Promise.all(
        sessions.map(async (session) => {
          const count = await getRegistrationCount(session.id);
          return {
            ...session,
            registeredCount: count,
            remainingSlots: session.maxSlots - count,
          };
        })
      );
      return sessionsWithSlots;
    }),
  }),

  registration: router({
    create: publicProcedure
      .input(
        z.object({
          sessionId: z.number(),
          parentEmail: z.string().email(),
          childAge: z.number().min(8).max(18),
          childName: z.string().optional(),
          consentResearch: z.literal(true, { message: "Research consent is required" }),
          consentPrivacy: z.literal(true, { message: "Privacy policy consent is required" }),
        })
      )
      .mutation(async ({ input }) => {
        const session = await getSessionById(input.sessionId);
        if (!session) throw new Error("Session not found");
        if (!session.isActive) throw new Error("This session is no longer accepting registrations");
        const count = await getRegistrationCount(input.sessionId);
        if (count >= session.maxSlots) throw new Error("This session is full. No more slots available.");

        await createRegistration({
          sessionId: input.sessionId,
          parentEmail: input.parentEmail,
          childAge: input.childAge,
          childName: input.childName ?? null,
          consentResearch: true,
          consentPrivacy: true,
        });
        return { success: true };
      }),
  }),

  // ==================== Admin Routes ====================
  admin: router({
    listSessions: adminProcedure.query(async () => {
      const sessions = await getAllSessions();
      const sessionsWithCounts = await Promise.all(
        sessions.map(async (session) => {
          const count = await getRegistrationCount(session.id);
          return { ...session, registeredCount: count };
        })
      );
      return sessionsWithCounts;
    }),

    listRegistrations: adminProcedure.query(async () => {
      return getAllRegistrations();
    }),

    getSessionRegistrations: adminProcedure
      .input(z.object({ sessionId: z.number() }))
      .query(async ({ input }) => {
        return getRegistrationsBySession(input.sessionId);
      }),

    addRegistration: adminProcedure
      .input(
        z.object({
          sessionId: z.number(),
          parentEmail: z.string().email(),
          childAge: z.number().min(8).max(18),
          childName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        await createRegistration({
          sessionId: input.sessionId,
          parentEmail: input.parentEmail,
          childAge: input.childAge,
          childName: input.childName ?? null,
          consentResearch: true,
          consentPrivacy: true,
        });
        return { success: true };
      }),

    deleteRegistration: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await deleteRegistration(input.id);
        return { success: true };
      }),

    createSession: adminProcedure
      .input(
        z.object({
          name: z.string(),
          nameZh: z.string().optional(),
          description: z.string().optional(),
          descriptionZh: z.string().optional(),
          schedule: z.string(),
          scheduleZh: z.string().optional(),
          startDate: z.string(),
          durationWeeks: z.number(),
          maxSlots: z.number().default(10),
        })
      )
      .mutation(async ({ input }) => {
        await createSession({
          name: input.name,
          nameZh: input.nameZh ?? null,
          description: input.description ?? null,
          descriptionZh: input.descriptionZh ?? null,
          schedule: input.schedule,
          scheduleZh: input.scheduleZh ?? null,
          startDate: input.startDate,
          durationWeeks: input.durationWeeks,
          maxSlots: input.maxSlots,
        });
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
