import type React from "react"
interface NotificationProps {
  children: React.ReactNode
}

export default function Notification({ children }: NotificationProps) {
  return (
    <div className="fixed top-20 right-4 z-50 notification max-w-sm">
      <div className="p-4 bg-green-900 border border-lime-400 text-lime-400 rounded-md flex items-center shadow-lg">
        {children}
      </div>
    </div>
  )
}
