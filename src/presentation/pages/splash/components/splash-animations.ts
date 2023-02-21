export const logoAnimations = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 1
    }
  }
}

export const busAnimations: any = {
  hidden: { x: -1080, opacity: 0 },
  route1: {
    x: 1,
    opacity: 1,
    transition: {
      delay: 0.2,
      type: 'spring',
      damping: 14,
      mass: 1,
      stiffness: 140
    }
  },
  exit1: {
    x: 2000,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 2
    }
  },
  route2: {
    x: 24,
    position: 'fixed',
    bottom: -4,
    left: 0,
    opacity: 1,
    scaleX: -1,
    transition: {
      delay: 0.2,
      type: 'spring',
      damping: 15,
      mass: 0.55,
      stiffness: 150
    }
  },
  route3: {
    position: 'fixed',
    x: -200,
    opacity: 0
  }
}

export const peopleAnimations = {
  hidden: {
    y: 100,
    opacity: 0,
    position: 'fixed',
    left: 48,
    bottom: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
  exit: {
    opacity: 0
  }
}
