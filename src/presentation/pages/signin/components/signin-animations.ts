export const logoAnimations: any = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.5
    }
  }
}

export const textAnimations: any = {
  hidden: { x: 380, opacity: 0 },
  visible: {
    x: 1,
    opacity: 1,
    transition: {
      delay: 0.55,
      type: 'spring',
      damping: 10,
      mass: 0.95,
      stiffness: 160
    }
  }
}

export const authAnimations: any = {
  hidden: { y: 180, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.6
    }
  }
}
