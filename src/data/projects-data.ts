import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Jisr: AI Teaching Platform",
    description:
      "Online teaching platform for English instructors that brings lessons, quizzes and student tracking into one tool. A multi-provider AI layer (Claude, OpenAI, Gemini) with model failover generates content, reads lessons aloud and grades spoken answers, behind usage quotas, rate limiting and row-level security.",
    image: "/jisr.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "Claude",
      "OpenAI",
      "Gemini",
      "Tailwind CSS",
    ],
    categories: ["AI", "SaaS", "EdTech"],
    link: "https://jisrteach.com/",
    github: "https://github.com/AyouubElb/jisr",
  },
  {
    id: 2,
    title: "Click Store: Electronics Store & Back Office",
    description:
      "Online store and back office for an electronics shop in Morocco, in French and built for the phone first. The owner sells in the shop and online from one shared stock, confirms pickup and city delivery orders on WhatsApp, checks the cash drawer every evening, and compares shop and online sales on one dashboard.",
    image: "/clickstore.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
      "Cloudflare R2",
      "TipTap",
      "Web Push",
      "Zod",
      "Tailwind CSS",
    ],
    categories: ["E-commerce", "Client project"],
    link: "https://clickstore-xi.vercel.app/",
  },
  {
    id: 3,
    title: "Medically+: Healthcare Newsletter",
    description:
      "Healthcare education site and newsletter for a medical tourism company, published in English, French and Arabic. Articles are written in a built-in rich-text editor, and readers subscribe through a rate-limited double opt-in, with confirmation emails in their own language.",
    image: "/medicallyplus-newsletter.jpg",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "next-intl",
      "TipTap",
      "Resend",
      "Upstash Redis",
      "Zod",
      "Tailwind CSS",
    ],
    categories: ["Healthcare", "Publishing"],
    link: "https://medicallyplus.com/",
  },
]
