"use client"

import { forwardRef, useState } from "react"
import Image from "next/image"
import { ArrowRight, ExternalLink, Github, X } from "lucide-react"
import type { Project } from "@/types"

interface ProjectsProps {
  projects: Project[]
  activeProject: number | null
  setActiveProject: (id: number | null) => void
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ projects, activeProject, setActiveProject }, ref) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const projectsPerPage = 3 // Changed from 6 to 3

  // Get all unique categories
  const categories = Array.from(new Set(projects.flatMap((project) => project.categories || [])))

  // Filter projects by category if one is selected
  const filteredProjects = activeCategory
    ? projects.filter((project) => project.categories?.includes(activeCategory))
    : projects

  // Calculate pagination
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  const handleCategoryChange = (category: string | null) => {
    setActiveCategory(category)
    setCurrentPage(1) // Reset to first page when changing category
  }

  return (
    <section ref={ref} className="py-24 bg-green-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium code-font mb-4">
            My Work
          </div>
          <h2 className="text-4xl font-bold text-white mb-8">Featured Projects</h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => handleCategoryChange(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === null
                  ? "bg-lime-400 text-green-950"
                  : "bg-green-900 text-gray-300 hover:text-lime-400"
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-lime-400 text-green-950"
                    : "bg-green-900 text-gray-300 hover:text-lime-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="bg-green-950 rounded-lg overflow-hidden shadow-xl shadow-black/20 hover:shadow-lime-400/20 hover:translate-y-[-8px] transition-all duration-300 border border-lime-400/10"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950 to-transparent opacity-60"></div>
              </div>
              <div className="p-5 sm:p-8">
                <h3 className="text-2xl font-bold mb-3 text-lime-400">{project.title}</h3>
                <p className="text-gray-300 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-lime-400/10 text-lime-400 text-xs rounded-md code-font">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-lime-400/20 text-lime-400 text-xs rounded-md code-font">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                  className="text-lime-400 font-medium flex items-center hover:text-lime-500 transition-colors view-details"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1 arrow-icon" />
                </button>
              </div>

              {activeProject === project.id && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm overflow-y-auto">
                  <div className="bg-green-950 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-lime-400/20">
                    <div className="p-4 sm:p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-lime-400">{project.title}</h3>
                        <button
                          onClick={() => setActiveProject(null)}
                          className="text-gray-400 hover:text-lime-400 transition-colors"
                        >
                          <X size={24} />
                        </button>
                      </div>

                      <p className="text-gray-300 mb-6">{project.description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-3 text-white">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-lime-400/10 text-lime-400 rounded-md code-font">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-5 py-3 bg-lime-400 text-green-950 rounded-md hover:bg-lime-500 transition-colors font-medium"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Visit Website
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-5 py-3 border border-lime-400 text-lime-400 rounded-md hover:bg-lime-400/10 transition-colors"
                        >
                          <Github size={16} className="mr-2" />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md ${
                  currentPage === 1
                    ? "bg-green-900/50 text-gray-500 cursor-not-allowed"
                    : "bg-green-900 text-lime-400 hover:bg-green-800"
                }`}
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === number
                      ? "bg-lime-400 text-green-950"
                      : "bg-green-900 text-lime-400 hover:bg-green-800"
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-md ${
                  currentPage === totalPages
                    ? "bg-green-900/50 text-gray-500 cursor-not-allowed"
                    : "bg-green-900 text-lime-400 hover:bg-green-800"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
})

Projects.displayName = "Projects"
export default Projects
