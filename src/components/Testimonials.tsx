import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/animations";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink-900">
      <div className="container-px">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              What Clients <span className="text-cyan-400">Say.</span>
            </>
          }
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.id}
              variants={fadeUp}
              className="relative flex flex-col justify-between rounded-2xl border border-dashed border-white/15 bg-ink-800/40 p-8"
            >
              <span className="absolute right-6 top-6 text-white/10">
                <Quote className="h-10 w-10" />
              </span>

              <blockquote className="text-lg leading-relaxed text-white/70">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-8 border-t border-white/10 pt-5">
                <div className="font-display text-lg uppercase tracking-tight text-white">
                  {t.name}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-white/50">
                  Goal: {t.goal}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
