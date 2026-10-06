import { Project, BlogPost, EducationItem, CertificationItem, HobbyItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Omito Elizabeth',
  firstName: 'Elizabeth',
  surname: 'Omito',
  role: 'Software Engineer, Project Manager & DevOps Engineer',
  roles: ['Software Engineer', 'Project Manager', 'DevOps Engineer'],
  email: 'omitolizatieno@gmail.com',
  phone: '+254 92 611 815',
  location: 'Nairobi & Kisumu, Kenya',
  github: 'https://github.com/elomito',
  linkedin: 'https://www.linkedin.com/in/elizabeth-omito',
  devto: 'https://dev.to/elizabeth_omito',
  x: 'https://x.com/Elizabe65391978',
  avatarUrl: '/profile.webp',
  availability: 'Available for Cohort 2 roles & select freelance opportunities',
  summary:
    'Software developer with hands-on experience in frontend development, backend systems, DevOps practices, and Agile project delivery. Experienced in building web applications using React, JavaScript, Go, and REST APIs, while working with Git, Docker, and collaborative development workflows. Strong problem-solving and debugging skills with a background in Computer Security and Forensics and practical experience delivering technology projects in collaborative environments.',
  bioExtended:
    'Passionate about building resilient, low-latency client applications and distributed systems tailored for Africa’s rapid digital transformation. From architecting decentralized Bitcoin Lightning escrow workflows for secure real estate to engineering low-latency live streaming engines with WebRTC and M-Pesa, my technical approach pairs computer forensics rigor with intuitive, accessible frontend user experiences.',
};

export const SKILL_CATEGORIES = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Go', 'Python', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React 19', 'Vite', 'Gin (Go)', 'Node.js', 'Tailwind CSS', 'TanStack'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Docker', 'Git', 'GitHub Actions', 'VS Code', 'Postman', 'CI/CD Pipelines'],
  },
  {
    category: 'Databases & Cloud',
    skills: ['SQLite', 'Supabase', 'PostgreSQL', 'Google Sheets API', 'OAuth 2.0'],
  },
  {
    category: 'Architecture & Concepts',
    skills: [
      'REST APIs',
      'WebSockets Real-time',
      'WebRTC Streaming',
      'Bitcoin Lightning (LND)',
      'Agile / Scrum',
      'Computer Security & Forensics',
      'Defensive UI & Debugging',
    ],
  },
];

export const HOBBIES: HobbyItem[] = [
  {
    id: 'cybersecurity-ctf',
    title: 'Cybersecurity CTFs & Digital Forensics',
    category: 'Security & Forensics',
    icon: 'Shield',
    image: '/Cyber Security CTFs & Forensics.webp',
    description:
      'I enjoy hands-on security challenges that push me to think beyond how systems work and understand how they can be analyzed, tested, and secured. I practice through Capture The Flag (CTF) challenges, security labs, and digital forensics exercises.',
    highlights: [
      'OverTheWire Bandit & Natas',
      'Wireshark Traffic Analysis',
      'Cryptographic Puzzles',
      'Reverse Engineering',
      'Threat Modeling',
    ],
    areasExplore: [
      { label: 'CTF Challenges', text: 'OverTheWire Bandit and Natas' },
      { label: 'Network Analysis', text: 'Wireshark packet inspection and traffic analysis' },
      { label: 'Cryptography', text: 'Solving cryptographic puzzles and understanding common cryptographic concepts' },
      { label: 'Reverse Engineering', text: 'Analyzing programs and understanding their behavior' },
      { label: 'Threat Modeling', text: 'Identifying potential attack surfaces, risks, and security controls' },
    ],
  },
  {
    id: 'community-mentorship',
    title: 'Community Mentorship & Women in Tech',
    category: 'Leadership & Community',
    icon: 'Users',
    image: '/Community Mentorship & Women in Tech.webp',
    description:
      'I’m passionate about creating spaces where young people, especially girls and women, can explore technology, build confidence, and see themselves as capable contributors to the tech industry. Through Technovation, I have been involved in mentoring students as they explore technology, problem-solving, entrepreneurship, and the process of turning ideas into solutions. I also participate in She Code Africa and other technology communities, where I engage with fellow developers and women in tech, learn from different experiences, and contribute to conversations around growth, visibility, and opportunities in technology.',
    highlights: [
      'Technovation Student Mentor',
      'She Code Africa Community',
      'Girls & Women in Tech Advocacy',
      'Turning Ideas into Solutions',
    ],
    areasExplore: [
      { label: 'Technovation Mentorship', text: 'Guiding students in problem-solving, entrepreneurship, and software projects' },
      { label: 'She Code Africa', text: 'Engaging with fellow women in tech on visibility and technical growth' },
      { label: 'Community Spaces', text: 'Building welcoming environments for young innovators exploring technology' },
    ],
  },
  {
    id: 'technical-event-hosting',
    title: 'Technical Event Hosting',
    category: 'Public Speaking & Events',
    icon: 'Mic',
    image: '/Technical Event Hosting .jpeg',
    description:
      'I regularly host and facilitate technology-focused events, creating spaces where developers, innovators, students, and technology professionals can connect, share knowledge, and learn from one another. My role often involves more than being the host. I help shape the flow of sessions, introduce speakers, engage audiences, facilitate discussions, and ensure technical conversations remain accessible and engaging for participants with different levels of experience.',
    highlights: [
      'Technical Event Hosting & Moderation',
      'Speaker Introductions & Fireside Chats',
      'Audience Engagement & Q&A',
      'Public Speaking & Technical Storytelling',
    ],
    areasExplore: [
      { text: 'Hosting and moderating technical events and community sessions' },
      { text: 'Introducing and facilitating conversations with technical speakers' },
      { text: 'Audience engagement and Q&A facilitation' },
      { text: 'Supporting developer and technology communities' },
      { text: 'Public speaking and technical storytelling' },
      { text: 'Creating welcoming spaces for people exploring technology' },
    ],
  },
  {
    id: 'technical-writing',
    title: 'Technical Writing & Open Source',
    category: 'Writing & Open Source',
    icon: 'BookOpen',
    image: '/Technical Writing & Open Source.webp',
    description:
      'I enjoy learning in public, documenting technical concepts, and contributing to the developer community through writing and open-source work. Writing helps me break down what I learn from building projects and working with technologies such as Go, Git, Linux, and DevOps tooling. I also enjoy exploring open-source projects, understanding how they are structured, collaborating through Git, and contributing where I can. I see open source as both a way to strengthen my technical skills and a way to learn from how other developers build and maintain software.',
    highlights: [
      'Technical Writing on Dev.to',
      'Open Source Collaboration',
      'Git & GitHub Workflows',
      'Documenting Architecture Lessons',
    ],
    areasExplore: [
      { text: 'Technical articles and project write-ups' },
      { text: 'Open-source projects and collaboration' },
      { text: 'Git and GitHub workflows' },
      { text: 'Documenting lessons learned from real projects' },
      { text: 'Developer knowledge sharing' },
      { text: 'Learning through code review and community contribution' },
    ],
  },
];

