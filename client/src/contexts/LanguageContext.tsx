import React, { createContext, useContext, useState } from "react";

export type Language = "zh" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLang?: Language;
}

export function LanguageProvider({
  children,
  defaultLang = "zh",
}: LanguageProviderProps) {
  const [lang, setLangState] = useState<Language>(() => {
    const stored = localStorage.getItem("lang");
    return (stored as Language) || defaultLang;
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
  };

  const t = (key: string): string => {
    const translations = lang === "zh" ? zhTranslations : enTranslations;
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

// Static UI translations
const zhTranslations: Record<string, string> = {
  // Nav
  "nav.title": "AI少年派",
  "nav.courses": "课程",
  "nav.journey": "学习路径",
  "nav.about": "关于",
  "nav.objectives": "学习目标",

  // Hero
  "hero.badge": "20节项目制课程 · 适合9-12年级",
  "hero.title1": "学会与AI",
  "hero.title.think": "思考",
  "hero.title2": "，",
  "hero.title3": "而非仅仅",
  "hero.title.use": "使用",
  "hero.title4": "它。",
  "hero.subtitle": "从第一次AI对话到编排复杂的智能体工作流。没有讲座，没有教科书。只有真实项目、真实工具、和面向AI时代的真实技能。",
  "hero.cta1": "探索课程",
  "hero.cta2": "查看路径",

  // Stats
  "stats.classes": "课时",
  "stats.classesValue": "20",
  "stats.levels": "难度等级",
  "stats.levelsValue": "3",
  "stats.projects": "实战项目",
  "stats.projectsValue": "10",
  "stats.skills": "AI技能",
  "stats.skillsValue": "40+",

  // Learning Objectives
  "objectives.title": "核心学习目标",
  "objectives.subtitle": "每一节课都围绕明确的能力目标设计，而非单纯的知识传授。",
  "obj.1.title": "AI推理与对话能力",
  "obj.1.desc": "掌握与AI进行有效对话的方法论：精确提示、角色分配、迭代优化、幻觉检测。学会让AI成为你的思考伙伴，而非替代品。",
  "obj.2.title": "理解力与表达力",
  "obj.2.desc": "AI可以帮你做事，帮你思考，但无法替代你的理解。每个项目课后的「展示与分享」环节，训练你将AI辅助的成果转化为自己的深度理解，并清晰地向他人传达。",
  "obj.3.title": "AI时代的协作能力",
  "obj.3.desc": "当AI让每个人的速度和能力提升10倍，协作能力变得更加重要。中级和高级课程采用小组项目制，训练你在AI赋能环境下的沟通、分工与整合能力。",
  "obj.4.title": "批判性思维与策展力",
  "obj.4.desc": "AI会生成大量内容，但不是所有内容都值得保留。学会评估、筛选、重组AI输出，形成你自己的独特观点和作品。",
  "obj.5.title": "智能体编排与工作流设计",
  "obj.5.desc": "从简单对话进阶到指挥AI智能体执行复杂任务：网络搜索、数据分析、文件生成、应用原型。学会做AI的「导演」，而非「观众」。",
  "obj.6.title": "真实世界问题解决",
  "obj.6.desc": "每个课程都连接真实学科和真实场景。你将用AI解决社区问题、分析环境数据、创建商业方案、构建功能原型——这些都是大学和职场需要的能力。",

  // Journey
  "journey.title": "你的学习路径",
  "journey.subtitle": "从简单AI对话进阶到构建复杂智能体工作流。每个阶段解锁新能力。",
  "journey.beginner": "入门",
  "journey.intermediate": "进阶",
  "journey.advanced": "高级",
  "journey.beginnerTitle": "对话者",
  "journey.intermediateTitle": "创造者",
  "journey.advancedTitle": "编排者",
  "journey.beginnerDesc": "掌握与AI对话的艺术。学习提示工程、创意协作和批判性事实核查。个人项目，独立完成。",
  "journey.intermediateDesc": "超越聊天。用AI分析数据、创建多模态内容、分解复杂问题。小组协作，团队完成。",
  "journey.advancedDesc": "指挥AI智能体、构建自动化工作流、原型应用、解决真实问题。小组协作，团队完成。",
  "journey.individual": "个人项目",
  "journey.group": "小组项目",

  // Course grid
  "courses.title": "全部20节课",
  "courses.subtitle": "10个项目课 + 10个展示与分享课。每个项目课后都有一节专门的展示课，巩固理解、锻炼表达。",
  "courses.startMission": "开始任务",
  "courses.showShare": "展示与分享",

  // About
  "about.title": "为什么选择这门课程？",
  "about.desc": "目标不是教你「关于」AI的知识，而是教你如何「与AI一起思考」。每门课都围绕真实项目构建，因为这才是真正的学习方式——通过实践、失败、迭代，创造出让你自豪的作品。",
  "about.learnTitle": "你将真正学到什么",
  "about.learn1": "如何写出有效的提示词",
  "about.learn2": "如何识别AI的「幻觉」",
  "about.learn3": "如何用AI作为思考伙伴",
  "about.learn4": "如何指挥AI智能体完成真实工作",
  "about.learn5": "如何构建自动化工作流",
  "about.learn6": "如何不写代码也能做出应用原型",
  "about.notTitle": "这门课不是什么",
  "about.not1": "不是编程训练营",
  "about.not2": "不是传统讲座",
  "about.not3": "不是背诵AI术语",
  "about.prereqTitle": "前置要求",
  "about.prereq1": "基本电脑操作 + 打字能力",
  "about.prereq2": "一个AI订阅账号（如Manus）",
  "about.prereq3": "好奇心和实验精神",

  // Footer
  "footer.tagline": "为下一代准备AI时代的核心能力。",

  // Course page
  "course.mission": "你的任务",
  "course.project": "最终项目",
  "course.funFact": "趣味知识",
  "course.about": "这是什么？",
  "course.skills": "你将解锁的技能",
  "course.prompts": "提示词示例",
  "course.promptsDesc": "看看如何与AI对话——以及做对（或做错）时会发生什么。",
  "course.promptsHint": "点击每个示例展开或收起。",
  "course.mistakes": "常见错误",
  "course.mistakesDesc": "避免这些大多数初学者都会踩的坑。知道什么不该做和知道该做什么一样重要。",
  "course.theMistake": "错误",
  "course.whyHurts": "为什么有害",
  "course.theFix": "正确做法",
  "course.activity": "你的活动计划",
  "course.activityDesc": "按步骤完成你的项目。每一步都建立在上一步的基础上。",
  "course.walkthrough": "演示",
  "course.proTip": "专业提示",
  "course.prev": "上一课",
  "course.next": "下一课",
  "course.finished": "完成！",
  "course.backHome": "返回首页",
  "course.of": "共",
  "course.collaboration": "协作模式",
  "course.individual": "个人独立完成",
  "course.groupWork": "小组协作完成",

  // Show & Share
  "ss.title": "展示与分享",
  "ss.badge": "理解力 & 表达力",
  "ss.objective": "学习目标",
  "ss.objectiveText": "AI可以帮你做，帮你想，但无法替代你的理解。这节课的目标是将AI辅助的成果转化为你自己的深度理解，并清晰地向他人传达。",
  "ss.format": "展示形式",
  "ss.discussion": "讨论要点",
  "ss.reflection": "反思问题",
  "ss.peerReview": "同伴评价",

  // Prompt types
  "prompt.bad": "错误示范",
  "prompt.good": "正确方式",
  "prompt.followup": "追问",
  "prompt.agent": "智能体指令",
  "prompt.step": "步骤",

  // Levels
  "level.Beginner": "入门",
  "level.Intermediate": "进阶",
  "level.Advanced": "高级",
};

const enTranslations: Record<string, string> = {
  // Nav
  "nav.title": "AI for Kids",
  "nav.courses": "Courses",
  "nav.journey": "The Journey",
  "nav.about": "About",
  "nav.objectives": "Objectives",

  // Hero
  "hero.badge": "20 Project-Based Classes · Grades 9-12",
  "hero.title1": "Learn to ",
  "hero.title.think": "Think",
  "hero.title2": " with AI,",
  "hero.title3": "Not Just ",
  "hero.title.use": "Use",
  "hero.title4": " It.",
  "hero.subtitle": "A hands-on journey from your first AI conversation to orchestrating complex agentic workflows. No lectures. No textbooks. Just real projects, real tools, and real skills for the AI-powered future.",
  "hero.cta1": "Explore Courses",
  "hero.cta2": "See the Journey",

  // Stats
  "stats.classes": "Classes",
  "stats.classesValue": "20",
  "stats.levels": "Skill Levels",
  "stats.levelsValue": "3",
  "stats.projects": "Real Projects",
  "stats.projectsValue": "10",
  "stats.skills": "AI Skills",
  "stats.skillsValue": "40+",

  // Learning Objectives
  "objectives.title": "Core Learning Objectives",
  "objectives.subtitle": "Every class is designed around clear capability goals, not just knowledge transfer.",
  "obj.1.title": "AI Reasoning & Conversation",
  "obj.1.desc": "Master the methodology of effective AI dialogue: precise prompting, role assignment, iterative refinement, hallucination detection. Learn to make AI your thinking partner, not your replacement.",
  "obj.2.title": "Understanding & Communication",
  "obj.2.desc": "AI can do for you, AI can think for you, but AI can never replace your understanding. The 'Show & Share' sessions after each project train you to convert AI-assisted results into deep personal understanding and communicate them clearly to others.",
  "obj.3.title": "Collaboration in the AI Age",
  "obj.3.desc": "When AI empowers each individual with 10x speed and capacity, collaboration skills become even more critical. Intermediate and Advanced courses use group projects to train communication, division of labor, and integration skills in AI-empowered environments.",
  "obj.4.title": "Critical Thinking & Curation",
  "obj.4.desc": "AI generates massive amounts of content, but not all of it is worth keeping. Learn to evaluate, filter, and reorganize AI output to form your own unique perspectives and creations.",
  "obj.5.title": "Agent Orchestration & Workflow Design",
  "obj.5.desc": "Progress from simple conversations to commanding AI agents for complex tasks: web research, data analysis, file generation, app prototyping. Learn to be AI's 'director,' not its 'audience.'",
  "obj.6.title": "Real-World Problem Solving",
  "obj.6.desc": "Every course connects to real subjects and real scenarios. You'll use AI to solve community problems, analyze environmental data, create business plans, build functional prototypes — skills needed in college and careers.",

  // Journey
  "journey.title": "Your Learning Journey",
  "journey.subtitle": "Progress from simple AI conversations to building complex agentic workflows. Each level unlocks new powers.",
  "journey.beginner": "Beginner",
  "journey.intermediate": "Intermediate",
  "journey.advanced": "Advanced",
  "journey.beginnerTitle": "The Conversationalist",
  "journey.intermediateTitle": "The Creator",
  "journey.advancedTitle": "The Orchestrator",
  "journey.beginnerDesc": "Master the art of talking to AI. Learn prompt engineering, creative collaboration, and critical fact-checking. Individual projects, completed independently.",
  "journey.intermediateDesc": "Go beyond chat. Use AI to analyze data, create multimodal content, and decompose complex problems. Group projects, completed as a team.",
  "journey.advancedDesc": "Command AI agents, build automated workflows, prototype apps, and solve real-world problems. Group projects, completed as a team.",
  "journey.individual": "Individual",
  "journey.group": "Group Project",

  // Course grid
  "courses.title": "All 20 Classes",
  "courses.subtitle": "10 project classes + 10 Show & Share classes. Each project is followed by a dedicated presentation session to solidify understanding and practice communication.",
  "courses.startMission": "Start Mission",
  "courses.showShare": "Show & Share",

  // About
  "about.title": "Why This Curriculum?",
  "about.desc": "The goal isn't to teach you about AI. It's to teach you how to think with AI. Every course is built around a real project because that's how you actually learn — by doing, failing, iterating, and creating something you're proud of.",
  "about.learnTitle": "What You'll Actually Learn",
  "about.learn1": "How to craft prompts that get real results",
  "about.learn2": "How to spot when AI is making things up",
  "about.learn3": "How to use AI as a brainstorming partner",
  "about.learn4": "How to command AI agents to do real work",
  "about.learn5": "How to build automated workflows",
  "about.learn6": "How to prototype apps without coding",
  "about.notTitle": "What This Is NOT",
  "about.not1": "Not a coding bootcamp",
  "about.not2": "Not a lecture series",
  "about.not3": "Not about memorizing AI terminology",
  "about.prereqTitle": "Prerequisites",
  "about.prereq1": "Basic computer skills + typing",
  "about.prereq2": "A premium AI subscription (e.g., Manus)",
  "about.prereq3": "Curiosity and willingness to experiment",

  // Footer
  "footer.tagline": "Preparing the next generation for an AI-powered world.",

  // Course page
  "course.mission": "Your Mission",
  "course.project": "Final Project",
  "course.funFact": "Fun Fact",
  "course.about": "What's This About?",
  "course.skills": "Skills You'll Unlock",
  "course.prompts": "Prompt Examples",
  "course.promptsDesc": "See exactly how to talk to AI — and what happens when you do it right (or wrong).",
  "course.promptsHint": "Click each example to expand or collapse it.",
  "course.mistakes": "Common Mistakes",
  "course.mistakesDesc": "Avoid these traps that trip up most beginners. Learning what NOT to do is just as important.",
  "course.theMistake": "The Mistake",
  "course.whyHurts": "Why It Hurts",
  "course.theFix": "The Fix",
  "course.activity": "Your Activity Plan",
  "course.activityDesc": "Follow these steps to complete your project. Each step builds on the last.",
  "course.walkthrough": "Walkthrough",
  "course.proTip": "Pro Tip",
  "course.prev": "Previous",
  "course.next": "Next",
  "course.finished": "Finished!",
  "course.backHome": "Back to Home",
  "course.of": "of",
  "course.collaboration": "Collaboration Mode",
  "course.individual": "Individual Project",
  "course.groupWork": "Group Project",

  // Show & Share
  "ss.title": "Show & Share",
  "ss.badge": "Understanding & Communication",
  "ss.objective": "Learning Objective",
  "ss.objectiveText": "AI can do for you, AI can think for you, but AI can never replace your understanding. This session's goal is to convert AI-assisted results into your own deep understanding and communicate them clearly to others.",
  "ss.format": "Presentation Format",
  "ss.discussion": "Discussion Points",
  "ss.reflection": "Reflection Questions",
  "ss.peerReview": "Peer Review",

  // Prompt types
  "prompt.bad": "What NOT to Do",
  "prompt.good": "The Right Way",
  "prompt.followup": "Follow-Up",
  "prompt.agent": "Agentic Command",
  "prompt.step": "Step",

  // Levels
  "level.Beginner": "Beginner",
  "level.Intermediate": "Intermediate",
  "level.Advanced": "Advanced",
};
