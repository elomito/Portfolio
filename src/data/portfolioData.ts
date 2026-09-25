import { Project, BlogPost, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Omito Elizabeth',
  firstName: 'Elizabeth',
  surname: 'Omito',
  role: 'Frontend Developer | DevOps | Project Management',
  roles: ['Frontend Developer', 'DevOps Practitioner', 'Project Manager'],
  email: 'omitolizatieno@gmail.com',
  phone: '+254 92 611 815',
  location: 'Nairobi & Kisumu, Kenya',
  github: 'https://github.com/omitolizatieno',
  linkedin: 'https://linkedin.com/in/omito-elizabeth',
  availability: 'Available for full-time roles & high-impact contracts',
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
      'WebRTC Streaming',
      'Bitcoin Lightning (LND)',
      'Agile / Scrum',
      'Computer Security & Forensics',
      'Defensive UI & Debugging',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'wapi',
    title: 'Wapi',
    tagline: 'Creator Live Streaming Platform for African Storytellers',
    category: 'Streaming & Media',
    techStack: ['React', 'WebRTC', 'Livepeer', 'Web3', 'M-Pesa API', 'Tailwind CSS'],
    year: '2026',
    featured: true,
    hasSimulator: 'wapi',
    description:
      'Wapi is a creator-focused live streaming platform tailored for the Kenyan market, inspired by Twitch and designed to help local creators broadcast content, engage audiences in real time, and monetize through tips, subscriptions, and token-based rewards. The platform emphasizes mobile-first access, low-latency streaming, real-time chat, creator analytics, M-Pesa payments, and Web3 integration, with an MVP focused on validating adoption within Kenya’s digital ecosystem.',
    problem:
      'Global live streaming platforms impose high transaction barriers for African creators, charge steep 30-50% revenue cuts, and lack instant payout methods like Safaricom M-Pesa, creating high friction for local audience monetization and mobile-first streaming.',
    solution:
      'Engineered an ultra-low latency WebRTC ingestion pipeline with Livepeer decentralized transcoding, paired with real-time WebSocket chat and one-tap M-Pesa STK push micro-tipping alongside optional Web3 creator badges.',
    architectureHighlights: [
      'Adaptive bitrate streaming balancing 4G cellular fluctuations across Kenyan telecom carriers',
      'Sub-500ms WebRTC live broadcast latency with fallback to resilient HLS',
      'Real-time WebSocket chat room with moderation safeguards and instant tip alerts',
      'M-Pesa Daraja STK Push webhook ingestion delivering instant sub-minute creator payouts',
    ],
    metrics: [
      { label: 'Latency', value: '< 500ms' },
      { label: 'Tip Settlement', value: 'Instant M-Pesa' },
      { label: 'Device Focus', value: 'Mobile-First' },
      { label: 'Video Protocol', value: 'WebRTC / Livepeer' },
    ],
    liveDemoUrl: 'https://github.com/omitolizatieno/wapi-stream',
    githubUrl: 'https://github.com/omitolizatieno/wapi-stream',
  },
  {
    id: 'propersats',
    title: 'ProperSats',
    tagline: 'Bitcoin-Native Land Marketplace with Cryptographic Escrow',
    category: 'FinTech & Web3',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'FastAPI', 'LND (Lightning)'],
    year: '2025',
    featured: true,
    hasSimulator: 'propersats',
    description:
      'ProperSats is a mobile-first web application designed to make physical land transactions more secure by reducing counterparty risk, fraud, and payment delays. It uses the Bitcoin Lightning Network and decentralized escrow logic to support secure, instant payments, stakeholder verification, and automated payout flows between buyers, sellers, surveyors, lawyers, and the platform.',
    problem:
      'Land title fraud, double allocations, and delayed bank escrows plague real estate in emerging markets. Buyers risk deposits before physical boundary validation, and surveyors/lawyers endure multi-week payment disputes.',
    solution:
      'Constructed a multi-stakeholder milestone escrow engine on Bitcoin Lightning (LND). Funds are committed as cryptographic hold invoices and automatically disbursed upon verifiable milestone sign-offs by certified surveyors and legal registries.',
    architectureHighlights: [
      'Multi-party state machine tracking milestone approvals across buyer, seller, surveyor, and legal counsel',
      'Lightning Network Daemon (LND) hold-invoice orchestration for non-custodial milestone commitments',
      'Mobile-first responsive dashboard with real-time QR invoice rendering and payment status webhooks',
      'Audit log and digital forensics chain of custody for all document signatures and coordinate surveys',
    ],
    metrics: [
      { label: 'Settlement Time', value: 'Instant (Sats)' },
      { label: 'Counterparty Risk', value: 'Eliminated via Escrow' },
      { label: 'Stakeholders', value: '5-Party Verification' },
      { label: 'Payment Layer', value: 'Bitcoin Lightning' },
    ],
    liveDemoUrl: 'https://github.com/omitolizatieno/propersats',
    githubUrl: 'https://github.com/omitolizatieno/propersats',
  },
  {
    id: 'sendme',
    title: 'Sendme',
    tagline: 'Hyperlocal Community Logistics & Peer-to-Peer Errands',
    category: 'Logistics & Realtime',
    techStack: ['React 19', 'TypeScript', 'Vite', 'TanStack Query', 'Supabase', 'Tailwind CSS'],
    year: '2025',
    featured: true,
    hasSimulator: 'sendme',
    description:
      'SENDME is a hyperlocal community logistics platform for neighborhoods, campuses, workplaces, apartment complexes, and local communities. It connects people who need everyday errands completed with nearby users who are already heading out and can fulfill those requests for a commission, with the goal of creating a trusted community marketplace that can grow into a broader local commerce platform.',
    problem:
      'Traditional delivery apps enforce high minimum order thresholds, expensive fleet surcharges, and slow dispatch for small tasks inside gated estates, universities, and commercial clusters.',
    solution:
      'Leveraged React 19 optimistic updates and Supabase real-time subscriptions to enable community members already walking to nearby stores or kiosks to accept errand requests with zero friction and guaranteed escrow commission.',
    architectureHighlights: [
      'Optimistic state updates via React 19 and TanStack Query for instantaneous task claims',
      'Supabase Realtime PostgreSQL row-level change listeners for live delivery tracking',
      'Dynamic neighborhood zoning and trust-score rating algorithms for verified campus & estate peers',
      'Clean mobile-friendly delivery receipts, chat, and location checkpoint confirmations',
    ],
    metrics: [
      { label: 'Dispatch Latency', value: 'Real-time' },
      { label: 'Stack Target', value: 'React 19 + Supabase' },
      { label: 'Ergonomics', value: 'Hyperlocal Peering' },
      { label: 'State Sync', value: 'TanStack + WebSockets' },
    ],
    liveDemoUrl: 'https://github.com/omitolizatieno/sendme-logistics',
    githubUrl: 'https://github.com/omitolizatieno/sendme-logistics',
  },
  {
    id: 'bandit',
    title: 'Bandit Password Saver',
    tagline: 'Terminal CLI Password Vault for OverTheWire Security Labs',
    category: 'DevOps & Security',
    techStack: ['Python', 'Google Sheets API', 'OAuth 2.0', 'CLI Terminal', 'Git'],
    year: '2024',
    featured: false,
    hasSimulator: 'bandit',
    description:
      'Bandit Password Saver is a lightweight command-line password manager for OverTheWire Bandit security levels. It uses Google Sheets as its storage layer and Google OAuth for authorization, allowing users to read, add, update, and remove saved passwords from a terminal while keeping the application simple without a web server or local database.',
    problem:
      'Cybersecurity students solving OverTheWire Bandit challenges lose progress across multiple workstations or risk storing sensitive CTF flags in unencrypted local bash history files.',
    solution:
      'Architected a cloud-synced Python CLI utility utilizing Google OAuth 2.0 and Sheets API as a serverless key-value credential vault, accessible directly from any Linux terminal with zero database setup.',
    architectureHighlights: [
      'OAuth 2.0 token flow authorizing headless command-line sessions without exposed credentials',
      'Sub-second spreadsheet querying with zero local database dependencies or SQL maintenance',
      'Terminal-native colorized formatting, level validation, and clipboard-ready output',
      'Built with digital forensics principles of access control and credential integrity',
    ],
    metrics: [
      { label: 'Footprint', value: 'Zero Local DB' },
      { label: 'Auth Protocol', value: 'OAuth 2.0 PKCE' },
      { label: 'Runtime', value: 'Python 3 CLI' },
      { label: 'Cloud Store', value: 'Google Sheets API' },
    ],
    liveDemoUrl: 'https://github.com/omitolizatieno/bandit-password-saver',
    githubUrl: 'https://github.com/omitolizatieno/bandit-password-saver',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'webrtc-mpesa-streaming',
    slug: 'low-latency-live-streaming-east-africa',
    title: 'Engineering Low-Latency Live Streaming for Sub-Saharan Bandwidth: Inside Wapi’s WebRTC & M-Pesa Architecture',
    excerpt:
      'How we solved video transcoding bottlenecks, adaptive bitrate streaming over variable 4G networks, and zero-friction mobile money micro-tipping for Kenyan creators.',
    readTime: '6 min read',
    publishDate: 'February 2026',
    category: 'Streaming & Video Infrastructure',
    tags: ['WebRTC', 'React', 'Livepeer', 'M-Pesa API', 'Low-Latency'],
    content: {
      introduction:
        'Live streaming in East Africa faces a unique dual challenge: cellular network fluctuations across carriers like Safaricom and Airtel, combined with a creator economy where credit cards are virtually non-existent. When building Wapi, our objective was to drop stream latency below 500 milliseconds while allowing viewers to send 50 KES tips directly through M-Pesa STK push without interrupting playback.',
      sections: [
        {
          heading: '1. The Latency Dilemma: WebRTC vs Low-Latency HLS',
          body: [
            'Traditional HLS streaming imposes a 6 to 15-second latency window, which completely kills real-time audience interaction such as live Q&A, auctions, and gaming call-outs. WebRTC provides sub-second communication, but scaling peer-to-peer connections to thousands of concurrent mobile viewers is notoriously bandwidth-prohibitive.',
            'We solved this by establishing a hybrid ingestion mesh: the creator broadcasts via WebRTC directly to a decentralized Livepeer media server, which generates adaptive bitrate ladder renditions (1080p, 720p, 480p, 360p) in real time. Viewers receive low-latency WebRTC streams when connection health is optimal, with seamless client-side step-down to resilient 480p/360p when signal degradation is detected.',
          ],
          codeSnippet: {
            language: 'typescript',
            filename: 'useWebRTCStream.ts',
            code: `// Dynamic bandwidth monitoring & adaptive step-down
export function useAdaptiveStreamQuality(peerConnection: RTCPeerConnection) {
  useEffect(() => {
    const monitorInterval = setInterval(async () => {
      const stats = await peerConnection.getStats();
      stats.forEach((report) => {
        if (report.type === 'inbound-rtp' && report.kind === 'video') {
          const packetLoss = report.packetsLost / report.packetsReceived;
          if (packetLoss > 0.08) {
            // Signal media server to step down to fallback rendition
            emitStreamEvent('ADAPTIVE_DEGRADE_BANDWIDTH', { currentLoss: packetLoss });
          }
        }
      });
    }, 2500);

    return () => clearInterval(monitorInterval);
  }, [peerConnection]);
}`,
          },
        },
        {
          heading: '2. Synchronizing M-Pesa Tipping with Video Overlay',
          body: [
            'Integrating Safaricom’s Daraja STK Push API directly into the live broadcast presented a state coordination challenge: when a viewer clicks "Send 100 KES Tip", their mobile phone displays an M-Pesa PIN prompt. Once authorized, the webhook notification arrives at our backend within 800ms.',
            'Using Supabase Realtime channels, the validated transaction broadcasts an ephemeral celebration payload to all connected stream clients. The creator’s studio overlay triggers a celebratory audio chime and dynamic on-screen tip bubble without any video buffering or stream reload.',
          ],
          callout:
            'By decoupling the M-Pesa callback from the video rendering pipeline, we achieved zero-frame drops during peak tipping moments in live broadcasts.',
        },
      ],
      conclusion:
        'Tailoring streaming infrastructure for local bandwidth realities and local payment primitives is what transforms a generic clone into an essential, sustainable regional platform. Wapi proves that low latency and accessible monetization can thrive together.',
    },
  },
  {
    id: 'bitcoin-lightning-escrows',
    slug: 'eliminating-land-fraud-with-lightning-escrow',
    title: 'Eliminating Land Transaction Fraud in Kenya: The ProperSats Lightning Escrow Blueprint',
    excerpt:
      'Replacing vulnerable physical escrow accounts with multi-party cryptographic hold invoices on the Bitcoin Lightning Network.',
    readTime: '8 min read',
    publishDate: 'January 2026',
    category: 'FinTech & Cryptography',
    tags: ['Bitcoin', 'Lightning Network', 'LND', 'FastAPI', 'Smart Escrow'],
    content: {
      introduction:
        'Physical land transactions in Kenya are notorious for title deed fraud, surveyor misallocations, and prolonged escrow settlement times. In traditional conveyancing, buyers deposit huge sums into law firm accounts where funds sit idle for months, vulnerable to disputes. With ProperSats, we asked: what if milestone payments could be held in non-custodial cryptographic escrows that only settle when verified surveyors and registrars submit valid cryptographic signatures?',
      sections: [
        {
          heading: '1. Why Bitcoin Lightning for Real Estate Escrows?',
          body: [
            'While Bitcoin on-chain transactions incur mining delays and variable transaction fees, the Lightning Network enables instant, sub-second micropayments and hold invoices. A hold invoice allows a receiver to create an invoice that only settles when a specific secret (preimage) is revealed.',
            'In ProperSats, when a buyer commits funds for a land parcel survey milestone, the payment is locked in a Lightning hold invoice. The funds do not belong to the surveyor yet, nor can the buyer unilaterally retract them without trigger conditions.',
          ],
          codeSnippet: {
            language: 'python',
            filename: 'escrow_service.py',
            code: `# ProperSats Milestone Hold Invoice Logic
import hashlib, secrets
from lnd_grpc import LightningClient

def create_surveyor_milestone_invoice(amount_sats: int, parcel_id: str):
    preimage = secrets.token_bytes(32)
    payment_hash = hashlib.sha256(preimage).digest()
    
    # Generate hold invoice on Lightning Node
    invoice = LightningClient.add_hold_invoice(
        hash=payment_hash,
        value=amount_sats,
        memo=f"ProperSats Milestone: Survey Inspection Parcel #{parcel_id}"
    )
    return {
        "payment_request": invoice.payment_request,
        "payment_hash": payment_hash.hex(),
        "milestone_preimage": preimage.hex()
    }`,
          },
        },
        {
          heading: '2. Multi-Stakeholder Verification Sequence',
          body: [
            'The ProperSats platform orchestrates five independent parties: Buyer, Seller, Licensed Surveyor, Conveyancing Attorney, and the Land Registry. When the surveyor completes field beacon verification, they upload cryptographically signed GPS coordinates.',
            'Once the attorney validates the survey report against official deed records, the escrow state machine releases the preimage to settle the invoice instantly across the Lightning channel.',
          ],
          callout:
            'Cryptographic escrow eliminates trust bottlenecks by transforming ambiguous legal promises into verifiable code execution.',
        },
      ],
      conclusion:
        'By combining mobile-first React interfaces with Python backend LND nodes, ProperSats bridges physical land security with financial sovereignty across East Africa.',
    },
  },
  {
    id: 'hyperlocal-logistics-react19',
    slug: 'hyperlocal-community-logistics-react19-supabase',
    title: 'Hyperlocal Logistics with React 19 & Supabase: From Campus Errands to Micro-Commerce',
    excerpt:
      'Building zero-latency errand dispatching and real-time state synchronization for Sendme using React 19 actions and Supabase row-level subscriptions.',
    readTime: '5 min read',
    publishDate: 'December 2025',
    category: 'Frontend Architecture & Realtime',
    tags: ['React 19', 'Supabase', 'TanStack Query', 'TypeScript', 'Geolocation'],
    content: {
      introduction:
        'Large logistics networks fail in hyper-dense micro-communities like university campuses, gated residential estates, and technology hubs. The delivery distances are under 1 kilometer, yet standard dispatch algorithms charge prohibitive fees. Sendme turns regular foot traffic into an instant courier network.',
      sections: [
        {
          heading: '1. React 19 Optimistic State in Action',
          body: [
            'When a student in Hall 4 requests a pharmacy pickup and a nearby peer walking from the main gate accepts it, neither user can tolerate UI lag. Using React 19 useOptimistic and TanStack Query, the task assignment reflects on screen within 16 milliseconds before server roundtrips complete.',
            'If network latency spikes, the optimistic state maintains an engaging visual timeline while the background sync resolves cleanly.',
          ],
        },
        {
          heading: '2. Supabase Realtime Channels for Geofenced Clusters',
          body: [
            'Rather than bombarding a centralized server with constant GPS polling, Sendme utilizes geofenced Supabase Realtime channels. When an errand is created within a specific polygon, only runners active within that boundary receive instant broadcast alerts.',
          ],
        },
      ],
      conclusion:
        'Designing for community trust requires high responsiveness. Combining React 19’s client performance with Supabase’s realtime data layer makes community-powered commerce viable.',
    },
  },
  {
    id: 'forensics-to-devops',
    slug: 'computer-forensics-to-devops-and-frontend',
    title: 'From Computer Forensics to Resilient DevOps: How Security Rigor Shapes Frontend Architecture',
    excerpt:
      'Why a background in digital forensics, packet inspection, and threat modeling creates robust, tamper-resistant web applications and reliable CI/CD pipelines.',
    readTime: '5 min read',
    publishDate: 'November 2025',
    category: 'DevOps & Security',
    tags: ['Computer Forensics', 'DevOps', 'Docker', 'CI/CD', 'Web Security'],
    content: {
      introduction:
        'Studying Computer Security and Forensics at Jaramogi Oginga Odinga University taught me a fundamental truth: every software system is either built with defenses from line one, or it will eventually be dissected in an incident response post-mortem. This mindset directly informs how I configure Docker containers, design CI/CD workflows, and write clean React state machines.',
      sections: [
        {
          heading: '1. Defense-in-Depth on the Frontend',
          body: [
            'Many developers treat frontend applications as harmless presentation layers, leaving validation entirely to backend APIs. From a forensics perspective, client applications are untrusted execution environments running directly on the adversary’s hardware.',
            'Implementing defensive state machines, strict input sanitization, CSP headers, and tamper-evident audit logs makes applications resilient against injection attacks, session tampering, and race conditions.',
          ],
        },
        {
          heading: '2. Reproducible Builds and Automated DevOps',
          body: [
            'In forensics, chain of custody is non-negotiable. The same standard applies to software delivery: if you cannot guarantee that the exact commit in Git translates to the exact binary container in production, your pipeline is vulnerable.',
            'Using Docker multi-stage builds, automated linting, vulnerability scanning, and GitHub Actions CI/CD ensures zero human drift and reproducible deployments.',
          ],
        },
      ],
      conclusion:
        'Security is not a checkbox added at the end of a sprint; it is an architectural discipline that sharpens every commit, component, and deployment pipeline.',
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
    website: 'github.com/omitolizatieno',
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
      'Since 2024 Elizabeth has been instrumental in delivering our complex web and systems programming sprints. Even while working in hybrid teams, she has been highly responsive, organized, and strategic in her thinking. In addition to frontend excellence in React, she brings a deep understanding of security and systems that makes her an invaluable engineer.',
    author: 'George Otieno',
    role: 'Technical Lead & Systems Architect',
    company: 'Zone01 Kisumu',
    avatarInitials: 'GO',
    cardColor: 'bg-[#19396D]', // Pantone Surf the Web
  },
  {
    id: '2',
    quote:
      'Elizabeth is AMAZING! If you have any doubt about working with her, ask me — I am really impressed by her code rigor! Her Bitcoin Lightning hold-invoice escrow implementation for land titles was cryptographically sound, elegant, and executed with sub-second finality.',
    author: 'David Kwamboka',
    role: 'Bitcoin Lightning Fellow & Developer',
    company: 'Africa Free Routing',
    avatarInitials: 'DK',
    cardColor: 'bg-[#1E4DB7]', // Pantone Vibrant Surf Accent
  },
  {
    id: '3',
    quote:
      'Elizabeth is one of the most dedicated and versatile developers I have known. Between her frontend craftsmanship and her forensics-level eye for detail, you get clear communication, dependable delivery, and rock-solid code across complex multi-stakeholder projects.',
    author: 'Sharon Wambui',
    role: 'Product Lead & Technology Strategist',
    company: 'DigiKen MSME Labs',
    avatarInitials: 'SW',
    cardColor: 'bg-[#122448]', // Deep Royal Midnight Navy
  },
];

