/* eslint-disable @next/next/no-img-element */
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  translations: {
    whoWeAre: string
    ourSolutions: string
    ourProjects: string
    environment: string
    news: string
    proSpace: string
    contact: string
  }
  locale?: string
}

export function SedecHeader({ translations, locale = "fr" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // 🧠 Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true)
      else setScrolled(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-16 lg:py-4">
        <nav className="flex items-center justify-between h-20">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex font-serif items-center justify-center w-full gap-8 px-6 border-y-4 border-[#8E3921] py-6">
            <Link
              href={`/${locale}/qui-sommes-nous`}
              className="text-[#D4A574] hover:text-[#8E3921] transition-colors font-medium"
            >
              {translations.whoWeAre}
            </Link>
            <Link
              href={`/${locale}/solutions`}
              className="text-[#8E3921] hover:text-[#D4A574] transition-colors font-medium"
            >
              {translations.ourSolutions}
            </Link>
            <Link
              href={`/${locale}/realisations`}
              className="text-[#8E3921] hover:text-[#D4A574] transition-colors font-medium"
            >
              {translations.ourProjects}
            </Link>
          </div>

          {/* Logo - Center */}
          <Link href={`/${locale}`} className="flex flex-col items-center gap-1 w-full">
            <img src="/images/logo.png" alt="Logo" className="lg:w-26 w-16 h-auto" />
          </Link>

          {/* Right Navigation - Desktop */}
          <div className="hidden w-full lg:flex font-serif justify-center items-center gap-8 border-y-4 px-6 border-[#8E3921] py-6">
            <Link
              href={`/${locale}/environnement`}
              className="text-[#8E3921] hover:text-[#D4A574] transition-colors font-medium"
            >
              {translations.environment}
            </Link>
            <Link
              href={`/${locale}/actualites`}
              className="text-[#8E3921] hover:text-[#D4A574] transition-colors font-medium"
            >
              {translations.news}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-[#8E3921] hover:text-[#D4A574] transition-colors font-medium"
            >
              {translations.contact}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#8E3921]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#8E3921]/20 bg-white shadow-sm">
            <div className="flex flex-col gap-4">
              {[
                ["qui-sommes-nous", translations.whoWeAre],
                ["solutions", translations.ourSolutions],
                ["realisations", translations.ourProjects],
                ["environnement", translations.environment],
                ["actualites", translations.news],
                ["espace-pro", translations.proSpace],
                ["contact", translations.contact],
              ].map(([path, label]) => (
                <Link
                  key={path}
                  href={`/${locale}/${path}`}
                  className="text-[#8E3921] hover:text-[#D4A574] transition-colors font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
