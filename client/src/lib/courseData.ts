export interface PromptExample {
  label: string;
  type: "bad" | "good" | "followup" | "agent" | "step";
  prompt: string;
  output?: string;
}

export interface ActivityStep {
  step: number;
  title: string;
  description: string;
}

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
  promptExamples: PromptExample[];
  activitySteps: ActivityStep[];
  skillsLearned: string[];
  funFact: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "The AI Conversationalist",
    subtitle: "Storytelling with AI",
    mission: "Co-write an epic, unexpected story with your new digital partner.",
    project: "The Interactive Choose-Your-Own-Adventure",
    level: "Beginner",
    color: "cyan",
    heroImage: "/manus-storage/course1_hero_68851049.png",
    schoolConnection: "English / Language Arts",
    overview: "Forget sitting and listening! In this project, you're the director, and AI is your co-writer. You'll learn how to talk to AI, give it specific rules, and see what happens when you let it surprise you. The secret? A vague prompt gets a boring answer. A specific, creative prompt unlocks magic.",
    promptExamples: [
      {
        label: "The Vague Approach",
        type: "bad",
        prompt: "Write a story about a dog.",
        output: "Once upon a time, there was a dog named Max. He liked to play fetch and eat bones. One day, he went to the park..."
      },
      {
        label: "The Director Approach",
        type: "good",
        prompt: "You are a comedic sci-fi writer. Write a short, funny opening scene about a golden retriever named Barnaby who accidentally discovers a time machine in a suburban backyard. The tone should be chaotic and fast-paced. End with a cliffhanger.",
        output: "Barnaby didn't mean to break the space-time continuum. He just wanted the glowing tennis ball buried near the hydrangeas. But as his paws hit the strange, metallic dome, the backyard vanished in a flash of neon pink. Suddenly, Barnaby was staring down a very confused, very angry T-Rex. And he had forgotten his leash."
      },
      {
        label: "Ask for Plot Twists",
        type: "followup",
        prompt: "Based on my story so far, give me 3 wild and unexpected plot twists. Keep the tone comedic and fast-paced.",
        output: "1. The T-Rex is actually Barnaby's great-great-great-ancestor, and it recognizes him by smell.\n2. The time machine only works when Barnaby barks at exactly 440 Hz — the musical note A.\n3. A cat from the future arrives to arrest Barnaby for 'temporal leash violations.'"
      }
    ],
    activitySteps: [
      { step: 1, title: "You Start", description: "Write the first paragraph of a story. Set the scene, the mood, and introduce your main character. This is YOUR voice." },
      { step: 2, title: "AI Twist", description: "Ask the AI: 'Based on my opening, give me 3 wild plot twists.' Read all three. Which one sparks your imagination?" },
      { step: 3, title: "Curate & Rewrite", description: "Pick the best twist — but DON'T copy-paste. Rewrite it in your own words, in your own style. You're the author, not the AI." },
      { step: 4, title: "Hunt for Hallucinations", description: "Read the full story. Did the AI change a character's name? Forget a detail? Catch those mistakes and fix them!" }
    ],
    skillsLearned: ["Prompt specificity", "Role assignment", "Iterative refinement", "Hallucination detection"],
    funFact: "AI doesn't actually 'understand' your story — it predicts the most likely next word based on patterns. That's why it sometimes forgets your character's name halfway through!"
  },
  {
    id: 2,
    title: "The Brainstorming Buddy",
    subtitle: "World Building with AI",
    mission: "Create a fully fleshed-out fictional universe from a single idea.",
    project: "The Ultimate Fantasy/Sci-Fi World Bible",
    level: "Beginner",
    color: "magenta",
    heroImage: "/manus-storage/course2_hero_0f5a7a4d.png",
    schoolConnection: "Creative Writing / Art",
    overview: "Ever wanted to design your own video game world or fantasy novel setting? AI is the ultimate brainstorming buddy to help you fill in the details — geography, magic systems, politics, and weird local foods. Your job is to steer the ship. Use the 'Yes, And...' rule from improv: take the AI's ideas and build on them.",
    promptExamples: [
      {
        label: "Your Seed Idea",
        type: "good",
        prompt: "I am building a fantasy world: A city built on the back of a giant, sleeping turtle. Act as an expert world-builder. Give me 3 ideas for how the citizens get their water, 2 unique festivals they celebrate, and 1 major political conflict.",
        output: "Water Sources:\n• Rain-catchers built into the turtle's shell ridges\n• Deep wells drilled into the shell (highly controversial and illegal)\n• Condensation farms on the turtle's morning breath-mist\n\nFestivals:\n• The Tremor Festival — celebrating the turtle's annual stretch\n• The Shell-Shedding Gala — a harvest of shed shell-flakes used as building material\n\nConflict:\n• The 'Shell-Drillers' who want to mine the turtle for resources vs. the 'Keepers' who protect the beast at all costs"
      },
      {
        label: "Go Deeper with 'Yes, And...'",
        type: "followup",
        prompt: "I love the Shell-Drillers vs. Keepers conflict. Yes, and tell me more — what does each faction wear? Do they have symbols? What's their origin story?",
        output: "The Shell-Drillers wear reinforced leather aprons stained with iridescent shell-dust. Their symbol is a cracked shell with a pickaxe through it. They were founded 200 years ago when a famine forced desperate citizens to drill for nutrients in the shell.\n\nThe Keepers wear flowing green robes that mimic moss patterns on the turtle's back. Their symbol is a closed eye — representing the sleeping turtle. Legend says the first Keeper was a child who could hear the turtle's heartbeat."
      }
    ],
    activitySteps: [
      { step: 1, title: "The Seed", description: "Come up with ONE crazy concept for a world. A floating library? A city inside a volcano? A school on the moon? Write it in one sentence." },
      { step: 2, title: "Flesh It Out", description: "Use AI to generate geography, culture, economy, and creatures. Ask for specifics: 'What do they eat? What's illegal? What's the weather like?'" },
      { step: 3, title: "The 'Yes, And...' Rule", description: "When the AI gives a good idea, don't stop — say 'Yes, and tell me more about...' to go deeper. Build layers." },
      { step: 4, title: "The World Bible", description: "Compile everything into a 'World Bible' document — a reference guide for your fictional universe. Add your own sketches or AI-generated images!" }
    ],
    skillsLearned: ["Ideation techniques", "The 'Yes, And...' method", "Structured brainstorming", "Creative curation"],
    funFact: "Professional game designers at studios like Bethesda and CD Projekt Red create 'World Bibles' that can be hundreds of pages long before they write a single line of dialogue!"
  },
  {
    id: 3,
    title: "The Research Assistant",
    subtitle: "Historical Mythbusters",
    mission: "Investigate a famous historical event and bust the myths.",
    project: "The Truth Revealed Mini-Documentary Script",
    level: "Beginner",
    color: "lime",
    heroImage: "/manus-storage/course3_hero_4cb2ad46.png",
    schoolConnection: "History / Social Studies",
    overview: "AI can summarize huge amounts of text in seconds, but it also lies with a straight face (we call these 'hallucinations'). Your job is to use AI to gather information fast, then act as the lead detective to fact-check everything. Trust, but verify!",
    promptExamples: [
      {
        label: "Get the Common Story",
        type: "good",
        prompt: "Summarize the story of Paul Revere's midnight ride. Tell me the most famous version — what most people believe happened.",
        output: "According to popular legend, on the night of April 18, 1775, Paul Revere rode alone through the Massachusetts countryside shouting 'The British are coming!' to warn colonists that British troops were marching to Lexington and Concord..."
      },
      {
        label: "Now Bust the Myths",
        type: "followup",
        prompt: "Are there any historical inaccuracies in the common story of Paul Revere's ride? Did he ride alone? Did he actually shout 'The British are coming'?",
        output: "Several key inaccuracies exist:\n• He did NOT ride alone — William Dawes and Samuel Prescott also rode that night. Prescott actually completed the ride to Concord; Revere was captured.\n• He likely did NOT shout 'The British are coming!' — the colonists still considered themselves British. He probably said 'The Regulars are coming out!'\n• The famous poem by Longfellow (1860) dramatized and simplified the events significantly."
      },
      {
        label: "Verify with Sources",
        type: "followup",
        prompt: "Give me 3 specific, verifiable sources I can check to confirm these facts about Paul Revere. Include book titles or museum references.",
        output: "1. 'Paul Revere's Ride' by David Hackett Fischer (1994) — the definitive historical account\n2. The Paul Revere House museum in Boston — primary source documents\n3. Letters of Paul Revere to Jeremy Belknap (1798) — Revere's own account"
      }
    ],
    activitySteps: [
      { step: 1, title: "Pick Your Topic", description: "Choose a famous historical event: The Pyramids, the Moon Landing, the Titanic, Columbus's voyage, or any event with popular myths." },
      { step: 2, title: "Get the AI Summary", description: "Ask AI for the 'common knowledge' version — what most people believe. This is your baseline." },
      { step: 3, title: "Detective Mode", description: "Ask AI to identify inaccuracies, then cross-reference with real sources. Use web searches to verify. Build your evidence board!" },
      { step: 4, title: "Write the Script", description: "Write a short 'documentary script' that reveals the truth. Open with the myth, then dramatically reveal the real story!" }
    ],
    skillsLearned: ["AI-assisted research", "Fact-checking methodology", "Source verification", "Critical thinking"],
    funFact: "AI hallucinations are so common that researchers found GPT-4 fabricated fake academic citations in about 30% of cases when asked for sources. Always verify!"
  },
  {
    id: 4,
    title: "The Data Detective",
    subtitle: "Visualizing the Invisible",
    mission: "Analyze real-world data to find hidden trends and tell a visual story.",
    project: "The Local Climate Action Dashboard",
    level: "Intermediate",
    color: "amber",
    heroImage: "/manus-storage/course4_hero_b04393aa.png",
    schoolConnection: "Math / Environmental Science",
    overview: "You don't need to be a math genius to analyze data anymore. AI agents can write code, create charts, and find patterns for you. You just need to know what questions to ask. This is where AI goes from 'chatbot' to 'agent' — it doesn't just talk, it DOES things.",
    promptExamples: [
      {
        label: "Command the Agent",
        type: "agent",
        prompt: "I have a CSV file of daily temperatures in Seattle from 1970 to 2020. Please:\n1. Clean the data (remove any missing values)\n2. Calculate the average summer temperature (June-August) for each decade\n3. Generate a line chart showing the trend\n4. Summarize the main finding in one sentence",
        output: "[Agent: Writing Python code... Processing CSV... Generating chart...]\n\nHere is your chart. Main finding: The average summer temperature in Seattle has increased by 2.4°F over the last 50 years, with the sharpest increase occurring after 2000."
      },
      {
        label: "Ask Follow-Up Questions",
        type: "followup",
        prompt: "Now compare this to winter temperatures over the same period. Are winters getting warmer too? Show both trends on the same chart.",
        output: "[Agent: Updating analysis... Generating comparison chart...]\n\nInteresting finding: Winter temperatures have increased by 3.1°F — even more than summer. The gap between summer and winter averages is narrowing."
      }
    ],
    activitySteps: [
      { step: 1, title: "Find Your Data", description: "Pick a dataset that interests you: sports stats, video game sales, local weather, school lunch preferences, or social media trends." },
      { step: 2, title: "Command the Agent", description: "Write a detailed prompt telling the AI agent exactly how to process and visualize the data. Be specific about chart types and what to analyze." },
      { step: 3, title: "Ask 'Why?'", description: "Don't just show the chart — ask the AI to help you interpret it. 'Why might this trend exist? What external factors could explain this?'" },
      { step: 4, title: "Tell the Story", description: "Create a one-page 'data story' that combines your charts with a narrative explaining what the data reveals and why it matters." }
    ],
    skillsLearned: ["Data analysis prompting", "Agentic AI (tool use)", "Data visualization", "Analytical storytelling"],
    funFact: "The first AI agent to autonomously write and execute code was demonstrated in 2023. Before that, you had to write all the code yourself!"
  },
  {
    id: 5,
    title: "The Multimodal Creator",
    subtitle: "The Startup Pitch",
    mission: "Invent a product, design its brand, and pitch it like a pro.",
    project: "The Shark Tank Pitch Deck",
    level: "Intermediate",
    color: "purple",
    heroImage: "/manus-storage/course5_hero_df29f667.png",
    schoolConnection: "Business / Media Arts",
    overview: "Text is just the beginning. AI can generate images, create presentations, and design logos. In this project, you'll combine multiple AI capabilities — text, image, and presentation generation — to create a complete startup pitch. Think Shark Tank, but powered by AI.",
    promptExamples: [
      {
        label: "Step 1: Brainstorm the Product",
        type: "step",
        prompt: "Help me brainstorm a futuristic product for high school students. It should solve a real problem. Give me 3 ideas with a product name, the problem it solves, and 3 unique features.",
        output: "1. HoverPack — Anti-gravity backpack\n   Problem: Heavy textbooks cause back pain\n   Features: Weight-neutralizing suspension, solar-charging pockets, AI homework assistant in the strap\n\n2. FocusLens — Smart glasses for studying\n   Problem: Digital distractions while studying\n   Features: Blocks social media notifications, highlights key textbook passages, 25-min focus timer with break reminders\n\n3. LunchGenius — AI meal planner\n   Problem: Unhealthy school lunch choices\n   Features: Scans cafeteria menu, suggests balanced meals based on your activity level, tracks nutrition goals"
      },
      {
        label: "Step 2: Generate the Logo",
        type: "step",
        prompt: "Generate a sleek, minimalist logo for 'FocusLens' — smart glasses for students. Use a deep blue and electric green color scheme. The logo should look modern and tech-forward.",
        output: "[Image AI generates a clean logo with stylized glasses icon and modern typography]"
      },
      {
        label: "Step 3: Build the Pitch Deck",
        type: "step",
        prompt: "Create a 5-slide pitch deck outline for FocusLens. Include: The Problem, The Solution, Target Market, Business Model, and Call to Action. Make the tone confident and exciting.",
        output: "Slide 1: THE PROBLEM — '73% of students say digital distractions are their #1 study barrier'\nSlide 2: THE SOLUTION — FocusLens: Smart glasses that block distractions and boost focus\nSlide 3: TARGET MARKET — 26 million US high school students, $5.2B edtech market\nSlide 4: BUSINESS MODEL — $149/pair + $9.99/mo premium features\nSlide 5: THE ASK — $500K for manufacturing and school partnerships"
      }
    ],
    activitySteps: [
      { step: 1, title: "Invent", description: "Use AI to brainstorm a product that solves a real problem for students. Pick the idea that excites you most." },
      { step: 2, title: "Design", description: "Generate product concept art and a logo using image AI. Iterate until you love the design." },
      { step: 3, title: "Build the Deck", description: "Use an agentic AI to help structure and write your pitch deck. Combine your generated images with AI-assisted copywriting." },
      { step: 4, title: "Pitch!", description: "Present your pitch to the class. Explain not just the product, but HOW you used AI to build the entire pitch." }
    ],
    skillsLearned: ["Multimodal AI (text + image)", "Brand design thinking", "Presentation structure", "Entrepreneurial communication"],
    funFact: "In 2024, a startup called 'Cognition' raised $175 million for their AI coding agent 'Devin' — and their pitch deck was partially designed using AI tools!"
  },
  {
    id: 6,
    title: "The Logic Puzzle",
    subtitle: "Breaking Down Problems",
    mission: "Deconstruct a massive, impossible task into bite-sized, promptable steps.",
    project: "The Rube Goldberg Machine Simulator",
    level: "Intermediate",
    color: "cyan",
    heroImage: "/manus-storage/course6_hero_da6f9600.png",
    schoolConnection: "Physics / Computer Science",
    overview: "AI isn't magic — it's a logic engine. If you give it a massive, complex problem all at once, it will fail. You need to learn 'computational thinking' — how to break a big problem into tiny, logical steps that the AI can handle one at a time. This is the #1 skill that separates AI beginners from AI power users.",
    promptExamples: [
      {
        label: "The Impossible Prompt",
        type: "bad",
        prompt: "Design a machine that uses a bowling ball, a fan, a bucket of water, and a skateboard to make me a sandwich.",
        output: "Sure! The bowling ball rolls into the fan, which blows the water onto the skateboard, which somehow... makes a sandwich? [Confused, physically impossible nonsense]"
      },
      {
        label: "Step 1: The First Domino",
        type: "step",
        prompt: "I'm designing a Rube Goldberg machine. Step 1: A bowling ball (7kg) rolls down a ramp at 30 degrees. Describe the physics: How fast would it be going at the bottom of a 2-meter ramp?",
        output: "Using the equation v = √(2 × g × h × sin θ):\n• Height component: 2m × sin(30°) = 1.0m\n• Final velocity: v = √(2 × 9.8 × 1.0) ≈ 4.4 m/s\n• That's about 10 mph — enough to knock over a row of dominoes or push a skateboard!"
      },
      {
        label: "Step 2: Chain Reaction",
        type: "step",
        prompt: "Step 2: The bowling ball hits a skateboard at 4.4 m/s. The skateboard rolls into a bucket of water, tipping it. How much force is needed to tip a 5kg bucket? Would the skateboard have enough momentum?",
        output: "The skateboard (2kg) at 4.4 m/s has momentum = 8.8 kg⋅m/s. To tip a 5kg bucket, you need to overcome the torque from gravity at the tipping point. With the skateboard hitting the bucket at its center of mass... Yes! The skateboard has more than enough momentum to tip the bucket."
      }
    ],
    activitySteps: [
      { step: 1, title: "The Ridiculous Goal", description: "Pick an absurd task: wake up a sleeping dragon, launch a water balloon across the school, or ring a bell using only household objects." },
      { step: 2, title: "The Breakdown", description: "Write out 5-7 distinct physical steps. Each step must logically trigger the next. Draw a rough blueprint." },
      { step: 3, title: "The AI Physics Check", description: "Prompt the AI step-by-step to simulate or describe the physics of each step. Does the math check out?" },
      { step: 4, title: "The Blueprint", description: "Create a final annotated blueprint showing each step, the physics involved, and whether the AI confirmed it would work." }
    ],
    skillsLearned: ["Computational thinking", "Problem decomposition", "Step-by-step prompting", "Physics reasoning with AI"],
    funFact: "The world record for the largest Rube Goldberg machine has 427 steps! It was built by Purdue University students and took months to design."
  },
  {
    id: 7,
    title: "Introduction to Agents",
    subtitle: "Tools and Autonomy",
    mission: "Move from 'chatting' with AI to 'commanding' an AI Agent.",
    project: "The Ultimate Study Planner & Researcher",
    level: "Advanced",
    color: "magenta",
    heroImage: "/manus-storage/course7_hero_f2085447.png",
    schoolConnection: "Study Skills / Project Management",
    overview: "Regular AI just talks to you. Agentic AI can DO things — like search the web, read files, write code, and create documents. You're stepping up from being a conversationalist to being a manager. You give the orders; the agent executes.",
    promptExamples: [
      {
        label: "Regular Chat AI (Limited)",
        type: "bad",
        prompt: "How should I study for my biology test?",
        output: "Here are some general tips:\n1. Make flashcards\n2. Review your notes\n3. Get enough sleep\n4. Practice with past exams\n[Generic advice that doesn't know YOUR situation]"
      },
      {
        label: "Agentic AI Command (Powerful)",
        type: "agent",
        prompt: "I'm attaching my biology syllabus and my last 3 quiz scores. I scored 92% on genetics, 78% on ecology, and 65% on cellular respiration. My test is on Friday. Please:\n1. Analyze my weak points from the scores\n2. Search the web for the 3 best YouTube videos explaining cellular respiration\n3. Create a customized 5-day study schedule leading up to Friday\n4. Focus 60% of study time on my weakest topic",
        output: "[Agent: Reading syllabus... Analyzing scores... Searching YouTube...]\n\nAnalysis: Your weakest area is Cellular Respiration (65%). Here's your plan:\n\nMonday: 45 min Cellular Respiration videos + notes (links below)\nTuesday: 30 min Ecology review + 30 min Cell Resp practice problems\nWednesday: 45 min Cellular Respiration deep-dive (ATP cycle focus)\nThursday: 20 min Genetics review + 40 min full practice test\nFriday AM: 15 min quick review of Cell Resp flashcards\n\nTop YouTube Videos Found:\n1. 'Cellular Respiration: Updated' by Amoeba Sisters (2.1M views)\n2. 'ATP & Respiration' by CrashCourse Biology (5.4M views)\n3. 'Glycolysis Explained' by Khan Academy (1.8M views)"
      }
    ],
    activitySteps: [
      { step: 1, title: "Identify Your Problem", description: "Pick a real study challenge or research task you're facing right now. Make it personal and specific." },
      { step: 2, title: "Write the Command", description: "Write a multi-step prompt that requires the AI to use at least 2 tools (e.g., file reading + web search + document creation)." },
      { step: 3, title: "Review the Work", description: "Did the agent follow all instructions? Are the sources good? Is the schedule realistic? Give it feedback and ask for revisions." },
      { step: 4, title: "Reflect", description: "Compare the agent's output to what you would have done manually. What was better? What did you still need to fix?" }
    ],
    skillsLearned: ["Agentic AI commands", "Multi-tool orchestration", "Task delegation", "Quality review"],
    funFact: "The word 'agentic' became Merriam-Webster's word-to-watch in 2025. It means 'capable of achieving outcomes independently' — exactly what these AI agents do!"
  },
  {
    id: 8,
    title: "Building a Workflow",
    subtitle: "Automating the Mundane",
    mission: "Chain multiple AI tasks together to create an automated pipeline.",
    project: "The Automated School Newsroom",
    level: "Advanced",
    color: "lime",
    heroImage: "/manus-storage/course8_hero_bf45749d.png",
    schoolConnection: "Journalism / Student Council",
    overview: "Why do a repetitive task yourself when you can build a workflow? In this course, you'll learn how to connect different AI tasks so the output of one becomes the input of the next — like a factory assembly line, but for information.",
    promptExamples: [
      {
        label: "Step 1: Data Gathering",
        type: "step",
        prompt: "Search local news sites for the top 3 stories about our school district this week. For each story, save the headline, a 2-sentence summary, and the source URL.",
        output: "[Agent: Searching web... Found 3 relevant stories]\n\n1. 'Lincoln High Robotics Team Wins State Championship' — The school's robotics team defeated 45 teams to win the state title. They'll compete at nationals in April. (Source: LocalNews.com)\n\n2. 'School Board Approves New STEM Lab Funding' — $2.3M approved for a new STEM laboratory at the high school. Construction begins this summer. (Source: DistrictTimes.org)\n\n3. 'Student Art Exhibition Opens Downtown' — 47 student artworks are on display at the City Gallery through March. (Source: ArtsBeat.com)"
      },
      {
        label: "Step 2: Summarize & Format",
        type: "step",
        prompt: "Take these 3 stories and format them into a Markdown newsletter called 'The Weekly Buzz'. Add a catchy intro paragraph, use emoji for section headers, and end with a 'Quote of the Week' from a famous scientist.",
        output: "# 🐝 The Weekly Buzz\n*Your weekly roundup of everything happening in our school district*\n\nWhat a week! From championship robots to million-dollar labs, our district is making moves...\n\n## 🤖 Robotics Team Takes State!\nLincoln High's robotics team defeated 45 teams...\n\n## 🔬 New STEM Lab Approved\n$2.3 million in funding...\n\n## 🎨 Student Art Goes Downtown\n47 student artworks...\n\n> 'The important thing is not to stop questioning.' — Albert Einstein"
      }
    ],
    activitySteps: [
      { step: 1, title: "Find the Mundane", description: "What's something repetitive you or your club does every week? Summarizing meeting notes? Collecting announcements? Finding memes for the school Instagram?" },
      { step: 2, title: "Design the Chain", description: "Map out the 3-4 steps needed to automate it. Draw a flowchart: Input → Process → Process → Output." },
      { step: 3, title: "Execute the Workflow", description: "Run the entire workflow using an agentic AI. Each step's output feeds into the next step's input." },
      { step: 4, title: "Iterate & Improve", description: "Did the workflow produce good results? What step needs tweaking? Refine your prompts and run it again." }
    ],
    skillsLearned: ["Workflow design", "Task chaining", "Automation thinking", "Process optimization"],
    funFact: "Major news organizations like the Associated Press have been using AI to automatically write earnings reports since 2014. They produce over 3,000 AI-written articles per quarter!"
  },
  {
    id: 9,
    title: "The App Builder",
    subtitle: "Prototyping with AI",
    mission: "Guide an AI agent to build a working web app — no coding required!",
    project: "The Custom Flashcard Web App",
    level: "Advanced",
    color: "amber",
    heroImage: "/manus-storage/course9_hero_e816dbfe.png",
    schoolConnection: "Computer Science / Entrepreneurship",
    overview: "You don't need to know HTML, CSS, or JavaScript to build software anymore. You just need to know how to give precise technical instructions to an AI agent. Think of yourself as the Product Manager — you describe WHAT to build, and the AI figures out HOW.",
    promptExamples: [
      {
        label: "The Vague Request",
        type: "bad",
        prompt: "Make me a flashcard app.",
        output: "[Agent builds a basic, ugly, barely functional page with no styling or features]"
      },
      {
        label: "The Product Manager Spec",
        type: "agent",
        prompt: "Build a single-page web app for flashcards using HTML, CSS, and JavaScript.\n\nUI Requirements:\n- Clean, modern design with a dark mode toggle\n- A large card in the center that shows the 'Question' side\n- When clicked, the card flips with a smooth animation to show the 'Answer'\n- 'Previous' and 'Next' buttons below the card\n- A progress bar showing 'Card 3 of 10'\n\nData:\n- Pre-load with 10 questions about the periodic table\n- Include element name, symbol, and atomic number\n\nExtra:\n- Add a 'Shuffle' button to randomize the order\n- Show a score tracker: 'Correct: 7 / Incorrect: 3'",
        output: "[Agent: Creating project structure... Writing HTML... Styling with CSS... Adding JavaScript logic... Building flip animation... Loading periodic table data...]\n\n✅ Your flashcard app is ready! It includes:\n- Smooth card flip animation\n- Dark mode toggle\n- 10 periodic table questions\n- Shuffle functionality\n- Score tracking\n- Responsive design for mobile"
      }
    ],
    activitySteps: [
      { step: 1, title: "The App Idea", description: "Keep it simple but useful: a flashcard app, a to-do list, a quiz game, a countdown timer, or a habit tracker." },
      { step: 2, title: "Write the Specs", description: "Write a detailed list of requirements. Describe the UI (what it looks like), the features (what it does), and the data (what content it has)." },
      { step: 3, title: "Build with AI", description: "Feed your specs to an agentic AI like Manus. Watch it build your app in real-time. Test it and request changes!" },
      { step: 4, title: "Show & Tell", description: "Demo your working app to the class. Explain your spec document and how you iterated with the AI to get the final result." }
    ],
    skillsLearned: ["Technical specification writing", "Product management", "Iterative development", "AI-assisted prototyping"],
    funFact: "In 2025, a 14-year-old used AI to build a fully functional weather app that got over 10,000 users — without writing a single line of code manually!"
  },
  {
    id: 10,
    title: "The AI Orchestrator",
    subtitle: "The Capstone Project",
    mission: "Combine ALL your skills to solve a real-world, open-ended problem.",
    project: "The Community Impact Proposal",
    level: "Advanced",
    color: "purple",
    heroImage: "/manus-storage/course10_hero_41a03514.png",
    schoolConnection: "Interdisciplinary (Science, Social Studies, English)",
    overview: "This is the final boss. You will act as the 'Orchestrator,' using EVERY skill you've learned — conversational AI, data analysis, web research, image generation, workflow automation, and app building — to create a comprehensive solution to a real problem in your community.",
    promptExamples: [
      {
        label: "Phase 1: Research",
        type: "agent",
        prompt: "Search for case studies on how other schools have solved traffic congestion during pickup time. Find at least 3 examples with measurable results.",
        output: "[Agent: Searching... Found 3 case studies]\n\n1. Maple Ridge High (Oregon): Implemented staggered pickup times — reduced congestion by 40%\n2. Westfield Academy (Texas): Created a parent app with real-time queue tracking — reduced wait times by 12 minutes\n3. Sunrise School (California): Added a walking/biking incentive program — 25% fewer cars during pickup"
      },
      {
        label: "Phase 2: Data Analysis",
        type: "agent",
        prompt: "I surveyed 200 parents about their pickup experience. Here's the data. Analyze it and create 3 charts: 1) Average wait time distribution, 2) Peak congestion times, 3) Preferred solution options.",
        output: "[Agent: Processing survey data... Generating visualizations...]\n\nKey Findings:\n- Average wait time: 18 minutes (range: 5-45 min)\n- Peak congestion: 3:15-3:30 PM (78% of all pickups)\n- Top preferred solution: Staggered dismissal (62% support)"
      },
      {
        label: "Phase 3: Solution Design",
        type: "step",
        prompt: "Based on the research and data, design a 'Staggered Dismissal Plan' for our school. Include a timeline, required resources, and expected impact. Generate a diagram showing the new traffic flow pattern.",
        output: "[Agent: Synthesizing research + data... Creating plan...]\n\nStaggered Dismissal Plan:\n- 3:00 PM: Grades 9-10 dismissed (East exit)\n- 3:15 PM: Grades 11-12 dismissed (West exit)\n- Expected impact: 35-45% reduction in peak congestion\n- Required: 2 additional traffic monitors, updated parent communication app\n\n[Generates traffic flow diagram]"
      }
    ],
    activitySteps: [
      { step: 1, title: "Identify the Problem", description: "Find a REAL problem in your school or community: traffic, food waste, mental health resources, recycling, or anything you care about." },
      { step: 2, title: "Research & Analyze", description: "Use agentic AI to research solutions, analyze data, and understand the problem deeply. Combine web search, data analysis, and summarization." },
      { step: 3, title: "Design the Solution", description: "Brainstorm solutions with AI, generate visuals, create diagrams, and build any supporting tools (like a simple app or dashboard)." },
      { step: 4, title: "Present to the World", description: "Create a full presentation and present your proposal. You're not just showing a school project — you're showing how AI can drive real change." }
    ],
    skillsLearned: ["Full AI orchestration", "Real-world problem solving", "Multi-tool integration", "Professional presentation"],
    funFact: "You've now learned the same workflow that AI consultants at companies like McKinsey and Deloitte use to solve problems for Fortune 500 companies. The only difference? They charge $500/hour for it."
  }
];

export const levelColors = {
  Beginner: "text-neon-lime",
  Intermediate: "text-neon-amber",
  Advanced: "text-neon-magenta",
};

export const colorMap = {
  cyan: { border: "border-neon-cyan", text: "text-neon-cyan", bg: "bg-neon-cyan", glow: "neon-glow-cyan" },
  magenta: { border: "border-neon-magenta", text: "text-neon-magenta", bg: "bg-neon-magenta", glow: "neon-glow-magenta" },
  lime: { border: "border-neon-lime", text: "text-neon-lime", bg: "bg-neon-lime", glow: "neon-glow-lime" },
  amber: { border: "border-neon-amber", text: "text-neon-amber", bg: "bg-neon-amber", glow: "" },
  purple: { border: "border-neon-purple", text: "text-neon-purple", bg: "bg-neon-purple", glow: "" },
};
