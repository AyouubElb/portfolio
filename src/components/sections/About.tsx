import { forwardRef } from "react"
import Image from "next/image"
import { Mail, MapPin, Linkedin, Github } from "lucide-react"

interface AboutProps {
  profileImage: string
}

const About = forwardRef<HTMLDivElement, AboutProps>(({ profileImage }, ref) => {
  return (
    <section ref={ref} className="py-24 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-lime-400 shadow-xl shadow-lime-400/20 transform hover:scale-105 transition-transform duration-300">
              <Image
                src={profileImage || "/placeholder.svg"}
                alt="Ayoub EL Bouasri"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="inline-block px-4 py-2 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium code-font mb-6">
              About Me
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hello, I'm <span className="text-lime-400">Ayoub EL Bouasri</span>
            </h1>
            <h2 className="text-2xl text-gray-300 mb-8">Full-Stack Developer</h2>
            <p className="text-lg mb-6 text-gray-300 leading-relaxed">
              I take web applications from first idea to production: turning requirements into a clear design,
              modelling the database, building the API and the interface, testing, and deploying. I work in
              TypeScript across the whole stack with React, Next.js, Node.js, Express and PostgreSQL.
            </p>
            <p className="text-lg mb-10 text-gray-300 leading-relaxed">
              I also build AI features into real products with the OpenAI, Claude and Gemini APIs. Comfortable with
              REST API design, authentication and role-based access, background job queues, Prisma, Supabase and
              continuous deployment on Vercel.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-gray-300">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2 text-lime-400" />
                <span>Rabat, Morocco</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-2 text-lime-400" />
                <span>ayoub.elbouuasri@gmail.com</span>
              </div>
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-gray-300">
              <a
                href="https://www.linkedin.com/in/ayoub-el-bouasri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-lime-400 transition-colors"
              >
                <Linkedin size={20} className="mr-2 text-lime-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/AyouubElb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-lime-400 transition-colors"
              >
                <Github size={20} className="mr-2 text-lime-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

About.displayName = "About"
export default About
