export interface Course {
  id: number;
  title: string;
  subtitle: string;
  mission: string;
  project: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  color: "cyan" | "magenta" | "lime" | "amber" | "purple";
  heroImage: string;
  schoolConnection: string;
  overview: string;
  agenticConcept: {
    term: string;
    explanation: string;
  };
  activityOverview: string[];
  skillsLearned: string[];
  funFact: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "The Brainstorming Buddy",
    subtitle: "World Building with AI",
    mission: "Create a fully fleshed-out fictional universe from a single idea.",
    project: "The Ultimate Fantasy/Sci-Fi World Bible",
    level: "Beginner",
    color: "cyan",
    heroImage: "/manus-storage/course1_hero_18658186.png",
    schoolConnection: "Creative Writing / Art",
    overview: "Ever wanted to design your own game world or fantasy universe? AI is the perfect brainstorming partner — it never says 'that's a dumb idea.' You'll learn how to use AI for divergent thinking, evaluate the quality of ideas it generates, and weave scattered sparks of inspiration into a coherent, rich world. This is where you discover that AI is a tool — and like any tool, the result depends on the person using it.",
    agenticConcept: {
      term: "AI as a Tool",
      explanation: "AI is not magic and not a person. It's a tool that amplifies YOUR thinking. Just like a hammer doesn't build a house by itself, AI doesn't create a world by itself. You bring the vision, the taste, and the judgment. AI brings speed and breadth."
    },
    activityOverview: [
      "Start with a single 'seed' idea — one sentence that describes your world (e.g., 'A city where gravity works sideways')",
      "Use AI to brainstorm and expand: ask it to generate geography, cultures, creatures, rules of your world",
      "Apply the 'Yes, And...' rule: build on AI's ideas, combine them, twist them into something unexpected",
      "Curate and organize: decide what stays, what goes, and what needs your personal touch",
      "Assemble your World Bible — a document that brings your universe to life with descriptions, maps, and character sketches"
    ],
    skillsLearned: ["Divergent thinking with AI", "Idea evaluation", "Consistency checking", "World-building frameworks", "Creative curation", "Descriptive writing"],
    funFact: "The world of Middle-earth took Tolkien over 30 years to build. With AI as your brainstorming buddy, you can create a world of similar richness in hours — but the depth and soul still come from you."
  },
  {
    id: 2,
    title: "The Research Assistant",
    subtitle: "Historical Mythbusters",
    mission: "Investigate a popular historical myth and use evidence to prove or debunk it.",
    project: "Historical Mythbusters Investigation Report",
    level: "Beginner",
    color: "magenta",
    heroImage: "/manus-storage/course2_hero_970803c8.png",
    schoolConnection: "History / Social Studies",
    overview: "AI can summarize massive amounts of text in seconds — but it also confidently makes up 'facts.' In this project, you'll learn the most critical AI skill of all: telling the difference between when AI is telling the truth and when it's hallucinating. You'll become a digital-age detective, using AI to research while never trusting it blindly.",
    agenticConcept: {
      term: "Memory & Context",
      explanation: "AI doesn't truly 'remember' your conversation the way a friend does. It has a limited context window — like a whiteboard that gets erased after it fills up. Understanding this helps you know when to remind AI of important details, and why it sometimes 'forgets' what you told it earlier."
    },
    activityOverview: [
      "Pick a historical myth that sounds too wild to be true (e.g., 'Napoleon was short,' 'Vikings wore horned helmets')",
      "Ask AI to summarize what it 'knows' about the topic — then fact-check its claims against real sources",
      "Play detective: cross-reference AI's answers with at least 2-3 reliable sources (books, museum websites, academic articles)",
      "Document every time AI gets something wrong or makes something up — build your 'hallucination log'",
      "Write your verdict: True, False, or Complicated? Present your evidence like a real historian"
    ],
    skillsLearned: ["Information verification", "Source tracing", "Cross-referencing", "Hallucination detection", "Critical reading", "Evidence evaluation"],
    funFact: "AI models have a training data cutoff date. If you ask about recent events, it might confidently invent a plausible-sounding but completely false answer — and sound totally sure about it!"
  },
  {
    id: 3,
    title: "The Data Detective",
    subtitle: "Visualizing the Invisible",
    mission: "Find a real dataset, discover hidden patterns, and create a compelling visualization.",
    project: "Data Story Visualization Poster",
    level: "Beginner",
    color: "lime",
    heroImage: "/manus-storage/course3_hero_8ceefbd1.png",
    schoolConnection: "Math / Environmental Science",
    overview: "You don't need to be a math genius to analyze data. AI can help you clean data, spot patterns, and create charts — but YOU need to tell it what to look for and what questions to ask. The real skill of data analysis isn't calculation; it's asking the right questions. In this course, you'll also see how AI can use 'tools' — like a calculator or a chart maker — to extend its abilities beyond just text.",
    agenticConcept: {
      term: "Skills & Tools",
      explanation: "Just like you might use a calculator, a dictionary, or Google Maps, AI agents can use 'tools' — code execution, web search, file reading, chart generation. When you ask AI to analyze data, it's actually writing code behind the scenes and running it. Understanding this helps you give better instructions."
    },
    activityOverview: [
      "Find a dataset that interests you — school lunch data, local weather, sports stats, or environmental measurements",
      "Ask AI to help you clean and organize the data (remove errors, fill gaps, format consistently)",
      "Explore the data by asking AI questions: 'What patterns do you see?' 'What's unusual?' 'How has this changed over time?'",
      "Design a visualization that tells a story — not just a chart, but a narrative about what the data reveals",
      "Present your findings: What did you discover? What surprised you? What questions remain unanswered?"
    ],
    skillsLearned: ["Data questioning", "Pattern recognition", "Visualization design", "Statistical interpretation", "Data cleaning", "Insight extraction"],
    funFact: "Netflix uses data analysis to decide what shows to make. House of Cards was produced because data showed users loved Kevin Spacey + political drama + David Fincher as a combination."
  },
  {
    id: 4,
    title: "The Multimodal Creator",
    subtitle: "The Startup Pitch",
    mission: "Create a complete brand and marketing package for a fictional startup.",
    project: "Complete Startup Brand Kit (Logo + Poster + Pitch Deck)",
    level: "Intermediate",
    color: "amber",
    heroImage: "/manus-storage/course4_hero_912bb3f7.png",
    schoolConnection: "Business / Media Arts",
    overview: "Text is just the beginning. AI can generate images, design logos, write ad copy, and create video scripts. In this group project, you'll learn how to direct AI across multiple media types and bring all the pieces together into a unified brand. This is where you start orchestrating multiple AI capabilities in a single project — like a film director managing actors, cameras, and sets all at once.",
    agenticConcept: {
      term: "Multi-Tool Orchestration",
      explanation: "Real AI agents don't just chat — they coordinate multiple tools at once: text generation, image creation, web search, file management. When you ask an agent to 'create a brand kit,' it's actually running a sequence of different tools. Learning to think in terms of 'which tools does this task need?' makes you a better AI director."
    },
    activityOverview: [
      "Form your team (2-3 people) and brainstorm a startup idea that solves a real problem for people your age",
      "Use AI to generate your brand identity: name, tagline, color palette, and visual style",
      "Create visual assets: logo variations, social media posts, a product mockup — all directed through AI",
      "Write your pitch: a 2-minute elevator pitch explaining what your startup does and why it matters",
      "Assemble everything into a cohesive brand kit and present it as a team"
    ],
    skillsLearned: ["Multimodal prompting", "Brand consistency", "Visual curation", "Copywriting", "Creative direction", "Team coordination"],
    funFact: "Coca-Cola used AI to generate a Christmas ad in 2023, sparking huge debate. Some people thought it was cool, others felt it lacked soul. What do you think — can AI-generated art have emotion?"
  },
  {
    id: 5,
    title: "The Logic Puzzle",
    subtitle: "Breaking Down the Impossible",
    mission: "Take a seemingly impossible complex problem and break it into pieces AI can solve.",
    project: "Complex Problem Decomposition Flowchart + Solution",
    level: "Intermediate",
    color: "purple",
    heroImage: "/manus-storage/course5_hero_84fcd995.png",
    schoolConnection: "Physics / Computer Science",
    overview: "AI isn't magic — it's a logic engine. It can't solve complex problems all at once, but it CAN solve each sub-problem you break down for it. This course teaches you 'computational thinking' — the art of turning big, messy problems into small, manageable pieces. Your team will tackle a challenge that seems impossible and prove it's not — one step at a time.",
    agenticConcept: {
      term: "Planning & Decomposition",
      explanation: "The best AI agents don't just jump into action — they PLAN first. They break a big goal into sub-tasks, figure out the right order, and tackle them one by one. This is exactly what you'll learn: the skill of decomposition. It's the difference between asking AI 'solve world hunger' (useless) and giving it a structured sequence of solvable steps."
    },
    activityOverview: [
      "Your team picks a 'ridiculously hard' challenge (e.g., 'Design a Mars colony for 100 people' or 'Plan a zero-waste school lunch program')",
      "Break it down: identify every sub-problem hiding inside the big problem (materials, logistics, human needs, constraints)",
      "Assign sub-problems to AI: give each piece to AI with clear constraints and context",
      "Check the logic: does AI's answer for Part A contradict its answer for Part B? Find and fix inconsistencies",
      "Assemble the master solution: create a flowchart showing how all the pieces connect, plus a written explanation"
    ],
    skillsLearned: ["Problem decomposition", "Sub-task design", "Logic chain building", "Result integration", "Constraint identification", "Abstract thinking"],
    funFact: "Google's interview question 'How would you move Mount Fuji?' isn't about actually moving a mountain — it tests whether you can break an absurd problem into manageable steps. That's exactly the skill you're learning here."
  },
  {
    id: 6,
    title: "The Workflow Builder",
    subtitle: "Automating the Mundane",
    mission: "Identify a repetitive task and design an automated workflow to handle it.",
    project: "Fully Automated Content/Research Workflow",
    level: "Advanced",
    color: "cyan",
    heroImage: "/manus-storage/course6_hero_26d18d8f.png",
    schoolConnection: "Journalism / Student Government",
    overview: "Why do boring, repetitive work yourself? If a task has clear steps and you do it every week, AI can automate it. Your team will learn to design workflows — chaining multiple AI steps into an automated pipeline. This is where you go from 'using AI' to 'programming AI' — not with code, but with clear instructions and logic.",
    agenticConcept: {
      term: "Automation & Triggers",
      explanation: "A workflow is a sequence of steps that runs automatically: 'When X happens, do Y, then Z.' AI agents can be set up to watch for triggers (a new email, a scheduled time, new data) and execute a chain of actions without you lifting a finger. You're now designing systems, not just giving one-off commands."
    },
    activityOverview: [
      "Your team identifies a real repetitive task (e.g., weekly class newsletter, research summary, social media content calendar)",
      "Map out the workflow: what are the inputs, steps, decisions, and outputs?",
      "Design the AI instructions for each step — what does the AI need to know to do each part correctly?",
      "Build and test the workflow: run it end-to-end, find where it breaks, and fix the weak points",
      "Document your workflow so someone else could use it — clear instructions, expected inputs/outputs, and troubleshooting tips"
    ],
    skillsLearned: ["Workflow design", "Trigger conditions", "Error handling", "Template creation", "Process optimization", "Documentation"],
    funFact: "McKinsey estimates that 30% of work activities in 60% of jobs can be automated. People who learn to design workflows won't be replaced — they'll be the ones designing the automation."
  },
  {
    id: 7,
    title: "The App Builder",
    subtitle: "Prototyping with AI",
    mission: "Build a functional app prototype without writing a single line of code yourself.",
    project: "Functional Web App Prototype",
    level: "Advanced",
    color: "magenta",
    heroImage: "/manus-storage/course7_hero_a6ba8736.png",
    schoolConnection: "Computer Science / Entrepreneurship",
    overview: "You don't need to know HTML, CSS, or JavaScript. With agentic AI, you can describe the app you want in plain language and AI will build it for you. But here's the catch: you need to be incredibly clear about what you want, test everything, and iterate when things aren't right. This course teaches you to be an AI-age 'product manager' — the person who envisions, directs, and quality-checks the final product.",
    agenticConcept: {
      term: "The Full Agentic Loop",
      explanation: "This is where everything comes together. A full agentic loop means: you set a goal → the AI plans how to achieve it → it uses multiple tools (code writing, file creation, web search, testing) → it checks its own work → it iterates until done. You're now operating at the highest level: setting goals and reviewing results, while AI handles the execution."
    },
    activityOverview: [
      "Your team brainstorms an app idea that solves a real problem for your school or community",
      "Write a clear product brief: who is it for, what does it do, what are the must-have features vs. nice-to-haves?",
      "Direct the AI agent to build it: describe screens, features, and user flows in plain language",
      "Test and iterate: use the app, find bugs and missing features, give AI feedback to improve it",
      "Present your working prototype: demo the app, explain your design decisions, and share what you learned about directing AI"
    ],
    skillsLearned: ["Requirements description", "Prototype thinking", "User testing", "Iterative design", "Feature prioritization", "Technical communication"],
    funFact: "Twitter's first prototype took just 2 weeks to build. With AI tools, you can create a prototype of similar complexity in hours. Speed changes everything."
  }
];
