"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Journey from "@/components/sections/Journey";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Notification from "@/components/Notification";
import { Check } from "lucide-react";
import { experiences, education, skills } from "@/data/resume-data";
import { projects } from "@/data/projects-data";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [journeyProgress, setJourneyProgress] = useState(0);
  const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);
  const [visibleEducation, setVisibleEducation] = useState<number[]>([]);
  const [activeSkillCategory, setActiveSkillCategory] = useState(
    "Programming Languages"
  );

  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<(HTMLDivElement | null)[]>([]);
  const educationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const journeySectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);

      if (journeySectionRef.current) {
        const journeyRect = journeySectionRef.current.getBoundingClientRect();
        const journeyHeight = journeyRect.height;
        const journeyTop = journeyRect.top;
        const viewportHeight = window.innerHeight;

        let journeyProgress = 0;
        if (journeyTop <= viewportHeight * 0.7) {
          journeyProgress = Math.min(
            100,
            ((viewportHeight * 0.7 - journeyTop) / journeyHeight) * 100
          );
        }
        setJourneyProgress(journeyProgress);
      }

      experienceRefs.current.forEach((ref, index) => {
        if (ref && isElementInViewport(ref, 0.9)) {
          if (!visibleExperiences.includes(index)) {
            setVisibleExperiences((prev) => [...prev, index]);
          }
        }
      });

      educationRefs.current.forEach((ref, index) => {
        if (ref && isElementInViewport(ref, 0.9)) {
          if (!visibleEducation.includes(index)) {
            setVisibleEducation((prev) => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleExperiences, visibleEducation]);

  const isElementInViewport = (el: HTMLElement, threshold = 0.8) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) *
          threshold && rect.bottom >= 0
    );
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    setMobileMenuOpen(false);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormStatus("Message sent! I'll get back to you soon.");
      setTimeout(() => setFormStatus(null), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div
      className="min-h-screen bg-green-950 text-gray-100"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 20%, rgba(14, 60, 45, 0.8) 0%, rgb(5, 46, 22) 90%)",
      }}
    >
      {formStatus && (
        <Notification>
          <Check size={20} className="mr-2 text-lime-400 flex-shrink-0" />
          <span>{formStatus}</span>
        </Notification>
      )}

      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        aboutRef={aboutRef}
        journeyRef={journeyRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        contactRef={contactRef}
      />

      <main className="">
        <Hero
          ref={heroRef}
          scrollToSection={scrollToSection}
          aboutRef={aboutRef}
        />

        <About
          ref={aboutRef}
          profileImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-image-B3wFVCNf-rJqJANV7VNXPFQM96WYiAGLCLEs74U.png"
        />

        <Journey
          ref={journeyRef}
          journeySectionRef={journeySectionRef}
          journeyProgress={journeyProgress}
          experiences={experiences}
          education={education}
          experienceRefs={experienceRefs}
          educationRefs={educationRefs}
          visibleExperiences={visibleExperiences}
          visibleEducation={visibleEducation}
        />

        <Projects
          ref={projectsRef}
          projects={projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />

        <Skills
          ref={skillsRef}
          skills={skills}
          activeSkillCategory={activeSkillCategory}
          setActiveSkillCategory={setActiveSkillCategory}
        />

        <Contact
          ref={contactRef}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </main>

      <Footer />
    </div>
  );
}