export const PROJECTS: Project[] = [
  // ==========================================
  // 1. WAPI — LIVE STREAMING PLATFORM
  // ==========================================
  {
    id: "wapi",
    title: "Wapi",
    tagline: "Creator-Focused Live Streaming Platform for the Kenyan Market",
    projectType: "personal",
    category: "Streaming & Media",
    role: "Project Manager",
    roleDescription:
      "I coordinate the development process across frontend, backend, mobile, and DevOps, helping the team turn product requirements into structured, trackable work. I facilitate sprint planning, daily stand-ups, retrospectives, progress tracking, documentation, and team communication.",
    focusAreas: [
      "Agile",
      "Sprint Planning",
      "Team Coordination",
      "Product Delivery",
      "WebRTC",
      "APIs",
      "CI/CD",
      "Deployment",
    ],
    techStack: [
      "React",
      "WebRTC",
      "Livepeer",
      "M-Pesa API",
      "Tailwind CSS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
    year: "2026",
    featured: true,
    hasSimulator: "wapi",
    imageUrl: "/projects/wapi.svg",
    liveDemoUrl: "https://wapi-frontend-web.onrender.com/",
    githubUrl: "https://github.com/elomito/wapi-stream",
    deployedStatus: "deployed",
    description:
      "A creator-focused live streaming platform built for the Kenyan market, designed to connect creators with viewers through live video, interaction, and monetization.",
    problem:
      "Global live streaming services impose high transaction barriers for African creators, charge steep 30-50% revenue cuts, and lack instant mobile money integrations like Safaricom M-Pesa.",
    solution:
      "Coordinated the cross-functional engineering of a low-latency WebRTC live streaming architecture with integrated M-Pesa STK push tipping, token rewards, and Agile sprint delivery.",
    architectureHighlights: [
      "Facilitated sprint planning, stand-ups, retrospectives, and cross-functional team coordination",
      "Sub-500ms WebRTC live broadcast latency with adaptive bitrate transcoding via Livepeer",
      "One-tap M-Pesa STK push instant creator tipping with automated webhook reconciliation",
      "Automated deployment pipeline to Render with continuous delivery and uptime checks",
    ],
    metrics: [
      { label: "My Role", value: "Project Manager" },
      { label: "Deployment", value: "Live on Render" },
      { label: "Latency", value: "< 500ms WebRTC" },
      { label: "Monetization", value: "Instant M-Pesa" },
    ],
  },

  // ==========================================
  // 2. PROPERSATS — BITCOIN LAND ESCROW
  // ==========================================
  {
    id: "propersats",
    title: "ProperSats",
    tagline: "Decentralized Land Escrow using Bitcoin Lightning",
    projectType: "personal",
    category: "FinTech & Web3",
    recognition: "3rd Place — Kisumu Lightning Developer Bootcamp",
    keyContribution:
      "I worked on building a practical financial workflow around Lightning payments, exploring how instant settlement could be combined with multi-stakeholder verification to reduce payment delays and counterparty risk in land transactions.",
    techStack: [
      "React + TypeScript",
      "FastAPI + Python",
      "Bitcoin Lightning Network",
      "LND & WebLN",
      "REST APIs",
      "Polar for Lightning development",
      "Playwright",
      "Tailwind CSS",
    ],
    year: "2025",
    featured: true,
    hasSimulator: "propersats",
    imageUrl: "/projects/propersats_logo.svg",
    liveDemoUrl: undefined,
    githubUrl: "https://github.com/elomito/propersats",
    deployedStatus: "in_development",
    description:
      "ProperSats is a mobile-first platform designed to make land transactions more secure by combining Bitcoin Lightning payments with a decentralized escrow workflow. The platform coordinates buyers, sellers, surveyors, and lawyers through a transaction flow where payment is held until the required physical and legal verification steps are completed.",
    problem:
      "Land title fraud, double allocations, and delayed bank escrows plague real estate in emerging markets. Buyers risk deposits before physical boundary validation, and surveyors/lawyers endure multi-week payment disputes.",
    solution:
      "Constructed a multi-stakeholder milestone escrow engine on Bitcoin Lightning (LND). Funds are committed as cryptographic hold invoices and automatically disbursed upon verifiable milestone sign-offs by certified surveyors and legal registries.",
    architectureHighlights: [
      "Multi-stakeholder cryptographic milestone workflow across buyer, seller, surveyor, and legal counsel",
      "Lightning Network Daemon (LND) hold-invoice orchestration and WebLN non-custodial commitments",
      "Polar containerized Lightning testing environment simulating payment routes and channel liquidity",
      "End-to-end automated test suites with Playwright ensuring atomic state transitions",
    ],
    metrics: [
      { label: "Recognition", value: "3rd Place Bootcamp" },
      { label: "Payment Layer", value: "Bitcoin Lightning" },
      { label: "Settlement", value: "Instant LND Escrow" },
      { label: "Status", value: "In Development" },
    ],
  },

  // ==========================================
  // 3. SENDME — COMMUNITY LOGISTICS
  // ==========================================
  {
    id: "sendme",
    title: "SENDME",
    tagline: "Hyperlocal Community Logistics & Peer-to-Peer Errands",
    projectType: "personal",
    category: "Logistics & Realtime",
    productVision:
      "The goal is to create a simple, trusted marketplace for local delivery and errand fulfillment that can grow into a broader community commerce platform over time. SENDME is designed to make everyday tasks easier by connecting requesters and runners in the same community.",
    useCases: [
      "Campus errands and delivery requests",
      "Apartment and hostel item pickups",
      "Office supply runs",
      "Neighborhood grocery or pharmacy tasks",
      "Small local marketplace handoffs",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Supabase",
      "TanStack Query",
      "Tailwind CSS",
      "WebSockets",
    ],
    year: "2025",
    featured: true,
    hasSimulator: "sendme",
    imageUrl: "/projects/sendme.svg",
    liveDemoUrl: "https://github.com/elomito/sendme-logistics",
    githubUrl: "https://github.com/elomito/sendme-logistics",
    deployedStatus: "in_development",
    description:
      "SENDME is a hyperlocal community logistics platform for neighborhoods, campuses, workplaces, apartment complexes, and local communities. The product lets people request everyday errands and lets nearby users who are already heading out complete those tasks for a commission.",
    problem:
      "Commercial delivery giants impose high minimum fees and slow dispatch on short-distance, micro-errands within concentrated communities like campuses and gated estates.",
    solution:
      "Engineered an event-driven dispatch engine pairing real-time WebSockets with Supabase Row-Level Security, allowing peer runners to claim errands within minutes with transparent micro-pricing.",
    architectureHighlights: [
      "Supabase Realtime subscriptions broadcasting runner availability and request pickups",
      "Optimistic mutations with TanStack Query for zero-perceived-latency errand posting",
      "Row Level Security (RLS) policies isolating user profiles and payment metadata",
      "Clean mobile-friendly delivery receipts, chat, and location checkpoint confirmations",
    ],
    metrics: [
      { label: "Dispatch Latency", value: "Real-time" },
      { label: "Stack Target", value: "React 19 + Supabase" },
      { label: "Model", value: "Community Marketplace" },
      { label: "Commission", value: "Transparent Payout" },
    ],
  },

  // ==========================================
  // 4. BANDIT PASSWORD SAVER — SECURITY CLI
  // ==========================================
  {
    id: "bandit",
    title: "Bandit Password Saver",
    tagline: "Terminal CLI Password Vault for OverTheWire Security Labs",
    projectType: "personal",
    category: "DevOps & Security",
    techStack: [
      "Python",
      "Google Sheets API",
      "Google OAuth 2.0",
      "CLI Terminal",
      "Git",
      "Linux",
    ],
    year: "2024",
    featured: false,
    hasSimulator: "bandit",
    imageUrl: "/projects/bandit.svg",
    liveDemoUrl: "https://github.com/elomito/bandit-password-saver",
    githubUrl: "https://github.com/elomito/bandit-password-saver",
    deployedStatus: "deployed",
    description:
      "Bandit Password Saver is a small command-line password manager for the passwords used in the OverTheWire Bandit levels. It stores one password per level in a Google Sheet, so the saved values can be read, added, changed, or removed from a terminal.",
    problem:
      "Cybersecurity students solving OverTheWire Bandit challenges lose progress across multiple workstations or risk storing sensitive CTF flags in unencrypted local bash history files.",
    solution:
      "The project is intentionally lightweight. It does not run a web server or maintain a local database. Google Sheets is the storage layer, and Google OAuth is used to authorize access to the sheet.",
    howItWorks: [
      "Looks for an existing Google OAuth token in token.json",
      "Refreshes that token when possible, or starts the Google sign-in flow when no usable token exists",
      "Connects to the spreadsheet configured in config.py",
      "Runs the requested command against the Sheet1 worksheet",
    ],
    architectureHighlights: [
      "OAuth 2.0 token flow authorizing headless command-line sessions without exposed credentials",
      "Sub-second spreadsheet querying with zero local database dependencies or SQL maintenance",
      "Terminal-native colorized formatting, level validation, and clipboard-ready output",
      "Built with digital forensics principles of access control and credential integrity",
    ],
    metrics: [
      { label: "Footprint", value: "Zero Local DB" },
      { label: "Auth Protocol", value: "OAuth 2.0 PKCE" },
      { label: "Runtime", value: "Python 3 CLI" },
      { label: "Cloud Store", value: "Google Sheets API" },
    ],
  },
];

export const BLOG_POSTS: BlogPost[] = [
  // ==========================================
  // ARTICLE 1: CODING WITH AI
  // ==========================================
  {
    id: "coding-with-ai",
    slug: "my-take-on-coding-with-ai-how-to-survive-the-ai-revolution",
    title: "My Take on Coding With AI & How to Survive the AI Revolution",
    excerpt:
      "I didn’t realize coding had changed forever until an AI solved a bug I had been fighting for hours. If AI can do this already, where does that leave developers? Here is how to work with AI intentionally without losing core craftsmanship.",
    readTime: "7 min read",
    publishDate: "Published on Dev.to",
    category: "AI & Developer Craftsmanship",
    tags: ["ai", "webdev", "devops", "beginners"],
    content: {
      introduction:
        "I didn’t realize coding had changed forever until an AI solved a bug I had been fighting for hours. I remember staring at my screen after trying everything I could think of, Stack Overflow tabs everywhere, documentation open in another window, multiple failed attempts sitting in my editor like evidence of defeat. Out of frustration, I pasted the problem into an AI assistant, a few seconds later, it gave me a solution, I ran it and it worked.",
      sections: [
        {
          heading: "The First Time AI Wrote Better Code Than Me",
          body: [
            "My first reaction was excitement, my second reaction was something closer to fear because it wasn\'t just that the AI fixed the bug. It was how fast it did it. What took me hours took it seconds and somewhere in that moment, a question quietly appeared in my head: \"If AI can do this already, where exactly does that leave me?\"",
            "I think many developers have had some version of that moment. A strange mixture of curiosity, excitement, impostor syndrome, and uncertainty and that feeling hasn\'t gone away completely.",
          ],
        },
        {
          heading: "The Day Programming Changed Forever",
          body: [
            "Technology always evolves, but this felt different. Not long ago, AI in development mostly meant autocomplete. Small suggestions, finishing a variable name, predicting the next line of code. Helpful, but not revolutionary.",
            "Suddenly AI wasn\'t just suggesting code anymore, It was generating features like: UI components, APIs, tests, documentation and so on. It started feeling less like a tool and more like a junior developer that never sleeps, a junior developer that somehow knows React, Go, Python, SQL, Docker, and twenty other technologies at the same time. That\'s impressive and slightly uncomfortable because industry shifts usually happen gradually—this one felt like someone pressed fast-forward.",
          ],
        },
        {
          heading: "The Fear Nobody Wants to Admit",
          body: [
            "Let\'s talk about the question everyone keeps asking: Will AI replace programmers?",
            "People debate this constantly online, some say software engineering is finished, others say AI is over-hyped, meanwhile, I think many developers are having quieter thoughts they don\'t always say out loud.",
            "Things like: \"Am I learning the right skills?\", \"Will junior developers even have opportunities?\", \"What if I\'m becoming irrelevant?\"",
            "I see it especially among beginners. Many already feel overwhelmed trying to learn programming now they\'re learning while watching AI generate solutions instantly and experienced developers aren\'t immune either, years of expertise suddenly feel challenged by tools evolving every month. The fear is real pretending otherwise doesn\'t help anyone.",
          ],
        },
        {
          heading: "My Experience Coding With AI & The Dangerous Trap",
          body: [
            "I\'ve used AI quite a lot while coding and honestly? Some parts have been incredibly useful. I use it for: debugging issues, learning unfamiliar technologies, generating repetitive boilerplate, and refactoring messy code. Sometimes it feels like having another developer sitting next to me, especially when I\'m stuck.",
            "But I\'ve also seen the downsides. AI can confidently generate incorrect solutions, bad architectural decisions, fake functions, nonexistent libraries and many more and that\'s dangerous because it rarely says \"I\'m not sure\". It often sounds extremely confident even when it\'s wrong. I\'ve realized something important: AI can make you productive without making you skilled. Those are not the same thing, and that distinction matters a lot.",
            "This is probably the biggest risk I see, not AI replacing developers but developers replacing their own thinking. It\'s easy to fall into this cycle: Ask AI for code → Copy it → Paste it → Move on.",
            "Repeat that enough times and something starts happening. You stop thinking deeply, you stop analyzing problems, you stop understanding why things work. It\'s similar to using GPS for everything. At first it helps then one day you realize you can\'t navigate your own city anymore. AI should amplify thinking, not replace it.",
          ],
          callout:
            "AI can make you productive without making you skilled. Those are not the same thing, and that distinction matters a lot.",
        },
        {
          heading: "What AI Is Actually Good At vs What It Still Struggles With",
          body: [
            "AI genuinely excels at: repetitive tasks, boilerplate generation, documentation, rapid prototyping, and explaining concepts among others. The biggest value isn\'t intelligence, it\'s friction reduction. AI removes a lot of tedious work that slows developers down. That\'s incredibly valuable because most programming isn\'t writing genius algorithms, a lot of it is repetitive work.",
            "Despite all the progress, there are still areas where humans matter deeply. AI still struggles with: Product thinking, Understanding users, Creativity, System trade-offs, Communication, Leadership, Context, and Judgment. AI can generate code; it still struggles to generate vision. And vision matters more than people sometimes realize.",
          ],
        },
        {
          heading: "The Developers Who Will Survive the AI Revolution",
          body: [
            "I don\'t think future-proof developers are necessarily the ones with the most syntax memorized. I think they\'ll be people who: Stay curious · Learn continuously · Understand fundamentals · Communicate clearly · Adapt quickly · Solve problems · Understand systems deeply · Build real things.",
            "Syntax changes, frameworks change, tools change, and thinking doesn\'t become obsolete.",
          ],
        },
        {
          heading: "The New Skill Nobody Talks About: Asking Better Questions",
          body: [
            "People talk a lot about prompt engineering, sometimes too much but there is an important idea underneath the buzzwords: Good AI output often depends on good input.",
            "Instead of saying: \"Build me an authentication system.\" You might say: \"Build a JWT authentication system using Node.js and Express with refresh tokens, explain security considerations, and describe why each decision was made.\"",
            "The difference is context. Clear thinking produces clearer questions, and clearer questions often produce better answers. Treat AI like collaboration, not magic.",
          ],
        },
        {
          heading: "How Beginners Should Learn Coding in the AI Era",
          body: [
            "If you\'re learning programming right now, my advice would be:",
            "• Learn fundamentals first",
            "• Build projects manually",
            "• Use AI as a teacher",
            "• Read generated code carefully",
            "• Break things intentionally",
            "• Learn debugging deeply",
            "Because eventually you\'ll need to answer: \"Is this code actually correct?\" and you can\'t fact-check AI if you don\'t understand code yourself.",
          ],
        },
        {
          heading: "The Real Threat Isn\'t AI — My Personal Philosophy",
          body: [
            "I don\'t think AI is the biggest danger I think stagnation is. Every major technological shift creates fear before it creates opportunity. The internet did it, cloud computing did it, open-source did it, mobile development did it and now AI is doing it too. The developers most at risk aren\'t necessarily the ones using AI, they\'re the ones refusing to adapt at all. Fear can sometimes become a bigger obstacle than technology itself.",
            "I\'m not interested in competing against AI, that sounds exhausting. Instead, I want to learn how to work with it intentionally. I want to stay curious, continue learning deeply, build real things, understand systems better and keep improving craftsmanship. AI will continue changing, that part feels inevitable but learning, thinking, and creating still belong to us.",
          ],
        },
      ],
      conclusion:
        "The future probably won\'t belong to developers who memorize every function and every framework. It will belong to developers who understand fundamentals, think critically, communicate well, learn continuously, and use AI wisely. AI won\'t replace developers who know how to think, but developers who refuse to adapt may replace themselves.",
    },
  },

  // ==========================================
  // ARTICLE 2: FROM COMMIT TO PRODUCTION
  // ==========================================
  {
    id: "commit-to-production",
    slug: "from-commit-to-production-delivery-pipeline",
    title: "From Commit to Production: What Actually Happens When You Ship an Update",
    excerpt:
      "I used to think shipping an update was straightforward: make a change, commit it, push it, and the application is updated. But git push is only the beginning.",
    readTime: "8 min read",
    publishDate: "Published on Dev.to",
    category: "DevOps & CI/CD Pipelines",
    tags: ["automation", "ci", "deployment", "devops"],
    content: {
      introduction:
        "I used to think shipping an update was straightforward: make a change, commit it, push it, and the application is updated but git push is only the beginning. Once I started paying more attention to DevOps, I became more interested in what happens between a developer pushing code and a user actually receiving that change. How does the code get tested? How is it built? Where does the built application go? How does the server know there is a new version? And how do we make sure the new version is actually working? The answer is a delivery pipeline.",
      sections: [
        {
          heading: "The Journey From Code to Production",
          body: [
            "At a high level, the process looks something like this:",
            "Developer → Git Push → Repository → CI Pipeline → Test & Validate → Build → Artifact / Container Image → Deployment → Health Checks → Production → Monitoring → User.",
            "Each stage has a different responsibility, and each one exists to reduce a particular type of risk.",
          ],
        },
        {
          heading: "1. It Starts With a Commit & 2. The Repository Triggers the Pipeline",
          body: [
            "A developer makes a change locally and commits it: git add . && git commit -m \"Fix authentication issue\" && git push origin main.",
            "The important distinction is that pushing code to a repository does not mean the code has been deployed. At this point, the repository contains the new version, but the application users are interacting with may still be running the previous version. Something still has to take that change and move it through the delivery process.",
            "A CI/CD system can listen for events such as a push or pull request. The push becomes the trigger for the pipeline. A runner is provisioned to execute the workflow, which may include installing dependencies, running tests, performing static analysis, building the application, and eventually deploying it. This is where the repository stops being just a place to store code and becomes part of the software delivery process.",
          ],
          codeSnippet: {
            language: "yaml",
            filename: ".github/workflows/deploy.yml",
            code: "name: Delivery Pipeline\non:\n  push:\n    branches:\n      - main\n\njobs:\n  build-and-deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Install Dependencies\n        run: npm ci\n      - name: Run Tests & Linters\n        run: npm test && npm run lint\n      - name: Build Application Artifact\n        run: npm run build",
          },
        },
        {
          heading: "3. CI Validates the Change & 4. The Application Is Built",
          body: [
            "Before putting a new version into production, we want some confidence that it works: Install dependencies → Lint → Unit tests → Integration tests → Security checks → Build.",
            "If a test fails, the pipeline should stop. This is one of the biggest advantages of automation. Instead of relying entirely on someone remembering to perform the same checks every time, the pipeline can enforce them consistently. A failed pipeline is not necessarily a bad thing—sometimes the pipeline failing is exactly what prevents broken code from reaching production.",
            "Once validated, the application is built into something deployable. For Go, compiling source into a binary (go build). For frontend, producing optimized static assets (npm run build). In containerized environments, packaged as a Docker image. What gets deployed is usually a build artifact—a compiled binary, static files, package, or container image.",
          ],
        },
        {
          heading: "5. The Artifact Needs Somewhere to Go & 6. Reaching the Infrastructure",
          body: [
            "If we\'re deploying containers, the resulting image needs to be stored somewhere accessible: Git Repository → CI → Build → Container Image → Container Registry. The registry acts as a source from which deployment infrastructure can retrieve a specific version. This also makes versioning important—instead of thinking only in terms of \"latest\", we can identify exactly which version we\'re deploying (e.g., my-app:v1.4.2). That makes it easier to know what is running and safely roll back.",
            "Deployment takes the artifact and updates the environment where the application runs (virtual machine, container platform, Kubernetes, cloud service, or serverless platform). Container Registry → Pull new image → Start new container → Health check → Route traffic.",
          ],
        },
        {
          heading: "7. How Do We Update Production Without Taking It Down?",
          body: [
            "Deploying a new version isn\'t always as simple as stopping the old application and starting the new one—doing that could create downtime. This is why deployment strategies matter.",
            "Imagine two application instances currently running version 1.0 behind a Load Balancer. A rolling deployment gradually replaces them: (v1.1 + v1.0), then (v1.1 + v1.1). Other approaches include blue-green and canary deployments. The underlying goal is the same: introduce change without unnecessarily disrupting users.",
          ],
        },
        {
          heading: "8. A Successful Deployment Doesn\'t Mean a Healthy Application",
          body: [
            "This is one of the areas I find particularly interesting about DevOps: a deployment command can succeed while the application itself is broken.",
            "The server may have received the new version, but perhaps the application cannot connect to the database, an environment variable is missing, an external API is unavailable, a new endpoint is returning errors, or memory usage has spiked. That\'s why post-deployment observability (Health checks → Logs → Metrics → Alerts) is essential.",
            "We are no longer asking only: \"Did the deployment complete?\" We are asking: \"Is the system behaving as expected after the deployment?\"",
          ],
          callout:
            "A deployment command can succeed while the application itself is broken. Observability ensures you know whether users are truly receiving a working service.",
        },
        {
          heading: "9. And Then There Is the Database & 10. Recovering From Failure",
          body: [
            "Application deployments become even more interesting when database changes are involved. During a rolling deployment, both version 1 and version 2 instances might temporarily run simultaneously. This means database changes often need to be designed with backward compatibility in mind. A migration is part of the overall deployment strategy.",
            "No delivery pipeline eliminates failure; the goal is to make failures detectable, controlled, and recoverable. If a release introduces a critical issue: Detect issue → Stop rollout → Rollback to previous version → Investigate → Fix → Deploy again. A reliable delivery process must safely answer how to recover.",
          ],
        },
      ],
      conclusion:
        "So, how does an update actually reach the user? It isn\'t a single action—it is a chain of systems and decisions where every arrow represents another potential failure point. Writing the code is one part of building software; getting that code reliably, safely, and repeatedly into the hands of users is another engineering problem altogether. DevOps is the engineering of that path from a developer\'s commit all the way to a reliable production system.",
    },
  },

  // ==========================================
  // ARTICLE 3: IT WORKS ON MY MACHINE
  // ==========================================
  {
    id: "works-on-my-machine",
    slug: "it-works-on-my-machine-until-it-doesnt",
    title: "“It Works on My Machine”… Until It Doesn’t.",
    excerpt:
      "You spend hours building a feature, everything runs perfectly on your laptop, and you proudly push your code. Then a teammate pulls it… and suddenly nothing works. Enter Docker.",
    readTime: "6 min read",
    publishDate: "Published on Dev.to",
    category: "Docker & Containerization",
    tags: ["devops", "productivity", "softwaredevelopment", "softwareengineering"],
    content: {
      introduction:
        "You spend hours building a feature, everything runs perfectly on your laptop, and you proudly push your code. Then a teammate pulls it… and suddenly nothing works. Different errors. Missing dependencies. Version conflicts. And the worst part? “It works on my machine.” That phrase has quietly ruined countless development hours.",
      sections: [
        {
          heading: "Enter Docker: The Fix You Didn’t Know You Needed",
          body: [
            "As developers, we’ve all experienced that frustrating moment where an application behaves perfectly in one environment and completely breaks in another. Sometimes it’s a missing package. Sometimes it’s a different operating system. Other times, it’s a version mismatch hiding somewhere deep in the setup. The result is always the same: wasted time, confusion, and unnecessary debugging.",
            "This is exactly the kind of problem Docker was built to solve. Instead of relying on each developer’s environment — which is always slightly different — Docker lets you package your application in a way that runs the same everywhere: your laptop, your teammate’s machine, a testing server, or the cloud.",
          ],
        },
        {
          heading: "So… What Really Is Docker? Think of It Like a Shipping Container",
          body: [
            "In simple terms, Docker is a tool that lets you package your application and everything it needs into a single, portable unit called a container.",
            "A container is an isolated environment that carries: your application code, required libraries, dependencies, runtime, and system tools needed for the app to run. Instead of depending on whatever is already installed on someone’s computer, the container brings its own environment with it.",
            "Think of it like shipping containers used in global transport: a container can carry electronics, furniture, food, or clothes. But regardless of what’s inside, the container itself is standardized. Ships can transport it, trucks can carry it, and ports can move it anywhere in the world without worrying about the contents. Docker containers work the same way: inside is your application and its dependencies; outside, it runs consistently on a laptop, a workstation, or a production server.",
          ],
        },
        {
          heading: "Why Docker Actually Matters",
          body: [
            "• Consistency: Since the entire environment is packaged together, the application behaves the same everywhere. No surprises. No hidden setup issues.",
            "• Easy Setup: Instead of manually installing Node, Python, and PostgreSQL and configuring env vars, developers can simply run a container that already has the environment prepared and ready to go.",
            "• Safe Testing: Docker provides isolated environments where you can safely test applications without affecting your computer. If something breaks, simply remove the container and start again. Clean, simple, safe.",
            "• Better Team Collaboration: Prevents situations where one developer uses Node 16 and another uses Node 18. Standardized environments reduce debugging time and improve collaboration.",
          ],
        },
        {
          heading: "Let\'s Break Down the Core Terms",
          body: [
            "• Image → The Blueprint: A recipe or blueprint containing code, dependencies, and configurations. Images do not run directly; they are templates used to create containers.",
            "• Container → The Running Application: A running, lightweight, and isolated instance created from an image. This is where your code executes.",
            "• Dockerfile → The Instructions: A text file containing step-by-step instructions for building an image (base image, dependencies, files to copy, commands).",
            "• Registry → Storage for Images: A place where Docker images are stored and shared, like Docker Hub (think of it like GitHub, but for Docker images).",
          ],
          codeSnippet: {
            language: "dockerfile",
            filename: "Dockerfile",
            code: "# Standardized Node.js Environment\nFROM node:18-alpine\n\nWORKDIR /usr/src/app\n\nCOPY package*.json ./\nRUN npm install\n\nCOPY . .\n\nEXPOSE 3000\nCMD [\"npm\", \"start\"]",
          },
        },
        {
          heading: "A Practical Example & Getting Started",
          body: [
            "Let\'s say you\'re building a Node.js application using version 18 on your machine, and everything works. But your teammate is using Node.js version 16. Suddenly your code crashes on their machine. With Docker, you simply define Node 18 inside the container. Now everyone runs the exact same setup regardless of what\'s installed on their machine.",
            "Getting started is simple:",
            "Step 1: Install Docker on your machine.",
            "Step 2: Create a Dockerfile defining your environment.",
            "Step 3: Build your image: docker build -t my-app .",
            "Step 4: Run the container: docker run my-app",
            "And just like that, you’ve containerized your app.",
          ],
        },
      ],
      conclusion:
        "Docker isn’t just another development tool; it’s a different way of thinking about applications and environments. It removes the chaos of “missing dependencies,” “wrong versions,” and “works on my machine” problems, replacing them with predictable environments that behave the same everywhere. So the next time you hear “It works on my machine,” you’ll know there’s a better answer: “Let’s use Docker.”",
    },
  },

  // ==========================================
  // ARTICLE 4: FROM CLICK TO CONNECTION
  // ==========================================
  {
    id: "click-to-connection",
    slug: "from-click-to-connection-hidden-journey-of-internet-data",
    title: "From Click to Connection: The Hidden Journey of Internet Data",
    excerpt:
      "Ever wondered what really happens after you click something? Behind that instant response is a structured system moving data across networks, devices, and continents in milliseconds.",
    readTime: "6 min read",
    publishDate: "Published on Dev.to",
    category: "Networking & Web Architecture",
    tags: ["webdev", "programming", "beginners"],
    content: {
      introduction:
        "Ever wondered what really happens after you click something? You tap “send,” open a website, or click a link and something happens instantly. Behind that instant response is a structured system moving data across networks, devices, and continents in milliseconds. So what’s actually making all of this possible?",
      sections: [
        {
          heading: "The System Behind the Internet",
          body: [
            "To make communication reliable across billions of devices, the internet relies on two structured models: the OSI model and the TCP/IP model.",
            "At a high level, these models define how data moves from one device to another. They standardize communication so different systems can understand each other. They are not tools or software, but frameworks that guide how data is handled across networks.",
          ],
        },
        {
          heading: "Think of It Like Sending a Package",
          body: [
            "Sending data across the internet is similar to sending a package. You write the message, package it, label it with an address, and send it through delivery systems until it reaches the receiver, who then opens and reads it.",
            "Each step has a specific role. In the same way, the internet breaks communication into layers, where each layer is responsible for a specific part of the process.",
          ],
        },
        {
          heading: "OSI vs TCP/IP: Why Understanding This Matters",
          body: [
            "The OSI model consists of 7 layers, while the TCP/IP model has 4 layers. Both models follow the same idea: breaking communication into layers so the process becomes easier to understand, build, and debug.",
            "The OSI model is more detailed and conceptual, while TCP/IP is practical and used in real-world networking.",
            "Understanding these models helps you debug issues more effectively, build better backend systems, and understand how requests and responses actually flow. It also improves how you communicate with other developers, because you can identify exactly where a problem is occurring instead of guessing.",
          ],
        },
        {
          heading: "The Layers of the OSI and TCP/IP Models",
          body: [
            "The OSI Model (7 Layers):",
            "• Application Layer: Handles user interaction through browsers and applications.",
            "• Presentation Layer: Formats, compresses, and encrypts data.",
            "• Session Layer: Manages connections and sessions between devices.",
            "• Transport Layer: Ensures reliable delivery of data.",
            "• Network Layer: Handles routing across networks.",
            "• Data Link Layer: Manages communication within a local network.",
            "• Physical Layer: Deals with hardware and signal transmission.",
            "The TCP/IP Model (4 Layers):",
            "• Application Layer: Handles high-level protocols such as HTTP and DNS.",
            "• Transport Layer: Manages data delivery using TCP or UDP.",
            "• Internet Layer: Handles addressing and routing using IP.",
            "• Network Access Layer: Responsible for physical data transmission.",
          ],
        },
        {
          heading: "What Happens When You Visit a Website?",
          body: [
            "When you type a URL and press Enter, the process begins at the application layer, where the browser creates an HTTP request.",
            "The transport layer then breaks the data into smaller pieces and ensures it can be delivered reliably.",
            "The internet layer assigns addresses and routes the data across networks.",
            "Finally, the network access layer transmits the data through physical means such as Wi-Fi or cables.",
            "On the server side, the process happens in reverse: the data is received, reassembled, processed, and a response is sent back—all within milliseconds.",
          ],
        },
        {
          heading: "Getting Started & Final Thought",
          body: [
            "You do not need to memorize every layer to get started. Focus on understanding how HTTP works, how TCP ensures reliable delivery, and how to observe requests using the Network tab in your browser’s developer tools. This is enough to build a strong foundation.",
            "Every click you make triggers a structured flow of communication across multiple layers. The internet is not random—it is carefully designed. And once you understand these layers, you don’t just use the internet—you understand it.",
          ],
        },
      ],
      conclusion:
        "Every click you make triggers a structured flow of communication across multiple layers. The internet is not random—it is carefully designed. And once you understand these layers, you don’t just use the internet—you understand it.",
    },
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    institution: 'Zone01 Kisumu',
    qualification: 'Software Development & Systems Programming',
    status: 'Ongoing',
    period: '2024 — Present',
    highlights: [
      'Intensive peer-to-peer, project-driven software engineering curriculum',
      'Advanced systems programming in Go, algorithms, data structures, and Unix system calls',
      'Collaborative team sprints, code reviews, and full-stack web application development',
    ],
  },
  {
    institution: 'Jaramogi Oginga Odinga University of Science and Technology (JOOUST)',
    qualification: 'BSc Computer Security & Forensics',
    status: 'Graduate',
    period: '2019 — 2023',
    highlights: [
      'Digital forensics investigation, network packet inspection, and chain of custody preservation',
      'Vulnerability analysis, threat modeling, system administration, and cryptography',
      'Operating systems architecture, secure network protocol design, and relational database systems',
    ],
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: 'Bitcoin Lightning Developer Bootcamp',
    issuer: 'Africa Free Routing',
    year: '2025',
    focus: 'LND node management, hold-invoices, channel liquidity, and decentralized finance architectures',
  },
  {
    title: 'Full-Stack Development Certification',
    issuer: 'PLP Academy (Power Learn Project)',
    year: '2025',
    focus: 'React, Node.js, Python, relational databases, cloud deployment, and Agile product delivery',
  },
  {
    title: 'Digital Skills & Technology for MSMEs (Foundational to Advanced)',
    issuer: 'DigiKen / Digital Platforms Kenya',
    year: '2026',
    focus: 'Digital platforms, digital payments adoption, technology integration for small & medium enterprises',
  },
];

export const EXPERIENCES = [
  {
    id: 'zone01',
    role: 'Software Developer & Systems Programmer',
    company: 'Zone01 Kisumu',
    period: '2024 — Present',
    location: 'Kisumu, Kenya (Hybrid)',
    website: 'zone01kisumu.ke',
    description:
      'Developing production-ready web applications, microservices in Go, and real-time streaming architectures. Spearheading peer sprint reviews, test coverage, and automated Git workflows following Agile Scrum delivery.',
    skills: ['React 19', 'Go', 'Docker', 'WebRTC', 'REST APIs', 'Git', 'Agile/Scrum'],
    logoText: 'zone01',
    accentColor: '#19396D',
  },
  {
    id: 'propersats-wapi',
    role: 'Frontend & Web3 Lead Developer',
    company: 'Independent & Client Projects',
    period: '2024 — 2026',
    location: 'Nairobi & Remote, Kenya',
    website: 'github.com/elomito',
    description:
      'Architected low-latency client interfaces, WebRTC streaming ingest with Livepeer, Safaricom M-Pesa STK Push payment webhooks, and Bitcoin Lightning (LND) hold-invoice escrow workflows for physical real estate transactions.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'WebRTC', 'Bitcoin Lightning', 'M-Pesa API', 'FastAPI'],
    logoText: 'propersats',
    accentColor: '#1E4DB7',
  },
  {
    id: 'jooust-labs',
    role: 'Computer Security & Digital Forensics Researcher',
    company: 'JOOUST Security Research Group',
    period: '2021 — 2023',
    location: 'Bondo / Kisumu, Kenya',
    website: 'jooust.ac.ke',
    description:
      'Investigated cryptographic verification protocols, packet inspection pipelines, and defensive client state modeling. Designed serverless CLI credential vaults using Google OAuth 2.0 PKCE and cloud spreadsheets.',
    skills: ['Python', 'Computer Forensics', 'Cryptography', 'Linux CLI', 'OAuth 2.0', 'SQL'],
    logoText: 'jooust',
    accentColor: '#16284A',
  },
  {
    id: 'plp-fellowship',
    role: 'Full-Stack Developer Trainee',
    company: 'PLP Academy (Power Learn Project)',
    period: '2024 — 2025',
    location: 'Nairobi, Kenya (Remote)',
    website: 'powerlearnproject.org',
    description:
      'Constructed responsive full-stack applications with React, Node.js, and relational SQL databases. Completed end-to-end cloud deployments with CI/CD and participated in hackathons addressing African digital inclusion.',
    skills: ['JavaScript', 'React', 'Python', 'PostgreSQL', 'Docker', 'CI/CD'],
    logoText: 'plp academy',
    accentColor: '#0E2248',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    quote:
      'I have had the opportunity to work closely with Elizabeth Omito during her Project Management shadowing experience on the LLF project, and what stands out to me is how naturally she connects technology, people and delivery.\n\nElizabeth is not the kind of project manager who simply tracks tasks on a board. She is curious about what is happening underneath the task. When the team is discussing development, design, QA or technical challenges, she takes the initiative to understand the context, ask the right questions and connect the discussion back to the project objectives. As a result Elizabeth has been a highly valued and impactful member of our team.',
    author: 'Flovian Owiti',
    role: 'Project Manager at Zone01 Kisumu',
    company: 'Zone01 Kisumu',
    avatarInitials: 'FO',
    avatarUrl: '/Flovian Owiti.webp',
    cardColor: 'bg-[#A259FF]',
  },
  {
    id: '2',
    quote:
      'Elizabeth approaches technology with a strong problem-solving mindset. She is not afraid to ask questions, dig into how things work, and move from simply understanding an idea to actually building with it. Her growing interest in Bitcoin, Lightning, open-source development, and software engineering reflects someone who is intentional about expanding her technical depth.\n\nI’m confident that Elizabeth will continue growing into a strong software engineer and contributor within the open-source ecosystem. Her curiosity, consistency, and willingness to learn make her someone worth watching.',
    author: 'Vallery Odinga',
    role: 'Bitcoin Open Source Contributor',
    company: 'Bitcoin Open Source',
    avatarInitials: 'VO',
    avatarUrl: '/Vallery Odinga.webp',
    cardColor: 'bg-[#0066FF]',
  },
  {
    id: '3',
    quote:
      'Elizabeth is comfortable working with Git and Linux-based environments and has been gaining practical exposure to CI/CD, deployment workflows, environment configuration, and troubleshooting application and infrastructure issues. She approaches technical problems with curiosity and is willing to investigate issues from the application layer through to the underlying system.\n\nI would recommend Elizabeth to opportunities where she can continue developing her DevOps skills while contributing to real engineering teams. She has the mindset, curiosity, and practical foundation needed to grow into a strong DevOps professional.',
    author: 'Clinton Odhiambo',
    role: 'CEO Dev.wengi | Fullstack Developer',
    company: 'Dev.wengi',
    avatarInitials: 'CO',
    avatarUrl: '/Clinton Odhiambo.webp',
    cardColor: 'bg-[#8435E8]',
  },
];

