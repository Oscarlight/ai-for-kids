import { courses } from "@/lib/courseData";
import { showShareSessions } from "@/lib/showShareData";
import { courseTranslationsZh } from "@/lib/courseTranslations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Zap, MessageSquare, Users, Lightbulb, Star, Presentation } from "lucide-react";

export default function ShowSharePage() {
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id || "1");
  const { lang, t } = useLanguage();

  const course = courses.find((c) => c.id === courseId);
  const session = showShareSessions.find((s) => s.courseId === courseId);
  const zhTranslation = courseTranslationsZh[courseId];

  if (!course || !session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Session not found</p>
      </div>
    );
  }

  const courseTitle = lang === "zh" && zhTranslation ? zhTranslation.title : course.title;
  const isGroup = course.level !== "Beginner";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center">
              <Zap className="w-5 h-5 text-background" />
            </div>
            <span className="font-heading font-bold text-lg">{t("nav.title")}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.7_0.25_350/0.08),transparent_60%)]" />
        <div className="container relative z-10">
          <Link href={`/course/${courseId}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            {lang === "zh" ? `返回课程 ${courseId}` : `Back to Course ${courseId}`}
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neon-magenta/15 text-neon-magenta border border-neon-magenta/30">
              <Presentation className="w-3 h-3" />
              {t("ss.badge")}
            </span>
            {isGroup && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-neon-amber/15 text-neon-amber border border-neon-amber/30">
                <Users className="w-3 h-3" />
                {t("journey.group")}
              </span>
            )}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold mb-3"
          >
            {t("ss.title")} #{courseId}
          </motion.h1>
          <p className="text-xl text-muted-foreground">
            {lang === "zh" ? `「${courseTitle}」课后展示` : `After: "${courseTitle}"`}
          </p>
        </div>
      </section>

      {/* Objective */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neon-magenta/30 bg-neon-magenta/5 p-8 mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-neon-magenta/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-neon-magenta" />
              </div>
              <h2 className="font-heading text-xl font-bold">{t("ss.objective")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {t("ss.objectiveText")}
            </p>
          </motion.div>

          {/* Presentation Format */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-cyan/20 flex items-center justify-center">
                <Presentation className="w-5 h-5 text-neon-cyan" />
              </div>
              <h2 className="font-heading text-2xl font-bold">{t("ss.format")}</h2>
            </div>
            <div className="terminal-block p-6">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs">presentation-format.md</span>
              </div>
              <p className="text-sm leading-relaxed text-foreground/90">
                {lang === "zh" ? session.format.zh : session.format.en}
              </p>
            </div>
          </motion.div>

          {/* Discussion Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-lime/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-neon-lime" />
              </div>
              <h2 className="font-heading text-2xl font-bold">{t("ss.discussion")}</h2>
            </div>
            <div className="grid gap-4">
              {(lang === "zh" ? session.discussionPoints.zh : session.discussionPoints.en).map((point, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-neon-lime/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-neon-lime/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-neon-lime">{i + 1}</span>
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reflection Questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-amber/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-neon-amber" />
              </div>
              <h2 className="font-heading text-2xl font-bold">{t("ss.reflection")}</h2>
            </div>
            <div className="grid gap-4">
              {(lang === "zh" ? session.reflectionQuestions.zh : session.reflectionQuestions.en).map((q, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-neon-amber/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-neon-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-neon-amber">?</span>
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{q}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Peer Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center">
                <Star className="w-5 h-5 text-neon-purple" />
              </div>
              <h2 className="font-heading text-2xl font-bold">{t("ss.peerReview")}</h2>
            </div>
            <div className="grid gap-4">
              {(lang === "zh" ? session.peerReviewCriteria.zh : session.peerReviewCriteria.en).map((criteria, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:border-neon-purple/30 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-neon-purple/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Star className="w-4 h-4 text-neon-purple" />
                  </div>
                  <p className="text-foreground/90 leading-relaxed">{criteria}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border/50">
        <div className="container max-w-4xl">
          <div className="flex justify-between items-center">
            <Link href={`/course/${courseId}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              {lang === "zh" ? `课程 ${courseId}` : `Course ${courseId}`}
            </Link>
            {courseId < 10 ? (
              <Link href={`/course/${courseId + 1}`} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neon-cyan text-background font-heading font-semibold text-sm hover:brightness-110 transition-all">
                {lang === "zh" ? `课程 ${courseId + 1}` : `Course ${courseId + 1}`}
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link href="/" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neon-magenta text-background font-heading font-semibold text-sm hover:brightness-110 transition-all">
                {t("course.backHome")}
              </Link>
            )}
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
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
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
  );
}
