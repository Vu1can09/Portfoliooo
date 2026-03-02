"use client";

import { motion } from "framer-motion";
import { GraduationCap, Cpu, Layers, Activity, Server } from "lucide-react";

export function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
        },
    };

    const stats = [
        {
            icon: <Layers className="h-5 w-5 text-[var(--color-accent-blue)]" />,
            label: "5+ Advanced",
            sublabel: "Engineering Projects",
        },
        {
            icon: <Cpu className="h-5 w-5 text-[var(--color-accent-violet)]" />,
            label: "5-Stage Custom",
            sublabel: "RISC-V Pipeline",
        },
        {
            icon: <Activity className="h-5 w-5 text-[var(--color-accent-blue)]" />,
            label: "FPGA & PCB",
            sublabel: "Multi-Layer Experience",
        },
        {
            icon: <Server className="h-5 w-5 text-[var(--color-accent-violet)]" />,
            label: "Real-Time Platform",
            sublabel: "Streaming Development",
        },
    ];

    return (
        <section id="about" className="relative w-full py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16"
                >
                    {/* Text Content */}
                    <div className="flex flex-1 flex-col gap-8">
                        <motion.div variants={itemVariants} className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                System architecture, from <br className="hidden sm:block" />
                                <span className="bg-[image:var(--background-image-accent-gradient)] bg-clip-text text-transparent">silicon to the browser.</span>
                            </h2>
                            <p className="max-w-xl text-lg text-foreground/60 leading-relaxed">
                                Electronics & Communication Engineer with a strong systems mindset across
                                hardware and software. Experienced in designing pipelined RISC-V processors
                                with custom instruction extensions and building scalable, high-performance
                                full-stack applications.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col gap-4">
                            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-[var(--blur-glass)] shadow-[var(--box-shadow-glass)] transition-all hover:border-white/20 hover:shadow-[var(--box-shadow-glow-accent)]">
                                <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[var(--color-accent-blue)] opacity-10 blur-[80px]"></div>

                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="mt-1 rounded-full bg-white/10 p-2.5 backdrop-blur-sm">
                                        <GraduationCap className="h-5 w-5 text-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Ramaiah Institute of Technology</h3>
                                        <p className="text-sm text-foreground/60 mt-1">BTech in Electronics and Communication</p>
                                        <p className="text-xs text-[var(--color-accent-blue)] mt-2 font-medium tracking-wide">AUG 2023 – MAY 2027</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <motion.div
                        variants={itemVariants}
                        className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-[var(--blur-glass)] transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                            >
                                {/* Subtle Hover Glow */}
                                <div className="absolute inset-0 z-0 bg-[image:var(--background-image-accent-gradient)] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]"></div>

                                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 border border-white/5">
                                    {stat.icon}
                                </div>
                                <div className="relative z-10 space-y-1">
                                    <h4 className="font-bold text-foreground tracking-tight">{stat.label}</h4>
                                    <p className="text-sm text-foreground/50">{stat.sublabel}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
