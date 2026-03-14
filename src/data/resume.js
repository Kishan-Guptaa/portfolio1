export const resumeData = {
  personalInfo: {
    name: "Kishan Gupta",
    links: [
      { label: "LinkedIn", value: "Linkedin/KishanGupta", url: "https://linkedin.com/in/KishanGupta" },
      { label: "GitHub", value: "Github/KishanGupta", url: "https://github.com/Kishan-Guptaa" },
      { label: "Email", value: "Kishangupta@gmail.com", url: "mailto:Kishangupta@gmail.com" },
      { label: "Mobile", value: "+91-8982326494", url: "tel:+918982326494" }
    ]
  },
  skills: [
    { category: "Languages", items: ["C/C++", "JavaScript", "TypeScript", "Java", "PHP"] },
    { category: "Frameworks & Libraries", items: ["ReactJS", "NodeJS", "Express", "HTML and CSS", "Bootstrap", "TailwindCSS"] },
    { category: "Tools & Platforms", items: ["MySQL", "MongoDB", "Git", "GitHub", "Postman", "Vercel", "Postgres"] },
    { category: "Core CS Fundamentals", items: ["DBMS", "CN", "SQL", "OOPs"] },
    { category: "Soft Skills", items: ["Problem-Solving", "Leadership", "Quick Learner", "Team Work"] }
  ],
  projects: [
    {
      title: "Notes Deck",
      subtitle: "A Web-Based Note-Taking and Organization Application",
      period: "Nov '25 — Nov '25",
      techStack: "ReactJS, TypeScript, NodeJS, Express, Tailwind CSS, Postgres, NextJS",
      highlights: [
        "Engineered a specialized academic platform that allowed users to access and filter PDF documents by stream, branch, semester, and subject, along with an integrated repository of Topper Notes.",
        "Incorporated core engagement features, including a Quiz Question system, and enabled users to create and save personal notes directly within the interface.",
        "Crafted an exceptional and responsive UI, and delivered a customizable reading mode with adjustable text sizes for enhanced accessibility.",
        "Enhanced application performance across all metrics, and achieved high Lighthouse scores: Performance (97), Accessibility (100), Best Practices (100), SEO (82)."
      ],
      githubUrl: "https://github.com/Kishan-Guptaa/NotesDeck-frontend",
      liveUrl: "https://notes-deck-frontend-kt5h.vercel.app/"
    },
    {
      title: "Brainly",
      subtitle: "Secure Link Storage Platform",
      period: "Jun '25 — Jul '25",
      techStack: "ReactJS, JavaScript, NodeJS, ExpressJS, MongoDB, JWT, Bootstrap / Tailwind",
      highlights: [
        "Developed a secure link management platform that enabled users to store, organize, and categorize important Twitter & YouTube links for effortless access.",
        "Integrated robust JWT-based authentication, and ensured protected routes, secure sessions, and personalized dashboards.",
        "Implemented scalable RESTful APIs, enabled high-performance CRUD operations for managing links.",
        "Designed a visually polished, responsive UI, and improved content discovery through intuitive layouts across devices."
      ],
      githubUrl: "https://github.com/Kishan-Guptaa/brainly-frontend",
      liveUrl: "https://kishan-guptaa.github.io/brainly-frontend/dashboard"
    },
    {
      title: "Throttlex",
      subtitle: "Vehicle Showcase & Specification Platform",
      period: "May '25 — May '25",
      techStack: "ReactJS, JavaScript, Bootstrap / Tailwind, CSS3, HTML5",
      highlights: [
        "Developed a visually engaging vehicle showcase platform, presented bikes and cars with full specifications such as pricing, engine details, and mileage.",
        "Structured dynamic vehicle pages with interactive sections, and allowed users to explore and compare full technical specifications easily.",
        "Implemented advanced search & filtering features, and helped users browse by category, brand, and price range with improved accuracy.",
        "Produced an appealing, responsive UI with smooth navigation and modern layouts, and boosted overall user engagement."
      ],
      githubUrl: "https://github.com/Kishan-Guptaa/throttlex",
      liveUrl: "https://kishan-guptaa.github.io/throttlex/"
    }
  ],
  certificates: [
    { title: "Full Stack Web Development", issuer: "Apna College", date: "Aug '25" },
    { title: "Cloud Computing", issuer: "NPTEL IIT Kharagpur", date: "Jul '25" },
    { title: "Basic DSA using Java", issuer: "Self-Paced", date: "Jun '25" },
    { title: "Introduction to Hardware and Operating Systems", issuer: "IBM", date: "Nov '24" },
    { title: "Computer Communication", issuer: "Coursera", date: "Sep '24" }
  ],
  achievements: [
    "Solved 400+ coding problems across LeetCode, GFG & HackerRank, sharpening problem-solving skills.",
    "Earned multiple LeetCode streak and monthly challenge badges, showcasing consistent daily problem-solving."
  ],
  education: [
    {
      institution: "Lovely Professional University",
      location: "Punjab, India",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      period: "Aug '23 — Present",
      score: "CGPA: 7.20"
    },
    {
      institution: "Vivekanand Convent School",
      location: "Madhya Pradesh, India",
      degree: "Intermediate",
      period: "Apr '21 — Mar '22",
      score: "Percentage: 83.3 %"
    },
    {
      institution: "Vivekanand Convent School",
      location: "Madhya Pradesh, India",
      degree: "Matriculation",
      period: "Apr '19 — Mar '20",
      score: "Percentage: 85.2 %"
    }
  ]
};
