import { courses } from "@/lib/courseData";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Brain, Zap, Target, ChevronDown } from "lucide-react";

const levelBadgeColors: Record<string, string> = {
  Beginner: "bg-neon-lime/15 text-neon-lime border-neon-lime/30",
  Intermediate: "bg-neon-amber/15 text-neon-amber border-neon-amber/30",
  Advanced: "bg-neon-magenta/15 text-neon-magenta border-neon-magenta/30",
};

const neonAccents = [
  "from-neon-cyan/20 to-transparent",
  "from-neon-magenta/20 to-transparent",
  "from-neon-lime/20 to-transparent",
  "from-neon-amber/20 to-transparent",
  "from-neon-purple/20 to-transparent",
  "from-neon-cyan/20 to-transparent",
  "from-neon-magenta/20 to-transparent",
  "from-neon-lime/20 to-transparent",
  "from-neon-amber/20 to-transparent",
  "from-neon-purple/20 to-transparent",
];

const neonBorders = [
  "hover:border-neon-cyan/50 hover:shadow-[0_0_20px_oklch(0.85_0.18_195/0.15)]",
  "hover:border-neon-magenta/50 hover:shadow-[0_0_20px_oklch(0.7_0.25_350/0.15)]",
  "hover:border-neon-lime/50 hover:shadow-[0_0_20px_oklch(0.85_0.25_140/0.15)]",
  "hover:border-neon-amber/50 hover:shadow-[0_0_20px_oklch(0.82_0.18_80/0.15)]",
  "hover:border-neon-purple/50 hover:shadow-[0_0_20px_oklch(0.7_0.2_290/0.15)]",
  "hover:border-neon-cyan/50 hover:shadow-[0_0_20px_oklch(0.85_0.18_195/0.15)]",
  "hover:border-neon-magenta/50 hover:shadow-[0_0_20px_oklch(0.7_0.25_350/0.15)]",
  "hover:border-neon-lime/50 hover:shadow-[0_0_20px_oklch(0.85_0.25_140/0.15)]",
  "hover:border-neon-amber/50 hover:shadow-[0_0_20px_oklch(0.82_0.18_80/0.15)]",
  "hover:border-neon-purple/50 hover:shadow-[0_0_20px_oklch(0.7_0.2_290/0.15)]",
];

