"use client";

import { motion } from "framer-motion";
import { ProjectCard, ProjectType } from "./ProjectCard";

const projects: ProjectType[] = [{
    title: "RISC-V Core with Custom AI Acceleration",
    description: "Designed a 5-stage pipelined RISC-V processor in Verilog with custom instruction extensions tailored for hardware-accelerated matrix multiplication and AI inference workloads.",
    techStack: ["Verilog", "RISC-V", "FPGA", "Computer Architecture"],
    githubUrl: "https://github.com/Vu1can09/RISCV-with-custom-hardware-acceleration",
},
{
    title: "Twitch Clone – Scalable Streaming Platform",
    description: "Architected a full-stack live streaming platform supporting real-time video broadcast, low-latency WebRTC chatting, and scalable user authentication using Next.js 14 and web sockets.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebRTC", "Socket.IO"],
    githubUrl: "https://github.com/Vu1can09/twitch-clone",
},
{
    title: "MP3 Player PCB Design",
    description: "Engineered a custom multi-layer PCB for a standalone MP3 player. Implemented digital-to-analog conversion logic, power management profiling, and integrated structural firmware testing.",
    techStack: ["KiCad", "PCB Design", "Hardware Engineering", "Microcontrollers"],
},
{
    title: "Smart Motion Alarm PCB",
    description: "Developed a compact motion-activated alarm system built around the ATmega328P. Handled schematic capture, board layout, component sourcing, and embedded C firmware programming.",
    techStack: ["ATmega328P", "Embedded C", "KiCad", "Sensors", "Circuit Design"],
},
{
    title: "RFID-Based Embedded Authentication System",
    description: "Constructed a secure physical access control system leveraging SPI/I2C communication protocols to interface RFID modules with microcontrollers for real-time cryptographic verification.",
    techStack: ["C/C++", "Embedded Systems", "SPI/I2C", "Security Protocols", "RFID"],
},
];

export function ProjectsSection() {
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
        <section id="projects" className="relative w-full py-24 sm:py-32">
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
                            Featured{" "}
                            <span className="bg-[image:var(--background-image-accent-gradient)] bg-clip-text text-transparent">Engineering</span>
                        </h2>
                        <p className="mt-4 text-lg text-foreground/60">
                            A selection of my technical implementations across embedded hardware,
                            custom silicon architecture, and full-stack web applications.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 [perspective:1000px]"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={project.title} project={project} index={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
