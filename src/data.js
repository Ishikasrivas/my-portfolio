//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },

  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/Ishikasrivas",
    link: "https://github.com/Ishikasrivas",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
    link: "https://www.freelancer.in/u/ishikasrivas35",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Real-Estate Project",
    category: "web development",
    link: "https://realestateproject-phi.vercel.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "Social-media",
    category: "web development",
    link: "https://social-media-app7953a8.netlify.app/",
  },
  {
    id: "3",
    image: Project3,
    name: "my-portfolio",
    category: "web development",
    link: "https://my-potfolio-nu.vercel.app/",
  },
  {
    id: "4",
    image: Project4,
    name: "NewsAPI",
    link: "",
    category: "web development",
  },
  {
    id: "5",
    image: Project5,
    name: "Music- App",
    link:"https://music-app-lemon.vercel.app/",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "project name 6",
    category: "web development",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },

  {
    name: "web development",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "I bring designs to life using HTML, CSS, and JavaScript, focusing on clean code and smooth interactions for an engaging user experience.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "I create unique and tailored websites to meet specific client needs, ensuring they are visually appealing, user-friendly, and high-performing.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "  I prioritize effective collaboration and communication with clients, actively listening to their requirements and providing regular updates throughout the development process.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you,click on the icon to contact me",
    description: "Email me at ishikasrivas35@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Delhi, India",
    description: "Serving clients worldwide",
  },
];
