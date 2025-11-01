/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { MessageCircle, Send, Mail, Plus, Phone } from "lucide-react"
import Link from "next/link"

export function QuickAccessButton() {
  const [isOpen, setIsOpen] = useState(false)
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M380.9 97.1C339 55.2 283.2 32 224.2 32 100.5 32 0 132.5 0 256c0 45.3 11.9 89.3 34.5 127.8L0 480l99.6-33.1C136.5 471.3 179.6 480 224.2 480 347.9 480 448 379.5 448 256c0-59-23.2-114.8-67.1-158.9zM224.2 438.4c-38.2 0-75.5-10.2-107.9-29.6l-7.7-4.6-59.1 19.6 19.6-57.7-5-7.9C47 328.6 36.8 292 36.8 256 36.8 151.6 120.6 67.8 224.2 67.8c54.1 0 104.9 21 143.1 59.2 38.1 38.1 59.2 89 59.2 143.1-.1 103.6-83.9 187.3-187.3 187.3zm101.3-138.4c-5.5-2.7-32.6-16.1-37.7-18-5.1-1.9-8.8-2.7-12.5 2.7s-14.4 18-17.7 21.7c-3.3 3.7-6.5 4.1-12 1.4-5.5-2.7-23.3-8.6-44.4-27.3-16.4-14.6-27.5-32.6-30.8-38.1-3.3-5.5-.4-8.5 2.5-11.2 2.6-2.6 5.5-6.9 8.2-10.3 2.7-3.4 3.7-5.8 5.5-9.6 1.8-3.7.9-7-0.5-9.7-1.4-2.7-12.5-30-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-7-.2-10.7-.2s-9.7 1.4-14.8 7c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.7 57.5c2.8 3.7 39.2 60 94.9 84.2 13.3 5.7 23.6 9.1 31.7 11.6 13.3 4.2 25.3 3.6 34.8 2.2 10.6-1.6 32.6-13.3 37.2-26.2 4.6-12.8 4.6-23.8 3.2-26.2-1.3-2.3-5-3.7-10.5-6.4z"/>
  </svg>
);
  const actions = [
    {
      id: "whatsapp",
      icon: WhatsAppIcon,
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      action: () => {
        const phoneNumber = "+212762744707"
        const message = encodeURIComponent("Bonjour SEDEC, je souhaite prendre un rendez-vous")
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
      },
    },
     {
      id: "phone",
      icon: Phone,
      label: "Phone",
      color: "bg-[#604928] hover:bg-[#8c6f45]",
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
      <div className="absolute bottom-24 right-2 flex flex-col gap-4 ">
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
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Main toggle button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center p-3 cursor-pointer  justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-[#c87704] hover:bg-[#ce8a2b] rotate-45" : "bg-[#BD9A68] hover:bg-[#BD9A68]"
        } text-white`}
      >
        <img src={"/images/customer-service.png"} alt="logo"/>
      </div>
    </div>
  )
}
