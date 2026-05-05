import { courses } from "@/lib/courseData";
import { courseTranslationsZh } from "@/lib/courseTranslations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Brain, Zap, Target, ChevronDown, Users, User, Lightbulb, MessageSquare, Workflow, Globe, Presentation } from "lucide-react";

const levelBadgeColors: Record<string, string> = {
  Beginner: "bg-neon-lime/15 text-neon-lime border-neon-lime/30",
  Intermediate: "bg-neon-amber/15 text-neon-amber border-neon-amber/30",
  Advanced: "bg-neon-magenta/15 text-neon-magenta border-neon-magenta/30",
};

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

export default function Home() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <span className="font-heading font-bold text-lg">{t("nav.title")}</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#objectives" className="hover:text-foreground transition-colors">{t("nav.objectives")}</a>
              <a href="#courses" className="hover:text-foreground transition-colors">{t("nav.courses")}</a>
              <a href="#journey" className="hover:text-foreground transition-colors">{t("nav.journey")}</a>
              <a href="#about" className="hover:text-foreground transition-colors">{t("nav.about")}</a>
            </div>
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
              <button
                onClick={() => setLang("zh")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  lang === "zh" ? "bg-neon-cyan text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                中文
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  lang === "en" ? "bg-neon-cyan text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[90vh] flex items-center overflow-hidden">
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
              {t("hero.badge")}
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              {t("hero.title1")}
              <span className="neon-text-cyan">{t("hero.title.think")}</span>
              {t("hero.title2")}
              <br />
              {t("hero.title3")}
              <span className="neon-text-magenta">{t("hero.title.use")}</span>
              {t("hero.title4")}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neon-cyan text-background font-heading font-semibold text-base neon-glow-cyan hover:brightness-110 transition-all"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#objectives"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-heading font-semibold text-base hover:bg-secondary transition-all"
              >
                {t("hero.cta2")}
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
              { label: t("stats.classes"), value: t("stats.classesValue"), icon: Brain },
              { label: t("stats.levels"), value: t("stats.levelsValue"), icon: Target },
              { label: t("stats.projects"), value: t("stats.projectsValue"), icon: Rocket },
              { label: t("stats.skills"), value: t("stats.skillsValue"), icon: Zap },
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

      {/* Learning Objectives Section */}
      <section id="objectives" className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              {t("objectives.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("objectives.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: "1", icon: MessageSquare, color: "neon-cyan" },
              { key: "2", icon: Presentation, color: "neon-magenta" },
              { key: "3", icon: Users, color: "neon-amber" },
              { key: "4", icon: Lightbulb, color: "neon-lime" },
              { key: "5", icon: Workflow, color: "neon-purple" },
              { key: "6", icon: Globe, color: "neon-cyan" },
            ].map((obj, i) => (
              <motion.div
                key={obj.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-border/80 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-${obj.color}/15 flex items-center justify-center mb-4`}>
                  <obj.icon className={`w-6 h-6 text-${obj.color}`} />
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">{t(`obj.${obj.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`obj.${obj.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="journey" className="py-24 bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              {t("journey.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("journey.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                level: "Beginner",
                levelLabel: t("journey.beginner"),
                courses: "1-3",
                title: t("journey.beginnerTitle"),
                description: t("journey.beginnerDesc"),
                skills: lang === "zh" ? ["提示工程", "创意策展", "事实核查"] : ["Prompt Crafting", "Creative Curation", "Fact-Checking"],
                color: "neon-lime",
                collab: t("journey.individual"),
                collabIcon: User,
              },
              {
                level: "Intermediate",
                levelLabel: t("journey.intermediate"),
                courses: "4-6",
                title: t("journey.intermediateTitle"),
                description: t("journey.intermediateDesc"),
                skills: lang === "zh" ? ["数据分析", "多模态创作", "计算思维"] : ["Data Analysis", "Image + Text", "Computational Thinking"],
                color: "neon-amber",
                collab: t("journey.group"),
                collabIcon: Users,
              },
              {
                level: "Advanced",
                levelLabel: t("journey.advanced"),
                courses: "7-10",
                title: t("journey.advancedTitle"),
                description: t("journey.advancedDesc"),
                skills: lang === "zh" ? ["智能体指令", "工作流自动化", "应用构建"] : ["Agentic Commands", "Workflow Automation", "App Building"],
                color: "neon-magenta",
                collab: t("journey.group"),
                collabIcon: Users,
              },
            ].map((tier, i) => (
              <motion.div
                key={tier.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative rounded-2xl border border-border bg-card p-8 hover:border-border/80 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${levelBadgeColors[tier.level]}`}>
                    {lang === "zh" ? `课程 ${tier.courses}` : `Courses ${tier.courses}`} — {tier.levelLabel}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">{tier.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{tier.description}</p>
                <div className="flex items-center gap-2 mb-4 text-xs">
                  <tier.collabIcon className={`w-4 h-4 text-${tier.color}`} />
                  <span className="text-muted-foreground font-medium">{tier.collab}</span>
                </div>
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

      {/* Course Grid - 20 Classes */}
      <section id="courses" className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              {t("courses.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("courses.subtitle")}
            </p>
          </motion.div>

          <div className="grid gap-4">
            {courses.map((course, i) => {
              const zhTranslation = courseTranslationsZh[course.id];
              const title = lang === "zh" && zhTranslation ? zhTranslation.title : course.title;
              const subtitle = lang === "zh" && zhTranslation ? zhTranslation.subtitle : course.subtitle;
              const overview = lang === "zh" && zhTranslation ? zhTranslation.overview : course.overview;
              const schoolConn = lang === "zh" && zhTranslation ? zhTranslation.schoolConnection : course.schoolConnection;
              const isGroup = course.level !== "Beginner";
              const classNumber = (i + 1) * 2 - 1; // 1, 3, 5, 7...
              const shareNumber = classNumber + 1; // 2, 4, 6, 8...

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  {/* Project Class */}
                  <Link href={`/course/${course.id}`}>
                    <div className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 ${neonBorders[i]}`}>
                      <div className="flex flex-col md:flex-row">
                        {/* Image */}
                        <div className="md:w-72 lg:w-80 h-44 md:h-auto relative overflow-hidden shrink-0">
                          <img
                            src={course.heroImage}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-r ${neonAccents[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                          <div className="absolute top-3 left-3 flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-background/80 backdrop-blur-sm flex items-center justify-center font-heading font-bold text-sm">
                              {String(classNumber).padStart(2, "0")}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${levelBadgeColors[course.level]}`}>
                              {lang === "zh" ? t(`level.${course.level}`) : course.level}
                            </span>
                            <span className="text-xs text-muted-foreground">{schoolConn}</span>
                            <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${isGroup ? "bg-neon-amber/10 text-neon-amber" : "bg-neon-lime/10 text-neon-lime"}`}>
                              {isGroup ? <Users className="w-3 h-3" /> : <User className="w-3 h-3" />}
                              {isGroup ? t("course.groupWork") : t("course.individual")}
                            </span>
                          </div>
                          <h3 className="font-heading text-lg md:text-xl font-bold mb-1 group-hover:text-neon-cyan transition-colors">
                            {title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">{subtitle}</p>
                          <p className="text-xs text-muted-foreground/80 line-clamp-2 mb-3 leading-relaxed">
                            {overview}
                          </p>
                          <div className="flex items-center gap-2 text-sm font-medium text-neon-cyan group-hover:gap-3 transition-all">
                            {t("courses.startMission")} <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Show & Share Class */}
                  <Link href={`/show-share/${course.id}`}>
                    <div className="group mt-2 ml-8 md:ml-16 rounded-xl border border-dashed border-neon-magenta/30 bg-neon-magenta/5 p-4 flex items-center gap-4 hover:border-neon-magenta/50 hover:bg-neon-magenta/8 transition-all cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-neon-magenta/15 flex items-center justify-center shrink-0">
                        <span className="font-heading font-bold text-sm text-neon-magenta">{String(shareNumber).padStart(2, "0")}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <Presentation className="w-4 h-4 text-neon-magenta" />
                          <span className="font-heading font-semibold text-sm">{t("courses.showShare")}</span>
                          <span className="text-xs text-muted-foreground">— {title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {lang === "zh" ? "展示成果、讨论反思、同伴互评" : "Present results, discuss reflections, peer review"}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-neon-magenta opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-card/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("about.desc")}
            </p>
            <div className="terminal-block p-6 text-left text-sm">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs">curriculum-overview.md</span>
              </div>
              <code className="text-neon-cyan">## {t("about.learnTitle")}</code><br />
              <code className="text-muted-foreground mt-2 block">- {t("about.learn1")}</code><br />
              <code className="text-muted-foreground">- {t("about.learn2")}</code><br />
              <code className="text-muted-foreground">- {t("about.learn3")}</code><br />
              <code className="text-muted-foreground">- {t("about.learn4")}</code><br />
              <code className="text-muted-foreground">- {t("about.learn5")}</code><br />
              <code className="text-muted-foreground">- {t("about.learn6")}</code><br />
              <code className="text-neon-magenta mt-2 block">## {t("about.notTitle")}</code><br />
              <code className="text-muted-foreground">- {t("about.not1")}</code><br />
              <code className="text-muted-foreground">- {t("about.not2")}</code><br />
              <code className="text-muted-foreground">- {t("about.not3")}</code><br />
              <code className="text-neon-lime mt-2 block">## {t("about.prereqTitle")}</code><br />
              <code className="text-muted-foreground">- {t("about.prereq1")}</code><br />
              <code className="text-muted-foreground">- {t("about.prereq2")}</code><br />
              <code className="text-muted-foreground">- {t("about.prereq3")}</code>
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
              <span className="font-heading font-semibold text-sm">{t("nav.title")}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
