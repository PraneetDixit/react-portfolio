import React from 'react'
import { motion } from 'motion/react'
import './Skillcard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Skillcard(props) {
  return (
    <motion.div className='skillCard' whileHover={{scale:1.02}}>
      <div className='name'>{props.skill.name}
        <FontAwesomeIcon icon={`fa-${props.skill.solid? "solid": "brands"} fa-${props.skill.icon}`} style={{fontSize:"30px"}}></FontAwesomeIcon>
      </div>
      <motion.div className='progress' initial="zero"
          whileInView="full"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1 }}
          variants={{
            zero: { width:0 },
            full: { width:`${props.skill.percentage}%` },
          }}></motion.div>
    </motion.div>
  )
}
