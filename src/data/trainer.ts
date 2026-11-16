// Centralized trainer information.
// Replace placeholder values with real details when available.

export const trainer = {
  name: "Munnesh Kaji Shrestha",
  profession: "Certified Personal Trainer",
  fullProfession: "Certified Personal Trainer & Fitness Coach",
  gym: " Nepal Academy of Exercise Science ",
  location: {
    area: "Baluwatar",
    city: "Kathmandu",
    country: "Nepal",
    full: "NAES, Baluwatar, Kathmandu",
  },
  certification: {
    level: "EREPS Level-4",
    title: "Certified Personal Trainer",
    institution: "Classic Fitness Academy",
    full: "EREps Level-4 Certified Personal Trainer",
  },
  certification2: {
    level: "NAES",
    title: "Certified Personal Trainer",
    institution: "NASM",
    full: "NASM Certified Personal Trainer",
  },

  certification3: {
    level: "Functional Fitness Trainer",
    title: "Functional Fitness Trainer",
    institution: "NASM Functional Fitness Trainer",
    full: "Certified Functional Fitness Trainer",
  },

  certification4: {
    level: "CPR",
    title: "CPR Certified",
    institution: "Red Cross",
    full: "CPR Certified",
  },

  certification5: {
    level: "First Aid",
    title: "First Aid Certified",
    institution: "Red Cross",
    full: "First Aid Certified",
  },

  contact: {
    phone: "+977-9843105740",
    email: "Mun.shta@gmail.com",
    instagram: "https://www.instagram.com/mun.shta/",
    facebook: "https://www.facebook.com/TheeMun",
    // tiktok: "https://tiktok.com/",
    maps: "https://maps.google.com/?q=Gymstation+Baneshwor+Kathmandu",
  },
} as const;

export type Trainer = typeof trainer;
