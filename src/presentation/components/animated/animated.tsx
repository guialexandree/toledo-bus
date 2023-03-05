import React from 'react'
import { AnimationControls, motion } from 'framer-motion'

type AnimatedProps = {
  variants: any
  children: React.ReactNode
  className?: string
  control?: AnimationControls
}

const Animated: React.FC<AnimatedProps> = ({
  variants,
  className,
  children,
  control
}) => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate={control || 'visible'}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default Animated
