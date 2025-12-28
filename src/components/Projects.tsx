"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Monitor, Smartphone, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/providers"
import Image from "next/image"

export function Projects() {
  const { t } = useLanguage()

  const projectIcons = [Monitor, Smartphone]
  const projectItems = t.projects.items

  return (
    <section id="projects" className="py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 w-full mb-12">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
           <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.projects.title}
           </h3>
           <p className="text-muted-foreground">{t.projects.viewAll}</p>
        </motion.div>
      </div>

      {/* Native CSS Scroll Container */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory flex gap-6 px-4 md:px-12 pb-12 scrollbar-none">
          {projectItems.map((project, index) => {
             // We can keep icons as fallback or decorative if no image, but here we assume images are added
             return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center flex flex-col gap-6 p-6 md:p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-accent transition-colors group"
              >
                  {/* Image Area */}
                  <div className="w-full aspect-[16/10] bg-muted/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                     {/* @ts-ignore */}
                     {project.image ? (
                        <div className="relative w-full h-full">
                           <Image 
                              src={project.image} 
                              alt={project.title} 
                              fill 
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           />
                        </div>
                     ) : (
                        <Monitor className="w-20 h-20 text-muted-foreground/20 group-hover:text-accent/20 transition-colors" />
                     )}
                     
                     <a href={project.link} target="_blank" className="absolute bottom-4 right-4 p-3 bg-foreground text-background rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <ArrowUpRight className="w-5 h-5" />
                     </a>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-foreground mb-3">{project.title}</h4>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed flex-1">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs border border-border rounded-full text-muted-foreground bg-background/50">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 mt-auto">
                        <a href={project.link} target="_blank" className="text-sm font-semibold flex items-center gap-2 hover:text-accent transition-colors">
                           <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                         <a href="https://github.com/ZephyrGraphic" target="_blank" className="text-sm font-semibold flex items-center gap-2 hover:text-accent transition-colors">
                           <Github className="w-4 h-4" /> Code
                        </a>
                    </div>
                  </div>
              </motion.div>
             )
          })}
      </div>
    </section>
  )
}
