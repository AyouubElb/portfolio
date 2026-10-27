"use client"

import type React from "react"

import { Menu, X } from "lucide-react"

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
  aboutRef: React.RefObject<HTMLDivElement>
  journeyRef: React.RefObject<HTMLDivElement>
  projectsRef: React.RefObject<HTMLDivElement>
  skillsRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

export default function Navigation({
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollToSection,
  aboutRef,
  journeyRef,
  projectsRef,
  skillsRef,
  contactRef,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-green-950/90 backdrop-blur-md z-50 border-b border-lime-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-lime-400 code-font">
              <span className="text-white">&lt;</span>Ayoub.ELBouasri<span className="text-white">/&gt;</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(journeyRef)}
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="px-4 py-2 rounded-md bg-lime-400 text-green-950 hover:bg-lime-500 transition-colors font-medium"
            >
              Contact Me
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-lime-400">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-950 border-b border-lime-400/20 max-h-[70vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-lime-400 hover:bg-green-900 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(journeyRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-lime-400 hover:bg-green-900 w-full text-left"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-lime-400 hover:bg-green-900 w-full text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection(skillsRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-lime-400 hover:bg-green-900 w-full text-left"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-lime-400 hover:bg-green-900 w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
