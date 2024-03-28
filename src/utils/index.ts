export function videoWidth() {
  if (window.innerWidth < 760) {
    return '10vw'
  }

  if (window.innerWidth < 1200) {
    return '10vw'
  }

  return '4vw'
}

export * from './animations'
export * from './cn'
