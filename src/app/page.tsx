import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <footer className="text-center text-sm text-muted-foreground py-6 border-t border-border">
        <p>
          &copy; 2024 Haikal. Dibuat dengan{" "}
          <span className="text-accent">♥</span> dan Ayam Geprek.
        </p>
      </footer>
    </>
  );
}
