"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import { Hero } from "@/components/features/Hero";
import { About } from "@/components/features/About";
import { Skills } from "@/components/features/Skills";
import { ProjectsSection } from "@/components/features/ProjectsSection";
import { Principles } from "@/components/features/Principles";
import { Contact } from "@/components/features/Contact";

export default function Home() {
  useEffect(() => {
    // Disable browser's default scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Clear hash if present to prevent auto-scrolling to section
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Force scroll to top
    window.scrollTo(0, 0);

    // Re-enable smooth scrolling for intra-page navigation
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex min-h-screen w-full flex-col items-center overflow-x-hidden"
    >
      <div className="w-full flex flex-col gap-0 md:gap-10">
        <Hero />

        <div className="w-full bg-white/[0.01] border-y border-white/5">
          <About />
        </div>

        <Skills />

        <div className="w-full bg-white/[0.01] border-y border-white/5">
          <ProjectsSection />
        </div>

        <section className="w-full flex flex-col pt-10">
          <Principles />
        </section>

        <div className="w-full bg-black/20 border-t border-white/5">
          <Contact />
        </div>
      </div>
    </motion.main>
  );
}
