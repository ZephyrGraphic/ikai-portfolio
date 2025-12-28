"use client"

import { motion } from "framer-motion"
import { Github, Instagram, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

// Since Lucide doesn't have a specific TikTok icon in all versions or it might be named differently,
// we can use a custom SVG or a generic Video/Music icon if not found. 
// However, Lucide typically has generic social icons. If Tiktok is missing, I'll use a placeholder SVG.
// Update: newer lucide-react might not have it. I'll use a custom SVG for TikTok to be safe/aesthetic.

const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/ZephyrGraphic",
    icon: Github,
    color: "hover:text-foreground"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/h1call/",
    icon: Instagram,
    color: "hover:text-[#E4405F]"
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@yangkai.7k",
    icon: ({ className }: { className?: string }) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    color: "hover:text-[#000000] dark:hover:text-white" // TikTok brand is usually black/white foundation
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6281574627052",
    icon: Phone,
    color: "hover:text-[#25D366]"
  }
]

export function SocialSidebar() {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {SOCIALS.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          className={cn(
            "p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-sm text-muted-foreground transition-all duration-300 hover:scale-110",
            social.color
          )}
          whileHover={{ x: -4 }}
        >
          <social.icon className="w-5 h-5" />
          <span className="sr-only">{social.name}</span>
          
          {/* Tooltip on Hover */}
          <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 rounded bg-popover text-popover-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {social.name}
          </span>
        </motion.a>
      ))}
      
      {/* Decorative Line */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-px bg-border/50 mx-auto"
      />
    </div>
  )
}
