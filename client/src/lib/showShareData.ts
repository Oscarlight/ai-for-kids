export interface ShowShareSession {
  courseId: number;
  format: { zh: string; en: string };
  discussionPoints: { zh: string[]; en: string[] };
  reflectionQuestions: { zh: string[]; en: string[] };
  peerReviewCriteria: { zh: string[]; en: string[] };
}

export const showShareSessions: ShowShareSession[] = [
  {
    courseId: 1,
    format: {
      zh: "朗读你的故事中最精彩的段落（2分钟），然后解释：哪些部分是你写的，哪些是AI建议的，你是如何改写AI的输出让它变成「你的」声音的。",
      en: "Read aloud the best passage from your story (2 min), then explain: which parts you wrote, which AI suggested, and how you rewrote AI output to make it 'your' voice."
    },
    discussionPoints: {
      zh: [
        "AI生成的内容和你自己写的内容，读起来有什么不同？",
        "你在什么时候选择了不采纳AI的建议？为什么？",
        "如果所有人都用AI写故事，故事会变得千篇一律吗？如何保持独特性？"
      ],
      en: [
        "What feels different between AI-generated content and what you wrote yourself?",
        "When did you choose NOT to use AI's suggestion? Why?",
        "If everyone uses AI to write stories, will all stories sound the same? How do you maintain uniqueness?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "在这个项目中，AI最有帮助的时刻是什么？",
        "AI最让你失望的时刻是什么？",
        "如果重新做一次，你会改变什么提示策略？"
      ],
      en: [
        "What was the moment AI helped you the most in this project?",
        "What was the moment AI disappointed you the most?",
        "If you could redo this, what prompting strategy would you change?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "故事是否有独特的个人声音？（不像AI模板）",
        "提示词策略是否展示了迭代改进？",
        "是否成功发现并修复了AI的幻觉？"
      ],
      en: [
        "Does the story have a unique personal voice? (Not AI-template-like)",
        "Do the prompting strategies show iterative improvement?",
        "Were AI hallucinations successfully identified and fixed?"
      ]
    }
  },
  {
    courseId: 2,
    format: {
      zh: "用3分钟「推销」你的虚构世界：展示世界地图/设定文档，解释你的世界中最独特的一个规则，以及AI如何帮你发现了你自己没想到的设定矛盾。",
      en: "In 3 minutes, 'pitch' your fictional world: show your world map/lore document, explain the most unique rule in your world, and how AI helped you discover setting contradictions you hadn't noticed."
    },
    discussionPoints: {
      zh: [
        "AI在世界构建中最擅长什么？最不擅长什么？",
        "你是如何确保世界设定的内部一致性的？",
        "当AI给出一个你不喜欢的建议时，你是如何引导它的？"
      ],
      en: [
        "What is AI best at in world-building? What is it worst at?",
        "How did you ensure internal consistency in your world's lore?",
        "When AI gave a suggestion you didn't like, how did you redirect it?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "你的世界中哪个设定是完全你自己的创意，没有AI参与？",
        "AI帮你发现了哪些你自己没注意到的逻辑漏洞？",
        "「量」和「质」之间，你是如何平衡的？"
      ],
      en: [
        "Which element of your world was entirely your own idea, with no AI involvement?",
        "What logical gaps did AI help you discover that you hadn't noticed?",
        "How did you balance 'quantity' vs 'quality' of ideas?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "世界设定是否有内部一致性？",
        "是否展示了有效的发散思维引导？",
        "最终作品是否超越了AI的「平均水平」？"
      ],
      en: [
        "Does the world-building have internal consistency?",
        "Does it demonstrate effective divergent thinking guidance?",
        "Does the final work exceed AI's 'average' level?"
      ]
    }
  },
  {
    courseId: 3,
    format: {
      zh: "做一个2分钟的「真相揭秘」演示：展示你调查的历史迷思，AI给出的初始答案，你如何验证/推翻了它，以及你的最终结论。重点展示你的信息溯源过程。",
      en: "Give a 2-minute 'myth reveal' presentation: show the historical myth you investigated, AI's initial answer, how you verified/debunked it, and your final conclusion. Focus on your source-tracing process."
    },
    discussionPoints: {
      zh: [
        "AI在回答历史问题时，最常犯什么类型的错误？",
        "你用了什么方法来验证AI给出的「事实」？",
        "「听起来很有道理」和「确实是事实」之间的区别是什么？"
      ],
      en: [
        "What type of errors does AI make most often when answering historical questions?",
        "What methods did you use to verify the 'facts' AI provided?",
        "What's the difference between 'sounds plausible' and 'is actually true'?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "这个项目改变了你对AI「知识」的看法吗？",
        "你现在会如何向朋友解释「AI幻觉」？",
        "在未来的学习中，你会如何使用AI做研究？"
      ],
      en: [
        "Did this project change your view of AI 'knowledge'?",
        "How would you now explain 'AI hallucination' to a friend?",
        "How will you use AI for research in your future studies?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "信息来源是否多样且可靠？",
        "是否清晰展示了验证过程？",
        "最终结论是否有充分的证据支撑？"
      ],
      en: [
        "Are information sources diverse and reliable?",
        "Is the verification process clearly demonstrated?",
        "Is the final conclusion well-supported by evidence?"
      ]
    }
  },
  {
    courseId: 4,
    format: {
      zh: "小组展示（每组3-4人）：展示你们的数据可视化作品，解释数据来源、分析方法、以及你们发现的最令人惊讶的洞察。每个组员解释自己负责的部分。",
      en: "Group presentation (3-4 per group): Show your data visualization, explain data sources, analysis methods, and the most surprising insight you discovered. Each member explains their contribution."
    },
    discussionPoints: {
      zh: [
        "小组中是如何分工的？AI在分工中起了什么作用？",
        "数据可视化中，哪些设计选择是你们自己做的，哪些是AI建议的？",
        "当组员对AI的分析结果有不同解读时，你们是如何达成共识的？"
      ],
      en: [
        "How did your group divide the work? What role did AI play in task division?",
        "In your visualization, which design choices were yours vs AI-suggested?",
        "When team members interpreted AI's analysis differently, how did you reach consensus?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "AI分析数据时，有没有给出过误导性的结论？你们是如何发现的？",
        "小组协作中，最大的挑战是什么？",
        "如果每个人都用AI分析同一份数据，结果会一样吗？为什么？"
      ],
      en: [
        "Did AI ever give misleading conclusions when analyzing data? How did you catch it?",
        "What was the biggest challenge in group collaboration?",
        "If everyone used AI to analyze the same data, would results be the same? Why?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "数据可视化是否清晰传达了核心洞察？",
        "小组分工是否合理，每人贡献是否明确？",
        "是否展示了对AI分析结果的批判性思考？"
      ],
      en: [
        "Does the visualization clearly convey the core insight?",
        "Is the group's division of labor reasonable with clear individual contributions?",
        "Does it demonstrate critical thinking about AI's analysis results?"
      ]
    }
  },
  {
    courseId: 5,
    format: {
      zh: "小组「创业路演」（5分钟）：像真正的创业者一样展示你们的产品概念、品牌设计、营销材料。评委（其他同学）可以提问。重点展示AI在创意过程中的角色。",
      en: "Group 'startup pitch' (5 min): Present your product concept, brand design, and marketing materials like real entrepreneurs. Judges (classmates) can ask questions. Focus on AI's role in the creative process."
    },
    discussionPoints: {
      zh: [
        "在多模态创作中（文字+图片+视频），AI最擅长哪个环节？",
        "小组中谁负责「策展」——决定保留什么、丢弃什么？这个角色重要吗？",
        "当AI生成的图片不符合你们的品牌调性时，你们是如何调整的？"
      ],
      en: [
        "In multimodal creation (text + image + video), which part is AI best at?",
        "Who in your group was the 'curator' — deciding what to keep vs discard? Is this role important?",
        "When AI-generated images didn't match your brand tone, how did you adjust?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "你们的品牌中，哪些元素是「只有人类能想到」的？",
        "AI在创意工作中的最大局限是什么？",
        "小组协作中，你们是如何确保最终作品风格统一的？"
      ],
      en: [
        "Which elements of your brand are 'only a human could think of this'?",
        "What is AI's biggest limitation in creative work?",
        "How did your group ensure the final work had a unified style?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "品牌是否有统一的视觉语言和调性？",
        "展示是否清晰、有说服力？",
        "是否展示了人类创意对AI输出的提升？"
      ],
      en: [
        "Does the brand have a unified visual language and tone?",
        "Is the presentation clear and persuasive?",
        "Does it show how human creativity elevated AI output?"
      ]
    }
  },
  {
    courseId: 6,
    format: {
      zh: "小组「解题秀」（4分钟）：展示你们如何将一个复杂问题分解成AI可以处理的子任务，每个子任务的结果，以及你们如何整合最终答案。用流程图展示你们的思维过程。",
      en: "Group 'problem-solving show' (4 min): Show how you decomposed a complex problem into AI-manageable subtasks, results of each subtask, and how you integrated the final answer. Use a flowchart to show your thinking process."
    },
    discussionPoints: {
      zh: [
        "问题分解的过程中，最难的一步是什么？",
        "AI在哪些子任务上表现很好？哪些需要人类介入？",
        "小组成员对「如何分解问题」有分歧时，你们是如何决策的？"
      ],
      en: [
        "What was the hardest step in the problem decomposition process?",
        "Which subtasks did AI handle well? Which needed human intervention?",
        "When team members disagreed on 'how to decompose the problem,' how did you decide?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "「计算思维」和「AI思维」有什么区别？",
        "这个项目中，你学到的最重要的一个思维方法是什么？",
        "如果问题更复杂10倍，你的分解策略还能用吗？"
      ],
      en: [
        "What's the difference between 'computational thinking' and 'AI thinking'?",
        "What's the most important thinking method you learned in this project?",
        "If the problem were 10x more complex, would your decomposition strategy still work?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "问题分解是否逻辑清晰、层次分明？",
        "是否有效利用了AI处理各子任务？",
        "最终整合是否连贯且有说服力？"
      ],
      en: [
        "Is the problem decomposition logically clear and well-structured?",
        "Was AI effectively utilized for each subtask?",
        "Is the final integration coherent and convincing?"
      ]
    }
  },
  {
    courseId: 7,
    format: {
      zh: "小组「智能体演示」（5分钟）：现场演示你们的AI智能体工作流——从发出指令到获得结果的全过程。解释你们是如何设计指令的，以及智能体犯错时你们是如何纠正的。",
      en: "Group 'agent demo' (5 min): Live-demo your AI agent workflow — from issuing commands to getting results. Explain how you designed your commands and how you corrected the agent when it made mistakes."
    },
    discussionPoints: {
      zh: [
        "「聊天式AI」和「智能体AI」的核心区别是什么？用你自己的话解释。",
        "你们的智能体犯了什么错？你们是如何发现并纠正的？",
        "在小组中，谁是「指挥官」，谁是「质检员」？这种分工有效吗？"
      ],
      en: [
        "What's the core difference between 'chat AI' and 'agentic AI'? Explain in your own words.",
        "What mistakes did your agent make? How did you discover and correct them?",
        "In your group, who was the 'commander' and who was the 'quality checker'? Was this division effective?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "给AI智能体下指令和给人类同事下指令，有什么相似和不同？",
        "你信任AI智能体的输出吗？为什么/为什么不？",
        "这个项目改变了你对「自动化」的看法吗？"
      ],
      en: [
        "What's similar and different between giving commands to an AI agent vs a human colleague?",
        "Do you trust the AI agent's output? Why or why not?",
        "Did this project change your view of 'automation'?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "智能体指令是否清晰、具体、可执行？",
        "是否展示了有效的错误发现和纠正流程？",
        "小组协作是否流畅，角色分工是否明确？"
      ],
      en: [
        "Are agent commands clear, specific, and actionable?",
        "Does it demonstrate effective error detection and correction?",
        "Is group collaboration smooth with clear role division?"
      ]
    }
  },
  {
    courseId: 8,
    format: {
      zh: "小组「效率革命」展示（4分钟）：展示你们自动化的工作流——之前需要多少时间/步骤，现在需要多少。现场运行一次工作流，展示从输入到输出的全过程。",
      en: "Group 'efficiency revolution' show (4 min): Present your automated workflow — how much time/steps it took before vs now. Run the workflow live, showing the full input-to-output process."
    },
    discussionPoints: {
      zh: [
        "自动化一个工作流时，最容易被忽略的「边缘情况」是什么？",
        "你们的工作流中，哪些步骤必须保留人类判断？为什么？",
        "当工作流出错时，你们是如何调试的？"
      ],
      en: [
        "When automating a workflow, what 'edge cases' are most easily overlooked?",
        "Which steps in your workflow must retain human judgment? Why?",
        "When your workflow broke, how did you debug it?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "「自动化」和「智能化」的区别是什么？",
        "你们的工作流能被其他人复用吗？需要什么文档？",
        "如果这个工作流用在真实场景中，你最担心什么？"
      ],
      en: [
        "What's the difference between 'automation' and 'intelligence'?",
        "Can your workflow be reused by others? What documentation would they need?",
        "If this workflow were used in a real scenario, what would concern you most?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "工作流是否真正节省了时间/精力？",
        "错误处理机制是否完善？",
        "文档和说明是否清晰到其他人能复用？"
      ],
      en: [
        "Does the workflow genuinely save time/effort?",
        "Are error-handling mechanisms robust?",
        "Is documentation clear enough for others to reuse?"
      ]
    }
  },
  {
    courseId: 9,
    format: {
      zh: "小组「产品发布会」（6分钟）：像科技公司一样发布你们的应用原型。展示用户问题、解决方案、功能演示、用户反馈。每个组员负责一个环节。",
      en: "Group 'product launch' (6 min): Launch your app prototype like a tech company. Show the user problem, solution, feature demo, and user feedback. Each member owns one section."
    },
    discussionPoints: {
      zh: [
        "不会写代码也能做应用——这改变了你对「技术能力」的定义吗？",
        "你们的应用中，哪些功能是AI帮你实现的？哪些是你们自己设计的逻辑？",
        "用户测试中，最出乎意料的反馈是什么？"
      ],
      en: [
        "Building apps without coding — does this change your definition of 'technical ability'?",
        "Which features in your app did AI help implement? Which logic did you design yourself?",
        "What was the most unexpected feedback from user testing?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "从「想法」到「可用原型」，最难的一步是什么？",
        "如果要把这个原型变成真正的产品，还需要什么？",
        "这个项目中，小组协作最成功的一个时刻是什么？"
      ],
      en: [
        "From 'idea' to 'working prototype,' what was the hardest step?",
        "What would it take to turn this prototype into a real product?",
        "What was the most successful moment of group collaboration in this project?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "应用是否真正解决了一个用户问题？",
        "演示是否流畅、专业？",
        "小组分工是否体现了每个人的贡献？"
      ],
      en: [
        "Does the app genuinely solve a user problem?",
        "Is the demo smooth and professional?",
        "Does the division of labor reflect each person's contribution?"
      ]
    }
  },
  {
    courseId: 10,
    format: {
      zh: "小组「社区影响力」终极展示（8分钟）：完整呈现你们的社区问题解决方案——从研究、数据分析、方案设计到原型展示。邀请校外评委（如社区代表）参与评审。",
      en: "Group 'community impact' final showcase (8 min): Present your complete community problem solution — from research, data analysis, solution design to prototype demo. Invite external judges (e.g., community representatives) to participate."
    },
    discussionPoints: {
      zh: [
        "在整个项目中，你们用了哪些不同的AI能力？它们是如何串联的？",
        "如果没有AI，这个项目需要多少时间？质量会有什么不同？",
        "你们的方案如果真的实施，最大的挑战是什么？"
      ],
      en: [
        "Throughout this project, which different AI capabilities did you use? How did they connect?",
        "Without AI, how long would this project take? How would quality differ?",
        "If your solution were actually implemented, what would be the biggest challenge?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "回顾整个10门课的学习旅程，你最大的成长是什么？",
        "你现在如何定义「AI时代的核心能力」？",
        "你会如何向一个从未用过AI的人解释「如何与AI协作」？"
      ],
      en: [
        "Looking back at the entire 10-course journey, what was your biggest growth?",
        "How do you now define 'core competencies in the AI age'?",
        "How would you explain 'how to collaborate with AI' to someone who's never used it?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "方案是否全面、可行、有真实影响力？",
        "是否展示了对多种AI工具的熟练编排？",
        "展示是否专业、有说服力、团队配合默契？"
      ],
      en: [
        "Is the solution comprehensive, feasible, and impactful?",
        "Does it demonstrate skilled orchestration of multiple AI tools?",
        "Is the presentation professional, persuasive, with smooth teamwork?"
      ]
    }
  }
];
