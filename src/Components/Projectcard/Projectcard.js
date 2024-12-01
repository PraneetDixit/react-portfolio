import React from "react";
import "./Projectcard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

export default function Projectcard(props) {
  return (
    <motion.div className="projectCard" whileHover={{y:-5}} transition={{ duration: 0.5 }} initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { y:100, opacity:0 },
      visible: {y:0, opacity:1},
    }}>
      <motion.img src={props.project.img} alt={props.project.name} whileHover={{ scale:1.1 }}
            transition={{ duration: 0.3 }} />
      <div className="cardInfo">
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
        <div className="cardLinks">
          {props.project.link && (
            <a href={props.project.link} target="_blank">
              <FontAwesomeIcon icon="fa-arrow-up-right-from-square fa-solid"></FontAwesomeIcon>
            </a>
          )}
          {props.project.github && (
            <a href={props.project.github} target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-github"></FontAwesomeIcon>
            </a>
          )}
          {props.project.codepen && (
            <a href={props.project.codepen} target="_blank">
              <FontAwesomeIcon icon="fa-brands fa-codepen"></FontAwesomeIcon>
            </a>
          )}
        </div>
        <div className="tags">
          {props.project.tags.map((val, ind) => (
            <span key={ind}>{val}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
