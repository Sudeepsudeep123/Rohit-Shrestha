import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Discuss your fitness goals, lifestyle, training experience, and expectations to understand what you want to achieve.",
  },
  {
    number: "02",
    title: "Customize",
    description:
      "Get a personalized training plan designed around your current fitness level, goals, and daily routine.",
  },
  {
    number: "03",
    title: "Get Training",
    description:
      "Follow structured workouts with expert guidance, proper exercise techniques, and consistent coaching.",
  },
  {
    number: "04",
    title: "See Progress",
    description:
      "Monitor your improvements, track your performance, and adapt your training as you get stronger and fitter.",
  },
];

export default function TrainingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="section-pad relative overflow-hidden bg-ink-950">
      <div className="container-px">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title={
            <>
              From First Step
              <br />
              To <span className="text-lime-300">Real Progress.</span>
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
              <motion.div
                key={s.number}
                variants={fadeUp}
                className="relative pl-16"
              >
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
