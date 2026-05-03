import { Link } from "wouter";
import { Zap, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <span className="font-heading font-bold text-lg">AI for Kids</span>
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center pt-16">
        <div className="text-center">
          <div className="font-heading text-[10rem] font-bold leading-none neon-text-magenta mb-4">
            404
          </div>
          <h1 className="font-heading text-2xl font-bold mb-3">Page Not Found</h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Looks like this page got lost in the space-time continuum. Let's get you back on track.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-cyan text-background font-heading font-semibold neon-glow-cyan hover:brightness-110 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
