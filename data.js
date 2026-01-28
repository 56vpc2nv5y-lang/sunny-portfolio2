const portfolioData = {
  // 1. 个人信息
  profile: {
    name: "Sunny Zhang (Jingyi)",
    title: "Data Analyst | MSc Analytics Candidate",
    tagline: "Bridging complex data to actionable business insights through SQL, Visualization, and Statistical Modelling.",
    contact: {
      email: "JINGYI021@e.ntu.edu.sg",
      linkedin: "https://www.linkedin.com/in/jingyi-zhang-46289a378/"
    }
  },

  // 2. 技能库 (这里是“证据”的源头)
  skills: [
    { name: "SQL", category: "Technical" },
    { name: "Tableau", category: "Visualization" },
    { name: "Python (NLP)", category: "Technical" },
    { name: "Statistical Modelling", category: "Analytics" },
    { name: "Market Research", category: "Business" }
  ],

  // 3. 经历 (每段经历都要打上 tags)
  experience: [
    {
      id: "exp_datastory",
      company: "DataStory Co., Ltd.",
      role: "Data Analyst Intern",
      period: "Apr 2025 – Jun 2025",
      summary: "Built BI dashboards and optimized marketing strategies via social listening.",
      // 关键点：在这里把技能和经历关联起来
      tags: ["SQL", "Tableau", "Excel"], 
      details: [
        "Built monthly management reports cleaning key metrics using SQL.",
        "Developed 10+ BI dashboards in Tableau for leadership reviews."
      ]
    },
    {
      id: "exp_gdufs_ta",
      company: "GDUFS",
      role: "Teaching Assistant (Econometrics)",
      period: "Sep 2023 – Jun 2024",
      summary: "Led data analysis courses and applied ML to improve student pass rates.",
      tags: ["Python", "Statistical Modelling", "Machine Learning"],
      details: [
        "Led Stata courses covering PCA and Causal Inference (DiD, IV).",
        "Applied Decision Trees and XGBoost to analyze student performance."
      ]
    }
    // ... 其他实习经历 (Huaxing, Haitong) 按此格式补充
  ],

  // 4. 项目 (同样打上 tags)
  projects: [
    {
      id: "proj_nlp",
      title: "Gov Social Media NLP Analysis",
      role: "Data Team Lead",
      summary: "Scraped 20k+ Weibo comments to analyze political communication effectiveness.",
      tags: ["Python", "NLP", "Data Mining"],
      link: "#" // 如果有GitHub链接放这里
    },
    {
      id: "proj_happiness",
      title: "National Happiness Index Modelling",
      role: "Team Leader",
      summary: "Constructed a happiness index using Entropy Method & Grey Relational Analysis.",
      tags: ["Statistical Modelling", "Data Analysis"],
      link: "#"
    }
  ]
};
