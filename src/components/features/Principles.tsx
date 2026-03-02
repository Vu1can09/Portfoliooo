"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Cpu } from "lucide-react";

export function Principles() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
    };

    const principles = [
        {
            icon: <Zap className="h-5 w-5 text-[var(--color-accent-blue)]" />,
            title: "Performance-Driven Architecture",
            description: "Optimizing cycle counts in hardware and minimizing Time-to-Interactive on the web. Speed is a feature, not an afterthought."
        },
        {
            icon: <ShieldCheck className="h-5 w-5 text-[var(--color-accent-violet)]" />,
            title: "Clean System Design",
            description: "Separation of concerns enforced at every layer. Composable React components mirror modular RTL blocks."
        },
        {
            icon: <Cpu className="h-5 w-5 text-foreground" />,
            title: "Hardware-Software Co-Optimization",
            description: "Understanding the full stack isn't enough; profiling software against the architectural bottlenecks of the silicon running it is key."
        }
    ];

    return (
        <section id="principles" className="relative w-full py-24 sm:py-32 overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-12"
                >
                    <motion.div variants={itemVariants} className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            Engineering <span className="bg-[image:var(--background-image-accent-gradient)] bg-clip-text text-transparent">Principles</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group relative flex flex-col gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/40 ring-1 ring-white/10">
                                    {principle.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground tracking-tight">{principle.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-foreground/50">{principle.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
