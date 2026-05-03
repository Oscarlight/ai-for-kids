import { courses } from "@/lib/courseData";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Target,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Terminal,
  Wrench,
  ChevronRight,
  ChevronDown,
  XCircle,
  ShieldAlert,
  Video,
  Star,
} from "lucide-react";

const levelBadgeColors: Record<string, string> = {
  Beginner: "bg-neon-lime/15 text-neon-lime border-neon-lime/30",
  Intermediate: "bg-neon-amber/15 text-neon-amber border-neon-amber/30",
  Advanced: "bg-neon-magenta/15 text-neon-magenta border-neon-magenta/30",
};

const promptTypeConfig: Record<string, { icon: typeof Zap; label: string; borderColor: string; bgColor: string; labelColor: string }> = {
  bad: { icon: AlertTriangle, label: "What NOT to Do", borderColor: "border-red-500/30", bgColor: "bg-red-500/5", labelColor: "text-red-400" },
  good: { icon: CheckCircle2, label: "The Right Way", borderColor: "border-neon-lime/30", bgColor: "bg-neon-lime/5", labelColor: "text-neon-lime" },
  followup: { icon: ChevronRight, label: "Follow-Up", borderColor: "border-neon-cyan/30", bgColor: "bg-neon-cyan/5", labelColor: "text-neon-cyan" },
  agent: { icon: Wrench, label: "Agentic Command", borderColor: "border-neon-magenta/30", bgColor: "bg-neon-magenta/5", labelColor: "text-neon-magenta" },
  step: { icon: Sparkles, label: "Step", borderColor: "border-neon-amber/30", bgColor: "bg-neon-amber/5", labelColor: "text-neon-amber" },
};

