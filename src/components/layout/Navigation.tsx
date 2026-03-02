"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export function Navigation() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Principles", href: "#principles" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className={`fixed top-0 left-0 right-0 z-50 flex h-16 w-full items-center transition-all duration-300 ${isScrolled
                ? "bg-background/70 backdrop-blur-md border-b border-white/10 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand Name / Initial */}
                <a
                    href="#"
                    className="text-lg font-bold tracking-tighter text-foreground transition-colors hover:text-[var(--color-accent-blue)]"
                >
                    Home
                </a>

                {/* Center Navigation Links (Hidden on small screens) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Social Icons (Right) */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/Vu1can09"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/50 transition-colors hover:text-foreground"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/vu1can"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/50 transition-colors hover:text-[var(--color-accent-blue)]"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="https://www.instagram.com/yashvardhan.0912"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/50 transition-colors hover:text-[var(--color-accent-violet)]"
                    >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </a>
                </div>
            </div>
        </motion.header>
    );
}
