export type LearningItem = {
  name: string;
  emoji: string;
  description: string;
  link?: string;
};

export const currentlyLearning: LearningItem[] = [
  {
    name: "GPU Programming",
    emoji: "🖥️",
    description: "Writing parallel kernels with CUDA",
  },
  {
    name: "Programming Hardware/Software Systems",
    emoji: "🔌",
    description: "ECE 2035 at Georgia Tech, working where software meets the machine",
  },
];

// Update this when you change what you're learning
export const lastUpdated = "November 2026";
