import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/animations";

const categories = [
  { label: "Strength & Muscle Growth", size: "lg:col-span-2" },
  { label: "Weight Loss Journey", size: "" },
  { label: "Fitness Transformation", size: "" },
  { label: "Improved Performance", size: "" },
  { label: "Building a Healthier Lifestyle", size: "lg:col-span-2" },
];

export default function Results() {
  return (
    <section
      id="results"
      className="section-pad relative overflow-hidden bg-ink-900"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="REAL GOALS. REAL PROGRESS."
          title={
            <>
              Every Journey.
              <br />
              <span className="text-lime-300">A Stronger You.</span>
            </>
          }
        />

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
        >
          Every fitness journey is different. With the right guidance,
          consistent effort, and a plan built around your goals, meaningful
          progress is within reach.
        </motion.p>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:auto-rows-[240px] lg:grid-cols-3"
        >
          {categories.map((c) => (
            <motion.div
              key={c.label}
              variants={fadeUp}
              className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50 p-6 transition-colors hover:border-lime-300/40 ${c.size}`}
            >
              {/* Placeholder pattern */}
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <ImagePlus className="h-10 w-10 text-white/15 transition-colors group-hover:text-lime-300/40" />
              </div>
              <div className="relative">
                <span className="font-display text-2xl uppercase tracking-tight text-white">
                  {c.label}
                </span>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-widest text-white/40">
                  Client photo placeholder
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
