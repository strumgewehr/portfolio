"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function SplitText({
  text,
  as: Tag = "span",
  className = "",
  delay = 0,
  stagger = 0.06,
  once = true,
}: {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top pb-[0.1em] mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
