import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { fadeUp, fadeLeft, fadeRight, staggerParent, viewportOnce } from '@/lib/animations';
import { trainer } from '@/data/trainer';

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: '4', label: 'EREPS Certification Level', suffix: '' },
  { value: '1:1', label: 'Personal Training', suffix: '' },
  { value: '100', label: 'Goal Focused', suffix: '%' },
];

function CountUp({ end, suffix = '' }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * end));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-ink-950">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
              <LazyImage
                src="https://images.pexels.com/photos/30283460/pexels-photo-30283460.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Athletic man demonstrating strength in a gym setting"
                className="h-full w-full"
                imgClassName="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>
            {/* Floating credential chip */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-ink-800/90 px-6 py-5 backdrop-blur-md sm:block">
              <div className="font-display text-3xl uppercase text-lime-300">L4</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/60">
                EREPS Certified
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeRight} className="eyebrow">
              Meet Your Trainer
            </motion.span>
            <motion.h2
              variants={fadeRight}
              className="mt-5 text-4xl uppercase leading-[0.95] sm:text-5xl md:text-6xl"
            >
              More Than a Trainer.
              <br />
              Your Partner in{' '}
              <span className="text-lime-300">Progress.</span>
            </motion.h2>

            <motion.div variants={fadeRight} className="mt-7 space-y-5 text-white/70">
              <p className="leading-relaxed">
                {trainer.name} is a professional personal trainer based at{' '}
                {trainer.gym} in {trainer.location.area}, {trainer.location.city}.
              </p>
              <p className="leading-relaxed">
                His approach focuses on purposeful training, proper technique,
                progressive development, and creating training routines that
                are aligned with each client&apos;s goals and current fitness
                level.
              </p>
            </motion.div>

            {/* Credential highlight */}
            <motion.div
              variants={fadeRight}
              className="mt-8 flex flex-col gap-3 rounded-xl border-l-2 border-lime-300 bg-white/[0.03] px-5 py-4"
            >
              <div className="font-display text-xl uppercase text-white">
                {trainer.certification.level} {trainer.certification.title}
              </div>
              <div className="text-sm text-white/60">
                {trainer.certification.institution}
              </div>
            </motion.div>

            <motion.button
              variants={fadeRight}
              type="button"
              onClick={scrollToContact}
              className="btn-primary group mt-9"
            >
              Train With Rohit
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-3"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="flex flex-col items-center justify-center bg-ink-900/40 px-6 py-10 text-center"
            >
              <div className="font-display text-5xl uppercase text-lime-300 sm:text-6xl">
                {s.value === '1:1' ? (
                  '1:1'
                ) : (
                  <CountUp end={parseInt(s.value, 10)} suffix={s.suffix} />
                )}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/60">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
