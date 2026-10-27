import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "MedicallyPlus",
    description:
      "Full-stack healthcare SaaS platform for medical tourism. Patient portal, provider dashboard, and admin panel with role-based access control, BullMQ email queues, and audit logging.",
    image: "/medicallyplus-dashboard.png",
    technologies: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "BullMQ",
      "Zod",
      "JWT Auth",
    ],
    categories: ["Web", "Healthcare", "SaaS"],
    link: "https://medicallyplus.vercel.app/",
    github: "https://github.com/Medicallyplus/MedicallyPlus_MVP",
  },
  {
    id: 2,
    title: "Safari GPS: Villa Rental Platform",
    description:
      "Full-stack Airbnb-style villa rental platform with search, filtering, availability management, and Stripe payment integration. Built as a client project at Safari GPS.",
    image: "/safari-villa.png",
    technologies: [
      "Next.js",
      "Express",
      "MySQL",
      "Stripe",
      "Tailwind CSS",
      "TypeScript",
    ],
    categories: ["Web", "E-commerce"],
  },
  {
    id: 3,
    title: "Safari GPS: Fleet Tracking Dashboard",
    description:
      "Real-time fleet tracking dashboard with custom client dashboards and live data visualization. Built as a client project at Safari GPS.",
    image: "/safari-fleet.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    categories: ["Web", "Dashboard"],
  },
]
