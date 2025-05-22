import angular from '../Resources/angular.jpg'
import ip from '../Resources/ip.jpg'
import sprouty from '../Resources/Sprouty.jpg'
import pitchnest from '../Resources/Pitchnest.png'
import wellbot from '../Resources/wellbot.png'
import pacman from '../Resources/pacman.png'
import nssc from '../Resources/nssc.png'
import mount from '../Resources/mount.jpg'
import rover from '../Resources/rover.png'

const projects = [
  {
    name: "PitchNest",
    description:
      "Groove to your favorite tracks, share playlists, and vibe together!",
    img: pitchnest,
    link: "https://pitchnest.netlify.app/",
    github: "https://github.com/PraneetDixit/spotify-clone",
    tags: ["React", "MongoDB", "Express", "REST API"],
  },
  {
    name: "WellBot", 
    description: "Employee engagement platform with integrated chatbot. Developed as a submission to General Championship (OpenSoft).",
    img: wellbot,
    github: "https://github.com/LAL-BAHADUR-SHASTRI/Opensoft-2025/",
    tags: ["React", "ShadCN"]
  },
  {
    name: "Pacman",
    description: "Pacman implementation in python with hand gesture recognition for controls",
    img: pacman,
    github: "https://github.com/PraneetDixit/Pacman-MediaPipe",
    tags: ["Python", "MediaPipe"],
  },
  {
    name: "NSSC - Concept",
    description: "A concept web portal for NSSC - Asia's largest astrotech fest",
    img: nssc,
    github: "https://github.com/PraneetDixit/NSSC-Next",
    link: "https://nssc-next.vercel.app/",
    tags: ["NextJS", "Motion"]
  },
  {
    name: "Where in the World",
    description:
      "An Angular app presenting demographic data of countries of the world in a concise way with extensive searching and sorting for better UX",
    img: angular,
    github: "https://github.com/praneetdixit/angular-countries/",
    link: "https://angular-countries.netlify.app/",
    tags: ["Angular", "REST API"],
  },
  {
    name: "IP Address Tracker",
    description:
      "An app for tracking any IP address. Provides interactive visualization on an integrated map",
    img: ip,
    github: "https://github.com/praneetdixit/ip-tracker/",
    link: "https://where-ip.netlify.app/",
    tags: ["REST API", "Leaflet"],
  },
  {
    name: "Sprouty",
    description: "Website for a business",
    img: sprouty,
    github: "https://github.com/PraneetDixit/Sprouty",
    link: "http://sprouty.netlify.app/",
    tags: ["GSAP"],
  },
  {
    name: "Differential Mount Design",
    description: "Mechanical design of a differential mount for FSAE cars",
    img: mount,
    link: "https://drive.google.com/file/d/1T4sCruGT4CqGxKzEEHGZod3c3XAxd1PA/view?usp=sharing",
    tags: ["Mechanical Design"]
  },
  {
    name: "Rover Chassis Design",
    description: "Mechanical design of a rover chassis. Based on University Rover Challenge guidelines",
    img: rover,
    link: "https://drive.google.com/file/d/1FDIxa9CtcO4lC4lOHjq_ehsLSgYC70yS/view?usp=sharing",
    tags: ["Mechanical Design"]
  }
];

export default projects;
