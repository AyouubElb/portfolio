export interface Experience {
  title: string
  company: string
  logo: string
  period: string
  description: string
}

export interface Education {
  degree: string
  institution: string
  logo: string
  period: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface SkillGroup {
  category: string
  items: Skill[]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  categories?: string[]
  link: string
  github: string
}
