/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { MessageCircle, Send, Mail, Plus, Phone } from "lucide-react"
import Link from "next/link"

export function QuickAccessButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      action: () => {
        const phoneNumber = "+212762744707"
        const message = encodeURIComponent("Bonjour je souhaite faire une réservation")
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
      },
    },
     {
      id: "phone",
      icon: Phone,
      label: "Phone",
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => {
        window.location.href = "tel:+212762744707"
      },

    },
    {
      id: "contact",
      icon: Mail,
      label: "Contact",
      color: "bg-[#BD9A68] hover:bg-bg-[#ce8a2b]",
      href: "/contact",
    },
  ]

  return (
    <div className="fixed bottom-20 right-5 z-50">
      {/* Background overlay when menu is open */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}

      {/* Action buttons */}
      <div className="absolute bottom-24 right-0 flex flex-col gap-4 ">
        {actions.map((action, index) => {
          const Icon = action.icon
          const isVisible = isOpen
          const delay = index * 50

          return (
            <div
              key={action.id}
              className={`transform transition-all cursor-pointer puts duration-300 ease-out origin-bottom-right ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
              }`}
              style={{
                transitionDelay: isVisible ? `${delay}ms` : "0ms",
              }}
            >
              {action.href ? (
                <Link
                  href={action.href}
                  className={`flex  items-center gap-3 ${action.color} text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium pr-2">{action.label}</span>
                </Link>
              ) : (
                <div
                  onClick={() => {
                    action.action?.()
                    setIsOpen(false)
                  }}
                  className={`flex items-center cursor-pointer gap-3 ${action.color} text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium pr-2">{action.label}</span>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Main toggle button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center p-2 cursor-pointer  justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-[#c87704] hover:bg-[#ce8a2b] rotate-45" : "bg-[#BD9A68] hover:bg-[#BD9A68]"
        } text-white`}
      >
        <img src={"/images/logowhite.png"} alt="logo"/>
      </div>
    </div>
  )
}
