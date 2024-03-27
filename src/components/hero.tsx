import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useState } from 'react'

function Hero() {
  const [videoSrc, setVideoSrc] = useState(() => {
    if (window.innerWidth < 768) {
      return '/assets/videos/smallHero.mp4'
    } else {
      return '/assets/videos/hero.mp4'
    }
  })

  function onResize() {
    if (window.innerWidth < 768) {
      setVideoSrc('/assets/videos/smallHero.mp4')
    } else {
      setVideoSrc('/assets/videos/hero.mp4')
    }
  }

  useGSAP(() => {
    gsap.to('#hero-title-h3', {
      opacity: 1,
      delay: 2,
    })

    gsap.to('#cta', {
      opacity: 1,
      delay: 2,
      y: -50,
    })
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <h3 id="hero-title-h3" className="hero-title">
          iPhone 15 pro
        </h3>

        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline
            key={videoSrc}
            className="pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex translate-y-20 flex-col items-center opacity-0"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>

        <span className="text-xl font-normal">From $199/month or $999</span>
      </div>
    </section>
  )
}

export default Hero
