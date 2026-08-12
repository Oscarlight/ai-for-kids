import { courses } from "@/lib/courseData";
import { courseTranslationsZh } from "@/lib/courseTranslations";
import { resolveImagePath } from "@/lib/imagePaths";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Zap,
  Target,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  Users,
  User,
  Presentation,
  Brain,
} from "lucide-react";

const levelBadgeColors: Record<string, string> = {
  Beginner: "bg-neon-lime/15 text-neon-lime border-neon-lime/30",
  Intermediate: "bg-neon-amber/15 text-neon-amber border-neon-amber/30",
  Advanced: "bg-neon-magenta/15 text-neon-magenta border-neon-magenta/30",
};

export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id || "1");
  const course = courses.find((c) => c.id === courseId);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [courseId]);

  const zhTranslation = courseTranslationsZh[courseId];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">{lang === "zh" ? "课程未找到" : "Course Not Found"}</h1>
          <Link href="/" className="text-neon-cyan hover:underline">{t("course.backHome")}</Link>
        </div>
      </div>
    );
  }

  const prevCourse = courses.find((c) => c.id === courseId - 1);
  const nextCourse = courses.find((c) => c.id === courseId + 1);

  const title = lang === "zh" && zhTranslation ? zhTranslation.title : course.title;
  const subtitle = lang === "zh" && zhTranslation ? zhTranslation.subtitle : course.subtitle;
  const mission = lang === "zh" && zhTranslation ? zhTranslation.mission : course.mission;
  const project = lang === "zh" && zhTranslation ? zhTranslation.project : course.project;
  const overview = lang === "zh" && zhTranslation ? zhTranslation.overview : course.overview;
  const funFact = lang === "zh" && zhTranslation ? zhTranslation.funFact : course.funFact;
  const schoolConn = lang === "zh" && zhTranslation ? zhTranslation.schoolConnection : course.schoolConnection;
  const skills = lang === "zh" && zhTranslation ? zhTranslation.skillsLearned : course.skillsLearned;
  const agenticTerm = lang === "zh" && zhTranslation ? zhTranslation.agenticConcept.term : course.agenticConcept.term;
  const agenticExplanation = lang === "zh" && zhTranslation ? zhTranslation.agenticConcept.explanation : course.agenticConcept.explanation;
  const activityOverview = lang === "zh" && zhTranslation ? zhTranslation.activityOverview : course.activityOverview;
  const isGroup = course.level !== "Beginner";

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
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> {t("nav.courses")}
            </Link>
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

      {/* Hero */}
      <section className="relative pt-16">
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
          <img
            src={resolveImagePath(course.heroImage)}
            alt={title}
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
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="font-heading text-5xl md:text-6xl font-bold text-foreground/10">
                {String(course.id).padStart(2, "0")}
              </span>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelBadgeColors[course.level]}`}>
                {t(`level.${course.level}`)}
              </span>
              <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-secondary">
                {schoolConn}
              </span>
              <span className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full ${isGroup ? "bg-neon-amber/10 text-neon-amber border border-neon-amber/30" : "bg-neon-lime/10 text-neon-lime border border-neon-lime/30"}`}>
                {isGroup ? <Users className="w-3 h-3" /> : <User className="w-3 h-3" />}
                {isGroup ? t("course.groupWork") : t("course.individual")}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-heading">
              {subtitle}
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
                  <h3 className="font-heading font-bold text-neon-cyan">{t("course.mission")}</h3>
                </div>
                <p className="text-foreground font-medium leading-relaxed mb-6">{mission}</p>

                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-neon-lime" />
                  <h3 className="font-heading font-bold text-neon-lime">{t("course.project")}</h3>
                </div>
                <p className="text-foreground font-medium leading-relaxed mb-6">{project}</p>

                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-neon-amber" />
                  <h3 className="font-heading font-bold text-neon-amber">{t("course.funFact")}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{funFact}</p>

                {/* Show & Share Link */}
                <Link href={`/show-share/${courseId}`} className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-neon-magenta/30 bg-neon-magenta/5 hover:border-neon-magenta/50 transition-all">
                  <Presentation className="w-5 h-5 text-neon-magenta" />
                  <div>
                    <p className="text-sm font-heading font-semibold text-neon-magenta">{t("courses.showShare")}</p>
                    <p className="text-xs text-muted-foreground">{lang === "zh" ? "完成项目后进入" : "Enter after completing project"}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neon-magenta ml-auto" />
                </Link>
              </div>
            </motion.div>

            {/* Overview & Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">{t("course.about")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">{overview}</p>

              {/* Agentic AI Concept */}
              <div className="rounded-2xl border border-neon-magenta/20 bg-neon-magenta/5 p-6 mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neon-magenta/15 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-neon-magenta" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-neon-magenta/70">
                      {lang === "zh" ? "AI智能体概念" : "Agentic AI Concept"}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-neon-magenta">{agenticTerm}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{agenticExplanation}</p>
              </div>

              {/* Skills */}
              <h3 className="font-heading text-xl font-bold mb-4">{t("course.skills")}</h3>
              <div className="grid grid-cols-2 gap-3 mb-12">
                {skills.map((skill: string) => (
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

              {/* Activity Overview */}
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                <Sparkles className="w-7 h-7 inline-block mr-2 text-neon-lime" />
                {t("course.activity")}
              </h2>
              <p className="text-muted-foreground mb-8">{t("course.activityDesc")}</p>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-magenta to-neon-lime" />

                {activityOverview.map((step: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-16 pb-8 last:pb-0"
                  >
                    <div className="absolute left-0 w-12 h-12 rounded-xl bg-background border-2 border-neon-cyan/40 flex items-center justify-center font-heading font-bold text-neon-cyan">
                      {i + 1}
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-5 hover:border-neon-cyan/30 transition-colors">
                      <p className="text-foreground leading-relaxed">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
                  <div className="text-xs text-muted-foreground">{t("course.prev")}</div>
                  <div className="font-heading font-semibold">{lang === "zh" && courseTranslationsZh[prevCourse.id] ? courseTranslationsZh[prevCourse.id].title : prevCourse.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextCourse ? (
              <Link href={`/course/${nextCourse.id}`} className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors">
                <div>
                  <div className="text-xs text-muted-foreground">{t("course.next")}</div>
                  <div className="font-heading font-semibold">{lang === "zh" && courseTranslationsZh[nextCourse.id] ? courseTranslationsZh[nextCourse.id].title : nextCourse.title}</div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link href="/" className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors">
                <div>
                  <div className="text-xs text-muted-foreground">{t("course.finished")}</div>
                  <div className="font-heading font-semibold">{t("course.backHome")}</div>
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
              <span className="font-heading font-semibold text-sm">{t("nav.title")}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {lang === "zh" ? `课程 ${course.id}` : `Course ${course.id}`} {t("course.of")} {courses.length}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
