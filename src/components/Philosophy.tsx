import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import LazyImage from '@/components/LazyImage';
import { viewportOnce } from '@/lib/animations';

const words = ['Discipline', 'Consistency', 'Progression', 'Performance'];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-ink-950"
    >
      {/* Background */}
      <motion.div style={{ y: imageY }} className="absolute inset-0 z-0 scale-110">
        <LazyImage
          src="https://images.pexels.com/photos/4720793/pexels-photo-4720793.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Muscular man lifting a barbell in a gym"
          className="h-full w-full"
          imgClassName="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 z-10 bg-ink-950/80" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-ink-950 via-ink-950/50 to-ink-950" />

      {/* Content */}
      <div className="container-px relative z-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] uppercase leading-[0.9] tracking-tightest"
        >
          Don&apos;t Just Work Out.
          <br />
          <span className="text-lime-300">Train With Purpose.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
        >
          Progress comes from consistency, intelligent training, proper
          technique, and patience.
        </motion.p>

        {/* Animated words */}
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2 + i * 0.12,
              }}
              className="font-display text-2xl uppercase tracking-tight text-white/40 transition-colors hover:text-lime-300 sm:text-3xl"
            >
              {w}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
