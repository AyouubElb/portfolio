import type React from "react"
import { forwardRef } from "react"
import Image from "next/image"
import type { Experience, Education } from "@/types"

interface JourneyProps {
  journeySectionRef: React.RefObject<HTMLDivElement>
  journeyProgress: number
  experiences: Experience[]
  education: Education[]
  experienceRefs: React.RefObject<(HTMLDivElement | null)[]>
  educationRefs: React.RefObject<(HTMLDivElement | null)[]>
  visibleExperiences: number[]
  visibleEducation: number[]
}

const Journey = forwardRef<HTMLDivElement, JourneyProps>(
  (
    {
      journeySectionRef,
      journeyProgress,
      experiences,
      education,
      experienceRefs,
      educationRefs,
      visibleExperiences,
      visibleEducation,
    },
    ref,
  ) => {
    return (
      <section ref={ref} className="py-24 relative">
        <div ref={journeySectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-block px-4 py-2 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium code-font mb-4">
              My Path
            </div>
            <h2 className="text-4xl font-bold text-white">My Career Journey</h2>
          </div>

          <div className="hidden md:block absolute left-1/2 top-48 bottom-24 w-1 bg-lime-400/20 transform -translate-x-1/2 z-10">
            <div
              className="w-1 bg-lime-400 progress-bar"
              style={{
                height: `${Math.min(100, journeyProgress)}%`,
                maxHeight: "100%",
              }}
            />
          </div>

          <div className="relative">
            <div className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 sm:mb-10 text-lime-400 text-center md:text-right md:pr-16">
                Education
              </h3>
              <div className="space-y-10 sm:space-y-16">
                {education.map((edu, index) => {
                  const shouldBeVisible = journeyProgress > 5 + index * 15
                  return (
                    <div
                      key={index}
                      ref={(el) => {
                        if (educationRefs.current) {
                          educationRefs.current[index] = el
                        }
                      }}
                      className={`md:ml-auto md:w-[45%] relative journey-item journey-item-right ${
                        shouldBeVisible ? "visible" : ""
                      }`}
                      style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                      <div className="bg-green-950 p-6 rounded-lg border border-lime-400/20 shadow-lg hover:shadow-lime-400/10 transition-all duration-300 hover:translate-y-[-5px]">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="relative w-14 h-14 rounded-md overflow-hidden border border-lime-400/30">
                              <Image
                                src={edu.logo || "/placeholder.svg"}
                                alt={edu.institution}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-medium text-white">{edu.degree}</h4>
                            <div className="flex items-center text-gray-300 mb-3">
                              <span>{edu.institution}</span>
                              <span className="mx-2 text-lime-400">•</span>
                              <span className="code-font text-lime-400">{edu.period}</span>
                            </div>
                            <p className="text-gray-300">{edu.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 sm:mb-10 text-lime-400 text-center md:text-left md:pl-16">
                Work Experience
              </h3>
              <div className="space-y-10 sm:space-y-16">
                {experiences.map((exp, index) => {
                  const shouldBeVisible = journeyProgress > 35 + index * 15
                  return (
                    <div
                      key={index}
                      ref={(el) => {
                        if (experienceRefs.current) {
                          experienceRefs.current[index] = el
                        }
                      }}
                      className={`md:w-[45%] relative journey-item journey-item-left ${
                        shouldBeVisible ? "visible" : ""
                      }`}
                      style={{ transitionDelay: `${index * 0.2}s` }}
                    >
                      <div className="bg-green-950 p-6 rounded-lg border border-lime-400/20 shadow-lg hover:shadow-lime-400/10 transition-all duration-300 hover:translate-y-[-5px]">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="relative w-14 h-14 rounded-md overflow-hidden border border-lime-400/30">
                              <Image
                                src={exp.logo || "/placeholder.svg"}
                                alt={exp.company}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xl font-medium text-white">{exp.title}</h4>
                            <div className="flex items-center text-gray-300 mb-3">
                              <span>{exp.company}</span>
                              <span className="mx-2 text-lime-400">•</span>
                              <span className="code-font text-lime-400">{exp.period}</span>
                            </div>
                            <p className="text-gray-300">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  },
)

Journey.displayName = "Journey"
export default Journey
