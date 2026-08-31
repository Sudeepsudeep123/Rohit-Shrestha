import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/animations';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={staggerParent}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={
        align === 'center'
          ? `flex flex-col items-center text-center ${className}`
          : `flex flex-col items-start ${className}`
      }
    >
      <motion.span variants={fadeUp} className="eyebrow">
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-5 text-4xl uppercase leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
