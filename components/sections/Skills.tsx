"use client"

import { forwardRef } from "react"
import type { SkillGroup } from "@/types"
import {
  Code,
  Database,
  Server,
  Wrench,
  Braces,
  FileJson,
  Globe,
  Palette,
  Layers,
  Cpu,
  GitBranch,
  Boxes,
  Bot,
  BrainCircuit,
  Terminal,
  Webhook,
  Puzzle,
  Workflow,
  Zap,
  Sparkles,
  Gauge,
  Atom,
  Blocks,
} from "lucide-react"
import type { JSX } from "react/jsx-runtime"

interface SkillsProps {
  skills: SkillGroup[]
  activeSkillCategory: string
  setActiveSkillCategory: (category: string) => void
}

const Skills = forwardRef<HTMLDivElement, SkillsProps>(
  ({ skills, activeSkillCategory, setActiveSkillCategory }, ref) => {
    // Map category names to icons
    const getCategoryIcon = (category: string) => {
      switch (category) {
        case "Programming Languages":
          return <Code className="w-5 h-5" />
        case "Frameworks/Libraries":
          return <Blocks className="w-5 h-5" />
        case "Backend & Databases":
          return <Database className="w-5 h-5" />
        case "Dev Tools & AI":
          return <Wrench className="w-5 h-5" />
        default:
          return <Server className="w-5 h-5" />
      }
    }

    // Map skill names to appropriate icons
    const getSkillIcon = (skillName: string) => {
      const iconMap: Record<string, JSX.Element> = {
        // Programming Languages
        JavaScript: <Braces className="w-6 h-6" />,
        TypeScript: <FileJson className="w-6 h-6" />,
        Python: <Cpu className="w-6 h-6" />,
        SQL: <Database className="w-6 h-6" />,
        HTML5: <Globe className="w-6 h-6" />,
        CSS3: <Palette className="w-6 h-6" />,

        // Frameworks/Libraries
        "Next.js": <Zap className="w-6 h-6" />,
        React: <Atom className="w-6 h-6" />,
        "Vue.js": <Layers className="w-6 h-6" />,
        "Tailwind CSS": <Palette className="w-6 h-6" />,
        "Express.js": <Server className="w-6 h-6" />,

        // Backend & Databases
        "Node.js": <Webhook className="w-6 h-6" />,
        MongoDB: <Boxes className="w-6 h-6" />,
        MySQL: <Database className="w-6 h-6" />,
        "REST APIs": <Puzzle className="w-6 h-6" />,

        // Dev Tools & AI
        Git: <GitBranch className="w-6 h-6" />,
        Agile: <Workflow className="w-6 h-6" />,
        Testing: <Gauge className="w-6 h-6" />,
        Debugging: <Terminal className="w-6 h-6" />,
        "AI Model Training": <BrainCircuit className="w-6 h-6" />,
        "Prompt Engineering": <Bot className="w-6 h-6" />,
      }

      return iconMap[skillName] || <Sparkles className="w-6 h-6" />
    }

    return (
      <section ref={ref} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium code-font mb-4">
              My Expertise
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">Skills & Technologies</h2>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              {skills.map((skillGroup) => (
                <button
                  key={skillGroup.category}
                  onClick={() => setActiveSkillCategory(skillGroup.category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                    activeSkillCategory === skillGroup.category
                      ? "bg-lime-400 text-green-950"
                      : "bg-green-950 text-gray-300 hover:text-lime-400"
                  }`}
                >
                  {getCategoryIcon(skillGroup.category)}
                  {skillGroup.category}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-green-950 rounded-xl p-8 shadow-xl border border-lime-400/20">
            {skills
              .filter((skillGroup) => skillGroup.category === activeSkillCategory)
              .map((skillGroup) => (
                <div key={skillGroup.category} className="space-y-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {skillGroup.items.map((skill) => (
                      <div key={skill.name} className="skill-card group">
                        <div className="bg-green-900/50 hover:bg-green-900 border border-lime-400/20 hover:border-lime-400/40 rounded-lg p-5 text-center transition-all duration-300 h-full flex flex-col items-center justify-center hover:transform hover:scale-105 hover:shadow-lg hover:shadow-lime-400/10">
                          <div className="text-lime-400 mb-3 transform transition-transform duration-300 group-hover:scale-110">
                            {getSkillIcon(skill.name)}
                          </div>
                          <span className="text-white font-medium text-lg">{skill.name}</span>
                          <div className="h-0.5 w-0 bg-lime-400 mt-2 transition-all duration-300 group-hover:w-12"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              With over 2 years of professional experience, I've developed expertise in these technologies, allowing me
              to build scalable, production-grade web applications and deliver high-quality code.
            </p>
          </div>
        </div>
      </section>
    )
  },
)

Skills.displayName = "Skills"
export default Skills