export default function Home() {
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
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#courses" className="hover:text-foreground transition-colors">Courses</a>
            <a href="#journey" className="hover:text-foreground transition-colors">The Journey</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[90vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.85_0.18_195/0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,oklch(0.7_0.25_350/0.06),transparent_60%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-magenta/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-sm font-medium mb-8">
              <Rocket className="w-4 h-4" />
              10 Project-Based Courses for Grades 9-12
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              Learn to{" "}
              <span className="neon-text-cyan">Think</span>{" "}
              with AI,<br />
              Not Just{" "}
              <span className="neon-text-magenta">Use</span>{" "}
              It.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              A hands-on journey from your first AI conversation to orchestrating
              complex agentic workflows. No lectures. No textbooks. Just real
              projects, real tools, and real skills for the AI-powered future.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-cyan text-background font-heading font-semibold text-base neon-glow-cyan hover:brightness-110 transition-all"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-heading font-semibold text-base hover:bg-secondary transition-all"
              >
                See the Journey
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Courses", value: "10", icon: Brain },
              { label: "Skill Levels", value: "3", icon: Target },
              { label: "Real Projects", value: "10", icon: Rocket },
              { label: "AI Skills", value: "40+", icon: Zap },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 text-neon-cyan mx-auto mb-2" />
                <div className="font-heading text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Your <span className="neon-text-cyan">Learning</span> Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Progress from simple AI conversations to building complex agentic workflows.
              Each level unlocks new powers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: "Beginner",
                courses: "1-3",
                title: "The Conversationalist",
                description: "Master the art of talking to AI. Learn prompt engineering, creative collaboration, and critical fact-checking.",
                skills: ["Prompt Crafting", "Creative Curation", "Fact-Checking"],
                color: "neon-lime",
                glowClass: "neon-glow-lime",
              },
              {
                level: "Intermediate",
                courses: "4-6",
                title: "The Power User",
                description: "Go beyond chat. Use AI to analyze data, create multimodal content, and decompose complex problems.",
                skills: ["Data Analysis", "Image + Text", "Computational Thinking"],
                color: "neon-amber",
                glowClass: "",
              },
              {
                level: "Advanced",
                courses: "7-10",
                title: "The Orchestrator",
                description: "Command AI agents, build automated workflows, prototype apps, and solve real-world problems.",
                skills: ["Agentic Commands", "Workflow Automation", "App Building"],
                color: "neon-magenta",
                glowClass: "neon-glow-magenta",
              },
            ].map((tier, i) => (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative rounded-2xl border border-border bg-card p-8 hover:border-${tier.color}/40 transition-all duration-300`}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${levelBadgeColors[tier.level]}`}>
                  Courses {tier.courses} — {tier.level}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{tier.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{tier.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tier.skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section id="courses" className="py-24 bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              All <span className="neon-text-magenta">10</span> Courses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Each course is a hands-on project. No lectures, no textbooks — just you, AI, and a mission.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/course/${course.id}`}>
                  <div className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 ${neonBorders[i]}`}>
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      <div className="md:w-80 lg:w-96 h-48 md:h-auto relative overflow-hidden shrink-0">
                        <img
                          src={course.heroImage}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${neonAccents[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center font-heading font-bold text-lg">
                          {String(course.id).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelBadgeColors[course.level]}`}>
                            {course.level}
                          </span>
                          <span className="text-xs text-muted-foreground">{course.schoolConnection}</span>
                        </div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold mb-1 group-hover:text-neon-cyan transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{course.subtitle}</p>
                        <p className="text-sm text-muted-foreground/80 line-clamp-2 mb-4 leading-relaxed">
                          {course.overview}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-neon-cyan group-hover:gap-3 transition-all">
                          Start Mission <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Why <span className="neon-text-lime">This</span> Curriculum?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The goal isn't to teach you <em>about</em> AI. It's to teach you how to <strong>think with</strong> AI.
              Every course is built around a real project because that's how you actually learn — by doing, failing,
              iterating, and creating something you're proud of. These are the skills that will matter in college,
              in careers, and in life.
            </p>
            <div className="terminal-block p-6 text-left text-sm">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs">what-you-will-learn.md</span>
              </div>
              <code className="text-neon-cyan">## What You'll Actually Learn</code><br />
              <code className="text-muted-foreground mt-2 block">- How to craft prompts that get real results</code><br />
              <code className="text-muted-foreground">- How to spot when AI is making things up</code><br />
              <code className="text-muted-foreground">- How to use AI as a brainstorming partner</code><br />
              <code className="text-muted-foreground">- How to command AI agents to do real work</code><br />
              <code className="text-muted-foreground">- How to build automated workflows</code><br />
              <code className="text-muted-foreground">- How to prototype apps without coding</code><br />
              <code className="text-neon-magenta mt-2 block">## What This Is NOT</code><br />
              <code className="text-muted-foreground">- Not a coding bootcamp</code><br />
              <code className="text-muted-foreground">- Not a lecture series</code><br />
              <code className="text-muted-foreground">- Not about memorizing AI terminology</code><br />
              <code className="text-neon-lime mt-2 block">## Prerequisites</code><br />
              <code className="text-muted-foreground">- Basic computer skills + typing</code><br />
              <code className="text-muted-foreground">- A premium AI subscription (e.g., Manus)</code><br />
              <code className="text-muted-foreground">- Curiosity and willingness to experiment</code>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
                <Zap className="w-4 h-4 text-background" />
              </div>
              <span className="font-heading font-semibold text-sm">AI for Kids</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Preparing the next generation for an AI-powered world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
