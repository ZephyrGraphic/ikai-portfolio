"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/components/providers"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="about" className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden mb-12 py-24">
      
      {/* Right Image */}
      <motion.div 
         initial={{ opacity: 0, x: 100 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, delay: 0.5 }}
         className="absolute right-0 bottom-0 h-[50vh] md:h-[90vh] w-[40vw] md:w-[35vw] z-0 hidden md:block pointer-events-none"
      >
          <div className="relative w-full h-full">
            <Image 
              src="/hero-left.png" 
              alt="Haikal Right" 
              fill
              className="object-contain object-right-bottom"
              priority
              sizes="(max-width: 768px) 100vw, 35vw"
            />
         </div>
      </motion.div>


      <div className="w-full max-w-7xl relative z-10 text-center md:text-left px-4">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-accent font-medium mb-6 tracking-[0.2em] text-sm md:text-base uppercase"
        >
          {t.hero.greeting}
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.9] tracking-tighter mb-2"
          >
            {t.hero.headline}
          </motion.h2>
        </div>
        
        <div className="overflow-hidden mb-10">
            <motion.h2 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-bold text-galaxy leading-[0.9] tracking-tighter"
          >
            {t.hero.headlineHighlight}
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-muted-foreground text-lg md:text-2xl max-w-2xl leading-relaxed mb-12 md:max-w-3xl"
        >
          {t.hero.description}
        </motion.p>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.6 }}
           className="flex flex-col md:flex-row gap-6 md:items-center"
        >
          <a
            href="#projects"
            className="group flex items-center gap-4 text-foreground text-lg font-medium hover:text-accent transition-colors"
          >
            <span className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:scale-110 group-hover:border-accent transition-all duration-300">
                <ArrowDown className="w-5 h-5" />
            </span>
            {t.hero.ctaProject}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
