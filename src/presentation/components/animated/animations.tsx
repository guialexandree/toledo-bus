export const leftToRightAnimation = (delay = 0.3): any => ({
  hidden: { x: '-200px', opacity: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay
    }
  }
})

export const fadeSlideDownToUp = (delay = 0.3): any => ({
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: delay
    }
  }
})

export const fadeSlideUpToDown = (delay = 0.3): any => ({
  hidden: { y: '-60', opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: delay
    }
  }
})

export const springRightToLeftAnimation = (delay = 0.55, slow = false): any => ({
  hidden: { x: 380, opacity: 0 },
  visible: {
    x: 1,
    opacity: slow ? [0.3, 1] : 1,
    transition: {
      delay,
      type: 'spring',
      damping: 10,
      mass: 0.95,
      stiffness: 200
    }
  }
})

export const springLeftToRightAnimation = (delay = 0.55, slow = false, exit?: any): any => ({
  hidden: { x: -380, opacity: 0 },
  visible: {
    x: 1,
    opacity: slow ? [0.3, 1] : 1,
    transition: {
      delay,
      type: 'spring',
      damping: 15,
      mass: 0.95,
      stiffness: 200
    }
  }
})

export const zoomInAnimation = (delay = 0.3): any => ({
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay
    }
  }
})

// export const zoomOutAnimation = (delay = 0.3): any => ({
//   opacity: 0,
//   scale: 0,
//   transition: {
//     duration: delay
//   }
// })
