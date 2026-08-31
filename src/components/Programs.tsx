import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import LazyImage from '@/components/LazyImage';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/animations';
import { programs } from '@/data/programs';

export default function Programs() {
  return (
    <section id="programs" className="section-pad relative overflow-hidden bg-ink-950">
      <div className="container-px">
        <SectionHeading
          eyebrow="Training Programs"
          title={
            <>
              Training Built
              <br />
              For Your <span className="text-lime-300">Goals.</span>
            </>
          }
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {programs.map((p) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <LazyImage
                    src={p.image}
                    alt={p.alt}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/30 to-transparent" />
                  {/* Number */}
                  <span className="absolute left-4 top-4 font-display text-2xl text-lime-300">
                    {p.number}
                  </span>
                  {/* Icon */}
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-ink-950/60 backdrop-blur-sm">
                    <Icon className="h-5 w-5 text-white" />
                  </span>
                </div>

                {/* Body */}
                <div className="relative flex flex-1 flex-col p-6">
                  {/* Accent line */}
                  <span className="absolute left-6 top-0 h-0.5 w-0 bg-lime-300 transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-display text-xl uppercase tracking-tight text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                    {p.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-300">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
