"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Cpu, Code2 } from "lucide-react";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-[var(--blur-glass)] transition-colors hover:border-white/20 hover:bg-white/10 ${className}`}
        >
            <div
                className="absolute inset-0 z-0 bg-[image:var(--background-image-accent-gradient)] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03] rounded-2xl"
                style={{ transform: "translateZ(-10px)" }}
            />
            <div style={{ transform: "translateZ(30px)" }}>{children}</div>
        </motion.div>
    );
}

export function Skills() {
    const hardwareSkills = [
        "RISC-V ISA & 5-Stage Pipeline Design",
        "Verilog",
        "FPGA",
        "Digital Logic",
        "Embedded Systems",
        "PCB Design (KiCad)",
        "Communication Systems",
    ];

    const softwareSkills = [
        "Next.js",
        "TypeScript",
        "Node.js",
        "C/C++",
        "Python",
        "Data Structures & Algorithms",
        "Linux",
        "Git",
    ];

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
        },
    };

    return (
        <section id="skills" className="relative w-full py-24 sm:py-32 overflow-hidden">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="h-[40rem] w-[40rem] rounded-full bg-[var(--color-accent-violet)]/10 blur-[120px]" />
            </div>

            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-16"
                >
                    <motion.div variants={itemVariants} className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            Technical{" "}
                            <span className="bg-[image:var(--background-image-accent-gradient)] bg-clip-text text-transparent">Arsenal</span>
                        </h2>
                        <p className="mt-4 text-lg text-foreground/60">
                            A comprehensive toolkit spanning low-level hardware architecture configuration
                            to high-level web application deployments.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 [perspective:1000px]">
                        {/* Hardware Category */}
                        <motion.div variants={itemVariants}>
                            <TiltCard className="h-full">
                                <div className="mb-8 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] ring-1 ring-[#00f0ff]/20">
                                        <Cpu className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                        Hardware & Architecture
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {hardwareSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-[#00f0ff]/50 hover:text-white"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </TiltCard>
                        </motion.div>

                        {/* Software Category */}
                        <motion.div variants={itemVariants}>
                            <TiltCard className="h-full">
                                <div className="mb-8 flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-violet)]/10 text-[var(--color-accent-violet)] ring-1 ring-[var(--color-accent-violet)]/20">
                                        <Code2 className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                        Software & Systems
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {softwareSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:border-[var(--color-accent-violet)]/50 hover:text-white"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </TiltCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
