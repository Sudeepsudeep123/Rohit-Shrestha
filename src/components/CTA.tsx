import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/animations';
import { trainer } from '@/data/trainer';

export default function CTA() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink-950 py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <LazyImage
          src="https://images.pexels.com/photos/6389516/pexels-photo-6389516.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="A lone barbell on the gym floor in a moody atmosphere"
          className="h-full w-full"
          imgClassName="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-ink-950/85" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950" />

      {/* Animated glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        className="absolute left-1/2 top-1/2 z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300/10 blur-3xl"
      />

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-px relative z-20 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-display text-[clamp(2.5rem,8vw,6rem)] uppercase leading-[0.9] tracking-tightest"
        >
          Ready to Train
          <br />
          <span className="text-lime-300">With Purpose?</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70"
        >
          Let&apos;s build a stronger, fitter, more confident version of you.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button type="button" onClick={scrollToContact} className="btn-primary group">
            Book a Personal Training Session
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button type="button" onClick={scrollToContact} className="btn-ghost group">
            Contact Rohit
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-white/60"
        >
          <MapPin className="h-4 w-4 text-lime-300" />
          {trainer.gym} • {trainer.location.area}, {trainer.location.city}
        </motion.div>
      </motion.div>
    </section>
  );
}
