export const logoAnimations = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 1.3,
      type: 'spring',
      damping: 8
    }
  },
  exit: {
    y: 0,
    opacity: 1,
    scale: 0,
    transition: {
      duration: 0.3
    }
  }
}

export const busRouteAnimations: any = {
  hidden: { x: -1080, opacity: 0 },
  route: {
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
  exit: {
    x: 2000,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 2
    }
  },
  route2: {
    x: 24,
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
  exit2: {
    x: -200,
    opacity: 0
  }
}

export const busRouteSecondAnimations: any = {
  hidden: {
    position: 'fixed',
    bottom: -4,
    left: 0,
    x: 2000,
    opacity: 0
  },
  route: {
    x: 24,
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
  exit: {
    x: -400,
    opacity: 1,
    transition: {
      duration: 2
    }
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
    scale: 0,
    opacity: 0
  }
}
