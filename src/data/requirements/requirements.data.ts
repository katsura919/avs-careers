import {
  Monitor,
  Wifi,
  Headphones,
  Home,
  GraduationCap,
  Briefcase,
  Users,
  Clock,
  Globe,
  Trophy,
  CheckCircle2,
} from "lucide-react";

export const systemRequirements = [
  {
    icon: Monitor,
    title: "Computer Specs",
    requirements: [
      "Intel Core i3 or AMD equivalent (minimum)",
      "8GB RAM or higher",
      "Windows 10/11 or macOS 10.14+",
      "Webcam for virtual meetings",
    ],
  },
  {
    icon: Wifi,
    title: "Internet Connection",
    requirements: [
      "Minimum 25 Mbps download speed",
      "Minimum 5 Mbps upload speed",
      "Backup connection recommended",
      "Stable, wired connection preferred",
    ],
  },
  {
    icon: Headphones,
    title: "Audio Equipment",
    requirements: [
      "USB headset with noise cancellation",
      "Clear microphone quality",
      "Backup headset recommended",
      "Quiet working environment",
    ],
  },
  {
    icon: Home,
    title: "Workspace Setup",
    requirements: [
      "Dedicated, distraction-free space",
      "Ergonomic desk and chair",
      "Good lighting for video calls",
      "Professional background for meetings",
    ],
  },
];

export const professionalRequirements = [
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "At least high school diploma or equivalent. College degree is a plus but not always required depending on the role.",
  },
  {
    icon: Briefcase,
    title: "Work Experience",
    description:
      "1-2 years of relevant experience in your field. Fresh graduates with strong skills are also welcome to apply.",
  },
  {
    icon: Globe,
    title: "English Proficiency",
    description:
      "Strong written and verbal English communication skills. Ability to communicate clearly and professionally with clients.",
  },
  {
    icon: Clock,
    title: "Availability",
    description:
      "Willingness to work flexible hours based on client timezone. Most positions require availability during US/UK business hours.",
  },
];

export const softSkills = [
  { icon: Users, text: "Excellent communication and interpersonal skills" },
  { icon: Trophy, text: "Self-motivated with strong work ethic" },
  { icon: CheckCircle2, text: "Attention to detail and accuracy" },
  { icon: Clock, text: "Strong time management and organization" },
  { icon: Monitor, text: "Tech-savvy and quick learner" },
  { icon: Briefcase, text: "Professional and reliable attitude" },
];
