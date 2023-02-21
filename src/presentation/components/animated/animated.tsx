import React from 'react'
import { AnimationControls, motion, Variants } from 'framer-motion'

type AnimatedProps = {
  variants: any
  className?: string
  children: React.ReactNode
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
      animate={control ?? 'visible'}
      {...{ className }}
    >
      {children}
    </motion.section>
  )
}

export default Animated
