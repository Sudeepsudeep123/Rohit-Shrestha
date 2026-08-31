import { motion } from 'framer-motion';
import {
  Target,
  Activity,
  CalendarCheck,
  TrendingUp,
  Gauge,
  Leaf,
  type LucideIcon,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/animations';

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: 'Personalized Programming',
    description:
      'Training structured around individual goals and current ability.',
    icon: Target,
  },
  {
    title: 'Proper Technique',
    description: 'Focus on controlled movement and exercise form.',
    icon: Activity,
  },
  {
    title: 'Accountability',
    description: 'Stay consistent through structured coaching.',
    icon: CalendarCheck,
  },
  {
    title: 'Progressive Training',
    description:
      'Train with purpose and gradually develop your capabilities.',
    icon: TrendingUp,
  },
  {
    title: 'Performance Focus',
    description:
      'Build strength, conditioning, mobility, and physical performance.',
    icon: Gauge,
  },
  {
    title: 'Sustainable Progress',
    description:
      'Create training habits that can realistically fit your lifestyle.',
    icon: Leaf,
  },
];

export default function WhyTrain() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-900">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Train With Rohit"
          title={
            <>
              Your Goals.
              <br />
              A <span className="text-lime-300">Smarter Plan.</span>
            </>
          }
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="group relative flex flex-col gap-4 bg-ink-900/40 p-8 transition-colors duration-300 hover:bg-ink-800/50"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lime-300 transition-colors group-hover:border-lime-300/40">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg uppercase tracking-tight text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