function ExpandablePrompt({ example, index }: { example: any; index: number }) {
  const [expanded, setExpanded] = useState(index < 3);
  const config = promptTypeConfig[example.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.06, 0.3) }}
      className={`rounded-2xl border ${config.borderColor} ${config.bgColor} overflow-hidden`}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 md:p-6 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${config.labelColor} shrink-0`} />
          <span className={`text-xs font-bold uppercase tracking-wider ${config.labelColor}`}>
            {config.label}
          </span>
          <span className="text-xs text-muted-foreground ml-2">— {example.label}</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0 ${expanded ? "rotate-180" : ""}`} />
      </button>

      {expanded && (
        <div className="px-4 pb-4 md:px-6 md:pb-6">
          {/* Prompt */}
          <div className="terminal-block p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-muted-foreground">your-prompt</span>
            </div>
            <p className="text-sm text-neon-cyan leading-relaxed whitespace-pre-wrap">{example.prompt}</p>
          </div>

          {/* Output */}
          {example.output && (
            <div className="rounded-xl bg-secondary/50 border border-border p-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-3 h-3 text-neon-magenta" />
                <span className="text-xs text-neon-magenta font-semibold">AI Response</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{example.output}</p>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id || "1");
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Course Not Found</h1>
          <Link href="/" className="text-neon-cyan hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  const prevCourse = courses.find((c) => c.id === courseId - 1);
  const nextCourse = courses.find((c) => c.id === courseId + 1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <span className="font-heading font-bold text-lg">AI for Kids</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> All Courses
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src={course.heroImage}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
        </div>
        <div className="container relative -mt-32 md:-mt-40 z-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-heading text-5xl md:text-6xl font-bold text-foreground/10">
                {String(course.id).padStart(2, "0")}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelBadgeColors[course.level]}`}>
                {course.level}
              </span>
              <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-secondary">
                {course.schoolConnection}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-heading">
              {course.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="py-12 border-t border-border/50">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="rounded-2xl border border-neon-cyan/20 bg-neon-cyan/5 p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-neon-cyan" />
                  <h3 className="font-heading font-bold text-neon-cyan">Your Mission</h3>
                </div>
                <p className="text-foreground font-medium leading-relaxed mb-6">{course.mission}</p>

                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-neon-magenta" />
                  <h3 className="font-heading font-bold text-neon-magenta">Final Project</h3>
                </div>
                <p className="text-foreground font-medium leading-relaxed mb-6">{course.project}</p>

                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-neon-amber" />
                  <h3 className="font-heading font-bold text-neon-amber">Fun Fact</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{course.funFact}</p>
              </div>
            </motion.div>

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">What's This About?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">{course.overview}</p>

              {/* Skills */}
              <h3 className="font-heading text-xl font-bold mb-4">Skills You'll Unlock</h3>
              <div className="grid grid-cols-2 gap-3 mb-12">
                {course.skillsLearned.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 border border-border"
                  >
                    <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Prompt Examples */}
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                <Terminal className="w-7 h-7 inline-block mr-2 text-neon-cyan" />
                Prompt Examples
              </h2>
              <p className="text-muted-foreground mb-3">See exactly how to talk to AI — and what happens when you do it right (or wrong).</p>
              <p className="text-xs text-muted-foreground/60 mb-8">Click each example to expand or collapse it.</p>

              <div className="space-y-4">
                {course.promptExamples.map((example, i) => (
                  <ExpandablePrompt key={i} example={example} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      {course.commonMistakes && course.commonMistakes.length > 0 && (
        <section className="py-20 border-t border-border/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3">
                <ShieldAlert className="w-7 h-7 inline-block mr-2 text-red-400" />
                Common Mistakes
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Avoid these traps that trip up most beginners. Learning what NOT to do is just as important.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {course.commonMistakes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-red-500/15 bg-red-500/5 p-6 hover:border-red-500/30 transition-colors"
                >
                  {/* Mistake */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-red-400 text-sm uppercase tracking-wide mb-1">The Mistake</h4>
                      <p className="text-foreground font-medium leading-relaxed">{item.mistake}</p>
                    </div>
                  </div>

                  {/* Why it's bad */}
                  <div className="flex items-start gap-3 mb-4 pl-11">
                    <div>
                      <h4 className="font-heading font-bold text-neon-amber text-sm uppercase tracking-wide mb-1">Why It Hurts</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.why}</p>
                    </div>
                  </div>

                  {/* The fix */}
                  <div className="flex items-start gap-3 pl-11">
                    <div>
                      <h4 className="font-heading font-bold text-neon-lime text-sm uppercase tracking-wide mb-1">The Fix</h4>
                      <p className="text-sm text-neon-lime/80 leading-relaxed">{item.fix}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Activity Steps */}
      <section className="py-20 bg-card/30 border-t border-border/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-4xl font-bold mb-3">
              <Zap className="w-7 h-7 inline-block mr-2 text-neon-lime" />
              Your Activity Plan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Follow these steps to complete your project. Each step builds on the last.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-lime" />

              {course.activitySteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative pl-16 pb-10 last:pb-0"
                >
                  {/* Step number */}
                  <div className="absolute left-0 w-12 h-12 rounded-xl bg-background border-2 border-neon-cyan/40 flex items-center justify-center font-heading font-bold text-neon-cyan">
                    {step.step}
                  </div>

                  <div className="rounded-2xl border border-border bg-card p-6 hover:border-neon-cyan/30 transition-colors">
                    <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{step.description}</p>

                    {/* Video Walkthrough */}
                    {step.videoWalkthrough && (
                      <div className="rounded-xl border border-neon-magenta/20 bg-neon-magenta/5 p-4 mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <Video className="w-4 h-4 text-neon-magenta" />
                          <span className="text-xs font-bold uppercase tracking-wider text-neon-magenta">Walkthrough</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.videoWalkthrough}</p>
                      </div>
                    )}

                    {/* Pro Tip */}
                    {step.proTip && (
                      <div className="rounded-xl border border-neon-amber/20 bg-neon-amber/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-neon-amber" />
                          <span className="text-xs font-bold uppercase tracking-wider text-neon-amber">Pro Tip</span>
                        </div>
                        <p className="text-sm text-neon-amber/80 leading-relaxed">{step.proTip}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border/50">
        <div className="container">
          <div className="flex items-center justify-between">
            {prevCourse ? (
              <Link href={`/course/${prevCourse.id}`} className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="font-heading font-semibold">{prevCourse.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextCourse ? (
              <Link href={`/course/${nextCourse.id}`} className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors">
                <div>
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="font-heading font-semibold">{nextCourse.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link href="/" className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors">
                <div>
                  <div className="text-xs text-muted-foreground">Finished!</div>
                  <div className="font-heading font-semibold">Back to Home</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
                <Zap className="w-4 h-4 text-background" />
              </div>
              <span className="font-heading font-semibold text-sm">AI for Kids</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Course {course.id} of 10
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
