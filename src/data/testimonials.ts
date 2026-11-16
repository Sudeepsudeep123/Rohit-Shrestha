export interface Testimonial {
  id: string;
  placeholder: boolean;
  quote: string;
  name: string;
  goal: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    placeholder: true,
    quote:
      "Training with Munnesh completely changed how I approach fitness. He understands my goals, creates a plan that works for me, and keeps me motivated throughout the journey. I have become stronger, more confident, and consistent.",
    name: "Nirmal Kalikote",
    goal: "Personalized Training",
  },
  {
    id: "t2",
    placeholder: true,
    quote:
      "I struggled to stay consistent with my workouts before starting personal training. Munnesh made the process simple and enjoyable. The personalized workouts and continuous guidance have helped me make real progress.",
    name: "Meera Khadka",
    goal: "Weight Loss & Fitness",
  },
  {
    id: "t3",
    placeholder: true,
    quote:
      "What I appreciate most about Munnesh is his attention to technique and proper training. Every session has a purpose, and he pushes me to improve without compromising form. I have noticed a huge difference in my strength and overall fitness.",
    name: "Sakar Wagle",
    goal: "Strength & Performance",
  },
];
