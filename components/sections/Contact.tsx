"use client"

import type React from "react"

import { forwardRef } from "react"
import { Loader2 } from "lucide-react"

interface ContactProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isSubmitting: boolean
}

const Contact = forwardRef<HTMLDivElement, ContactProps>(({ handleSubmit, isSubmitting }, ref) => {
  return (
    <section ref={ref} className="py-24 bg-green-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium code-font mb-4">
            Let's Connect
          </div>
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        </div>

        <div className="bg-green-950 p-5 sm:p-8 rounded-lg shadow-xl border border-lime-400/20">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-green-900 border border-lime-400/30 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-transparent text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-green-900 border border-lime-400/30 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-transparent text-white"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 bg-green-900 border border-lime-400/30 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-transparent text-white"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-green-900 border border-lime-400/30 rounded-md focus:ring-2 focus:ring-lime-400 focus:border-transparent text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-lime-400 text-green-950 rounded-md hover:bg-lime-500 transition-colors font-bold shadow-lg shadow-lime-400/20 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="mr-2 spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
})

Contact.displayName = "Contact"
export default Contact
