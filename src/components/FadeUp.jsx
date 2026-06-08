import { motion } from 'framer-motion'
import { fadeInViewProps } from './motionPresets.js'

export function FadeUp({ as = 'div', className = '', children }) {
  const Component = motion[as]

  return (
    <Component
      {...fadeInViewProps}
      className={className}
    >
      {children}
    </Component>
  )
}
