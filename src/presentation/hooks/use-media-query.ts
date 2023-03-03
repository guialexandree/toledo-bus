type ResultType = {
  isMobile: () => boolean
}

export const useMediaQuery = (): ResultType => {
  const isMobile = (): boolean => {
    return window.innerWidth < 600
  }

  return {
    isMobile
  }
}
