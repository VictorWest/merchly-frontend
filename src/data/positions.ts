export interface Position{
    id: string | number,
    title: string,
    keywords?: string[],
    dueDate: string,
    description?: string
}

export interface PositionDetails{
    id: string | number,
    title: string,
    keywords?: string[],
    publishedDate: string,
    dueDate: string,
    description?: string,
    qualifications: string[],
    benefits: string[]
}

export const availablePositions: Position[] = [
    {   id: 1,
        title: 'UI/UX Designer', 
        keywords: ['Remote', '2 Years of Experience', 'Figma', 'Prototyping', 'UX Design', 'UI Design'], 
        dueDate: 'May 7 2025', 
        description:'Translating project brief into fully responsive high fidelity prototype for landing page, website application, & dashboard with continuous communicative feedbacks.' },
    {
        id: 2,
        title: 'Full Stack Developer',
        keywords: ['Remote', '2 Years of Experience', 'Figma', 'Prototyping', 'UX Design', 'UI Design'],
        dueDate: 'May 7 2025', 
        description: 'Translating design into fully functional landing page, website application, & dashboard with various responsive dimensions.'
    },
    {
        id: 3,
        title: 'Business Development',
        keywords: ['Remote', '2 Years of Experience', 'Figma', 'Prototyping', 'UX Design', 'UI Design'],
        dueDate: 'May 7 2025', 
        description: 'Helping company obtain better brand recognition and financial growth across the current market trend.'
    },
    {
        id: 4,
        title: 'Product Manager',
        keywords: ['Full-Time', 'Agile', 'Roadmap', 'Cross-Functional', 'Remote'],
        dueDate: 'May 3 2025',
        description: 'Own the product lifecycle from ideation to launch. Collaborate with engineering, design, and marketing to deliver user-centric solutions that meet business goals.',
    }
]

export const availablePositionDetails: PositionDetails[] = [
    {   id: 1,
        title: 'UI/UX Designer', 
        keywords: ['Remote', '2 Years of Experience', 'Figma', 'Prototyping', 'UX Design', 'UI Design'], 
        publishedDate: 'May 1 2025',
        dueDate: 'May 7 2025', 
        description:'Translating project brief into fully responsive high fidelity prototype for landing page, website application, & dashboard with continuous communicative feedbacks.',
        qualifications: [
            "Proven experience as a UX/UI Designer or similar role (2–4 years preferred).",
            "Strong portfolio showcasing design projects, including web and mobile interfaces.",
            "Proficiency in Figma (Auto layout, rapid prototyping, & design system).",
            "Solid understanding of UX principles and best practices.",
            "Experience conducting secondary research, continuous iteration, and translating insights into design decisions.",
            "Familiarity with responsive design, accessibility standards (WCAG), and interaction design.",
            "Basic understanding of HTML, CSS, and front-end frameworks (a plus, but not required).",
            "Excellent communication and collaboration skills — ability to work with cross-functional teams.",
            "Strong problem-solving skills and attention to detail.",
            "Ability to manage multiple projects and meet deadlines in a flexible, remote environment.",
            "A mindset aligned with our core values: Flexibility, Creativity, and Integrity.",
            "Conversational ability in speaking & writing English."
        ],
        benefits: [
            "Work from anywhere you feel most productive — your home, a café, or even while traveling.",
            "Flexible working hours, but we prefer some overlap with Eastern Time (EDT) workdays. You’ll have the freedom to design your ideal work hours.",
            "Global team collaboration with talented people from around the world. You’ll gain new perspectives and collaborate across cultures and time zones.",
            "Enjoy the convenience of weekly salary payments — because we value both your time and your financial flexibility."
        ]
    },
  {
    id: 3,
    title: 'Business Development',
    keywords: ['Remote', '2 Years of Experience', 'Figma', 'Prototyping', 'UX Design', 'UI Design'],
    publishedDate: 'May 1 2025',
    dueDate: 'May 7 2025', 
    description: 'Helping company obtain better brand recognition and financial growth across the current market trend.',
    qualifications: [
      "Bachelor's degree in Business Administration, Management, or related field.",
      "3+ years of experience in administrative or operational roles.",
      "Strong organizational and multitasking abilities.",
      "Excellent written and verbal communication skills.",
      "Proficiency with tools like Microsoft Office Suite, Google Workspace, and project management software.",
      "Experience managing budgets, schedules, and internal documentation.",
      "Strong problem-solving and decision-making skills.",
      "Ability to work independently in a fast-paced environment.",
      "High level of discretion and professionalism.",
      "Ability to collaborate with cross-functional teams and external partners."
    ],
    benefits: [
      "Hybrid work environment — enjoy flexibility while staying connected.",
      "Opportunities for career growth and leadership development.",
      "Competitive salary with quarterly performance bonuses.",
      "Health and wellness stipend for gym or mental health services.",
      "Team-building retreats and professional workshops."
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    keywords: ['Remote', '2 Years of Experience', 'Figma', 'Prototyping', 'UX Design', 'UI Design'],
    publishedDate: 'May 1 2025',
    dueDate: 'May 7 2025', 
    description: 'Translating design into fully functional landing page, website application, & dashboard with various responsive dimensions.',
    qualifications: [
      "Bachelor’s degree in Computer Science or related field.",
      "2+ years of experience with JavaScript, React, and Node.js.",
      "Experience building RESTful APIs and integrating third-party services.",
      "Understanding of databases (MongoDB, PostgreSQL, or similar).",
      "Familiarity with Git, CI/CD, and agile development workflows.",
      "Strong debugging and problem-solving skills.",
      "Excellent collaboration and communication skills.",
      "Passion for writing clean, maintainable code.",
      "Experience working with Docker, GraphQL, or TypeScript is a plus."
    ],
    benefits: [
      "Fully remote role with flexible working hours.",
      "Yearly tech budget for upgrading your development gear.",
      "Bi-annual team offsites at exciting global destinations.",
      "Healthcare benefits and wellness support.",
      "Paid learning and certification programs."
    ]
  },
  {
    id: 4,
    title: 'Product Manager',
    keywords: ['Full-Time', 'Agile', 'Roadmap', 'Cross-Functional', 'Remote'],
    publishedDate: 'April 25 2025',
    dueDate: 'May 3 2025',
    description: 'Own the product lifecycle from ideation to launch. Collaborate with engineering, design, and marketing to deliver user-centric solutions that meet business goals.',
    qualifications: [
      "Proven experience as a Product Manager in a tech company (2–5 years).",
      "Strong understanding of product lifecycle and agile methodologies.",
      "Excellent written and verbal communication skills.",
      "Ability to manage stakeholders and balance competing priorities.",
      "Experience with product tools like Jira, Notion, or Productboard.",
      "Analytical mindset with a data-driven approach to decision making.",
      "Proven ability to lead cross-functional teams and drive alignment.",
      "Experience in SaaS or consumer-facing products is a plus."
    ],
    benefits: [
      "Remote-first company with regular team meetups.",
      "Ownership in the company through equity options.",
      "Flexible PTO and generous parental leave policies.",
      "Personal development budget and mentorship access.",
      "Culture of autonomy, trust, and transparency."
    ]
  }
]
