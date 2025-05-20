export const freelancer_data = [
  {
    email: "radhika.patel.dev@example.com",
    password: "radhikaSecure123",
    fullName: "Radhika Patel",
    userName: "radhikaCoder",
    rating: 4.8,
    role: "freelancer",
    profile: {
      image:
        "https://i.pinimg.com/236x/74/67/ac/7467acd73768ec753f20c4ac6cf39441.jpg",
      bio: "Experienced front-end developer with a passion for responsive web design.",
      location: "Mumbai, India",
      experience: "Intermediate",
    },
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  },
  {
    email: "aman.kumar.dev@example.com",
    password: "amanPass789",
    fullName: "Aman Kumar",
    userName: "codeWizardAman",
    rating: 4.9,
    role: "freelancer",
    profile: {
      image: "",
      bio: "Full-stack developer specializing in building RESTful APIs and microservices.",
      location: "Delhi, India",
      experience: "Advanced",
    },
    skills: ["Node.js", "Express", "MongoDB", "TypeScript", "Docker"],
  },
  {
    email: "sneha.verma.writer@example.com",
    password: "snehaWriter456",
    fullName: "Sneha Verma",
    userName: "creativeWriterSneha",
    rating: 4.7,
    role: "freelancer",
    profile: {
      image: "",
      bio: "Content writer with a focus on SEO and creative storytelling.",
      location: "Kolkata, India",
      experience: "Intermediate",
    },
    skills: ["Content Writing", "SEO", "Copywriting", "WordPress"],
  },
  {
    email: "rohit.singh.dev@example.com",
    password: "rohitDev789",
    fullName: "Rohit Singh",
    userName: "techGuruRohit",
    rating: 5.0,
    role: "freelancer",
    profile: {
      bio: "Back-end developer with expertise in building scalable and secure applications.",
      location: "Hyderabad, India",
      experience: "Advanced",
    },
    skills: ["Java", "Spring Boot", "MySQL", "Docker", "Kubernetes"],
  },
  {
    email: "priya.mehra.design@example.com",
    password: "priyaDesign456",
    fullName: "Priya Mehra",
    userName: "designQueenPriya",
    rating: 4.6,
    role: "freelancer",
    profile: {
      image: "",
      bio: "Graphic designer with a flair for creating visually appealing designs.",
      location: "Pune, India",
      experience: "Intermediate",
    },
    skills: ["Photoshop", "Illustrator", "InDesign", "CorelDRAW"],
  },
  {
    email: "vikas.sharma.dev@example.com",
    password: "vikasDev123",
    fullName: "Vikas Sharma",
    userName: "vikasFullStack",
    rating: 4.9,
    role: "freelancer",
    profile: {
      image: "",
      bio: "Full-stack developer with expertise in MERN stack and cloud technologies.",
      location: "Chennai, India",
      experience: "Advanced",
    },
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS"],
  },
  {
    email: "divya.agarwal.writer@example.com",
    password: "divyaWriter789",
    fullName: "Divya Agarwal",
    userName: "contentGuruDivya",
    rating: 4.8,
    role: "freelancer",
    profile: {
      image: "",
      bio: "Experienced content writer with a focus on technical documentation.",
      location: "Ahmedabad, India",
      experience: "Intermediate",
    },
    skills: ["Technical Writing", "SEO", "Content Strategy", "Editing"],
  },
  {
    email: "kiran.raju.dev@example.com",
    password: "kiranSecure456",
    fullName: "Kiran Raju",
    userName: "devMasterKiran",
    rating: 4.7,
    role: "freelancer",
    profile: {
      image: "",
      bio: "Front-end developer specializing in modern JavaScript frameworks.",
      location: "Bangalore, India",
      experience: "Advanced",
    },
    skills: ["Angular", "TypeScript", "SASS", "Bootstrap", "Webpack"],
  },
  {
    email: "nisha.kapoor.dev@example.com",
    password: "nishaDev789",
    fullName: "Nisha Kapoor",
    userName: "nishaUXMaster",
    rating: 4.9,
    role: "freelancer",
    profile: {
      image: "",
      bio: "UX/UI designer with a knack for creating user-friendly and intuitive interfaces.",
      location: "Jaipur, India",
      experience: "Advanced",
    },
    skills: ["Figma", "Sketch", "Adobe XD", "Wireframing", "Prototyping"],
  },
  {
    email: "abhishek.patel.dev@example.com",
    password: "abhishekDev123",
    fullName: "Abhishek Patel",
    userName: "fullStackAbhishek",
    rating: 4.8,
    role: "freelancer",
    profile: {
      image: "",
      bio: "Full-stack developer with a focus on building efficient and high-performing web applications.",
      location: "Surat, India",
      experience: "Intermediate",
    },
    skills: ["JavaScript", "Vue.js", "Node.js", "PostgreSQL", "GraphQL"],
  },
];

