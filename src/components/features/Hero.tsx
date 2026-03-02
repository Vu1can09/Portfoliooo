"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowRight, Download } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const TYPEWRITER_SUBJECTS = [
    "Custom RISC-V Core Design",
    "Hardware Acceleration for AI",
    "FPGA & Embedded Systems",
    "Full-Stack Web Applications",
    "Performance-Oriented Architecture",
];

export function Hero() {
    const currentSkill = useTypewriter(TYPEWRITER_SUBJECTS);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
        },
    };

    return (
        <section className="relative flex min-h-[100svh] w-full items-center justify-start overflow-hidden pt-16">

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="flex max-w-4xl flex-col items-start gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-[var(--color-accent-blue)] backdrop-blur-glass shadow-[var(--box-shadow-glass)] font-medium tracking-wide"
                    >
                        <span className="relative mr-2 flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent-blue)] opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent-blue)]"></span>
                        </span>
                        Available for new opportunities
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex flex-col gap-2">
                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl text-foreground">
                            Yashvardhan{" "}
                            <span className="bg-[image:var(--background-image-accent-gradient)] bg-clip-text text-transparent pb-2 block sm:inline">
                                Singh
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex h-16 sm:h-auto items-center">
                        <p className="text-xl font-medium tracking-tight text-foreground/60 sm:text-3xl lg:text-4xl">
                            Specializing in <span className="font-semibold text-foreground">{currentSkill}</span>
                            <span className="ml-[2px] inline-block h-[0.8em] w-[3px] animate-pulse align-baseline bg-[var(--color-accent-blue)]"></span>
                        </p>
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl text-base text-foreground/50 sm:text-lg sm:leading-relaxed"
                    >
                        Bridging the gap between low-level hardware architecture and high-performance
                        web ecosystems. Crafting digital experiences from the logic gates up to the DOM.
                    </motion.p>

                    <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-4">
                        <a href="#projects" className="group relative flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-8 font-semibold text-background transition-all hover:scale-[1.02] active:scale-[0.98]">
                            <span className="relative z-10 transition-colors group-hover:text-white">Explore Work</span>
                            <ArrowRight className="relative z-10 h-4 w-4 transition-all group-hover:translate-x-1 group-hover:text-white" />
                            <div className="absolute inset-0 z-0 bg-[image:var(--background-image-accent-gradient)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </a>
                        <a href="/resume.pdf" download className="group flex h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-glass px-8 font-semibold text-foreground transition-all hover:bg-white/10 hover:border-white/20 active:scale-[0.98]">
                            <Download className="h-4 w-4" />
                            <span>Download Resume</span>
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12 flex items-center gap-6">
                        <a
                            href="https://github.com/Vu1can09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/40 transition-colors hover:text-foreground"
                        >
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://linkedin.com/in/vu1can"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/40 transition-colors hover:text-[var(--color-accent-blue)]"
                        >
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="https://www.instagram.com/yashvardhan.0912"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/40 transition-colors hover:text-[var(--color-accent-violet)]"
                        >
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
