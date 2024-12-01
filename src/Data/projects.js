import angular from '../Resources/angular.jpg'
import ip from '../Resources/ip.jpg'
import todo from '../Resources/todo.jpg'
import fb from '../Resources/fb.jpg'
import smartphone from '../Resources/smartphone.jpg'
import sprouty from '../Resources/Sprouty.jpg'

const projects = [
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
    name: "To do list",
    description: "A simple to do list",
    img: todo,
    github: "https://github.com/PraneetDixit/ToDoList",
    link: "https://thetodolist.netlify.app/",
    tags: ["Local Storage"],
  },
  {
    name: "Facebook Messenger",
    description: "Recreation of the Facebook Messenger UI",
    img: fb,
    codepen: "https://codepen.io/PraneetDixit/full/xxRbOoV",
    tags: ["UI"],
  },
  {
    name: "Smartphone",
    description:
      "A fun project trying to recreate the design of Samsung Galaxy Ace",
    img: smartphone,
    link: "https://mysmartphone.netlify.app/",
    github: "https://github.com/PraneetDixit/Smartphone",
    tags: ["CSS"],
  },
];

export default projects;
