import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMoon,
  faSun,
  faBars,
  faArrowUpRightFromSquare,
  faHeart,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faAngular,
  faJs,
  // faHtml5,
  // faCss3Alt,
  // faSass,
  faEnvira,
  faNodeJs,
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import avatar from "./Resources/Praneet.JPG";
import skills from "./Data/skills";
import projects from "./Data/projects";
import Skillcard from "./Components/Skillcard/Skillcard";
import Projectcard from "./Components/Projectcard/Projectcard";
import Contactform from "./Components/Contactform/Contactform";

library.add(
  faMoon,
  faBars,
  faSun,
  faGithub,
  faLinkedin,
  faCodepen,
  faReact,
  faAngular,
  faJs,
  // faHtml5,
  // faCss3Alt,
  // faSass,
  faNodeJs,
  fsEnvira,
  faArrowUpRightFromSquare,
  faHeart,
  faArrowUp
);

function App() {
  const [theme, settheme] = useState("light");
  const toggleTheme = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div id="wrapper" className={theme === "light" ? "" : "dark"}>
      <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      <main>
        {/* <ScrollAnimation animateIn="fadeIn" initiallyVisible={true}> */}
        <motion.div
          className="social"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          <div className="links">
            <motion.a
              href="https://github.com/PraneetDixit"
              target="_blank"
              variants={{
                initial: { marginBottom: 15 },
                animate: { marginBottom: 20 },
              }}
            >
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                style={{ color: "inherit" }}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/praneet-dixit/"
              target="_blank"
              variants={{
                initial: { marginBottom: 15 },
                animate: { marginBottom: 20 },
              }}
            >
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                style={{ color: "inherit" }}
              />
            </motion.a>
            <motion.a
              href="https://codepen.io/PraneetDixit"
              target="_blank"
              variants={{
                initial: { marginBottom: 15 },
                animate: { marginBottom: 20 },
              }}
            >
              <FontAwesomeIcon
                icon="fa-brands fa-codepen"
                style={{ color: "inherit" }}
              />
            </motion.a>
          </div>

          <div className="line"></div>
          <div className="follow">Follow Me</div>
          <div className="line"></div>
        </motion.div>
        {/* </ScrollAnimation> */}
        {/* <ScrollAnimation animateIn='fadeIn'> */}

        <motion.div
          className="info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          variants={{
            hidden: { y: 300, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
        >
          <p className="fPara">Hello! I am </p>
          <p className="sPara">Praneet Dixit</p>
          <p className="tPara">Student | Developer | Tech Enthusiast</p>
          <div>
            <a href="#about">About Me</a>
            <a href="#contact">Let's talk</a>
          </div>
        </motion.div>
        {/* </ScrollAnimation> */}
      </main>
      <div id="about">
        <div className="aboutInfo">
          <p>
            I am a first-year undergraduate at IIT Kharagpur, pursuing a B.Tech in Mechanical Engineering. With a strong foundation in core engineering principles, I am passionate about software development and building scalable applications.
            <br/>
            I have been working with front-end technologies since 2021, gaining experience in crafting responsive and user-friendly web applications. My current focus is on ReactJS and Next.js, and I am always eager to collaborate on innovative projects.
            <br/>
            Beyond development, I have actively contributed to various technical and managerial roles, enhancing my problem-solving and leadership skills. I thrive on learning new technologies and leveraging them to create impactful solutions.
            <br/>
            Check out my projects to see what I’ve been working on!
            <div className="btnGroup">
              <a href="#skills">My Skills</a>
              <a href="#contact">Reach out</a>
            </div>
          </p>
          <motion.img
            src={avatar}
            whileHover={{ scale: 1.02, filter: "none" }}
            style={theme === "dark" ? { filter: "grayscale(100%)" } : ""}
            transition={{ duration: 0.3 }}
            alt="Praneet Dixit"
          />
        </div>
        <div className="aboutTag">
          <div className="line"></div>
          <div className="follow">About Me</div>
          <div className="line"></div>
        </div>
      </div>
      <div id="skills">
        <div className="skillsTag">
          <div className="line"></div>
          <div className="follow">My skills</div>
          <div className="line"></div>
        </div>
        <div className="skillInfo">
          {skills.map((val, ind) => (
            <Skillcard key={ind} skill={val}></Skillcard>
          ))}
        </div>
      </div>
      <div id="projects">
        <div className="projectsInfo">
          {projects.map((val, ind) => (
            <Projectcard key={ind} project={val} theme={theme}></Projectcard>
          ))}
        </div>
        <div className="projectsTag">
          <div className="line"></div>
          <div className="follow">Projects</div>
          <div className="line"></div>
        </div>
      </div>
      <div id="contact">
        <div className="contactTag">
          <div className="line"></div>
          <div className="follow">Contact Me</div>
          <div className="line"></div>
        </div>
        <div className="contactInfo">
          <Contactform></Contactform>
        </div>
      </div>
      <footer>
        <span>
          Made with{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-heart"
            style={{ color: "#fb4646" }}
          />{" "}
          by Praneet Dixit
        </span>
        <motion.a
          href="#"
          animate={{ y: [2.5, 0, -2.5, 0, 2.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-up" />
        </motion.a>
      </footer>
    </div>
  );
}

export default App;
