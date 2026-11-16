import { motion } from "framer-motion";
import { ImagePlus } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/animations";

const categories = [
  {
    label: "Strength",
    size: "lg:col-span-2 lg:row-span-2",
    image: "/assets/background.jpg",
    alt: "Athlete lifting weights during strength training",
  },
  {
    label: "Conditioning",
    size: "",
    image: "/assets/group3.jpg",
    alt: "Athlete performing conditioning exercises",
  },
  {
    label: "Body Composition",
    size: "",
    image: "/assets/img2.jpg",
    alt: "Fitness body transformation",
  },
  {
    label: "Performance",
    size: "lg:col-span-2",
    image: "/assets/group2.jpg",
    alt: "Athlete training for sports performance",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="section-pad relative overflow-hidden bg-ink-900"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Results & Transformations"
          title={
            <>
              Progress You Can <span className="text-cyan-400">Feel.</span>
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
          Real progress takes consistency. Every training approach should be
          adapted to the individual.
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
              className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-ink-800/50 transition-all duration-500 hover:border-cyan-400/50 ${c.size}`}
            >
              {/* Background Image */}
              <img
                src={c.image}
                alt={c.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-300 group-hover:from-black/95" />

              {/* Category Content */}
              <div className="relative z-10 p-6">
                <span className="font-display text-2xl uppercase tracking-tight text-white">
                  {c.label}
                </span>

                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-widest text-cyan-400">
                  Training & Transformation
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-8 text-sm text-white/40"
        >
          Placeholder cards above are ready to be replaced with real client
          transformation photos.
        </motion.p> */}
      </div>
    </section>
  );
}
