import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { getLoginUrl } from "@/const";
import { useState } from "react";
import { Loader2, Trash2, Plus, Users, Calendar, Shield, LogOut } from "lucide-react";
import { toast } from "sonner";

export default function Admin() {
  const { user, loading, isAuthenticated, logout } = useAuth();
  const utils = trpc.useUtils();

  // Admin data queries
  const { data: sessions, isLoading: sessionsLoading } = trpc.admin.listSessions.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });
  const { data: registrations, isLoading: regsLoading } = trpc.admin.listRegistrations.useQuery(undefined, {
    enabled: isAuthenticated && user?.role === "admin",
  });

  // Mutations
  const deleteMutation = trpc.admin.deleteRegistration.useMutation({
    onSuccess: () => {
      toast.success("Registration deleted");
      utils.admin.listRegistrations.invalidate();
      utils.admin.listSessions.invalidate();
    },
    onError: (err) => toast.error(err.message),
  });

  const addMutation = trpc.admin.addRegistration.useMutation({
    onSuccess: () => {
      toast.success("Registration added");
      utils.admin.listRegistrations.invalidate();
      utils.admin.listSessions.invalidate();
      setShowAddForm(false);
      setNewReg({ sessionId: "", parentEmail: "", childAge: "", childName: "" });
    },
    onError: (err) => toast.error(err.message),
  });

  const [showAddForm, setShowAddForm] = useState(false);
  const [newReg, setNewReg] = useState({
    sessionId: "",
    parentEmail: "",
    childAge: "",
    childName: "",
  });

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-neon-cyan" />
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center max-w-md">
          <Shield className="w-16 h-16 text-neon-amber mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold mb-4">Admin Access Required</h1>
          <p className="text-muted-foreground mb-6">
            You need to sign in with an admin account to access this page.
          </p>
          <a
            href={getLoginUrl()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-cyan text-background font-heading font-semibold"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  // Not admin
  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center max-w-md">
          <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold mb-4">Access Denied</h1>
          <p className="text-muted-foreground mb-6">
            Your account does not have admin privileges. Contact the site owner to get admin access.
          </p>
          <p className="text-xs text-muted-foreground">Signed in as: {user?.email || user?.name || "Unknown"}</p>
        </div>
      </div>
    );
  }

  const handleAddRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReg.sessionId || !newReg.parentEmail || !newReg.childAge) {
      toast.error("Please fill in all required fields");
      return;
    }
    addMutation.mutate({
      sessionId: parseInt(newReg.sessionId),
      parentEmail: newReg.parentEmail,
      childAge: parseInt(newReg.childAge),
      childName: newReg.childName || undefined,
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-neon-cyan" />
            <h1 className="font-heading font-bold text-lg">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{user?.email || user?.name}</span>
            <button
              onClick={() => logout()}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        {/* Sessions Overview */}
        <section className="mb-10">
          <h2 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-neon-magenta" />
            Course Sessions
          </h2>
          {sessionsLoading ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" /> Loading...
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sessions?.map((session) => (
                <div key={session.id} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-heading font-bold mb-1">{session.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{session.schedule}</p>
                  <p className="text-sm text-muted-foreground mb-3">{session.startDate} · {session.durationWeeks} weeks</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="font-bold text-neon-cyan">{session.registeredCount}</span>
                      <span className="text-muted-foreground"> / {session.maxSlots} registered</span>
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      session.isActive ? "bg-neon-lime/10 text-neon-lime" : "bg-red-500/10 text-red-400"
                    }`}>
                      {session.isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Registrations Table */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-xl font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-neon-lime" />
              Registrations ({registrations?.length || 0})
            </h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-all text-sm font-semibold"
            >
              <Plus className="w-4 h-4" />
              Add Registration
            </button>
          </div>

          {/* Add Registration Form */}
          {showAddForm && (
            <form onSubmit={handleAddRegistration} className="rounded-xl border border-neon-cyan/30 bg-neon-cyan/5 p-5 mb-6">
              <h3 className="font-heading font-bold mb-4">Add New Registration</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Session *</label>
                  <select
                    value={newReg.sessionId}
                    onChange={(e) => setNewReg({ ...newReg, sessionId: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-neon-cyan focus:outline-none"
                    required
                  >
                    <option value="">Select session...</option>
                    {sessions?.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Parent Email *</label>
                  <input
                    type="email"
                    value={newReg.parentEmail}
                    onChange={(e) => setNewReg({ ...newReg, parentEmail: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-neon-cyan focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Child Age *</label>
                  <input
                    type="number"
                    min={8}
                    max={18}
                    value={newReg.childAge}
                    onChange={(e) => setNewReg({ ...newReg, childAge: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-neon-cyan focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Child Name (optional)</label>
                  <input
                    type="text"
                    value={newReg.childName}
                    onChange={(e) => setNewReg({ ...newReg, childName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-background border border-border focus:border-neon-cyan focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={addMutation.isPending}
                  className="px-4 py-2 rounded-lg bg-neon-cyan text-background font-semibold text-sm hover:brightness-110 transition-all disabled:opacity-50"
                >
                  {addMutation.isPending ? "Adding..." : "Add Registration"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 rounded-lg border border-border text-muted-foreground text-sm hover:bg-secondary transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Registrations Table */}
          {regsLoading ? (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" /> Loading...
            </div>
          ) : registrations && registrations.length > 0 ? (
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-card border-b border-border">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">ID</th>
                      <th className="text-left px-4 py-3 font-semibold">Session</th>
                      <th className="text-left px-4 py-3 font-semibold">Parent Email</th>
                      <th className="text-left px-4 py-3 font-semibold">Child Name</th>
                      <th className="text-left px-4 py-3 font-semibold">Age</th>
                      <th className="text-left px-4 py-3 font-semibold">Research</th>
                      <th className="text-left px-4 py-3 font-semibold">Privacy</th>
                      <th className="text-left px-4 py-3 font-semibold">Registered</th>
                      <th className="text-left px-4 py-3 font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations.map((reg) => (
                      <tr key={reg.id} className="border-b border-border/50 hover:bg-card/50">
                        <td className="px-4 py-3 text-muted-foreground">{reg.id}</td>
                        <td className="px-4 py-3">
                          {sessions?.find((s) => s.id === reg.sessionId)?.name || `#${reg.sessionId}`}
                        </td>
                        <td className="px-4 py-3">{reg.parentEmail}</td>
                        <td className="px-4 py-3">{reg.childName || "—"}</td>
                        <td className="px-4 py-3">{reg.childAge}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            reg.consentResearch ? "bg-neon-lime/10 text-neon-lime" : "bg-red-500/10 text-red-400"
                          }`}>
                            {reg.consentResearch ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs ${
                            reg.consentPrivacy ? "bg-neon-lime/10 text-neon-lime" : "bg-red-500/10 text-red-400"
                          }`}>
                            {reg.consentPrivacy ? "Yes" : "No"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(reg.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => {
                              if (confirm("Are you sure you want to delete this registration?")) {
                                deleteMutation.mutate({ id: reg.id });
                              }
                            }}
                            className="p-1.5 rounded-lg text-red-400 hover:bg-red-500/10 transition-all"
                            title="Delete registration"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="rounded-xl border border-border bg-card p-8 text-center text-muted-foreground">
              No registrations yet.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
