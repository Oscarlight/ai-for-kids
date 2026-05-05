export interface PromptExample {
  label: string;
  type: "bad" | "good" | "followup" | "agent" | "step";
  prompt: string;
  output?: string;
}

export interface CommonMistake {
  mistake: string;
  why: string;
  fix: string;
}

export interface ActivityStep {
  step: number;
  title: string;
  description: string;
  videoWalkthrough: string;
  proTip?: string;
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
  commonMistakes: CommonMistake[];
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
    heroImage: "/images/course1_hero.png",
    schoolConnection: "English / Language Arts",
    overview: "Forget sitting and listening! In this project, you're the director, and AI is your co-writer. You'll learn how to talk to AI, give it specific rules, and see what happens when you let it surprise you. The secret? A vague prompt gets a boring answer. A specific, creative prompt unlocks magic.",
    promptExamples: [
      {
        label: "The Vague Approach",
        type: "bad",
        prompt: "Write a story about a dog.",
        output: "Once upon a time, there was a dog named Max. He liked to play fetch and eat bones. One day, he went to the park and made a new friend..."
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
      },
      {
        label: "Assign a Character Voice",
        type: "good",
        prompt: "Rewrite the T-Rex scene, but this time the T-Rex speaks in Shakespearean English. It should be dramatic and confused about what a 'golden retriever' is.",
        output: "'What manner of beast art thou?' bellowed the T-Rex, squinting at Barnaby's wagging tail. 'Thou art too small to be prey, too golden to be rock, and thy tongue — why doth it loll so? Art thou ill, strange creature? Speak! Or I shall step upon thee by accident, for mine depth perception is... wanting.'"
      },
      {
        label: "Set Constraints for Creativity",
        type: "good",
        prompt: "Write the next scene of Barnaby's adventure with these constraints:\n- Maximum 100 words\n- Must include a joke about WiFi\n- The scene takes place in ancient Egypt\n- End with a question",
        output: "Barnaby materialized in a sandstorm, face-to-face with a pharaoh's cat. 'You're not from here,' the cat hissed. 'Neither are you,' Barnaby panted, shaking sand from his ears. The pyramids loomed behind them, half-built. Workers hauled limestone blocks while a scribe frantically chiseled hieroglyphics. 'Is there WiFi here?' Barnaby whimpered. The cat stared blankly. 'Right. They haven't even invented the wheel yet.' A horn blasted. Guards pointed spears at them. 'So,' the cat whispered, 'can your time machine fit two?'"
      },
      {
        label: "Rewrite in Your Voice",
        type: "followup",
        prompt: "I like the Egypt scene but it feels too polished. Rewrite it in a more casual, teenager-friendly voice. Use shorter sentences. Add some internal monologue from Barnaby.",
        output: "Sand. So much sand. Barnaby shook his whole body and regretted it immediately. His eyes burned. His nose was full of desert. Great.\n\nA cat sat on a rock, judging him. Obviously.\n\n'You're lost,' the cat said.\n\nBarnaby's brain: CATS CAN TALK HERE?!\n\nBarnaby's mouth: 'Woof.'\n\nSmooth. Real smooth. Behind them, some very large humans were building very large triangles. Barnaby had seen these on the Discovery Channel. This was bad. This was very, very bad."
      },
      {
        label: "Catch the Hallucination",
        type: "followup",
        prompt: "In my story, Barnaby is a golden retriever. But in your last response you described him 'shaking his whole body' after being in water — he was in a desert. Also, you forgot the time machine. Can you fix these inconsistencies and keep the time machine visible in the scene?",
        output: "You're right! Here's the corrected version:\n\nSand. Everywhere. Barnaby sneezed — a full-body, ear-flapping sneeze. Behind him, the time machine hummed quietly, half-buried in a dune, its green light blinking like a 'you left the door open' warning.\n\nA cat sat on a rock, judging him. Obviously.\n\n'You're lost,' the cat said.\n\nBarnaby's brain: CATS CAN TALK HERE?!\n\nBarnaby's mouth: 'Woof.'\n\nThe time machine beeped twice. Low battery. Of course."
      }
    ],
    commonMistakes: [
      {
        mistake: "Copying AI output directly without editing",
        why: "AI writes in a generic, 'average' style. If everyone copies AI, every story sounds the same. Your unique voice is what makes writing interesting.",
        fix: "Use AI output as a rough draft or idea generator. Always rewrite key passages in your own words and style."
      },
      {
        mistake: "Not giving the AI a role or tone",
        why: "Without a role, the AI defaults to a bland, encyclopedic tone. It doesn't know if you want funny, scary, formal, or casual.",
        fix: "Start your prompt with 'You are a [type of writer]' and specify the tone: 'comedic,' 'dark and suspenseful,' 'sarcastic,' etc."
      },
      {
        mistake: "Ignoring continuity errors (hallucinations)",
        why: "AI doesn't have memory of your full story — it predicts the next likely word. It will forget character names, settings, and plot details.",
        fix: "After every AI response, re-read the full story. Keep a 'story bible' with character names, locations, and key plot points to paste into your prompts."
      },
      {
        mistake: "Writing one massive prompt instead of iterating",
        why: "A 500-word prompt asking for an entire story will produce mediocre results. AI works best in short, focused exchanges.",
        fix: "Break your story into scenes. Write one scene at a time. Review, edit, then move to the next scene."
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "You Start",
        description: "Write the first paragraph of a story. Set the scene, the mood, and introduce your main character. This is YOUR voice — don't use AI for this part.",
        videoWalkthrough: "Watch a student write their opening paragraph about a robot who wakes up in a junkyard with no memory. Notice how they set the mood with short, punchy sentences and sensory details (rust smell, flickering lights, distant thunder).",
        proTip: "Read your opening paragraph out loud. If it sounds like something anyone could have written, add one weird, specific detail that only YOU would think of."
      },
      {
        step: 2,
        title: "AI Twist",
        description: "Ask the AI: 'Based on my opening, give me 3 wild plot twists.' Read all three. Which one sparks your imagination?",
        videoWalkthrough: "See how the student pastes their paragraph into Manus and asks for 3 plot twists. The AI suggests: (1) the robot's memories are actually someone else's, (2) the junkyard is on Mars, (3) the robot is the last one left after a robot uprising failed. The student picks #1 and combines it with #3.",
        proTip: "You don't have to pick just one twist — combine elements from multiple suggestions to create something the AI never would have thought of on its own."
      },
      {
        step: 3,
        title: "Curate & Rewrite",
        description: "Pick the best twist — but DON'T copy-paste. Rewrite it in your own words, in your own style. You're the author, not the AI.",
        videoWalkthrough: "The student takes the AI's suggestion about stolen memories and rewrites it in first person with emotional depth: 'These memories aren't mine. I know this because I remember a sunset over an ocean, and robots don't care about sunsets. Someone put these feelings inside me. The question is: who? And why did they want to forget?'",
        proTip: "The best writers don't use AI to write FOR them — they use AI to think WITH them. Your rewrite should be better than the AI's version."
      },
      {
        step: 4,
        title: "Hunt for Hallucinations",
        description: "Read the full story. Did the AI change a character's name? Forget a detail? Contradict something from earlier? Catch those mistakes and fix them!",
        videoWalkthrough: "The student reviews their story and catches 3 errors: the AI changed the junkyard to a 'warehouse' in one scene, forgot the robot's name (Unit-7) and called it 'the machine,' and added rain even though the setting was established as Mars (no rain on Mars!). They fix each one.",
        proTip: "Create a simple checklist: Character names, Setting details, Timeline, Key objects. Check each one after every AI interaction."
      }
    ],
    skillsLearned: ["Prompt specificity", "Role assignment", "Iterative refinement", "Hallucination detection", "Creative curation", "Voice preservation"],
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
    heroImage: "/images/course2_hero.png",
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
      },
      {
        label: "Build the Economy",
        type: "followup",
        prompt: "What's the economy of this turtle city like? What do they trade? What's their currency? Are there jobs unique to living on a turtle?",
        output: "Economy:\n• Currency: Shell-chips — small pieces of shed turtle shell, naturally iridescent\n• Major exports: Shell-flake building material (stronger than stone), turtle-moss medicine\n• Unique jobs:\n  - Shell-Readers: Geologists who study cracks in the shell to predict the turtle's movements\n  - Sway-Builders: Architects who design buildings that flex when the turtle shifts\n  - Breath-Farmers: Workers who collect moisture from the turtle's breathing vents at dawn"
      },
      {
        label: "Create a Character",
        type: "good",
        prompt: "Create a main character for this world. They should be a teenager who is caught between the Shell-Drillers and the Keepers. Give me their name, backstory, a secret they're hiding, and their biggest fear.",
        output: "Name: Kael Mosswright\nAge: 16\nBackstory: Kael's mother is a high-ranking Keeper, but his father — who disappeared 3 years ago — was secretly a Shell-Driller engineer. Kael works as an apprentice Shell-Reader, studying the turtle's movements.\n\nSecret: Kael found his father's hidden drilling journal, which contains evidence that the turtle is slowly dying — and only drilling into a specific spot could save it. But drilling is exactly what the Keepers have sworn to prevent.\n\nBiggest Fear: That the turtle will wake up. Everyone celebrates the idea, but Kael's Shell-Reader training tells him that if the turtle wakes, the city will slide into the ocean."
      },
      {
        label: "The Lazy Prompt",
        type: "bad",
        prompt: "Make me a fantasy world.",
        output: "Sure! There's a kingdom called Eldoria with elves, dwarves, and a dark lord threatening the land. The hero must find a magical sword to save everyone... [Generic, derivative, sounds like every fantasy world ever]"
      },
      {
        label: "Add Sensory Details",
        type: "followup",
        prompt: "Describe what it feels, sounds, and smells like to wake up in this turtle city at dawn. Write it as a paragraph of vivid sensory prose.",
        output: "Dawn on the Great Shell begins with a low, rhythmic vibration — the turtle's heartbeat, felt through the soles of your feet before you even open your eyes. The air smells of wet moss and salt, carried up from the breath-vents in warm, misty plumes that curl through the streets like lazy ghosts. Shell-chip wind chimes clatter softly on every doorframe, their iridescent surfaces catching the first pink light. Somewhere below, the ocean hushes against the turtle's legs. The whole city tilts two degrees to the east — the turtle shifting in its sleep — and you grab your bedframe out of habit. Just another morning."
      }
    ],
    commonMistakes: [
      {
        mistake: "Accepting the first idea without pushing deeper",
        why: "AI's first response is usually the most generic. The best ideas come from the 3rd or 4th follow-up, when you've pushed past the obvious.",
        fix: "Always ask at least 3 follow-up questions. Use 'Yes, and...' to build on each response. Depth beats breadth."
      },
      {
        mistake: "Building a world with no internal conflict",
        why: "A world without tension is boring. Every interesting fictional world has factions, disagreements, or unsolved mysteries.",
        fix: "Ask AI: 'What are 3 things people in this world disagree about?' Conflict drives stories."
      },
      {
        mistake: "Making the world too similar to existing franchises",
        why: "If your world has elves, a dark lord, and a chosen one, it's just Tolkien fan fiction. AI defaults to tropes unless you push it.",
        fix: "Start with a weird, specific concept (city on a turtle, school inside a volcano) and let the uniqueness cascade into every detail."
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "The Seed",
        description: "Come up with ONE crazy concept for a world. A floating library? A city inside a volcano? A school on the moon? Write it in one sentence.",
        videoWalkthrough: "A student brainstorms by combining two random ideas: 'underwater' + 'train station.' Their seed: 'A train network that runs through the deep ocean, connecting cities on the seafloor.' They write this single sentence and move to step 2.",
        proTip: "The weirder your seed, the more original your world. Try combining two things that don't belong together: 'desert + library,' 'space + bakery,' 'jungle + courtroom.'"
      },
      {
        step: 2,
        title: "Flesh It Out",
        description: "Use AI to generate geography, culture, economy, and creatures. Ask for specifics: 'What do they eat? What's illegal? What's the weather like?'",
        videoWalkthrough: "The student asks AI about their ocean train world: 'What do passengers eat on a 3-day underwater train ride?' AI suggests bioluminescent algae snacks, pressure-cooked deep-sea fish, and 'surface food' as an expensive luxury. The student loves the class divide between surface food and deep food.",
        proTip: "Ask about the boring stuff — food, jobs, laws, weather. These mundane details are what make a world feel REAL, not the magic systems."
      },
      {
        step: 3,
        title: "The 'Yes, And...' Rule",
        description: "When the AI gives a good idea, don't stop — say 'Yes, and tell me more about...' to go deeper. Build layers.",
        videoWalkthrough: "The student uses 'Yes, and...' five times in a row: 'Yes, and what happens when a train breaks down in the deep ocean?' → 'Yes, and who are the rescue divers?' → 'Yes, and what's the most dangerous rescue mission in history?' → 'Yes, and is there a memorial?' → 'Yes, and what do the families of the lost divers think about the train company?' Each answer adds emotional depth.",
        proTip: "The magic number is 5. Ask 'Yes, and...' at least 5 times on any topic to get past the surface-level ideas."
      },
      {
        step: 4,
        title: "The World Bible",
        description: "Compile everything into a 'World Bible' document — a reference guide for your fictional universe. Add your own sketches or AI-generated images!",
        videoWalkthrough: "The student organizes their World Bible into sections: Geography, Culture, Economy, Key Characters, Conflicts, and a Timeline. They use AI to generate a map description, then sketch it by hand. The final document is 8 pages with both AI-assisted text and original illustrations.",
        proTip: "A World Bible is never 'done.' Keep adding to it. Professional world-builders update theirs for years."
      }
    ],
    skillsLearned: ["Ideation techniques", "The 'Yes, And...' method", "Structured brainstorming", "Creative curation", "Sensory writing", "World-building frameworks"],
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
    heroImage: "/images/course3_hero.png",
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
      },
      {
        label: "Catch the AI Making Things Up",
        type: "bad",
        prompt: "Tell me about the famous speech George Washington gave at the Battle of Trenton.",
        output: "'Soldiers, tonight we cross the Delaware and strike at the heart of tyranny! Let every man among you remember why we fight — for liberty, for family, for the future of a nation not yet born!'\n\n[NOTE: This speech sounds great, but it's COMPLETELY FABRICATED. There is no historical record of Washington giving a speech before crossing the Delaware. The AI invented this because it seemed plausible.]"
      },
      {
        label: "The Cross-Reference Technique",
        type: "good",
        prompt: "I want to verify a claim. AI told me that 'Napoleon was short.' Search for the actual historical evidence. What was his real height? How did the myth start?",
        output: "Napoleon was actually about 5'7\" (170 cm) — average or slightly above average for a Frenchman in the early 1800s. The myth started because:\n• British propaganda cartoonists deliberately drew him as tiny to mock him\n• His nickname 'le petit caporal' (the little corporal) was a term of endearment, not about his height\n• French inches (pouces) were longer than English inches, so his French height measurement of 5'2\" was misinterpreted in English units"
      },
      {
        label: "Build the Evidence Board",
        type: "agent",
        prompt: "I'm investigating myths about the Titanic. Search the web for the 3 biggest misconceptions about the Titanic sinking. For each myth, find the real story and a credible source.",
        output: "[Agent: Searching web sources...]\n\nMyth 1: 'The ship was declared unsinkable'\nReality: No one from White Star Line officially called it 'unsinkable.' The trade journal Shipbuilder described it as 'practically unsinkable,' and media shortened this.\nSource: Encyclopedia Titanica\n\nMyth 2: 'The band played Nearer My God to Thee as it sank'\nReality: Survivor accounts conflict. Some heard hymns, others heard ragtime. The exact final song is unknown.\nSource: 'A Night to Remember' by Walter Lord (1955)\n\nMyth 3: 'Third-class passengers were locked below deck'\nReality: Gates existed for immigration law compliance, not to trap passengers. However, third-class passengers did receive less guidance to lifeboats.\nSource: British Wreck Commissioner's Inquiry (1912)"
      }
    ],
    commonMistakes: [
      {
        mistake: "Trusting AI-generated sources without checking them",
        why: "AI frequently invents fake book titles, fake authors, and fake URLs that sound completely real. This is called 'hallucinated citations.'",
        fix: "ALWAYS Google the source. Check if the book exists, if the author is real, and if the quote actually appears in the source."
      },
      {
        mistake: "Only asking AI for one perspective",
        why: "AI will give you whatever perspective you seem to want. If you ask 'Why was X bad?' it will only give negative points.",
        fix: "Ask for multiple perspectives: 'Give me 3 arguments FOR and 3 arguments AGAINST this claim.' Then evaluate both sides."
      },
      {
        mistake: "Confusing 'sounds true' with 'is true'",
        why: "AI is trained to produce text that sounds authoritative and confident — even when it's wrong. Fluent ≠ factual.",
        fix: "Develop a 'suspicion reflex.' If a fact seems too perfect, too dramatic, or too convenient, verify it independently."
      },
      {
        mistake: "Not specifying what kind of sources you want",
        why: "If you just say 'give me sources,' AI might cite Wikipedia, random blogs, or made-up references.",
        fix: "Be specific: 'Give me peer-reviewed academic sources,' 'Give me primary source documents,' or 'Give me museum archives.'"
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "Pick Your Topic",
        description: "Choose a famous historical event: The Pyramids, the Moon Landing, the Titanic, Columbus's voyage, or any event with popular myths.",
        videoWalkthrough: "A student picks 'The Salem Witch Trials' because they just studied it in history class. They write down 3 things they think they know: 'Witches were burned at the stake,' 'It was caused by mass hysteria,' and 'Only women were accused.' They'll test each belief.",
        proTip: "Pick something you think you already know well. You'll be surprised how many 'facts' you believe are actually myths."
      },
      {
        step: 2,
        title: "Get the AI Summary",
        description: "Ask AI for the 'common knowledge' version — what most people believe. This is your baseline.",
        videoWalkthrough: "The student asks: 'What does the average person believe about the Salem Witch Trials?' AI gives the popular version. Then they ask: 'Now tell me what historians actually know. What parts of the common story are wrong?' AI reveals: no one was burned (they were hanged), men were also accused, and recent research suggests ergot poisoning may have played a role.",
        proTip: "Ask for the 'common version' first, THEN ask for corrections. This two-step approach reveals the gap between myth and reality."
      },
      {
        step: 3,
        title: "Detective Mode",
        description: "Ask AI to identify inaccuracies, then cross-reference with real sources. Use web searches to verify. Build your evidence board!",
        videoWalkthrough: "The student creates an 'Evidence Board' in a document with two columns: MYTH and REALITY. They use AI to find claims, then use Manus's web search to verify each one. They discover that AI was right about the hangings but wrong about the ergot theory — it's still debated, not confirmed. They note: 'AI presented a theory as fact.'",
        proTip: "Keep a 'Trust Score' for each AI claim: Verified (found 2+ sources), Plausible (found 1 source), Unverified (no source found), or False (contradicted by sources)."
      },
      {
        step: 4,
        title: "Write the Script",
        description: "Write a short 'documentary script' that reveals the truth. Open with the myth, then dramatically reveal the real story!",
        videoWalkthrough: "The student writes a 2-minute script that opens with: 'Everything you think you know about Salem is wrong.' They structure it as: Myth → Dramatic Pause → Reality → Source. They use AI to help polish the language but write the core arguments themselves. Final touch: they add a 'What We Still Don't Know' section.",
        proTip: "The best documentaries don't just say 'this is wrong' — they explain WHY the myth exists and how it spread. That's the interesting part."
      }
    ],
    skillsLearned: ["AI-assisted research", "Fact-checking methodology", "Source verification", "Critical thinking", "Evidence evaluation", "Documentary writing"],
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
    heroImage: "/images/course4_hero.png",
    schoolConnection: "Math / Environmental Science",
    overview: "You don't need to be a math genius to analyze data anymore. AI agents can write code, create charts, and find patterns for you. You just need to know what questions to ask. This is where AI goes from 'chatbot' to 'agent' — it doesn't just talk, it DOES things.",
    promptExamples: [
      {
        label: "The Vague Data Request",
        type: "bad",
        prompt: "Analyze this data for me.",
        output: "I can see the data has several columns... Here are some basic statistics: mean, median, mode... [Generic summary that tells you nothing interesting because the AI doesn't know what you're looking for]"
      },
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
      },
      {
        label: "Request Specific Chart Types",
        type: "good",
        prompt: "Create a heatmap showing average monthly temperatures for each year from 1970-2020. Use a color scale from blue (cold) to red (hot). Label the axes clearly.",
        output: "[Agent: Building heatmap with matplotlib...]\n\nHere's your heatmap. You can clearly see the 'warming stripe' effect — the right side of the chart (recent years) is noticeably more red/orange than the left side (1970s-80s). The shift is most visible in March and November."
      },
      {
        label: "Ask 'Why?' — Interpret the Data",
        type: "followup",
        prompt: "Why might winters be warming faster than summers in Seattle? Give me 3 possible scientific explanations and cite any relevant studies.",
        output: "Three possible explanations:\n\n1. Arctic Amplification: The Arctic is warming 2-4x faster than the global average, and this disproportionately affects winter temperatures in northern latitudes (NOAA, 2023)\n\n2. Reduced Snowpack: Less snow means less solar reflection (albedo effect), creating a warming feedback loop that's strongest in winter months (EPA Climate Indicators)\n\n3. Urban Heat Island Effect: Seattle's population grew from 530K to 750K in this period. More concrete and buildings retain heat, especially noticeable in winter when natural cooling is reduced"
      },
      {
        label: "Make It Personal",
        type: "agent",
        prompt: "Now find publicly available temperature data for MY city (Austin, TX). Download it, run the same analysis, and compare Austin's warming trend to Seattle's. Which city is warming faster?",
        output: "[Agent: Searching for Austin climate data... Found NOAA dataset... Downloading... Running analysis...]\n\nComparison Results:\n• Seattle: +2.4°F summer / +3.1°F winter (1970-2020)\n• Austin: +1.8°F summer / +2.7°F winter (1970-2020)\n\nSeattle is warming faster overall, but Austin's extreme heat days (over 100°F) have increased by 40%. Different cities experience climate change differently."
      }
    ],
    commonMistakes: [
      {
        mistake: "Not specifying the chart type you want",
        why: "AI will default to a basic line chart or bar chart. You might need a heatmap, scatter plot, or box plot to tell the right story.",
        fix: "Learn the basics: Line charts for trends over time, bar charts for comparisons, scatter plots for relationships, heatmaps for patterns across two dimensions."
      },
      {
        mistake: "Accepting the first chart without questioning it",
        why: "AI might choose misleading axis scales, omit labels, or use colors that are hard to read. A chart can be technically correct but visually misleading.",
        fix: "Always ask: 'Does the Y-axis start at zero? Are the labels clear? Would someone who hasn't seen the data understand this chart?'"
      },
      {
        mistake: "Confusing correlation with causation",
        why: "AI will happily tell you that two trends are 'related' without clarifying that correlation ≠ causation. Ice cream sales and drowning deaths both increase in summer — that doesn't mean ice cream causes drowning.",
        fix: "When AI says two things are related, always ask: 'Is there a plausible causal mechanism? Could a third factor explain both trends?'"
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "Find Your Data",
        description: "Pick a dataset that interests you: sports stats, video game sales, local weather, school lunch preferences, or social media trends.",
        videoWalkthrough: "A student decides to analyze NBA player heights over the last 50 years. They ask Manus to search for and download the dataset from Basketball Reference. The agent finds a CSV with player heights, weights, and positions from 1970-2024.",
        proTip: "The best data projects start with a question you genuinely want to answer. 'Are NBA players getting taller?' is more motivating than 'analyze this random spreadsheet.'"
      },
      {
        step: 2,
        title: "Command the Agent",
        description: "Write a detailed prompt telling the AI agent exactly how to process and visualize the data. Be specific about chart types and what to analyze.",
        videoWalkthrough: "The student writes a 5-part command: (1) Clean the data, (2) Calculate average height by decade, (3) Break it down by position, (4) Create a grouped bar chart, (5) Find the tallest and shortest players in each era. The agent executes all 5 steps and produces clean visualizations.",
        proTip: "Number your instructions. AI agents follow numbered lists much more reliably than paragraph-style requests."
      },
      {
        step: 3,
        title: "Ask 'Why?'",
        description: "Don't just show the chart — ask the AI to help you interpret it. 'Why might this trend exist? What external factors could explain this?'",
        videoWalkthrough: "The student discovers that average NBA height peaked in the 1980s and has slightly decreased since 2010. They ask AI: 'Why?' AI explains the rise of the 'positionless basketball' era, where shorter, faster players are valued more. The student verifies this by cross-referencing with articles about the 3-point revolution.",
        proTip: "The chart is not the end product — the STORY is. A chart without interpretation is just a pretty picture."
      },
      {
        step: 4,
        title: "Tell the Story",
        description: "Create a one-page 'data story' that combines your charts with a narrative explaining what the data reveals and why it matters.",
        videoWalkthrough: "The student creates a one-page report titled 'The Incredible Shrinking NBA Player' with their best chart, a 3-paragraph narrative, and a prediction for the future. They use AI to help polish the writing but ensure the analysis and conclusions are their own.",
        proTip: "Start with the most surprising finding. 'NBA players are getting shorter' grabs attention more than 'I analyzed 50 years of height data.'"
      }
    ],
    skillsLearned: ["Data analysis prompting", "Agentic AI (tool use)", "Data visualization", "Analytical storytelling", "Chart literacy", "Scientific reasoning"],
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
    heroImage: "/images/course5_hero.png",
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
      },
      {
        label: "Refine the Product Concept",
        type: "followup",
        prompt: "The FocusLens idea is good but feels too techy. Make it more approachable for teens. Rename it something cooler, add a social feature, and make the design description more fashion-forward.",
        output: "New Name: ZoneIn\nTagline: 'Your focus, your style.'\n\nDesign: Slim, lightweight frames available in 6 colorways (Midnight, Coral, Forest, Cloud, Sunset, Chrome). Looks like regular trendy glasses — no one knows they're smart glasses.\n\nNew Social Feature: 'Focus Battles' — challenge friends to focus sessions. Whoever stays focused longest earns points. Leaderboards for friend groups and school-wide competitions.\n\nUpdated positioning: It's not a study tool. It's a lifestyle accessory that happens to make you smarter."
      },
      {
        label: "Generate Product Mockups",
        type: "agent",
        prompt: "Generate 3 product mockup images for ZoneIn glasses:\n1. A lifestyle shot: a student wearing them in a library, looking focused and stylish\n2. A product shot: the glasses on a clean white background showing the slim design\n3. An app screenshot: the Focus Battles leaderboard on a phone screen",
        output: "[Agent: Generating image 1... Generating image 2... Generating image 3...]\n\n✅ 3 mockup images generated. The lifestyle shot shows a diverse student in a modern library. The product shot highlights the slim frame design. The app screenshot shows a clean, gamified leaderboard UI."
      },
      {
        label: "Practice the Pitch",
        type: "good",
        prompt: "I need to practice my 2-minute pitch for ZoneIn. Act as a Shark Tank investor. I'll give my pitch, and you give me tough but fair feedback. Ask me 3 hard questions that a real investor would ask.",
        output: "I'm ready. Give me your pitch, and I'll evaluate it on:\n• Clarity of the problem\n• Believability of the solution\n• Market size and business model\n• Your confidence and delivery\n\nAfter your pitch, I'll ask 3 investor-style questions. Don't worry — even the best entrepreneurs get grilled. That's how you get better. Go!"
      }
    ],
    commonMistakes: [
      {
        mistake: "Using AI-generated images without iterating",
        why: "The first generated image is rarely perfect. Professional designers iterate 5-10 times on a single image.",
        fix: "Generate multiple versions. Give specific feedback: 'Make the glasses thinner,' 'Change the background to a library,' 'Make the colors warmer.'"
      },
      {
        mistake: "Making up market statistics",
        why: "AI will confidently generate fake statistics ('73% of students...') that sound real but are fabricated.",
        fix: "For your pitch deck, either verify every statistic with a real source, or clearly label estimates as 'estimated based on...' with your reasoning."
      },
      {
        mistake: "Focusing on features instead of the problem",
        why: "Beginners describe what their product DOES. Great pitchers describe the PAIN their product solves. Investors fund solutions to painful problems.",
        fix: "Start every pitch with the problem. Make the audience feel the pain before you reveal the solution."
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "Invent",
        description: "Use AI to brainstorm a product that solves a real problem for students. Pick the idea that excites you most.",
        videoWalkthrough: "A student starts by listing 5 problems they personally face: heavy backpack, boring lunches, forgetting homework, losing pens, and phone addiction during study time. They feed these to AI and ask for product solutions for each. They pick 'phone addiction during study' because it resonates most.",
        proTip: "The best products come from problems you personally experience. Don't invent a problem — solve one you actually have."
      },
      {
        step: 2,
        title: "Design",
        description: "Generate product concept art and a logo using image AI. Iterate until you love the design.",
        videoWalkthrough: "The student generates 4 logo variations for their product. The first two look too corporate, the third is too cartoonish, and the fourth is close but the colors are wrong. They give feedback: 'Keep the shape from version 4 but use the color palette from version 1.' The fifth attempt is perfect.",
        proTip: "Save every version — even the bad ones. Your pitch can include a 'design evolution' slide showing how you iterated."
      },
      {
        step: 3,
        title: "Build the Deck",
        description: "Use an agentic AI to help structure and write your pitch deck. Combine your generated images with AI-assisted copywriting.",
        videoWalkthrough: "The student asks Manus to create a 7-slide presentation. They provide the content outline and generated images. The agent builds the slides with clean layouts, consistent branding, and speaker notes. The student reviews and asks for 3 revisions: bigger fonts, more contrast, and a stronger closing slide.",
        proTip: "Every slide should pass the '3-second test' — if someone glances at it for 3 seconds, they should understand the main point."
      },
      {
        step: 4,
        title: "Pitch!",
        description: "Present your pitch to the class. Explain not just the product, but HOW you used AI to build the entire pitch.",
        videoWalkthrough: "The student delivers a 3-minute pitch: 1 minute on the product, 1 minute on the business model, and 1 minute on 'behind the scenes' — showing how they used AI for brainstorming, image generation, and presentation building. The class votes on the best pitch.",
        proTip: "The 'behind the scenes' section is the most important part of this course. You're not just pitching a product — you're demonstrating AI fluency."
      }
    ],
    skillsLearned: ["Multimodal AI (text + image)", "Brand design thinking", "Presentation structure", "Entrepreneurial communication", "Iterative design", "Pitch delivery"],
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
    heroImage: "/images/course6_hero.png",
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
      },
      {
        label: "Step 3: Water Trigger",
        type: "step",
        prompt: "Step 3: The tipped bucket pours 5 liters of water onto a seesaw. On the other end of the seesaw is a 1kg ball. How high would the ball launch?",
        output: "5 liters of water = 5 kg, falling from bucket height (~0.5m).\nEnergy transferred: E = mgh = 5 × 9.8 × 0.5 = 24.5 J\n\nIf the seesaw is 80% efficient and the ball is 1kg:\nLaunch height: h = E × 0.8 / (m × g) = 24.5 × 0.8 / (1 × 9.8) ≈ 2.0 meters\n\nThat's enough to hit a target on a shelf above!"
      },
      {
        label: "Validate the Full Chain",
        type: "agent",
        prompt: "Here's my complete 6-step Rube Goldberg machine design. For each step, tell me: (1) Is the physics plausible? (2) What could go wrong? (3) Suggested improvements.\n\nStep 1: Bowling ball down ramp → Step 2: Hits skateboard → Step 3: Skateboard tips bucket → Step 4: Water fills seesaw → Step 5: Ball launches into bell → Step 6: Bell vibration triggers phone alarm",
        output: "[Agent: Analyzing each step...]\n\nStep 1: ✅ Plausible. Risk: Ball could veer off-course. Fix: Add guide rails.\nStep 2: ✅ Plausible. Risk: Skateboard wheels might absorb too much energy. Fix: Lock front wheels.\nStep 3: ✅ Plausible. Risk: Water splashes instead of pouring cleanly. Fix: Add a funnel.\nStep 4: ✅ Plausible. Risk: Seesaw friction reduces launch height. Fix: Use a low-friction pivot.\nStep 5: ⚠️ Marginal. The ball needs precise aim. Fix: Add a guide tube.\nStep 6: ❌ Unlikely. Bell vibration is too weak to trigger a phone. Fix: Use the ball to directly press a button instead."
      },
      {
        label: "The Decomposition Principle",
        type: "good",
        prompt: "Explain the concept of 'problem decomposition' to me like I'm 15. Use the Rube Goldberg machine as an analogy. Why is this the most important skill for working with AI?",
        output: "Imagine trying to explain your entire Rube Goldberg machine in one sentence. Impossible, right? But you CAN explain each step: 'The ball rolls down.' 'The ball hits the skateboard.' 'The skateboard tips the bucket.'\n\nThat's problem decomposition: taking something huge and breaking it into tiny, manageable pieces.\n\nThis is THE most important AI skill because:\n• AI handles small, clear tasks brilliantly\n• AI handles big, vague tasks terribly\n• Your job is to be the 'decomposer' — you break the big problem into small prompts, and AI solves each one\n\nEvery expert AI user thinks this way. It's not about writing better prompts — it's about asking better SEQUENCES of prompts."
      }
    ],
    commonMistakes: [
      {
        mistake: "Trying to solve the whole problem in one prompt",
        why: "AI can't hold complex multi-step reasoning in a single response. It will skip steps, make logical errors, or produce incoherent results.",
        fix: "Break every complex task into 3-7 individual steps. Solve each step separately, verify the output, then feed it into the next step."
      },
      {
        mistake: "Not checking the physics/math at each step",
        why: "AI is good at physics formulas but sometimes plugs in wrong numbers or misapplies equations. Small errors compound across steps.",
        fix: "After each calculation, ask: 'Show me your work step by step.' Verify the numbers make sense before moving on."
      },
      {
        mistake: "Skipping the 'what could go wrong?' question",
        why: "AI tends to be optimistic. It will say 'yes, this works!' without considering friction, air resistance, misalignment, or other real-world factors.",
        fix: "For every step, explicitly ask: 'What are 3 things that could go wrong with this step in real life?'"
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "The Ridiculous Goal",
        description: "Pick an absurd task: wake up a sleeping dragon, launch a water balloon across the school, or ring a bell using only household objects.",
        videoWalkthrough: "A student picks: 'Pop a balloon using only a marble, a ruler, a cup of water, and a candle.' They sketch a rough idea on paper before touching AI — the marble rolls, hits the ruler, the ruler tips the water, the water... hmm, this is where they get stuck and need AI's help.",
        proTip: "Start with a sketch on paper. Your brain is better at big-picture design; AI is better at checking the details."
      },
      {
        step: 2,
        title: "The Breakdown",
        description: "Write out 5-7 distinct physical steps. Each step must logically trigger the next. Draw a rough blueprint.",
        videoWalkthrough: "The student writes out 5 steps on index cards, one per card. They arrange the cards on a desk and draw arrows between them. When they realize Step 3 doesn't logically trigger Step 4, they add an intermediate step. The blueprint evolves from 5 steps to 7.",
        proTip: "Use index cards or sticky notes — one step per card. Physically rearranging them helps you see the logic gaps."
      },
      {
        step: 3,
        title: "The AI Physics Check",
        description: "Prompt the AI step-by-step to simulate or describe the physics of each step. Does the math check out?",
        videoWalkthrough: "The student feeds each step to AI one at a time. Step 1: 'A marble rolls down a 30cm ruler tilted at 20 degrees. How fast is it going at the bottom?' Step 2: 'The marble at that speed hits a paper cup. Does it have enough force to tip it?' AI says no — the cup is too heavy. The student adjusts: uses a lighter cup. AI confirms it works now.",
        proTip: "When AI says something won't work, don't give up — ask: 'What would I need to change to make this work?' AI is great at suggesting fixes."
      },
      {
        step: 4,
        title: "The Blueprint",
        description: "Create a final annotated blueprint showing each step, the physics involved, and whether the AI confirmed it would work.",
        videoWalkthrough: "The student creates a final diagram with 7 labeled steps. Each step has: a drawing, the physics equation, the AI's verdict (✅ or ⚠️), and a 'backup plan' if it fails. They present it as a poster with the title: 'Operation Balloon Pop: A Physics-Verified Rube Goldberg Machine.'",
        proTip: "Include your failures! The steps that didn't work (and how you fixed them) are the most interesting part of the project."
      }
    ],
    skillsLearned: ["Computational thinking", "Problem decomposition", "Step-by-step prompting", "Physics reasoning with AI", "Iterative debugging", "Blueprint design"],
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
    heroImage: "/images/course7_hero.png",
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
      },
      {
        label: "Attach Files for Context",
        type: "good",
        prompt: "I'm uploading my class notes from the last 3 weeks (PDF). Please:\n1. Read through all the notes\n2. Identify the 10 most important concepts\n3. For each concept, create a flashcard with a question on one side and the answer on the other\n4. Save the flashcards as a formatted document I can print",
        output: "[Agent: Reading 47 pages of notes... Identifying key concepts... Creating flashcards...]\n\n✅ Created 10 flashcards from your notes:\n\n1. Q: What are the 3 stages of cellular respiration?\n   A: Glycolysis, Krebs Cycle, Electron Transport Chain\n\n2. Q: Where does glycolysis occur?\n   A: In the cytoplasm (not the mitochondria)\n\n... [8 more flashcards]\n\n📄 Saved as 'Bio_Flashcards.pdf' — formatted for double-sided printing."
      },
      {
        label: "Multi-Tool Command",
        type: "agent",
        prompt: "I have a history essay due Thursday on the causes of World War I. Please:\n1. Search the web for 5 scholarly sources on WWI causes\n2. Read each source and extract the key arguments\n3. Create an essay outline with thesis, 3 body paragraphs, and conclusion\n4. For each body paragraph, note which sources support the argument\n5. Save the outline as a document",
        output: "[Agent: Searching academic databases... Reading 5 sources... Building outline...]\n\n📋 Essay Outline: 'The Tangled Web: Causes of World War I'\n\nThesis: WWI resulted from the convergence of militarism, alliance systems, and imperial competition, triggered by the assassination of Archduke Franz Ferdinand.\n\nBody 1: Militarism & Arms Race (Sources: Stevenson 1996, Clark 2012)\nBody 2: Alliance Systems & Domino Effect (Sources: Keegan 1998, MacMillan 2013)\nBody 3: Imperial Competition & Nationalism (Sources: Fromkin 2004, Clark 2012)\n\nConclusion: No single cause — it was the interaction of all three.\n\n📄 Saved as 'WWI_Essay_Outline.docx'"
      },
      {
        label: "Review and Revise the Agent's Work",
        type: "followup",
        prompt: "The outline looks good, but Body Paragraph 2 feels weak. Can you:\n1. Find 2 more sources specifically about the alliance system\n2. Add a specific example: How did the alliance between Austria-Hungary and Germany escalate the crisis after the assassination?\n3. Update the outline with these additions",
        output: "[Agent: Searching for additional sources... Updating outline...]\n\nAdded sources:\n• Williamson, 'Austria-Hungary and the Origins of the First World War' (1991)\n• Otte, 'July Crisis: The World's Descent into War' (2014)\n\nAdded example: After the assassination, Austria-Hungary consulted Germany and received the 'Blank Check' — unconditional support for any action against Serbia. This emboldened Austria-Hungary to issue an ultimatum they knew Serbia couldn't accept, triggering the alliance cascade.\n\n📄 Updated outline saved."
      }
    ],
    commonMistakes: [
      {
        mistake: "Giving the agent vague instructions",
        why: "Agents are literal. 'Research WWI' could mean anything. The agent might spend 10 minutes on something you didn't want.",
        fix: "Be specific about: WHAT to search for, HOW MANY sources, WHAT to extract from each source, and WHAT format to save the output in."
      },
      {
        mistake: "Not reviewing the agent's sources",
        why: "Agents can find real sources but misinterpret them, or find sources that look credible but aren't (blogs, opinion pieces).",
        fix: "Always ask: 'For each source, give me the author, publication, year, and a direct quote that supports the argument.' Then spot-check at least 2 sources."
      },
      {
        mistake: "Using the agent's output as your final product",
        why: "The agent's outline is a starting point, not a finished essay. Teachers can tell when an essay was written by AI — it lacks your personal voice and original analysis.",
        fix: "Use the agent for research and structure. Write the actual essay yourself, using the outline as a guide and the sources as evidence."
      },
      {
        mistake: "Not providing enough context",
        why: "The agent doesn't know your grade level, your teacher's expectations, or what you've already covered in class.",
        fix: "Always include: your grade level, the assignment requirements, what you've already learned, and any specific instructions from your teacher."
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "Identify Your Problem",
        description: "Pick a real study challenge or research task you're facing right now. Make it personal and specific.",
        videoWalkthrough: "A student has an AP US History exam in 2 weeks and 6 chapters to review. They write down their specific challenge: 'I need to review Chapters 12-17 but I only have 10 hours of study time. I scored lowest on the Reconstruction era (Chapter 15) on my last quiz.'",
        proTip: "The more specific your problem, the better the agent can help. 'I need to study' is vague. 'I need to review 6 chapters in 10 hours with focus on my weakest area' is actionable."
      },
      {
        step: 2,
        title: "Write the Command",
        description: "Write a multi-step prompt that requires the AI to use at least 2 tools (e.g., file reading + web search + document creation).",
        videoWalkthrough: "The student writes a 6-part command: (1) Read my uploaded notes, (2) Identify my weakest topics based on my quiz scores, (3) Search for the best review videos for those topics, (4) Create a 10-day study schedule, (5) Generate practice questions for each chapter, (6) Save everything as a study packet.",
        proTip: "Think about what TOOLS the agent needs to use. If your prompt only requires 'thinking,' it's not agentic enough. Push it to search, read files, create documents, or write code."
      },
      {
        step: 3,
        title: "Review the Work",
        description: "Did the agent follow all instructions? Are the sources good? Is the schedule realistic? Give it feedback and ask for revisions.",
        videoWalkthrough: "The student reviews the study plan and finds 3 issues: (1) The schedule has too much study time on Saturday (4 hours — unrealistic), (2) One of the YouTube links is broken, (3) The practice questions for Chapter 15 are too easy. They send feedback and the agent revises all three.",
        proTip: "Treat the agent like an intern — smart but inexperienced. Review everything. Give specific, constructive feedback. The second version is always better."
      },
      {
        step: 4,
        title: "Reflect",
        description: "Compare the agent's output to what you would have done manually. What was better? What did you still need to fix?",
        videoWalkthrough: "The student writes a short reflection: 'The agent saved me about 3 hours of research and planning. The study schedule was better than what I would have made because it distributed topics more evenly. But the practice questions were too generic — I had to rewrite 4 of them to match my teacher's style. Lesson: agents are great at structure but need human judgment for quality.'",
        proTip: "This reflection is the real learning. Understanding WHEN to use an agent and WHEN to do it yourself is the skill that matters most."
      }
    ],
    skillsLearned: ["Agentic AI commands", "Multi-tool orchestration", "Task delegation", "Quality review", "Context-setting", "Iterative feedback"],
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
    heroImage: "/images/course8_hero.png",
    schoolConnection: "Journalism / Student Council",
    overview: "Why do a repetitive task yourself when you can build a workflow? In this course, you'll learn how to connect different AI tasks so the output of one becomes the input of the next — like a factory assembly line, but for information.",
    promptExamples: [
      {
        label: "The One-Shot Approach (Messy)",
        type: "bad",
        prompt: "Make me a school newsletter with recent news, a summary, nice formatting, and a quote.",
        output: "Here's a newsletter... [Mediocre formatting, generic news that may not be about YOUR school, random quote, no structure or consistency]"
      },
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
        output: "# The Weekly Buzz\n*Your weekly roundup of everything happening in our school district*\n\nWhat a week! From championship robots to million-dollar labs, our district is making moves...\n\n## Robotics Team Takes State!\nLincoln High's robotics team defeated 45 teams...\n\n## New STEM Lab Approved\n$2.3 million in funding...\n\n## Student Art Goes Downtown\n47 student artworks...\n\n> 'The important thing is not to stop questioning.' — Albert Einstein"
      },
      {
        label: "Step 3: Generate a Header Image",
        type: "step",
        prompt: "Generate a newsletter header image for 'The Weekly Buzz.' It should feature a cartoon bee mascot wearing a graduation cap, holding a newspaper, with a school building in the background. Style: flat illustration, bright colors.",
        output: "[Agent: Generating image...]\n\n✅ Header image generated. The bee mascot looks friendly and school-appropriate. The style is consistent and could be reused weekly."
      },
      {
        label: "Step 4: Compile & Distribute",
        type: "agent",
        prompt: "Take the formatted newsletter and the header image. Compile them into a single, polished HTML email template. Make it mobile-responsive. Add an 'Unsubscribe' link at the bottom and a 'Share this newsletter' button.",
        output: "[Agent: Building HTML template... Adding responsive CSS... Inserting content and image...]\n\n✅ Newsletter HTML template ready. It's mobile-responsive, includes the header image, all 3 stories with source links, the quote, and footer with unsubscribe/share links."
      },
      {
        label: "The Full Workflow Command",
        type: "agent",
        prompt: "Run the complete 'Weekly Buzz' workflow:\n1. Search for this week's top 3 school district stories\n2. Write summaries in newsletter format\n3. Generate a fresh header image\n4. Compile into HTML email template\n5. Save the final newsletter as 'weekly_buzz_may2026.html'\n\nThis is a repeatable workflow — I want to run it every Friday.",
        output: "[Agent: Executing 5-step workflow...]\n\nStep 1: ✅ Found 3 stories (searched 4 local news sites)\nStep 2: ✅ Newsletter formatted with intro and quote\nStep 3: ✅ Header image generated (bee mascot, spring theme)\nStep 4: ✅ HTML template compiled, mobile-responsive\nStep 5: ✅ Saved as 'weekly_buzz_may2026.html'\n\nTotal time: 4 minutes. Manual equivalent: ~45 minutes.\n\nThis workflow can be repeated every Friday with the same prompt. The only thing that changes is the news content."
      }
    ],
    commonMistakes: [
      {
        mistake: "Not defining the output format for each step",
        why: "If Step 1 outputs a paragraph but Step 2 expects a bullet list, the chain breaks. Each step needs to produce output in the format the next step expects.",
        fix: "For each step, specify: 'Output this as [format].' Example: 'Output as a numbered list with headline, summary, and URL on separate lines.'"
      },
      {
        mistake: "Building the whole workflow at once without testing each step",
        why: "If step 3 fails, you don't know if the problem is in step 3 or if bad output from step 1 cascaded through.",
        fix: "Build and test one step at a time. Verify each step's output before connecting it to the next step."
      },
      {
        mistake: "Not planning for failures",
        why: "What if the web search finds no relevant news? What if the image generation fails? Your workflow crashes with no fallback.",
        fix: "Add fallback instructions: 'If no local news is found, use school website announcements instead.' 'If image generation fails, use last week's header image.'"
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "Find the Mundane",
        description: "What's something repetitive you or your club does every week? Summarizing meeting notes? Collecting announcements? Finding memes for the school Instagram?",
        videoWalkthrough: "A student council member identifies their weekly pain point: every Monday they manually collect announcements from 5 teachers, format them into a bulletin, and post it to the school website. It takes 90 minutes every week. They decide to automate this.",
        proTip: "The best workflows automate tasks that are: (1) repetitive, (2) time-consuming, and (3) follow a predictable pattern. If it's different every time, it's hard to automate."
      },
      {
        step: 2,
        title: "Design the Chain",
        description: "Map out the 3-4 steps needed to automate it. Draw a flowchart: Input → Process → Process → Output.",
        videoWalkthrough: "The student draws a flowchart: (1) Collect announcements from email → (2) Categorize by type (academic, sports, events, deadlines) → (3) Format into bulletin template → (4) Generate a themed header image → (5) Save as HTML. They use boxes and arrows on paper first, then recreate it digitally.",
        proTip: "Draw the flowchart BEFORE you write any prompts. It's much easier to see logical gaps in a visual diagram than in text."
      },
      {
        step: 3,
        title: "Execute the Workflow",
        description: "Run the entire workflow using an agentic AI. Each step's output feeds into the next step's input.",
        videoWalkthrough: "The student runs their 5-step workflow in Manus. Steps 1-3 work perfectly. Step 4 (image generation) produces an image that doesn't match the school colors. They add a constraint: 'Use school colors: navy blue and gold.' Step 5 works but the HTML has a formatting bug. They ask the agent to fix it. Second run: everything works.",
        proTip: "Your first run will almost never be perfect. That's expected! The skill is in diagnosing which step failed and fixing it."
      },
      {
        step: 4,
        title: "Iterate & Improve",
        description: "Did the workflow produce good results? What step needs tweaking? Refine your prompts and run it again.",
        videoWalkthrough: "The student runs the workflow 3 times over 3 weeks, improving each time. Week 1: Basic but functional. Week 2: Added a 'Fun Fact of the Week' section. Week 3: Added automatic categorization with color-coded sections. By week 3, the 90-minute task takes 5 minutes of review.",
        proTip: "Save your workflow prompt as a template. Each week, you just update the input data and run the same workflow. That's the power of automation."
      }
    ],
    skillsLearned: ["Workflow design", "Task chaining", "Automation thinking", "Process optimization", "Error handling", "Template creation"],
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
    heroImage: "/images/course9_hero.png",
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
      },
      {
        label: "Request a Bug Fix",
        type: "followup",
        prompt: "The flip animation is glitchy on mobile — the card flickers before flipping. Also, the dark mode toggle doesn't save my preference when I refresh the page. Can you fix both issues?",
        output: "[Agent: Debugging flip animation... Found CSS backface-visibility issue... Fixing... Adding localStorage for dark mode preference...]\n\n✅ Fixed both issues:\n1. Flip animation: Added 'backface-visibility: hidden' and '-webkit-backface-visibility: hidden' for Safari compatibility\n2. Dark mode: Now saves preference to localStorage and loads it on page refresh"
      },
      {
        label: "Add a New Feature",
        type: "agent",
        prompt: "Add a new feature to the flashcard app: a 'Create Your Own' mode where users can:\n1. Click a '+' button to add a new flashcard\n2. Type a question and answer in a modal popup\n3. Save the card to the deck\n4. All custom cards should persist using localStorage so they survive page refreshes",
        output: "[Agent: Adding modal component... Creating form... Implementing localStorage persistence... Updating card deck logic...]\n\n✅ 'Create Your Own' mode added:\n- '+' button in the top right corner\n- Clean modal with Question and Answer text fields\n- Cards saved to localStorage (persist across sessions)\n- Custom cards appear after the default periodic table cards\n- Added a 'Delete' button on custom cards"
      },
      {
        label: "Request a Design Overhaul",
        type: "good",
        prompt: "The app works great but looks boring. Redesign it with these style requirements:\n- Color scheme: dark navy background (#0a192f) with electric blue accents (#64ffda)\n- Font: Use 'Space Mono' from Google Fonts for a techy feel\n- Add a subtle gradient animation on the card border\n- Make the buttons look like terminal commands (monospace font, green text on dark background)\n- Add a particle effect in the background (subtle, not distracting)",
        output: "[Agent: Updating CSS... Adding Google Font... Creating gradient animation... Styling buttons... Adding canvas particle effect...]\n\n✅ Design overhaul complete:\n- Dark navy theme with electric blue accents\n- Space Mono font throughout\n- Animated gradient border on the flashcard (cycles through blue → teal → green)\n- Terminal-style buttons with hover glow effect\n- Subtle floating particle background (60 particles, slow drift)"
      },
      {
        label: "Write a Test Plan",
        type: "good",
        prompt: "Before I present this app, I need to test it thoroughly. Create a test checklist with 10 specific things to test. For each test, describe: what to do, what should happen, and what would indicate a bug.",
        output: "Flashcard App Test Checklist:\n\n1. Card Flip: Click the card → Should flip with smooth animation → Bug: flickering, no animation, or content visible during flip\n2. Next/Previous: Click Next on last card → Should loop to first card → Bug: crash, blank card, or counter error\n3. Shuffle: Click Shuffle → Cards should reorder randomly → Bug: same order every time, or missing cards\n4. Score Tracking: Mark 3 correct, 2 incorrect → Should show '3/2' → Bug: wrong count or not resetting\n5. Dark Mode Toggle: Click toggle → Theme should switch → Bug: partial switch, text invisible\n6. Dark Mode Persistence: Toggle dark mode, refresh page → Should stay in dark mode → Bug: resets to light\n7. Create Card: Add custom card with long text → Should display properly → Bug: text overflow or truncation\n8. Delete Card: Delete a custom card → Should remove from deck and localStorage → Bug: card reappears on refresh\n9. Mobile Responsive: Open on phone → All elements should be usable → Bug: buttons too small, card too wide\n10. Empty State: Delete all custom cards → Should show default deck only → Bug: crash or blank screen"
      }
    ],
    commonMistakes: [
      {
        mistake: "Writing vague specs like 'make it look good'",
        why: "'Good' is subjective. The AI will make design choices you might hate. Without specific direction, you get generic results.",
        fix: "Be specific: name colors (hex codes), fonts (from Google Fonts), spacing (in pixels), and reference existing apps you like ('style it like Spotify's dark mode')."
      },
      {
        mistake: "Not testing on mobile",
        why: "AI-built apps often look great on desktop but break on mobile. Buttons overlap, text overflows, and layouts collapse.",
        fix: "Always include 'Make it mobile-responsive' in your spec. After building, test on your phone. Report specific mobile bugs."
      },
      {
        mistake: "Trying to build too much at once",
        why: "A 20-feature app spec will overwhelm the agent. It'll build a buggy mess. Start small and add features incrementally.",
        fix: "Build the core feature first (flashcard flip + next/previous). Test it. Then add features one at a time: shuffle, score tracking, dark mode, custom cards."
      },
      {
        mistake: "Not saving your spec document",
        why: "If you need to rebuild or modify the app later, you'll forget what you asked for. Your spec is your blueprint.",
        fix: "Write your spec in a separate document before giving it to the AI. Update it as you add features. This is your 'product requirements document' (PRD)."
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "The App Idea",
        description: "Keep it simple but useful: a flashcard app, a to-do list, a quiz game, a countdown timer, or a habit tracker.",
        videoWalkthrough: "A student decides to build a 'Study Timer' app — a Pomodoro timer with 25-minute focus sessions and 5-minute breaks. They sketch the UI on paper: a big circular timer in the center, Start/Pause/Reset buttons, a session counter, and a motivational quote that changes each session.",
        proTip: "Sketch your app on paper first. It takes 2 minutes and saves you 20 minutes of back-and-forth with the AI about layout."
      },
      {
        step: 2,
        title: "Write the Specs",
        description: "Write a detailed list of requirements. Describe the UI (what it looks like), the features (what it does), and the data (what content it has).",
        videoWalkthrough: "The student writes a 1-page spec document with 3 sections: UI (circular timer, color scheme, button placement), Features (start/pause/reset, session counter, break timer, notification sound), and Data (5 motivational quotes that rotate). They include a hand-drawn wireframe photo.",
        proTip: "Organize your spec into: UI Requirements, Feature Requirements, and Data Requirements. This structure helps the AI build systematically."
      },
      {
        step: 3,
        title: "Build with AI",
        description: "Feed your specs to an agentic AI like Manus. Watch it build your app in real-time. Test it and request changes!",
        videoWalkthrough: "The student pastes their spec into Manus. The agent builds the timer app in about 3 minutes. The student tests it: the timer works but the circular progress animation is jerky. They ask: 'Make the circular progress animation smooth using CSS transitions.' The agent fixes it. They also notice the notification sound is too loud and ask for a volume slider.",
        proTip: "Test after EVERY change. Don't stack up 5 requests at once — test one, verify it works, then request the next."
      },
      {
        step: 4,
        title: "Show & Tell",
        description: "Demo your working app to the class. Explain your spec document and how you iterated with the AI to get the final result.",
        videoWalkthrough: "The student presents their Study Timer app with a 3-part demo: (1) Live demo of the app working, (2) Side-by-side comparison of their original paper sketch vs. the final app, (3) A 'blooper reel' of funny AI mistakes during development (the timer once counted UP instead of down, and the motivational quotes appeared in Comic Sans).",
        proTip: "The best presentations show the PROCESS, not just the product. Include your original sketch, your spec document, and at least one funny mistake the AI made."
      }
    ],
    skillsLearned: ["Technical specification writing", "Product management", "Iterative development", "AI-assisted prototyping", "QA testing", "Design communication"],
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
    heroImage: "/images/course10_hero.png",
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
      },
      {
        label: "Phase 4: Build a Prototype",
        type: "agent",
        prompt: "Build a simple web app prototype for the 'Parent Queue Tracker.' It should show:\n1. A real-time queue position ('You are #14 in line')\n2. Estimated wait time\n3. A map showing which exit to use based on your child's grade\n4. A notification when it's your turn",
        output: "[Agent: Building web app... Creating queue logic... Adding map component... Implementing notifications...]\n\n✅ Prototype ready! Features:\n- Live queue counter with estimated wait time\n- Color-coded map (East exit = blue for 9-10, West exit = green for 11-12)\n- Push notification simulation\n- Clean, mobile-first design (parents will use this on their phones)"
      },
      {
        label: "Phase 5: Create the Presentation",
        type: "agent",
        prompt: "Create a 10-slide presentation for the school board meeting. Include:\n- Slide 1: Title + hook statistic\n- Slides 2-3: The problem (data + parent quotes)\n- Slides 4-5: Research on what other schools did\n- Slides 6-7: Our proposed solution\n- Slide 8: App prototype demo screenshots\n- Slide 9: Implementation timeline and budget\n- Slide 10: Call to action",
        output: "[Agent: Building presentation... Inserting charts... Adding screenshots... Formatting...]\n\n✅ 10-slide presentation ready:\n- Professional design with school colors\n- Data visualizations from your survey embedded\n- App prototype screenshots included\n- Speaker notes for each slide\n- Estimated budget: $2,400 for implementation"
      },
      {
        label: "The Orchestrator's Reflection",
        type: "good",
        prompt: "I just used AI for research, data analysis, solution design, app building, and presentation creation — all for one project. Help me write a 1-paragraph reflection on which AI skills were most valuable and which parts still required human judgment.",
        output: "Throughout this project, AI excelled at three things: speed (researching 3 case studies in minutes instead of hours), pattern recognition (finding the 3:15 PM congestion peak in 200 survey responses), and prototyping (building a functional app demo without any coding). However, the parts that required human judgment were equally critical: choosing which problem to solve (AI can't care about your community), interpreting WHY parents preferred staggered dismissal (the data showed 'what' but not 'why'), designing a solution that fits our specific school's layout and culture, and deciding how to present the proposal persuasively to a school board audience. The most important lesson: AI is a force multiplier for human initiative — it makes your ideas bigger, faster, and more polished, but it can't replace the human spark that starts the whole process."
      }
    ],
    commonMistakes: [
      {
        mistake: "Jumping to solutions before understanding the problem",
        why: "AI makes it easy to generate solutions instantly. But a brilliant solution to the wrong problem is useless.",
        fix: "Spend at least 30% of your time on research and data collection BEFORE designing any solution. Understand the problem deeply first."
      },
      {
        mistake: "Using AI for everything without adding your own analysis",
        why: "If every part of your project is AI-generated, you haven't learned anything. The project becomes a demonstration of AI, not of YOUR thinking.",
        fix: "For each phase, clearly separate: 'AI did this' vs. 'I decided this.' Your original analysis, decisions, and interpretations are what make the project yours."
      },
      {
        mistake: "Not connecting your solution to real stakeholders",
        why: "A proposal that only lives in a slide deck has zero impact. The best capstone projects actually get presented to decision-makers.",
        fix: "Identify who can actually implement your solution (principal, school board, city council) and tailor your presentation to their concerns and language."
      },
      {
        mistake: "Presenting AI-generated data as your own research",
        why: "AI can fabricate statistics, fake case studies, and invented quotes. If you present these to a school board, you lose all credibility.",
        fix: "Verify EVERY data point. For your capstone, use real data you collected (surveys, observations) supplemented by verified external sources."
      }
    ],
    activitySteps: [
      {
        step: 1,
        title: "Identify the Problem",
        description: "Find a REAL problem in your school or community: traffic, food waste, mental health resources, recycling, or anything you care about.",
        videoWalkthrough: "A student notices that the school cafeteria throws away hundreds of pounds of food every week. They take photos of the waste bins after lunch for 3 days to document the problem. They interview the cafeteria manager, who confirms: 'We throw away about 200 lbs of food per week.' The student has their problem — and real data to start with.",
        proTip: "The best problems are ones you can SEE and MEASURE. Take photos, count things, talk to people. Real evidence is more powerful than any AI-generated statistic."
      },
      {
        step: 2,
        title: "Research & Analyze",
        description: "Use agentic AI to research solutions, analyze data, and understand the problem deeply. Combine web search, data analysis, and summarization.",
        videoWalkthrough: "The student uses Manus to: (1) Search for how other schools reduced food waste, (2) Analyze their 3-day photo data to categorize waste types (untouched entrees, half-eaten sides, unopened milk), (3) Create a survey for 100 students asking why they don't finish their food. AI processes the survey and reveals: 52% say portions are too large, 31% say they don't like the options, 17% say they run out of time.",
        proTip: "Combine AI research with YOUR original data. AI can find what other schools did, but only YOU can survey YOUR school's students."
      },
      {
        step: 3,
        title: "Design the Solution",
        description: "Brainstorm solutions with AI, generate visuals, create diagrams, and build any supporting tools (like a simple app or dashboard).",
        videoWalkthrough: "The student designs a 3-part solution: (1) 'Half-Portion Option' — students can request smaller servings, (2) 'Food Rescue Program' — partner with a local food bank for untouched items, (3) A simple tracking app that logs daily waste and shows the school's progress. They use AI to build the tracking app prototype and generate infographics showing projected waste reduction.",
        proTip: "Your solution should be specific, measurable, and achievable. 'Reduce food waste' is vague. 'Reduce food waste by 40% in one semester through half-portions and food rescue' is a real plan."
      },
      {
        step: 4,
        title: "Present to the World",
        description: "Create a full presentation and present your proposal. You're not just showing a school project — you're showing how AI can drive real change.",
        videoWalkthrough: "The student presents to the school principal and cafeteria manager. Their presentation includes: real photos of waste, survey data from 100 students, case studies from 3 other schools, a working app prototype, and a budget showing the program would save the school $8,000/year. The principal approves a pilot program. The student's project becomes a real policy change.",
        proTip: "This is the moment everything comes together. You used AI as a tool, but the problem you chose, the data you collected, the solution you designed, and the presentation you delivered — that's all YOU. That's what it means to be an AI Orchestrator."
      }
    ],
    skillsLearned: ["Full AI orchestration", "Real-world problem solving", "Multi-tool integration", "Professional presentation", "Stakeholder communication", "Impact measurement"],
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
