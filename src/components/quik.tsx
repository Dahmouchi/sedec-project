/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"
import Link from "next/link"

export function QuickAccessButton() {
  const [isOpen, setIsOpen] = useState(false)

  const openWhatsApp = () => {
    const phoneNumber = "+212668506882"
    const message = encodeURIComponent("Bonjour SEDEC, je souhaite prendre un rendez-vous")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  const callPhone = () => {
    window.location.href = "tel:+212537741119"
  }

  return (
    <div className="fixed bottom-20 right-5 z-50">
      {/* Background overlay */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}

      {/* Action buttons */}
      <div className="absolute bottom-24 right-2 flex flex-col gap-4">

        {/* WhatsApp Button */}
        <div
          className={`transform transition-all duration-300 ease-out origin-bottom-right z-50 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
            <img
            onClick={() => {
              openWhatsApp()
              setIsOpen(false)
            }}
            src="/whatsapp.png" alt="WhatsApp" className="w-12 cursor-pointer h-auto z-50" />
        </div>

        {/* Phone Button */}
        <div
          className={`transform transition-all z-50 duration-300 ease-out origin-bottom-right ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
          style={{ transitionDelay: "50ms" }}
        >
          <div
            onClick={() => {
              callPhone()
              setIsOpen(false)
            }}
            className="flex items-center z-50 gap-3 bg-[#604928] hover:bg-[#8c6f45] text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl cursor-pointer"
          >
            <Phone className="w-5 h-5" />
          </div>
        </div>

        {/* Contact Button */}
        <div
          className={`transform transition-all z-50 duration-300 ease-out origin-bottom-right ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 z-50 bg-[#BD9A68] hover:bg-[#ce8a2b] text-white rounded-full p-3 shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Main toggle button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 cursor-pointer ${
          isOpen
            ? "bg-[#c87704] hover:bg-[#ce8a2b] rotate-45"
            : "bg-[#BD9A68] hover:bg-[#BD9A68]"
        } text-white`}
      >
        <img src="/optimized/customer-service.webp" alt="logo" className="w-8 h-8" />
      </div>
    </div>
  )
}
