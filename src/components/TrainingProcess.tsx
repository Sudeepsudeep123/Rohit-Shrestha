import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Understand your current fitness level, goals, training experience, and starting point.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Create a structured training approach around your goals.',
  },
  {
    number: '03',
    title: 'Train',
    description:
      'Execute workouts with coaching, proper technique, and progressive development.',
  },
  {
    number: '04',
    title: 'Progress',
    description: 'Track improvement and adjust training as needed.',
  },
];

export default function TrainingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="container-px">
        <SectionHeading
          eyebrow="Training Process"
          title={
            <>
              Your Journey
              <br />
              Starts <span className="text-lime-300">Here.</span>
            </>
          }
        />

        {/* Desktop horizontal timeline */}
        <motion.div
          ref={ref}
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 hidden md:block"
        >
          {/* Base line */}
          <div className="absolute left-0 right-0 top-[3.25rem] h-px bg-white/10" />
          {/* Animated progress line */}
          <motion.div
            style={{ width: lineHeight }}
            className="absolute left-0 top-[3.25rem] h-px bg-lime-300"
          />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((s) => (
              <motion.div key={s.number} variants={fadeUp} className="relative">
                <div className="mb-6 flex h-[3.25rem] items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-900 font-display text-lg text-lime-300">
                    {s.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile vertical timeline */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-14 md:hidden"
        >
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-0 w-px bg-lime-300"
          />
          <div className="space-y-10">
            {steps.map((s) => (
              <motion.div key={s.number} variants={fadeUp} className="relative pl-16">
                <span className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-ink-900 font-display text-lg text-lime-300">
                  {s.number}
                </span>
                <h3 className="font-display text-2xl uppercase tracking-tight text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
