export type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  duration?: string;
  price?: string;
  features?: string[];
};

export const services: Service[] = [
  {
    id: "career-clarity",
    title: "Career Clarity Session",
    description:
      "A focused conversation to identify your strengths, define your next move, and create a practical plan you can act on.",
    icon: "Compass",
    duration: "60 minutes",
    features: ["Career direction", "Strengths mapping", "Clear next steps"],
  },
  {
    id: "interview-prep",
    title: "Interview Preparation",
    description:
      "Build the confidence and structure to communicate your experience with clarity in interviews that matter.",
    icon: "MessageCircle",
    duration: "75 minutes",
    features: ["Mock interview", "Story refinement", "Personalized feedback"],
  },
  {
    id: "talent-strategy",
    title: "Talent Strategy Advisory",
    description:
      "Thoughtful support for leaders and teams who want to make stronger, more human-centered talent decisions.",
    icon: "UsersRound",
    duration: "Tailored engagement",
    features: ["Hiring process review", "Role definition", "Candidate experience"],
  },
  {
    id: "profile-positioning",
    title: "Profile & Positioning Review",
    description:
      "Refine your professional story across your CV, LinkedIn, and outreach so the right opportunities can find you.",
    icon: "Sparkles",
    duration: "60 minutes",
    features: ["CV review", "LinkedIn guidance", "Market positioning"],
  },
];
