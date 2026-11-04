"use client";

import { motion } from "framer-motion";

export function PageIntro({ eyebrow, title, description, children }) {
  return (
    <motion.section initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className="mx-auto max-w-6xl px-6 pb-20 pt-20 text-center sm:pt-28 lg:pt-36">
      {eyebrow && <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">{eyebrow}</p>}
      <h1 className="mx-auto max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl dark:text-white">{title}</h1>
      {description && <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">{description}</p>}
      {children}
    </motion.section>
  );
}

export function MotionGrid({ children, className = "" }) {
  return <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }} className={className}>{children}</motion.div>;
}

export function MotionCard({ children, className = "" }) {
  return <motion.article variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -5 }} className={className}>{children}</motion.article>;
}
