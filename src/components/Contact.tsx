import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { fadeUp, staggerParent, viewportOnce } from '@/lib/animations';
import { trainer } from '@/data/trainer';

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  goal: string;
  preferredTime: string;
  message: string;
}

const initialForm: FormState = {
  fullName: '',
  phone: '',
  email: '',
  goal: '',
  preferredTime: '',
  message: '',
};

const goalOptions = [
  'Strength & Muscle',
  'Fat Loss & Conditioning',
  'Personal Training',
  'Functional Fitness',
];

const timeOptions = ['Early Morning', 'Morning', 'Afternoon', 'Evening'];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = 'Please enter your full name.';
    if (!form.phone.trim()) next.phone = 'Please enter your phone number.';
    else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim()))
      next.phone = 'Please enter a valid phone number.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = 'Please enter a valid email address.';
    if (!form.goal) next.goal = 'Please select a fitness goal.';
    if (!form.preferredTime) next.preferredTime = 'Please select a preferred time.';
    if (!form.message.trim()) next.message = 'Please enter a message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    // Simulate async submission. Replace with Formspree, EmailJS, or API later.
    setTimeout(() => setStatus('success'), 1200);
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const reset = () => {
    setForm(initialForm);
    setErrors({});
    setStatus('idle');
  };

  const fieldClass = (field: keyof FormState) =>
    `w-full rounded-xl border bg-ink-800/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors ${
      errors[field]
        ? 'border-red-500/60 focus:border-red-400'
        : 'border-white/10 focus:border-lime-300/60'
    }`;

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-ink-950">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Get{' '}
              <span className="text-lime-300">Started.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* Left — info */}
          <motion.div
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <div className="font-display text-3xl uppercase tracking-tight text-white">
                {trainer.name}
              </div>
              <div className="mt-1 text-sm font-semibold uppercase tracking-widest text-lime-300">
                {trainer.profession}
              </div>
              <div className="mt-4 flex items-start gap-2 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-300" />
                <span>{trainer.location.full}</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              <a
                href={`tel:${trainer.contact.phone}`}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-lime-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Phone className="h-4 w-4" />
                </span>
                {trainer.contact.phone}
              </a>
              <a
                href={`mailto:${trainer.contact.email}`}
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-lime-300"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                  <Mail className="h-4 w-4" />
                </span>
                {trainer.contact.email}
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-white/40">
                Follow
              </div>
              <div className="flex gap-3">
                <a
                  href={trainer.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-lime-300/40 hover:text-lime-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={trainer.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-lime-300/40 hover:text-lime-300"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={trainer.contact.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Maps location"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-lime-300/40 hover:text-lime-300"
                >
                  <MapPin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form / success */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-2xl border border-lime-300/30 bg-ink-800/50 p-10 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-lime-300" />
                  <h3 className="mt-6 font-display text-3xl uppercase tracking-tight text-white">
                    Inquiry Sent
                  </h3>
                  <p className="mt-3 max-w-sm text-white/60">
                    Thank you for reaching out. Rohit will get back to you
                    shortly to schedule your session.
                  </p>
                  <button type="button" onClick={reset} className="btn-ghost mt-8">
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-white/10 bg-ink-800/40 p-6 sm:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="fullName" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className={fieldClass('fullName')}
                        placeholder="Your name"
                      />
                      {errors.fullName && <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={fieldClass('phone')}
                        placeholder="+977-XXXXXXXXXX"
                      />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={fieldClass('email')}
                      placeholder="you@example.com"
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="goal" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
                        Fitness Goal
                      </label>
                      <select
                        id="goal"
                        value={form.goal}
                        onChange={(e) => handleChange('goal', e.target.value)}
                        className={fieldClass('goal')}
                      >
                        <option value="" disabled>Select a goal</option>
                        {goalOptions.map((g) => (
                          <option key={g} value={g} className="bg-ink-800">{g}</option>
                        ))}
                      </select>
                      {errors.goal && <p className="mt-1.5 text-xs text-red-400">{errors.goal}</p>}
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
                        Preferred Training Time
                      </label>
                      <select
                        id="preferredTime"
                        value={form.preferredTime}
                        onChange={(e) => handleChange('preferredTime', e.target.value)}
                        className={fieldClass('preferredTime')}
                      >
                        <option value="" disabled>Select a time</option>
                        {timeOptions.map((t) => (
                          <option key={t} value={t} className="bg-ink-800">{t}</option>
                        ))}
                      </select>
                      {errors.preferredTime && <p className="mt-1.5 text-xs text-red-400">{errors.preferredTime}</p>}
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={`${fieldClass('message')} resize-none`}
                      placeholder="Tell Rohit about your goals and availability..."
                    />
                    {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary group mt-7 w-full disabled:opacity-70"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
