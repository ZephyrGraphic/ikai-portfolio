"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/providers"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: t.sidebar.about, href: "#about" },
    { name: t.sidebar.experience, href: "#experience" },
    { name: t.sidebar.projects, href: "#projects" },
    { name: t.sidebar.contact, href: "#contact" },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-12 pointer-events-none">
        {/* Logo Area */}
        <Link href="/" className="pointer-events-auto">
          <h1 className="text-xl font-bold tracking-tight text-foreground mix-blend-difference">
            Haikal.
          </h1>
        </Link>

        {/* Menu Trigger */}
        <div className="flex items-center gap-4 pointer-events-auto">
          {/* Theme Toggle - Minimal */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 group"
          >
            <span className="hidden md:block font-medium text-sm tracking-widest group-hover:text-accent transition-colors">MENU</span>
            <div className="p-3 bg-foreground text-background rounded-full hover:scale-110 transition-transform">
              <Menu className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-background flex flex-col justify-center items-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 md:top-12 md:right-12 p-4 hover:rotate-90 transition-transform duration-500"
            >
              <X className="w-8 h-8 text-foreground" />
            </button>

            <nav className="flex flex-col gap-8 text-center">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-6xl font-bold hover:text-accent transition-colors overflow-hidden group"
                >
                  <motion.div
                     initial={{ y: "100%" }}
                     animate={{ y: 0 }}
                     transition={{ delay: 0.2 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              ))}
            </nav>

            <div className="absolute bottom-12 flex gap-8">
               <button
                  onClick={() => setLanguage(language === "id" ? "en" : "id")}
                  className="text-lg font-bold hover:text-accent transition-colors"
                >
                  {language === "id" ? "EN" : "ID"}
                </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
