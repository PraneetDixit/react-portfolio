import React from "react";
import { motion } from "motion/react";
import "./Skillcard.css";

export default function Skillcard({ skill }) {
  const name = typeof skill === "string" ? skill : skill.name;

  return (
    <motion.div
      className="skillChip"
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <span className="skillDot" aria-hidden="true"></span>
      <span className="skillName">{name}</span>
    </motion.div>
  );
}