import { motion } from "framer-motion";
import { ShieldCheck, Award, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, staggerParent, viewportOnce } from "@/lib/animations";
import { trainer } from "@/data/trainer";
import { div } from "framer-motion/m";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="section-pad relative overflow-hidden bg-ink-900"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Professional Certifications"
          title={
            <>
              Train with <span className="text-cyan-400">Confidence.</span>
            </>
          }
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          {/* Certification 1 - EREPS Level 4 */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 p-8 md:p-10 lg:col-span-2"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-lime-300/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            {/* Background pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20" />

            <div className="relative flex flex-col gap-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                  <ShieldCheck className="h-4 w-4 text-cyan-400" />

                  <span className="text-[11px] font-semibold uppercase tracking-widest text-white/70">
                    Primary Certification
                  </span>
                </div>

                <GraduationCap className="h-7 w-7 text-white/30" />
              </div>

              {/* Certification */}
              <div>
                <div className="font-display text-[clamp(3.5rem,10vw,7rem)] uppercase leading-none tracking-tightest text-white">
                  NASM
                </div>

                <div className="mt-2 font-display text-2xl uppercase tracking-tight text-white/90 sm:text-3xl">
                  {trainer.certification2.title}
                </div>

                <div className="mt-2 text-sm uppercase tracking-widest text-white/40">
                  NAES - Baluwatar
                </div>
              </div>

              {/* Institution */}
              <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                <Award className="h-5 w-5 text-cyan-400" />

                <div>
                  <div className="text-sm font-medium text-white/80">
                    {trainer.certification2.institution}
                  </div>

                  {/* <div className="mt-1 text-xs text-white/40">
                    {trainer.certification.full}
                  </div> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification 2 - NASM */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/10">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Certification 02
                </span>
              </div>

              <div>
                <div className="font-display text-3xl uppercase tracking-tight text-white">
                  {trainer.certification.level}
                </div>

                <div className="mt-2 text-base font-medium uppercase text-white/80">
                  {trainer.certification.title}
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="text-sm font-medium text-white/70">
                  {trainer.certification.institution}
                </div>

                <div className="mt-1 text-xs text-white/40">
                  {trainer.certification.full}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification 3 - Function Fitness */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/10">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Certification 03
                </span>
              </div>

              <div>
                <div className="font-display text-3xl uppercase tracking-tight text-white">
                  {trainer.certification3.level}
                </div>

                {/* <div className="mt-2 text-base font-medium uppercase text-white/80">
                  {trainer.certification3.title}
                </div> */}
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="text-sm font-medium text-white/70">
                  {trainer.certification3.institution}
                </div>

                <div className="mt-1 text-xs text-white/40">
                  {trainer.certification3.full}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification 4 - CPR */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/10">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Certification 04
                </span>
              </div>

              <div>
                <div className="font-display text-3xl uppercase tracking-tight text-white">
                  {trainer.certification4.level}
                </div>

                <div className="mt-2 text-base font-medium uppercase text-white/80">
                  {trainer.certification4.title}
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="text-sm font-medium text-white/70">
                  {trainer.certification4.institution}
                </div>

                <div className="mt-1 text-xs text-white/40">
                  {trainer.certification4.full}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certification 5 - First Aid */}
          <motion.div
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/10">
                  <ShieldCheck className="h-5 w-5 text-cyan-400" />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                  Certification 05
                </span>
              </div>

              <div>
                <div className="font-display text-3xl uppercase tracking-tight text-white">
                  {trainer.certification5.level}
                </div>

                <div className="mt-2 text-base font-medium uppercase text-white/80">
                  {trainer.certification5.title}
                </div>
              </div>

              <div className="border-t border-white/10 pt-5">
                <div className="text-sm font-medium text-white/70">
                  {trainer.certification5.institution}
                </div>

                <div className="mt-1 text-xs text-white/40">
                  {trainer.certification5.full}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
