"use client";

import { useState, useEffect } from "react";

export function useTypewriter(words: string[], typingSpeed = 60, deletingSpeed = 40, pauseTime = 2500) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const i = loopNum % words.length;
        const fullText = words[i];

        let delta = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && text === fullText) {
            delta = pauseTime;
        } else if (isDeleting && text === "") {
            delta = 300;
        }

        const timer = setTimeout(() => {
            if (!isDeleting && text === fullText) {
                setIsDeleting(true);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum((prev) => prev + 1);
            } else {
                setText((prev) =>
                    isDeleting
                        ? fullText.substring(0, prev.length - 1)
                        : fullText.substring(0, prev.length + 1)
                );
            }
        }, delta);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
}
