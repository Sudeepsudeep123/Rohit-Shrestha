import { motion } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/animations';
import { trainer } from '@/data/trainer';

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="section-pad relative overflow-hidden bg-ink-900"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Professional Credentials"
          title={
            <>
              Train with{' '}
              <span className="text-lime-300">Confidence.</span>
            </>
          }
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]"
        >
          {/* Main credential card */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 p-8 md:p-12"
          >
            {/* glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="relative flex flex-col gap-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-lime-300" />
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
                    Certified
                  </span>
                </div>
                <GraduationCap className="h-7 w-7 text-white/30" />
              </div>

              <div>
                <div className="font-display text-[clamp(4rem,12vw,8rem)] uppercase leading-none tracking-tightest text-white">
                  Level <span className="text-lime-300">4</span>
                </div>
                <div className="mt-2 font-display text-2xl uppercase tracking-tight text-white/90 sm:text-3xl">
                  {trainer.certification.title}
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                <Award className="h-5 w-5 text-lime-300" />
                <span className="text-sm font-medium text-white/70">
                  {trainer.certification.institution}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Explanation card */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col justify-center rounded-2xl border border-white/10 bg-ink-800/40 p-8 md:p-10"
          >
            <p className="text-lg leading-relaxed text-white/75">
              Professional certification supporting Rohit&apos;s work as a
              personal trainer and fitness coach.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'EREPS Level-4 qualification',
                'Classic Fitness Academy',
                'Professional coaching standard',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-300" />
                  <span className="text-sm text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
