export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "hackathon" | "personal" | "research" | "open-source";
  award?: string;
  hackathonName?: string;
  demoUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  date: string;
  featured?: boolean;
  sponsors?: { name: string; logo: "nvidia" | "antler" | "dell" | "arm" | "scu" | "aws" | "inrix" | "acm" }[];
  teamMembers?: string[];
};

export const projects: Project[] = [
  // === HACKATHON WINS ===
  {
    id: "power2thepeople",
    title: "Power2ThePeople",
    description:
      "Real-time, situationally aware legal guidance platform that runs entirely on an NVIDIA DGX Spark. It pairs the Nemotron-70B model with a visual language model, speech input from a Swift iOS app, NV-Embed-v2 embeddings of California and San Francisco traffic laws, and geographic data from SF open datasets, cutting latency 20x compared to conventional cloud models.",
    techStack: ["Swift", "NVIDIA DGX Spark", "Nemotron-70B", "NV-Embed-v2", "iOS"],
    category: "hackathon",
    award: "1st Place - Human Impact",
    hackathonName: "NVIDIA Spark Hackathon January 2026",
    githubUrl: "https://github.com/rayyanh192/Power2ThePeople",
    imageUrl: "/nvidiawin.jpeg",
    date: "2026-01-29",
    featured: true,
    sponsors: [
      { name: "NVIDIA", logo: "nvidia" },
      { name: "Antler", logo: "antler" },
    ],
    teamMembers: ["Rayyan Hussain", "Abhinav Ala", "Edrick Chang", "Abraham Bhatti"],
  },
  {
    id: "devangel",
    title: "DevAngel",
    description:
      "End-to-end automated incident response platform that detects production errors through AWS CloudWatch, uses Amazon Q to find root causes, opens GitHub pull requests with fixes, and alerts support teams, reducing mean time to recovery by 10x. Built with React, AWS Lambda and Step Functions, and Amazon S3 for historical incident snapshots.",
    techStack: ["React", "AWS Lambda", "Step Functions", "Amazon S3", "CloudWatch", "Amazon Q"],
    category: "hackathon",
    award: "2nd Place",
    hackathonName: "SCU AWS x INRIX Hackathon October 2025",
    githubUrl: "https://github.com/rayyanh192/DevAngel",
    imageUrl: "/awswin.png",
    date: "2025-10-15",
    featured: true,
    sponsors: [
      { name: "AWS", logo: "aws" },
      { name: "INRIX", logo: "inrix" },
    ],
    teamMembers: ["Rayyan Hussain", "Abhinav Ala", "Matthias Masiero", "Edrick Chang"],
  },
  {
    id: "sheltr",
    title: "Sheltr",
    description:
      "Disaster relief platform that helps people find nearby verified shelters during emergencies, with location-based recommendations and real-time reservation management. Won 4th place among 350+ participants and Best Freshman Hack at Hack For Humanity.",
    techStack: ["Python", "FastAPI", "AWS DynamoDB", "AWS EC2", "NGINX", "Google Maps API"],
    category: "hackathon",
    award: "4th Place - Best Freshman Hack",
    hackathonName: "Hack For Humanity 2025",
    githubUrl: "https://github.com/Tabadia/shelter-finder",
    imageUrl: "/sheltr.png",
    date: "2025-02-01",
    featured: true,
    sponsors: [
      { name: "ACM", logo: "acm" },
    ],
    teamMembers: ["Rayyan Hussain", "Thalen Abadia", "Priyanka Ganguly", "Tommy Wickersham", "Rahul Datta", "Aayush Kumbhare"],
  },
  {
    id: "sentiment-enabler",
    title: "Sentiment Enabler",
    description:
      "Web application that presents articles about controversial topics from both pro and anti perspectives side by side. Uses a fine-tuned T5 transformer model to generate opposing keyword pairs for balanced article retrieval.",
    techStack: ["Python", "Flask", "PyTorch", "T5 Transformer", "Google Cloud", "JavaScript"],
    category: "hackathon",
    award: "1st Place - Novice",
    hackathonName: "SCU ACM Winter Challenge 2025",
    githubUrl: "https://github.com/rayyanh192/sentiment-enabler",
    imageUrl: "/sentiment.png",
    date: "2025-01-15",
    featured: true,
    sponsors: [
      { name: "ACM", logo: "acm" },
    ],
    teamMembers: ["Rayyan Hussain"],
  },

  // === RESEARCH ===
  // Add new projects to this list; they appear on the Projects page automatically.
  {
    id: "drone-cluster-control",
    title: "Cluster-Controlled Drone Formations",
    description:
      "Research at the Robotics Systems Lab at Santa Clara University on multirobot adaptive navigation, funded by a Kuehler Grant. I implemented PID loops in ROS 2 that held a two-drone autonomous formation within 0.1 m of its desired paths, designed a 24-camera OptiTrack testbed with 0.2 mm accuracy, and co-authored a paper on 3-D cluster control published for the 2026 IEEE Aerospace Conference.",
    techStack: ["ROS 2", "Linux", "OptiTrack", "Crazyflie", "PID Control"],
    category: "research",
    date: "2025-12-01",
  },
];
