"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/components/providers"
import { toast } from "sonner"

export function Contact() {
  const { t } = useLanguage()

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@alexpratama.dev")
    toast.success(t.contact.copied)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    setTimeout(() => {
        toast.success(t.contact.form.success)
    }, 500)
  }

  return (
    <section id="contact" className="mb-12 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl p-8 border border-border shadow-sm"
      >
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t.contact.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t.contact.desc}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-foreground group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                    <span className="block text-sm text-muted-foreground">Email</span>
                    <span className="font-medium">{t.contact.info.email}</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="ml-auto text-xs text-muted-foreground hover:text-accent underline"
                >
                  {t.contact.copyEmail}
                </button>
              </div>

               <div className="flex items-center gap-4 text-foreground group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <span className="block text-sm text-muted-foreground">WhatsApp</span>
                   <span className="font-medium">{t.contact.info.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-foreground group">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <span className="block text-sm text-muted-foreground">Location</span>
                   <span className="font-medium max-w-xs block">{t.contact.info.address}</span>
                </div>
              </div>
            </div>
          </div>

          <form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t.contact.form.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder={t.contact.form.placeholderName}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t.contact.form.email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder={t.contact.form.placeholderEmail}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-1"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all placeholder:text-muted-foreground/50"
                placeholder={t.contact.form.placeholderMessage}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-medium py-2.5 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-accent/25"
            >
               {t.contact.form.submit} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
