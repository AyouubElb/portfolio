import type { Experience, Education, SkillGroup } from "@/types"

export const experiences: Experience[] = [
  {
    title: "Next.js Fullstack Developer",
    company: "Safari GPS",
    logo: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "12/2024 - Present",
    description:
      "Developed and maintained scalable web applications with Next.js. Built responsive UIs with Tailwind CSS, and optimized performance for seamless user experiences. Implemented and optimized REST APIs and ensured seamless integration between frontend and backend.",
  },
  {
    title: "Freelance - AI Training",
    company: "Outlier.ai",
    logo: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "08/2024 - Present",
    description:
      "Specialized in training language models for coding tasks using prompt engineering techniques and coding expertise including SQL, Python, and JavaScript/Typescript. Evaluate and rate AI-generated code and provided clear summaries or justifications.",
  },
  {
    title: "Junior Front-End Developer",
    company: "Parkyeri",
    logo: "https://plus.unsplash.com/premium_photo-1706727287722-3ec90762d883?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "02/2023 - 09/2023",
    description:
      'Implemented functionality, performed debugging, and developed testing protocols for the company\'s "noapi" project using Vue.js and Python.',
  },
  {
    title: "Front-End Developer Intern",
    company: "OptimGov",
    logo: "https://images.unsplash.com/photo-1644088379091-d574269d422f?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    period: "02/2023 - 09/2023",
    description: "Built and refined front-end interfaces with Angular.js.",
  },
]

export const education: Education[] = [
  {
    degree: "Master's degree in Computer Engineering",
    institution: "Istinye University",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istinyeUni.jpg-thuoVnAr1xmfE6jO9V0HMYBMPkLIsm.jpeg",
    period: "Sep 2023 - Feb 2025",
    description: "English program in Computer Engineering at Istinye University, Istanbul, Turkey.",
  },
  {
    degree: "Bachelor's degree in Mathematics and Computer Sciences",
    institution: "University Mohammed V in Rabat",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mohammed5Uni-sh4cPvENEz7ZGk4BDNHWEACKXQ2OXO.png",
    period: "Sep 2018 - Jun 2022",
    description: "Studied Mathematics and Computer Sciences at University Mohammed V in Rabat, Morocco.",
  },
]

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    category: "Frameworks/Libraries",
    items: [
      { name: "Next.js", level: 92 },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Express.js", level: 85 },
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    category: "Dev Tools & AI",
    items: [
      { name: "Git", level: 90 },
      { name: "Agile", level: 85 },
      { name: "Testing", level: 80 },
      { name: "Debugging", level: 85 },
      { name: "AI Model Training", level: 80 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
]
