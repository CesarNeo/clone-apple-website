import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import VideoCarousel from './video-carousel'

function Highlights() {
  useGSAP(() => {
    gsap.to('#highlights-title', {
      opacity: 1,
      y: 0,
    })
    gsap.to('.link', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    })
  }, [])

  return (
    <section
      id="highlights"
      className="common-padding h-full w-screen overflow-hidden bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="highlights-title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <span className="link">
              Watch the film
              <img
                src="/assets/images/watch.svg"
                alt="Watch"
                width={20}
                height={20}
                className="ml-2 h-5 w-5"
              />
            </span>

            <span className="link">
              Watch the event
              <img
                src="/assets/images/right.svg"
                alt="Watch"
                width={12}
                height={12}
                className="ml-2 h-3 w-3"
              />
            </span>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights
