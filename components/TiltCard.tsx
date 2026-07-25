"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function supportsHover() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), {
    stiffness: 180,
    damping: 22,
    mass: 0.6,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 22,
    mass: 0.6,
  });
  const liftY = useSpring(0, { stiffness: 180, damping: 22 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!supportsHover()) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleEnter() {
    if (!supportsHover()) return;
    liftY.set(-8);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
    liftY.set(0);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchEnd={handleLeave}
      style={{
        rotateX,
        rotateY,
        y: liftY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      transition={{ duration: 0.5, ease }}
      className={className}
    >
      {children}
    </motion.article>
  );
}
