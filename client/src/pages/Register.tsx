import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { useState } from "react";
import { Zap, ArrowLeft, Gift, Calendar, Clock, Users, CheckCircle2, AlertTriangle, Sparkles, Shield } from "lucide-react";
import { toast } from "sonner";

export default function Register() {
  const { lang, setLang, t } = useLanguage();
  const { data: sessions, isLoading } = trpc.sessions.listActive.useQuery();
  const registerMutation = trpc.registration.create.useMutation({
    onSuccess: () => {
      toast.success(lang === "zh" ? "报名成功！我们会通过邮件联系您。" : "Registration successful! We'll contact you via email.");
      setFormData({ parentEmail: "", childAge: "", childName: "", consentResearch: false, consentPrivacy: false });
      setSelectedSession(null);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const [selectedSession, setSelectedSession] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    parentEmail: "",
    childAge: "",
    childName: "",
    consentResearch: false,
    consentPrivacy: false,
  });
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSession) {
      toast.error(lang === "zh" ? "请选择一个课程时段" : "Please select a session");
      return;
    }
    if (!formData.consentResearch) {
      toast.error(lang === "zh" ? "必须同意学术研究数据使用条款" : "You must consent to academic research data usage");
      return;
    }
    if (!formData.consentPrivacy) {
      toast.error(lang === "zh" ? "必须同意隐私政策" : "You must agree to the privacy policy");
      return;
    }
    registerMutation.mutate({
      sessionId: selectedSession,
      parentEmail: formData.parentEmail,
      childAge: parseInt(formData.childAge),
      childName: formData.childName || undefined,
      consentResearch: true,
      consentPrivacy: true,
    });
  };

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
              <ArrowLeft className="w-4 h-4" />
              {lang === "zh" ? "返回首页" : "Back to Home"}
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

      <main className="pt-24 pb-16">
        <div className="container max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-lime/10 border border-neon-lime/20 text-neon-lime text-sm font-bold mb-4">
              <Gift className="w-4 h-4" />
              {lang === "zh" ? "100% 免费 · 含Manus MAX顶级AI工具" : "100% Free · Includes Manus MAX (Top-Tier AI)"}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              {lang === "zh" ? "课程报名" : "Course Registration"}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {lang === "zh"
                ? "选择一个课程时段，填写信息即可完成报名。每位学生将通过任务协作免费获得Manus MAX访问权限。"
                : "Select a session, fill in your information, and you're registered. Every student gets free Manus MAX access via task collaboration."}
            </p>
          </motion.div>

          {/* Session Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <h2 className="font-heading text-xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-neon-cyan" />
              {lang === "zh" ? "选择课程时段" : "Select a Session"}
            </h2>

            {isLoading ? (
              <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
                {lang === "zh" ? "加载中..." : "Loading sessions..."}
              </div>
            ) : sessions && sessions.length > 0 ? (
              <div className="space-y-4">
                {sessions.map((session) => (
                  <button
                    key={session.id}
                    onClick={() => setSelectedSession(session.id)}
                    disabled={session.remainingSlots <= 0}
                    className={`w-full text-left rounded-2xl border p-6 transition-all ${
                      selectedSession === session.id
                        ? "border-neon-cyan bg-neon-cyan/5 shadow-[0_0_20px_oklch(0.85_0.18_195/0.1)]"
                        : session.remainingSlots <= 0
                        ? "border-border/50 bg-card/50 opacity-60 cursor-not-allowed"
                        : "border-border bg-card hover:border-neon-cyan/30"
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-heading text-lg font-bold mb-1">
                          {lang === "zh" && session.nameZh ? session.nameZh : session.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {lang === "zh" && session.descriptionZh ? session.descriptionZh : session.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <Clock className="w-4 h-4 text-neon-cyan" />
                            {lang === "zh" && session.scheduleZh ? session.scheduleZh : session.schedule}
                          </span>
                          <span className="flex items-center gap-1.5 text-muted-foreground">
                            <Calendar className="w-4 h-4 text-neon-magenta" />
                            {lang === "zh" ? `${session.startDate} – 7月26日 · ${session.durationWeeks}节课` : `${session.startDate} – July 26 · ${session.durationWeeks} classes`}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className={`px-4 py-2 rounded-xl text-center ${
                          session.remainingSlots <= 0
                            ? "bg-red-500/10 border border-red-500/30"
                            : session.remainingSlots <= 3
                            ? "bg-neon-amber/10 border border-neon-amber/30"
                            : "bg-neon-lime/10 border border-neon-lime/30"
                        }`}>
                          <div className={`font-heading text-2xl font-bold ${
                            session.remainingSlots <= 0 ? "text-red-400" : session.remainingSlots <= 3 ? "text-neon-amber" : "text-neon-lime"
                          }`}>
                            {session.remainingSlots}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {lang === "zh" ? `剩余 / ${session.maxSlots}` : `of ${session.maxSlots} left`}
                          </div>
                        </div>
                        {selectedSession === session.id && (
                          <CheckCircle2 className="w-6 h-6 text-neon-cyan" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">
                {lang === "zh" ? "暂无可用课程时段" : "No sessions currently available"}
              </div>
            )}
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-neon-magenta" />
                {lang === "zh" ? "报名信息" : "Registration Information"}
              </h2>

              <div className="space-y-6">
                {/* Parent Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {lang === "zh" ? "家长邮箱 *" : "Parent Email *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    placeholder={lang === "zh" ? "parent@example.com" : "parent@example.com"}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {lang === "zh" ? "我们将通过此邮箱发送课程信息和Manus MAX访问链接" : "We'll send course info and Manus MAX access link to this email"}
                  </p>
                </div>

                {/* Child Name (optional) */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {lang === "zh" ? "学生姓名（选填）" : "Student Name (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    placeholder={lang === "zh" ? "学生姓名" : "Student's name"}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                  />
                </div>

                {/* Child Age */}
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    {lang === "zh" ? "学生年龄 *" : "Student Age *"}
                  </label>
                  <input
                    type="number"
                    required
                    min={8}
                    max={18}
                    value={formData.childAge}
                    onChange={(e) => setFormData({ ...formData, childAge: e.target.value })}
                    placeholder={lang === "zh" ? "例如：13" : "e.g., 13"}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon-cyan focus:outline-none focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {lang === "zh" ? "13岁以下学生需家长全程陪同" : "Students under 13 require parental presence during all sessions"}
                  </p>
                </div>

                {/* Legal Consent Section */}
                <div className="rounded-xl border border-neon-amber/30 bg-neon-amber/5 p-5 space-y-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-neon-amber" />
                    <h3 className="font-heading font-bold text-sm text-neon-amber">
                      {lang === "zh" ? "法律同意条款（必填）" : "Legal Consent (Required)"}
                    </h3>
                  </div>

                  {/* Research Consent */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentResearch}
                      onChange={(e) => setFormData({ ...formData, consentResearch: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-border accent-neon-cyan shrink-0"
                    />
                    <div className="text-sm leading-relaxed space-y-2">
                      <p className="font-medium text-foreground">
                        {lang === "zh"
                          ? "学术研究与发表同意书"
                          : "Academic Research & Publication Consent"}
                      </p>
                      <p>
                        {lang === "zh"
                          ? "我（作为家长/监护人）同意我孩子在本课程中产生的以下数据可被用于学术研究和潜在的公开发表（包括教育期刊、学术会议论文集和教育研究报告）："
                          : "I (as parent/guardian) consent to my child's following course data being used for academic research and potential publication in educational journals, conference proceedings, and educational research reports:"}
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-1">
                        <li>{lang === "zh" ? "AI对话记录和提示词使用模式" : "AI conversation logs and prompting patterns"}</li>
                        <li>{lang === "zh" ? "课程项目作品和提交内容" : "Course project outputs and submissions"}</li>
                        <li>{lang === "zh" ? "课堂参与和互动记录" : "Class participation and interaction records"}</li>
                        <li>{lang === "zh" ? "课后调查问卷反馈" : "Post-session survey responses"}</li>
                      </ul>
                      <p className="text-muted-foreground">
                        {lang === "zh"
                          ? "保障措施：所有数据在用于研究或发表前将进行严格的去标识化处理。任何已发表的研究成果中不会包含可识别个人身份的信息（如姓名、邮箱或具体年龄）。数据将在课程结束后保留最长3年用于研究目的，之后将被安全删除。"
                          : "Safeguards: All data will be strictly de-identified before use in research or publication. No personally identifiable information (such as names, emails, or specific ages) will appear in any published findings. Data will be retained for up to 3 years after the course ends for research purposes, after which it will be securely deleted."}
                      </p>
                      <p className="text-muted-foreground">
                        {lang === "zh"
                          ? "数据访问仅限于Growth Mindset Education LLC的授课教师和指定研究人员。"
                          : "Data access is limited to Growth Mindset Education LLC instructors and designated researchers only."}
                      </p>
                      <p className="font-medium text-neon-amber">
                        {lang === "zh"
                          ? "⚠️ 您可随时通过发送邮件至 growthmindset.edu@gmail.com 撤回此同意，且不会影响您孩子的课程参与资格。"
                          : "⚠️ You may withdraw this consent at any time by emailing growthmindset.edu@gmail.com without affecting your child's enrollment or course participation."}
                      </p>
                    </div>
                  </label>

                  {/* Privacy Policy Consent */}
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentPrivacy}
                      onChange={(e) => setFormData({ ...formData, consentPrivacy: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-border accent-neon-cyan"
                    />
                    <span className="text-sm leading-relaxed">
                      {lang === "zh"
                        ? <>我已阅读并同意 <button type="button" onClick={() => setShowPrivacy(!showPrivacy)} className="text-neon-cyan underline">隐私政策</button></>
                        : <>I have read and agree to the <button type="button" onClick={() => setShowPrivacy(!showPrivacy)} className="text-neon-cyan underline">Privacy Policy</button></>}
                    </span>
                  </label>
                </div>

                {/* Privacy Policy (expandable) */}
                {showPrivacy && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="rounded-xl border border-border bg-background p-6 text-sm text-muted-foreground space-y-4 max-h-96 overflow-y-auto"
                  >
                    <h3 className="font-heading font-bold text-foreground text-base">
                      {lang === "zh" ? "隐私政策" : "Privacy Policy"}
                    </h3>
                    <p className="font-semibold text-foreground/80">
                      {lang === "zh" ? "Growth Mindset Education LLC" : "Growth Mindset Education LLC"}
                    </p>
                    <p>
                      {lang === "zh"
                        ? "生效日期：2026年6月1日"
                        : "Effective Date: June 1, 2026"}
                    </p>
                    <p className="font-semibold text-foreground/80">
                      {lang === "zh" ? "1. 我们收集的信息" : "1. Information We Collect"}
                    </p>
                    <p>
                      {lang === "zh"
                        ? "我们收集以下信息：家长/监护人电子邮件地址、学生年龄、学生姓名（可选）、课程互动数据（包括提交的作品、AI对话记录、课堂参与记录）。"
                        : "We collect the following information: parent/guardian email address, student age, student name (optional), course interaction data (including submitted work, AI conversation logs, class participation records)."}
                    </p>
                    <p className="font-semibold text-foreground/80">
                      {lang === "zh" ? "2. 信息使用方式" : "2. How We Use Information"}
                    </p>
                    <p>
                      {lang === "zh"
                        ? "收集的信息将用于：(a) 课程管理和沟通；(b) AI教育领域的学术研究；(c) 研究成果的公开发表（所有数据严格匿名化）；(d) 改进课程内容和教学方法。"
                        : "Collected information will be used for: (a) course administration and communication; (b) academic research in AI education; (c) public publication of research findings (all data strictly anonymized); (d) improving course content and teaching methods."}
                    </p>
                    <p className="font-semibold text-foreground/80">
                      {lang === "zh" ? "3. 数据保护" : "3. Data Protection"}
                    </p>
                    <p>
                      {lang === "zh"
                        ? "所有个人数据将通过行业标准加密技术进行保护。研究数据在使用前将进行严格的匿名化处理。我们不会将个人信息出售或分享给第三方营销机构。"
                        : "All personal data is protected using industry-standard encryption. Research data is strictly anonymized before use. We do not sell or share personal information with third-party marketing entities."}
                    </p>
                    <p className="font-semibold text-foreground/80">
                      {lang === "zh" ? "4. 儿童隐私" : "4. Children's Privacy"}
                    </p>
                    <p>
                      {lang === "zh"
                        ? "我们严格遵守COPPA（儿童在线隐私保护法）。13岁以下学生的数据收集需要家长/监护人的明确同意，且家长/监护人需全程陪同参加课程。"
                        : "We strictly comply with COPPA (Children's Online Privacy Protection Act). Data collection for students under 13 requires explicit parental/guardian consent, and a parent/guardian must be present during all sessions."}
                    </p>
                    <p className="font-semibold text-foreground/80">
                      {lang === "zh" ? "5. 您的权利" : "5. Your Rights"}
                    </p>
                    <p>
                      {lang === "zh"
                        ? "您有权随时：(a) 要求查看我们持有的关于您孩子的数据；(b) 要求删除数据；(c) 撤回研究同意（不影响课程参与）；(d) 退出课程。如需行使以上权利，请联系 growthmindset.edu@gmail.com。"
                        : "You have the right to: (a) request access to data we hold about your child; (b) request data deletion; (c) withdraw research consent (without affecting course participation); (d) withdraw from the course. To exercise these rights, contact growthmindset.edu@gmail.com."}
                    </p>
                    <p className="font-semibold text-foreground/80">
                      {lang === "zh" ? "6. 联系方式" : "6. Contact Information"}
                    </p>
                    <p>
                      {lang === "zh"
                        ? "Growth Mindset Education LLC\n邮箱：growthmindset.edu@gmail.com"
                        : "Growth Mindset Education LLC\nEmail: growthmindset.edu@gmail.com"}
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={registerMutation.isPending || !selectedSession}
                  className="w-full py-4 rounded-xl bg-neon-cyan text-background font-heading font-bold text-lg neon-glow-cyan hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {registerMutation.isPending
                    ? (lang === "zh" ? "提交中..." : "Submitting...")
                    : (lang === "zh" ? "确认报名" : "Complete Registration")}
                  {!registerMutation.isPending && <Sparkles className="w-5 h-5" />}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Info Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 rounded-xl border border-border bg-card/50 p-5"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-neon-amber shrink-0 mt-0.5" />
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground/80">
                  {lang === "zh" ? "重要提示" : "Important Notes"}
                </p>
                <p>
                  {lang === "zh"
                    ? "• 课程完全免费，学生将通过任务协作获得Manus MAX（顶级AI工具）的免费访问权限"
                    : "• This course is completely free. Students get free Manus MAX (top-tier AI) access via task collaboration"}
                </p>
                <p>
                  {lang === "zh"
                    ? "• 13岁以下学生参加课程时，家长/监护人需全程陪同"
                    : "• Students under 13 require a parent/guardian present during all sessions"}
                </p>
                <p>
                  {lang === "zh"
                    ? "• 报名成功后，我们将通过邮件发送课程详情和Manus MAX访问链接"
                    : "• After registration, we'll email you course details and Manus MAX access link"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">Growth Mindset Education LLC</p>
        </div>
      </footer>
    </div>
  );
}
