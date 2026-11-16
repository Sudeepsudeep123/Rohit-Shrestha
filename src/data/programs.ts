import {
  Dumbbell,
  Flame,
  UserRound,
  Move3d,
  type LucideIcon,
} from "lucide-react";

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
    id: "strength",
    number: "01",
    title: "Build Strength & Muscle",
    description:
      "Build lean muscle, develop a stronger physique, and increase your lifting power with structured workouts and progressive strength training.",
    icon: Dumbbell,
    image:
      "https://images.pexels.com/photos/17944268/pexels-photo-17944268.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Athlete performing a barbell strength training exercise",
  },
  {
    id: "fat-loss",
    number: "02",
    title: "Lose Weight & Get Fit",
    description:
      "Work towards your ideal body composition, burn calories, and improve stamina through effective conditioning workouts and consistent training.",
    icon: Flame,
    image:
      "https://images.pexels.com/photos/4164658/pexels-photo-4164658.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Athlete performing battle rope exercises during conditioning training",
  },
  {
    id: "personal",
    number: "03",
    title: "One-on-One Coaching",
    description:
      "Get dedicated personal guidance, customized workout plans, and expert support tailored to your fitness goals, experience, and lifestyle.",
    icon: UserRound,
    image:
      "https://images.pexels.com/photos/33846716/pexels-photo-33846716.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Personal trainer guiding a client through a strength exercise",
  },
  {
    id: "functional",
    number: "04",
    title: "Move Better. Perform Better.",
    description:
      "Enhance mobility, balance, coordination, and overall athletic performance with functional exercises that build strength for everyday life.",
    icon: Move3d,
    image:
      "https://images.pexels.com/photos/6815664/pexels-photo-6815664.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Athlete performing a kettlebell functional fitness exercise",
  },
];
