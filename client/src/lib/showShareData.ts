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
      zh: "用3分钟「推销」你的虚构世界：展示世界设定文档，解释你的世界中最独特的一个规则，以及AI如何帮你发现了你自己没想到的设定矛盾。",
      en: "In 3 minutes, 'pitch' your fictional world: show your world bible, explain the most unique rule in your world, and how AI helped you discover contradictions you hadn't noticed."
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
    courseId: 2,
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
    courseId: 3,
    format: {
      zh: "进行一次2分钟的「数学思路讲解」：展示你的原始尝试、你向AI请求的提示、你如何检查每一步，以及你现在能用自己的话说出的解法。",
      en: "Give a 2-minute 'math thinking walkthrough': show your original attempt, the hint you requested from AI, how you checked each step, and the solution you can now explain in your own words."
    },
    discussionPoints: {
      zh: [
        "为什么请求提示或图示，往往比直接索要答案更能帮助你学习？",
        "你用什么小例子、图形或规则来验证AI建议的步骤？",
        "AI给出的解题思路和你自己的思路有什么相同或不同？"
      ],
      en: [
        "Why can asking for a hint or diagram help you learn more than asking for the answer?",
        "What small examples, drawings, or rules did you use to verify AI's suggested steps?",
        "How was AI's approach similar to or different from your own?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "你在哪一步最需要自己做判断，而不是接受AI的建议？",
        "如果AI给出看似合理但错误的步骤，你会怎样发现它？",
        "下次遇到难题时，你会如何先自己尝试，再向AI求助？"
      ],
      en: [
        "At which step did you most need your own judgment instead of accepting AI's suggestion?",
        "How would you notice if AI offered a step that sounded plausible but was wrong?",
        "When you meet a hard problem next time, how will you try first and then ask AI for help?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "是否清楚展示了原始尝试、AI提示和验证过程？",
        "每一步是否有可理解的理由或检查方法？",
        "讲解是否体现了学生自己的理解，而不是只复述AI答案？"
      ],
      en: [
        "Does it clearly show the original attempt, AI hint, and verification process?",
        "Does each step have an understandable reason or check?",
        "Does the explanation demonstrate the student's own understanding rather than repeating an AI answer?"
      ]
    }
  },
  {
    courseId: 4,
    format: {
      zh: "展示你的数据可视化作品（2分钟）：解释数据来源、你问了AI什么问题、以及你发现的最令人惊讶的洞察。展示AI是如何使用「工具」（代码/图表）来帮你分析的。",
      en: "Present your data visualization (2 min): explain data sources, what questions you asked AI, and the most surprising insight you discovered. Show how AI used 'tools' (code/charts) to help your analysis."
    },
    discussionPoints: {
      zh: [
        "AI分析数据时，你注意到它使用了什么「工具」（代码、计算器、图表生成器）？",
        "数据可视化中，哪些设计选择是你自己做的，哪些是AI建议的？",
        "「相关性」和「因果性」的区别是什么？AI会混淆这两者吗？"
      ],
      en: [
        "When AI analyzed data, what 'tools' did you notice it using (code, calculator, chart generator)?",
        "In your visualization, which design choices were yours vs AI-suggested?",
        "What's the difference between 'correlation' and 'causation'? Does AI confuse them?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "AI分析数据时，有没有给出过误导性的结论？你是如何发现的？",
        "提出好问题和获得好答案之间的关系是什么？",
        "如果每个人都用AI分析同一份数据，结果会一样吗？为什么？"
      ],
      en: [
        "Did AI ever give misleading conclusions when analyzing data? How did you catch it?",
        "What's the relationship between asking good questions and getting good answers?",
        "If everyone used AI to analyze the same data, would results be the same? Why?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "数据可视化是否清晰传达了核心洞察？",
        "是否展示了对AI分析结果的批判性思考？",
        "是否理解了AI使用的「工具」概念？"
      ],
      en: [
        "Does the visualization clearly convey the core insight?",
        "Does it demonstrate critical thinking about AI's analysis results?",
        "Does it show understanding of the 'tools' concept AI uses?"
      ]
    }
  },
  {
    courseId: 5,
    format: {
      zh: "小组「创业路演」（5分钟）：像真正的创业者一样展示你们的产品概念、品牌设计、营销材料。评委（其他同学）可以提问。重点展示AI在创意过程中的角色以及团队如何协调多个AI工具。",
      en: "Group 'startup pitch' (5 min): Present your product concept, brand design, and marketing materials like real entrepreneurs. Judges (classmates) can ask questions. Focus on AI's role in the creative process and how your team coordinated multiple AI tools."
    },
    discussionPoints: {
      zh: [
        "在多模态创作中（文字+图片），AI最擅长哪个环节？",
        "小组中谁负责「策展」——决定保留什么、丢弃什么？这个角色重要吗？",
        "当AI生成的图片不符合你们的品牌调性时，你们是如何调整的？"
      ],
      en: [
        "In multimodal creation (text + image), which part is AI best at?",
        "Who in your group was the 'curator' — deciding what to keep vs discard? Is this role important?",
        "When AI-generated images didn't match your brand tone, how did you adjust?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "你们的品牌中，哪些元素是「只有人类能想到」的？",
        "协调多个AI工具（文本、图像、设计）最大的挑战是什么？",
        "小组协作中，你们是如何确保最终作品风格统一的？"
      ],
      en: [
        "Which elements of your brand are 'only a human could think of this'?",
        "What was the biggest challenge in coordinating multiple AI tools (text, image, design)?",
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
    courseId: 8,
    format: {
      zh: "小组「产品发布会」（6分钟）：像科技公司一样发布你们的应用原型。展示用户问题、解决方案、功能演示。每个组员负责一个环节。解释完整的AI智能体循环如何帮你们从想法到原型。",
      en: "Group 'product launch' (6 min): Launch your app prototype like a tech company. Show the user problem, solution, and feature demo. Each member owns one section. Explain how the full agentic AI loop helped you go from idea to prototype."
    },
    discussionPoints: {
      zh: [
        "不会写代码也能做应用——这改变了你对「技术能力」的定义吗？",
        "你们的应用中，哪些功能是AI帮你实现的？哪些是你们自己设计的逻辑？",
        "完整的AI智能体循环（目标→规划→执行→检查→迭代）中，你们在哪个环节花了最多时间？"
      ],
      en: [
        "Building apps without coding — does this change your definition of 'technical ability'?",
        "Which features in your app did AI help implement? Which logic did you design yourself?",
        "In the full agentic loop (goal → plan → execute → check → iterate), which step took the most time?"
      ]
    },
    reflectionQuestions: {
      zh: [
        "从「想法」到「可用原型」，最难的一步是什么？",
        "回顾整个8门课的学习旅程，你最大的成长是什么？",
        "你现在如何定义「AI时代的核心能力」？"
      ],
      en: [
        "From 'idea' to 'working prototype,' what was the hardest step?",
        "Looking back at the entire 8-course journey, what was your biggest growth?",
        "How do you now define 'core competencies in the AI age'?"
      ]
    },
    peerReviewCriteria: {
      zh: [
        "应用是否真正解决了一个用户问题？",
        "演示是否流畅、专业？",
        "是否展示了对完整AI智能体循环的理解？"
      ],
      en: [
        "Does the app genuinely solve a user problem?",
        "Is the demo smooth and professional?",
        "Does it demonstrate understanding of the full agentic AI loop?"
      ]
    }
  }
];