export const reviews = [
  {
    name: "John Doe",
    rating: 4.5,
    country: "United States",
    time: "2024-08-19",
    image:
      "https://i.pinimg.com/236x/74/67/ac/7467acd73768ec753f20c4ac6cf39441.jpg",
    review:
      "Great platform with a lot of opportunities. The interface is user-friendly, and I found the perfect gig within minutes.",
  },
  {
    name: "Maria Garcia",
    rating: 4.0,
    country: "Spain",
    time: "2024-08-18",
    review:
      "I liked the range of services offered. The search feature could be improved, but overall a positive experience.",
  },
  {
    name: "Akira Tanaka",
    rating: 5.0,
    country: "Japan",
    time: "2024-08-17",
    review:
      "Exceptional experience! The payment process was smooth, and the AI-based recommendations helped me find exactly what I needed.",
  },
  {
    name: "Sophie Martin",
    rating: 3.8,
    country: "France",
    time: "2024-08-16",
    review:
      "Good platform, but I encountered some issues with the messaging system. Customer support was helpful though.",
  },
  {
    name: "Raj Patel",
    rating: 4.7,
    country: "India",
    time: "2024-08-15",
    review:
      "Impressive features and a wide range of freelancers to choose from. I highly recommend it for anyone looking for quality work.",
  },
];

export function timeAgo(date: any) {
  const now: any = new Date();
  const reviewDate: any = new Date(date);
  const diffInSeconds: number = Math.floor((now - reviewDate) / 1000);

  const units = [
    { name: "year", seconds: 31536000 },
    { name: "month", seconds: 2592000 },
    { name: "week", seconds: 604800 },
    { name: "day", seconds: 86400 },
    { name: "hour", seconds: 3600 },
    { name: "minute", seconds: 60 },
    { name: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.name}${interval > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}

reviews.forEach((review) => {
  review.time = timeAgo(review.time);
});

export const skills = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "nodejs", label: "Node.js" },
  { value: "typescript", label: "TypeScript" },
  { value: "webpack", label: "Webpack" },
  { value: "sass", label: "Sass" },
  { value: "git", label: "Git" },
  { value: "restapi", label: "REST API" },
  { value: "graphql", label: "GraphQL" },
  { value: "responsiveDesign", label: "Responsive Design" },
  { value: "adobePremiere", label: "Adobe Premiere Pro" },
  { value: "finalCutPro", label: "Final Cut Pro" },
  { value: "davinciResolve", label: "DaVinci Resolve" },
  { value: "afterEffects", label: "Adobe After Effects" },
  { value: "motionGraphics", label: "Motion Graphics" },
  { value: "colorCorrection", label: "Color Correction" },
  { value: "videoTransitions", label: "Video Transitions" },
  { value: "audioEditing", label: "Audio Editing" },
  { value: "storyboarding", label: "Storyboarding" },
  { value: "videoCompression", label: "Video Compression" },
  { value: "visualEffects", label: "Visual Effects" },
  { value: "videoFormat", label: "Video Formats" },
];

export const language = [
  {
    value: "english",
    label: "English",
  },
  {
    value: "hindi",
    label: "Hindi",
  },
  {
    value: "french",
    label: "French",
  },
  {
    value: "japanese",
    label: "Japanese",
  },
  {
    value: "spanish",
    label: "Spanish",
  },
  {
    value: "german",
    label: "German",
  },
  {
    value: "italian",
    label: "Italian",
  },
];
