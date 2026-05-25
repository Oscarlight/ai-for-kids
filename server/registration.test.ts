import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createUserContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

// Mock the database module
vi.mock("./db", () => ({
  getActiveSessions: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "Online Summer Camp 2026",
      nameZh: "2026线上夏令营",
      description: "AI for Kids Summer Camp",
      descriptionZh: "AI少年派夏令营",
      schedule: "Every Sunday, 2:00 PM - 3:30 PM EST",
      scheduleZh: "每周日 下午2:00 - 3:30",
      startDate: "Mid-June 2026",
      durationWeeks: 7,
      maxSlots: 10,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  getAllSessions: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "Online Summer Camp 2026",
      nameZh: "2026线上夏令营",
      description: "AI for Kids Summer Camp",
      descriptionZh: "AI少年派夏令营",
      schedule: "Every Sunday, 2:00 PM - 3:30 PM EST",
      scheduleZh: "每周日 下午2:00 - 3:30",
      startDate: "Mid-June 2026",
      durationWeeks: 7,
      maxSlots: 10,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  getSessionById: vi.fn().mockResolvedValue({
    id: 1,
    name: "Online Summer Camp 2026",
    maxSlots: 10,
    isActive: true,
  }),
  getRegistrationCount: vi.fn().mockResolvedValue(3),
  getRegistrationsBySession: vi.fn().mockResolvedValue([]),
  getAllRegistrations: vi.fn().mockResolvedValue([
    {
      id: 1,
      sessionId: 1,
      parentEmail: "parent@example.com",
      childAge: 13,
      childName: "Alice",
      consentResearch: true,
      consentPrivacy: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  createRegistration: vi.fn().mockResolvedValue(undefined),
  deleteRegistration: vi.fn().mockResolvedValue(undefined),
  createSession: vi.fn().mockResolvedValue(undefined),
  upsertUser: vi.fn().mockResolvedValue(undefined),
  getUserByOpenId: vi.fn().mockResolvedValue(undefined),
}));

describe("sessions.listActive", () => {
  it("returns active sessions with remaining slot counts (public)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.sessions.listActive();

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Online Summer Camp 2026");
    expect(result[0].registeredCount).toBe(3);
    expect(result[0].remainingSlots).toBe(7);
  });
});

describe("registration.create", () => {
  it("creates a registration with valid input (public)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.registration.create({
      sessionId: 1,
      parentEmail: "parent@test.com",
      childAge: 13,
      childName: "Bob",
      consentResearch: true,
      consentPrivacy: true,
    });

    expect(result).toEqual({ success: true });
  });

  it("rejects registration without research consent", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.registration.create({
        sessionId: 1,
        parentEmail: "parent@test.com",
        childAge: 13,
        consentResearch: false as any,
        consentPrivacy: true,
      })
    ).rejects.toThrow();
  });

  it("rejects registration with invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.registration.create({
        sessionId: 1,
        parentEmail: "not-an-email",
        childAge: 13,
        consentResearch: true,
        consentPrivacy: true,
      })
    ).rejects.toThrow();
  });

  it("rejects registration with age out of range", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.registration.create({
        sessionId: 1,
        parentEmail: "parent@test.com",
        childAge: 5,
        consentResearch: true,
        consentPrivacy: true,
      })
    ).rejects.toThrow();
  });

  it("rejects when session is full", async () => {
    const { getRegistrationCount } = await import("./db");
    (getRegistrationCount as any).mockResolvedValueOnce(10);

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.registration.create({
        sessionId: 1,
        parentEmail: "parent@test.com",
        childAge: 13,
        consentResearch: true,
        consentPrivacy: true,
      })
    ).rejects.toThrow("full");
  });
});

describe("admin routes", () => {
  it("rejects unauthenticated access to admin.listRegistrations", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.listRegistrations()).rejects.toThrow();
  });

  it("rejects non-admin access to admin.listRegistrations", async () => {
    const ctx = createUserContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.admin.listRegistrations()).rejects.toThrow();
  });

  it("allows admin access to admin.listRegistrations", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.listRegistrations();

    expect(result).toHaveLength(1);
    expect(result[0].parentEmail).toBe("parent@example.com");
  });

  it("allows admin to add a registration", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.addRegistration({
      sessionId: 1,
      parentEmail: "newparent@test.com",
      childAge: 14,
      childName: "Charlie",
    });

    expect(result).toEqual({ success: true });
  });

  it("allows admin to delete a registration", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.deleteRegistration({ id: 1 });

    expect(result).toEqual({ success: true });
  });

  it("allows admin to list sessions with counts", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.admin.listSessions();

    expect(result).toHaveLength(1);
    expect(result[0].registeredCount).toBe(3);
  });
});
