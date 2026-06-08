import { motion } from 'framer-motion'
import { fadeInViewProps } from './motionPresets.js'

export function Section({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={className}
      {...fadeInViewProps}
    >
      {children}
    </motion.section>
  )
}
