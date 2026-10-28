import type React from "react"
interface NotificationProps {
  children: React.ReactNode
  variant?: "success" | "error"
}

export default function Notification({ children, variant = "success" }: NotificationProps) {
  const colors =
    variant === "error" ? "bg-red-950 border-red-400 text-red-300" : "bg-green-900 border-lime-400 text-lime-400"

  return (
    <div className="fixed top-20 right-4 left-4 sm:left-auto z-50 notification sm:max-w-sm" role="status">
      <div className={`p-4 border rounded-md flex items-center shadow-lg ${colors}`}>
        {children}
      </div>
    </div>
  )
}
