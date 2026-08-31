export interface Testimonial {
  id: string;
  placeholder: boolean;
  quote: string;
  name: string;
  goal: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    placeholder: true,
    quote: 'Real client feedback will be added here.',
    name: 'Client Name',
    goal: 'Strength',
  },
  {
    id: 't2',
    placeholder: true,
    quote: 'Real client feedback will be added here.',
    name: 'Client Name',
    goal: 'Fitness',
  },
  {
    id: 't3',
    placeholder: true,
    quote: 'Real client feedback will be added here.',
    name: 'Client Name',
    goal: 'Conditioning',
  },
];
