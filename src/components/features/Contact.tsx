"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle, Github, Linkedin, Instagram } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({ subject: "", name: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [errors, setErrors] = useState({ subject: "", name: "", message: "" });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { subject: "", name: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus("submitting");

        // Construct the mailto link
        try {
            await new Promise((resolve) => setTimeout(resolve, 800));

            const subject = encodeURIComponent(`${formData.subject}`);
            const body = encodeURIComponent(`Name: ${formData.name}\n\nMessage:\n${formData.message}`);

            window.location.href = `mailto:yashvardhansingh0912@gmail.com?subject=${subject}&body=${body}`;

            setStatus("success");
            setFormData({ subject: "", name: "", message: "" });

            // Reset success state after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative w-full py-24 sm:py-32">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 gap-16 lg:grid-cols-2"
                >
                    {/* Contact Info */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                Let&apos;s <span className="bg-[image:var(--background-image-accent-gradient)] bg-clip-text text-transparent">Connect</span>
                            </h2>
                            <p className="mt-4 max-w-md text-lg text-foreground/60">
                                Whether you&apos;re looking to build cutting-edge web infrastructure or
                                optimize hardware architectures, I&apos;m open to discussing new opportunities.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-[var(--blur-glass)]">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/10">
                                    <Mail className="h-5 w-5 text-[var(--color-accent-violet)]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Direct Email</h3>
                                    <a
                                        href="mailto:yashvardhansingh0912@gmail.com"
                                        className="mt-1 block text-foreground/60 transition-colors hover:text-[var(--color-accent-blue)]"
                                    >
                                        yashvardhansingh0912@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/10">
                                    <Github className="h-5 w-5 text-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">GitHub</h3>
                                    <a
                                        href="https://github.com/Vu1can09"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-foreground/60 transition-colors hover:text-foreground"
                                    >
                                        github.com/Vu1can09
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/10">
                                    <Linkedin className="h-5 w-5 text-[var(--color-accent-blue)]" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                                    <a
                                        href="https://linkedin.com/in/vu1can"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-foreground/60 transition-colors hover:text-[var(--color-accent-blue)]"
                                    >
                                        linkedin.com/in/vu1can
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/40 ring-1 ring-white/10">
                                    <Instagram className="h-5 w-5 text-pink-500" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">Instagram</h3>
                                    <a
                                        href="https://www.instagram.com/yashvardhan.0912"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 block text-foreground/60 transition-colors hover:text-pink-500"
                                    >
                                        @yashvardhan.0912
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-[var(--blur-glass)] shadow-[var(--box-shadow-glass)]"
                    >
                        <div className="space-y-1.5">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground/80">
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                value={formData.subject || ""}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-foreground placeholder-white/20 outline-none transition-all focus:ring-2 ${errors.subject
                                    ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                                    : "border-white/10 focus:border-[var(--color-accent-blue)]/50 focus:ring-[var(--color-accent-blue)]/20 hover:border-white/20"
                                    }`}
                                placeholder="Project Inquiry"
                                disabled={status === "submitting"}
                            />
                            {errors.subject && (
                                <span className="flex items-center gap-1 text-xs text-red-500">
                                    <AlertCircle className="h-3 w-3" /> {errors.subject}
                                </span>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="name" className="text-sm font-medium text-foreground/80">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={formData.name || ""}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className={`w-full rounded-xl border bg-black/40 px-4 py-3 text-foreground placeholder-white/20 outline-none transition-all focus:ring-2 ${errors.name
                                    ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                                    : "border-white/10 focus:border-[var(--color-accent-blue)]/50 focus:ring-[var(--color-accent-blue)]/20 hover:border-white/20"
                                    }`}
                                placeholder="xyz"
                                disabled={status === "submitting"}
                            />
                            {errors.name && (
                                <span className="flex items-center gap-1 text-xs text-red-500">
                                    <AlertCircle className="h-3 w-3" /> {errors.name}
                                </span>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label htmlFor="message" className="text-sm font-medium text-foreground/80">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message || ""}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className={`w-full resize-none rounded-xl border bg-black/40 px-4 py-3 text-foreground placeholder-white/20 outline-none transition-all focus:ring-2 ${errors.message
                                    ? "border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20"
                                    : "border-white/10 focus:border-[var(--color-accent-blue)]/50 focus:ring-[var(--color-accent-blue)]/20 hover:border-white/20"
                                    }`}
                                placeholder="How can we work together?"
                                disabled={status === "submitting"}
                            />
                            {errors.message && (
                                <span className="flex items-center gap-1 text-xs text-red-500">
                                    <AlertCircle className="h-3 w-3" /> {errors.message}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting" || status === "success"}
                            className="group relative mt-2 flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-foreground font-semibold text-background transition-all disabled:opacity-70"
                        >
                            {status === "idle" && (
                                <>
                                    <span className="relative z-10 transition-colors group-hover:text-white">Send Message</span>
                                    <Send className="relative z-10 h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                                    <div className="absolute inset-0 z-0 bg-[image:var(--background-image-accent-gradient)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                </>
                            )}
                            {status === "submitting" && (
                                <div className="h-5 w-5 animate-spin rounded-full border-2 border-[var(--color-foreground)] border-t-transparent" />
                            )}
                            {status === "success" && (
                                <span className="flex items-center gap-2 text-green-500">
                                    <CheckCircle2 className="h-5 w-5" /> Message Sent
                                </span>
                            )}
                            {status === "error" && (
                                <span className="flex items-center gap-2 text-red-500">
                                    <AlertCircle className="h-5 w-5" /> Failed to Send
                                </span>
                            )}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
