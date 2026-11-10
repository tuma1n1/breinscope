import {
  Wheat,
  Leaf,
  Zap,
  Droplets,
  Building2,
  Truck,
  GraduationCap,
  Cpu,
  Users2,
  HeartPulse,
  Landmark,
  type LucideIcon,
} from "lucide-react";
 
export interface ExpertiseArea {
  slug: string;
  label: string;
  description: string;
  icon: LucideIcon;
  image: string;
}
 
export const expertiseAreas: ExpertiseArea[] = [
  {
    slug: "agriculture-rural-development",
    label: "Agriculture & Rural Development",
    description:
      "Climate-smart, inclusive agricultural systems and rural infrastructure that strengthen food security and livelihoods.",
    icon: Wheat,
    image: "/images/banners/Agriculture.webp",
  },
  {
    slug: "climate-change-environment",
    label: "Climate Change, Environment & NRM",
    description:
      "Data-driven climate adaptation, environmental governance, and natural resource management across Africa.",
    icon: Leaf,
    image: "/images/banners/Climate_change.webp",
  },
  {
    slug: "energy-power-systems",
    label: "Energy and Power Systems",
    description:
      "End-to-end energy consulting — generation, transmission, distribution, regulation, and renewable transition.",
    icon: Zap,
    image: "/images/banners/Solar_Energy.webp",
  },
  {
    slug: "water-sewerage",
    label: "Water and Sewerage",
    description:
      "Engineering and governance solutions expanding safe water access and sanitation for urban and rural communities.",
    icon: Droplets,
    image: "/images/banners/Water_treatment.webp",
  },
  {
    slug: "rural-urban-infrastructure",
    label: "Rural and Urban Infrastructure",
    description:
      "Resilient infrastructure planning — from rural roads and housing to smart city and municipal systems.",
    icon: Building2,
    image: "/images/banners/Urban-vs-Rural-Development.webp",
  },
  {
    slug: "road-transportation",
    label: "Road and Transportation",
    description:
      "Integrated transport planning that improves connectivity, safety, and sustainable urban mobility.",
    icon: Truck,
    image: "/images/banners/Road&Transport.webp",
  },
  {
    slug: "education-skills-development",
    label: "Education and Skill Development",
    description:
      "Strengthening education systems and workforce capability through evidence-based, technology-enabled solutions.",
    icon: GraduationCap,
    image: "/images/banners/Education.webp",
  },
  {
    slug: "digital-development",
    label: "Digital Development",
    description:
      "ICT and AI-enabled solutions accelerating outcomes in governance, health, agriculture, and enterprise.",
    icon: Cpu,
    image: "/images/banners/Technology.webp",
  },
  {
    slug: "human-capital-consulting",
    label: "Human Capital Consulting",
    description:
      "People-centered talent strategy — from recruitment and leadership development to organizational design.",
    icon: Users2,
    image: "/images/banners/Human_Capital.webp",
  },
  {
    slug: "global-health-wash",
    label: "Global Health and WASH",
    description:
      "Integrated public health and WASH programming strengthening systems and community resilience.",
    icon: HeartPulse,
    image: "/images/banners/Health.webp",
  },
  {
    slug: "governance-social-economic-development",
    label: "Governance, Social & Economic Development",
    description:
      "Institutional strengthening, social inclusion, and economic growth strategies for public and private clients.",
    icon: Landmark,
    image: "/images/banners/Governance.webp",
  },
];