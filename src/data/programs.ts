import {
  Dumbbell,
  Flame,
  UserRound,
  Move3d,
  type LucideIcon,
} from 'lucide-react';

export interface Program {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  alt: string;
}

export const programs: Program[] = [
  {
    id: 'strength',
    number: '01',
    title: 'Strength & Muscle',
    description:
      'Build strength and muscle through structured resistance training and progressive development.',
    icon: Dumbbell,
    image:
      'https://images.pexels.com/photos/17944268/pexels-photo-17944268.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Athlete performing a heavy barbell lift during strength training',
  },
  {
    id: 'fat-loss',
    number: '02',
    title: 'Fat Loss & Conditioning',
    description:
      'Improve fitness, conditioning, and body composition through structured training.',
    icon: Flame,
    image:
      'https://images.pexels.com/photos/4164658/pexels-photo-4164658.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Athlete training with battle ropes for high-intensity conditioning',
  },
  {
    id: 'personal',
    number: '03',
    title: 'Personal Training',
    description:
      'One-on-one coaching adapted to your goals, fitness level, training experience, and schedule.',
    icon: UserRound,
    image:
      'https://images.pexels.com/photos/33846716/pexels-photo-33846716.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Personal trainer guiding a client through a weight training exercise',
  },
  {
    id: 'functional',
    number: '04',
    title: 'Functional Fitness',
    description:
      'Develop strength, mobility, stability, coordination, and overall physical performance.',
    icon: Move3d,
    image:
      'https://images.pexels.com/photos/6815664/pexels-photo-6815664.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Athlete performing a kettlebell functional fitness movement',
  },
];
