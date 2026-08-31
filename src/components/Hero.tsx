import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ArrowDown, MapPin, BadgeCheck } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { trainer } from '@/data/trainer';

const ease = [0.22, 1, 0.36, 1] as const;

const line = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease, delay: 0.15 + i * 0.12 },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToPrograms = () => {
    document.querySelector('#programs')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink-950"
    >
      {/* Background image */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <LazyImage
          src="https://images.pexels.com/photos/17201699/pexels-photo-17201699.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Focused male athlete leaning on a barbell in a dimly lit gym"
          className="h-full w-full"
          imgClassName="object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>

      {/* Overlays */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/30"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      <div className="absolute inset-0 z-10 grid-pattern opacity-40" />

      {/* Decorative side text */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 xl:block">
        <span className="text-[10px] font-semibold uppercase tracking-widest2 text-white/30">
          Strength / Discipline / Progression
        </span>
      </div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container-px relative z-20 pt-28"
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="flex items-center gap-2.5"
          >
            <span className="h-px w-10 bg-lime-300" />
            <span className="text-xs font-semibold uppercase tracking-widest2 text-lime-300">
              EREps Level-4 Certified Personal Trainer
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] uppercase leading-[0.88] tracking-tightest">
            <motion.span custom={0} variants={line} initial="hidden" animate="visible" className="block">
              Build Your
            </motion.span>
            <motion.span custom={1} variants={line} initial="hidden" animate="visible" className="block">
              Strongest{' '}
              <span className="text-lime-300">Self.</span>
            </motion.span>
          </h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/70"
          >
            Personal training built around your goals, your body, and your
            lifestyle.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.6 }}
            className="mt-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/60"
          >
            <MapPin className="h-4 w-4 text-lime-300" />
            {trainer.gym} • {trainer.location.area} • {trainer.location.city}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="btn-primary group"
            >
              Book a Personal Training Session
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              type="button"
              onClick={scrollToPrograms}
              className="btn-ghost group"
            >
              Explore Training
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Credential badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.85 }}
            className="mt-12 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 backdrop-blur-md"
          >
            <BadgeCheck className="h-5 w-5 text-lime-300" />
            <span className="text-sm font-medium text-white/80">
              {trainer.certification.full}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={scrollToPrograms}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-lime-300 md:flex"
        aria-label="Scroll to explore"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest2">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
}
