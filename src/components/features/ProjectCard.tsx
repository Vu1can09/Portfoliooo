"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export interface ProjectType {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    liveUrl?: string;
}

interface ProjectCardProps {
    project: ProjectType;
    index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
            className="group relative flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-[var(--blur-glass)] transition-colors hover:border-white/20 hover:bg-white/10"
        >
            {/* Animated Border Glow */}
            <div
                className="absolute inset-0 z-0 bg-[image:var(--background-image-accent-gradient)] opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03] rounded-2xl"
                style={{ transform: "translateZ(-10px)" }}
            />

            <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-[var(--color-accent-blue)] transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-foreground/40">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-foreground"
                                aria-label={`GitHub repository for ${project.title}`}
                            >
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-colors hover:text-[var(--color-accent-blue)]"
                                aria-label={`Live demo for ${project.title}`}
                            >
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                    {project.description}
                </p>

                <div className="mt-auto pt-8 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-foreground/70 ring-1 ring-inset ring-white/10 transition-colors group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
