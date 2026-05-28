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
    faGear,
    faCircleNotch
} from "@fortawesome/free-solid-svg-icons";
import {
    faReact,
    faAngular,
    faJs,
    faEnvira,
    faNodeJs,
    faGithub,
    faLinkedin,
    faPython,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import avatar from "./Resources/praneet.jpeg";
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
    faReact,
    faAngular,
    faJs,
    faNodeJs,
    faEnvira,
    faPython,
    faArrowUpRightFromSquare,
    faHeart,
    faArrowUp,
    faGear,
    faCircleNotch
);

function App() {
    const [theme, settheme] = useState("light");
    const [activeTab, setActiveTab] = useState("hardware");
    
    const toggleTheme = () => {
        settheme(theme === "light" ? "dark" : "light");
    };
    
    return (
        <div id="wrapper" className={theme === "light" ? "" : "dark"}>
            <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
            <main>
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
                    </div>

                    <div className="line"></div>
                    <div className="follow">Follow Me</div>
                    <div className="line"></div>
                </motion.div>

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
                    <p className="tPara">
                        Mechanical Engineering | Robotics | Full-Stack Developer
                    </p>
                    <div>
                        <a href="#about">About Me</a>
                        <a href="#contact">Let's talk</a>
                    </div>
                </motion.div>
            </main>
            
            <div id="about">
                <div className="aboutInfo">
                    <p>
                        I’m a third-year undergraduate student at IIT Kharagpur pursuing a B.Tech in Mechanical Engineering, 
                        and a hardware enthusiast who loves to design, build, and test physical systems.
                        <br /><br />
                        My core focus lies in mechanical design, primarily for robotics and mechatronic applications. 
                        I enjoy taking ideas from initial CAD models all the way to functional hardware.
                        <br /><br />
                        Apart from the mechanical side, I also actively develop software. Whether it's writing 
                        code to interface with robotic systems, analyzing engineering data, or building industry-grade 
                        applications like Learning Management Systems (LMS), Management Information Systems (MIS), 
                        and full-stack websites, I love tackling engineering challenges from end to end.
                        <div className="btnGroup">
                            <a href="#skills">My Skills</a>
                            <a href="#contact">Reach out</a>
                        </div>
                    </p>
                    <motion.img
                        src={avatar}
                        whileHover={{ scale: 1.02, filter: "none" }}
                        style={
                            theme === "dark"
                                ? { filter: "grayscale(100%)" }
                                : ""
                        }
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
                    {skills.map((category, catInd) => (
                        <motion.div
                            key={catInd}
                            className="skillCategory"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: catInd * 0.1 }}
                        >
                            <div className="skillCategoryHead">
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skillGrid">
                                {category.items.map((skill, skillInd) => (
                                    <Skillcard key={skillInd} skill={skill}></Skillcard>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            
            <div id="projects">
                <div className="projectsInfo">
                    <div className="tabs btnGroup" style={{width: '100%', marginBottom: 20}}>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab("hardware");
                            }}
                            className={activeTab === "hardware" ? "active" : ""}
                        >
                            Hardware
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveTab("software");
                            }}
                            className={activeTab === "software" ? "active" : ""}
                        >
                            Software
                        </a>
                    </div>
                    {projects[activeTab].map((val, ind) => (
                        <Projectcard
                            key={ind}
                            project={val}
                            theme={theme}
                        ></Projectcard>
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