// Centralized trainer information.
// Replace placeholder values with real details when available.

export const trainer = {
  name: 'Rohit Shrestha',
  profession: 'Personal Trainer',
  fullProfession: 'Personal Trainer & Fitness Coach',
  gym: 'Gymstation',
  location: {
    area: 'Baneshwor',
    city: 'Kathmandu',
    country: 'Nepal',
    full: 'Gymstation, Baneshwor, Kathmandu',
  },
  certification: {
    level: 'EREPS Level-4',
    title: 'Certified Personal Trainer',
    institution: 'Classic Fitness Academy',
    full: 'EREps Level-4 Certified Personal Trainer',
  },
  contact: {
    phone: '+977-XXXXXXXXXX',
    email: 'hello@rohitshrestha.fit',
    instagram: 'https://instagram.com/',
    facebook: 'https://facebook.com/',
    tiktok: 'https://tiktok.com/',
    maps: 'https://maps.google.com/?q=Gymstation+Baneshwor+Kathmandu',
  },
} as const;

export type Trainer = typeof trainer;
