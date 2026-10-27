import type { Experience, Education, SkillGroup } from "@/types"

export const experiences: Experience[] = [
  {
    title: "Full-Stack Software Engineer",
    company: "MedicallyPlus",
    logo: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "08/2025 to Present",
    description:
      "Building a full-stack healthcare SaaS platform for medical tourism. Developing 3 role-based dashboards (patient, provider/hospital, admin), REST API with Zod validation, BullMQ email queue system, JWT auth with role-based middleware, and admin bento grid dashboard with consultation pipeline and audit logs. Delivered the company newsletter, live at medicallyplus.com.",
  },
  {
    title: "Front-End Developer",
    company: "Safari GPS",
    logo: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "01/2025 to 06/2025",
    description:
      "Extended the front end of the company's main product, a real-time fleet-tracking dashboard, with views tailored to each client. Built the front end of a villa-rental platform: booking interface, API integration and Stripe payments.",
  },
  {
    title: "AI Evaluation (Freelance)",
    company: "Outlier.ai / Scale AI",
    logo: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "08/2024 to 02/2026",
    description:
      "Evaluated LLM-generated code for failure modes, hallucinations and prompt sensitivity, and authored technical prompts and benchmarks to improve model accuracy.",
  },
  {
    title: "Front-End Developer Intern",
    company: "Parkyeri",
    logo: "https://plus.unsplash.com/premium_photo-1706727287722-3ec90762d883?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "02/2023 to 09/2023",
    description:
      "Built Vue.js sample interfaces exercising the features of a SaaS platform, and fed the usability problems they surfaced back to the product teams.",
  },
  {
    title: "Front-End Developer Intern",
    company: "OptimGov",
    logo: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "11/2022 to 01/2023",
    description: "Built reusable Angular components and responsive interfaces for internal government management applications.",
  },
]

export const education: Education[] = [
  {
    degree: "Master's degree in Computer Engineering",
    institution: "Istinye University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istinyeUni.jpg-thuoVnAr1xmfE6jO9V0HMYBMPkLIsm.jpeg",
    period: "Sep 2023 to Feb 2025",
    description: "English program in Computer Engineering at Istinye University, Istanbul, Turkey.",
  },
  {
    degree: "Bachelor's degree in Mathematics and Computer Sciences",
    institution: "University Mohammed V in Rabat",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohammed5Uni-sh4cPvENEz7ZGk4BDNHWEACKXQ2OXO.png",
    period: "Sep 2018 to Jun 2022",
    description: "Studied Mathematics and Computer Sciences at University Mohammed V in Rabat, Morocco.",
  },
]

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "React Query", level: 90 },
      { name: "Zustand", level: 88 },
      { name: "React Hook Form", level: 88 },
      { name: "GSAP", level: 80 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "REST API Design", level: 92 },
      { name: "JWT Auth", level: 88 },
      { name: "BullMQ", level: 85 },
      { name: "Zod", level: 90 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: 88 },
      { name: "Prisma", level: 90 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "Supabase", level: 78 },
    ],
  },
  {
    category: "AI/ML",
    items: [
      { name: "LLM Evaluation", level: 88 },
      { name: "Prompt Engineering", level: 90 },
      { name: "Gemini/OpenAI APIs", level: 82 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 92 },
      { name: "Vercel", level: 88 },
      { name: "CI/CD", level: 82 },
      { name: "Agile", level: 85 },
    ],
  },
]
