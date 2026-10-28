"use client"

import { forwardRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Mail, Linkedin, Github } from "lucide-react"
import { contactSchema, type ContactInput } from "@/lib/schemas/contact.schema"

interface ContactProps {
  onSend: (data: ContactInput) => Promise<boolean>
}

const fieldClass = (hasError: boolean) =>
  `w-full px-4 py-3 bg-green-900 border rounded-md focus:ring-2 focus:border-transparent text-white ${
    hasError ? "border-red-400 focus:ring-red-400" : "border-lime-400/30 focus:ring-lime-400"
  }`

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="mt-2 text-sm text-red-300">
      {message}
    </p>
  )
}

const Contact = forwardRef<HTMLDivElement, ContactProps>(({ onSend }, ref) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", subject: "", message: "", hp_field: "" },
  })

  const onSubmit = async (data: ContactInput) => {
    if (await onSend(data)) reset()
  }

  return (
    <section ref={ref} className="py-24 bg-green-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-lime-400/20 text-lime-400 text-sm font-medium code-font mb-4">
            Let's Connect
          </div>
          <h2 className="text-4xl font-bold text-white">Get In Touch</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href="mailto:ayoub.elbouuasri@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-lime-400 transition-colors"
          >
            <Mail size={20} className="text-lime-400" />
            ayoub.elbouuasri@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ayoub-el-bouasri/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-lime-400 transition-colors"
          >
            <Linkedin size={20} className="text-lime-400" />
            LinkedIn
          </a>
          <a
            href="https://github.com/AyouubElb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-lime-400 transition-colors"
          >
            <Github size={20} className="text-lime-400" />
            GitHub
          </a>
        </div>

        <div className="bg-green-950 p-5 sm:p-8 rounded-lg shadow-xl border border-lime-400/20">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div style={{ display: "none" }} aria-hidden="true">
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
                {...register("hp_field")}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass(!!errors.name)}
                  {...register("name")}
                />
                <FieldError id="name-error" message={errors.name?.message} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass(!!errors.email)}
                  {...register("email")}
                />
                <FieldError id="email-error" message={errors.email?.message} />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className={fieldClass(!!errors.subject)}
                {...register("subject")}
              />
              <FieldError id="subject-error" message={errors.subject?.message} />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={fieldClass(!!errors.message)}
                {...register("message")}
              ></textarea>
              <FieldError id="message-error" message={errors.message?.message} />
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
