"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/components/providers"
import { Briefcase, GraduationCap, Code, Palette, Cpu } from "lucide-react"

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-16 w-full mb-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* About / Skills Intro */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-4">{t.about.title}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6 text-justify">
              {t.about.story}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-4 rounded-xl bg-secondary/20 border border-border">
              <div className="flex items-center gap-2 mb-3">
                 <Code className="w-5 h-5 text-accent" />
                 <h4 className="font-bold text-foreground">Core Tech</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.about.skills.core.map(skill => (
                  <span key={skill} className="px-2 py-1 bg-background text-foreground text-xs rounded border border-border">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/20 border border-border">
                  <div className="flex items-center gap-2 mb-3">
                     <Palette className="w-5 h-5 text-accent" />
                     <h4 className="font-bold text-foreground">Creative</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.about.skills.creative.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-background text-foreground text-xs rounded border border-border">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary/20 border border-border">
                  <div className="flex items-center gap-2 mb-3">
                     <Cpu className="w-5 h-5 text-accent" />
                     <h4 className="font-bold text-foreground">Technical</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {t.about.skills.technical.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-background text-foreground text-xs rounded border border-border">{skill}</span>
                    ))}
                  </div>
                </div>
            </div>
          </motion.div>
        </div>


        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-5 h-5 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">{t.experience.title}</h3>
            </div>

            <div className="space-y-8 border-l border-border pl-6">
              {t.experience.roles.map((role, index) => (
                <div key={index} className="relative">
                   <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-accent" />
                   <span className="text-xs font-mono text-accent mb-1 block">{role.period}</span>
                   <h4 className="text-lg font-bold text-foreground leading-tight">{role.title}</h4>
                   <p className="text-muted-foreground font-medium text-sm mb-1">{role.company}</p>
                   <p className="text-muted-foreground/80 text-xs leading-relaxed max-w-sm">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
             <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">{t.experience.educationTitle}</h3>
            </div>

            <div className="space-y-8 border-l border-border pl-6">
              {t.experience.education.map((edu, index) => (
                <div key={index} className="relative">
                   <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-muted" />
                   <span className="text-xs font-mono text-muted-foreground mb-1 block">{edu.period}</span>
                   <h4 className="text-lg font-bold text-foreground leading-tight">{edu.school}</h4>
                   <p className="text-accent font-medium text-sm mb-1">{edu.degree}</p>
                   <p className="text-[10px] uppercase tracking-widest text-muted-foreground/80">{edu.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
