import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { ElementRef, useEffect, useRef, useState } from 'react'

import { cn, videoWidth } from '../utils'
import { HIGHLIGHTS_SLIDES } from '../utils/constants'

gsap.registerPlugin(ScrollTrigger)

const VideoCarousel = () => {
  const videoRef = useRef<ElementRef<'video'>[]>([])
  const videoSpanRef = useRef<ElementRef<'span'>[]>([])
  const videoDivRef = useRef<ElementRef<'span'>[]>([])

  const [{ isEnd, isLast, startPlay, videoId, isPlaying }, setVideo] = useState(
    {
      isEnd: false,
      startPlay: false,
      videoId: 0,
      isLast: false,
      isPlaying: false,
    },
  )

  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: 'power2.inOut',
    })

    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none',
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }))
      },
    })
  }, [isEnd, videoId])

  const buttonControlVideoImage = isLast
    ? '/assets/images/replay.svg'
    : !isPlaying
      ? '/assets/images/play.svg'
      : '/assets/images/pause.svg'

  function handleProcess(type: string, i?: number) {
    switch (type) {
      case 'video-end':
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i! + 1 }))
        break
      case 'video-last':
        setVideo((pre) => ({ ...pre, isLast: true }))
        break
      case 'video-reset':
        setVideo((pre) => ({ ...pre, videoId: 0, isLast: false }))
        break
      case 'pause':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break
      case 'play':
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }))
        break
      default:
        break
    }
  }

  function handleVideoControlClick() {
    if (isLast) {
      return handleProcess('video-reset')
    }

    if (isPlaying) {
      return handleProcess('play')
    }

    return handleProcess('pause')
  }

  function handleVideoEnded(videoIndex: number) {
    if (videoIndex !== 3) {
      return handleProcess('video-end', videoIndex)
    }

    handleProcess('video-last')
  }

  function handleVideoPlay() {
    setVideo((pre) => ({ ...pre, isPlaying: true }))
  }

  useEffect(() => {
    let currentProgress = 0
    const span = videoSpanRef.current

    if (span[videoId]) {
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100)

          if (progress !== currentProgress) {
            currentProgress = progress

            gsap.to(videoDivRef.current[videoId], {
              width: videoWidth(),
            })

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white',
            })
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px',
            })
            gsap.to(span[videoId], {
              backgroundColor: '#afafaf',
            })
          }
        },
      })

      if (videoId === 0) anim.restart()

      function animUpdate() {
        anim.progress(
          videoRef.current[videoId].currentTime /
            HIGHLIGHTS_SLIDES[videoId].videoDuration,
        )
      }

      if (isPlaying) {
        gsap.ticker.add(animUpdate)
      } else {
        gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay, isPlaying])

  useEffect(() => {
    if (!isPlaying) {
      videoRef.current[videoId].pause()
    } else {
      startPlay && videoRef.current[videoId].play()
    }
  }, [startPlay, videoId, isPlaying])

  return (
    <>
      <div className="flex items-center">
        {HIGHLIGHTS_SLIDES.map((list, index) => (
          <div key={list.id} id="slider" className="pr-10 sm:pr-20">
            <div className="video-carousel_container">
              <div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
                <video
                  id="video"
                  playsInline
                  muted
                  preload="auto"
                  className={cn('pointer-events-none', {
                    'translate-x-44': list.id === 2,
                  })}
                  ref={(el) => {
                    if (el) videoRef.current[index] = el
                  }}
                  onEnded={() => handleVideoEnded(index)}
                  onPlay={handleVideoPlay}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div className="absolute left-[5%] top-12 z-10">
                {list.textLists.map((text, i) => (
                  <p key={i} className="text-xl font-medium md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-gray-300 px-7 py-5 backdrop-blur">
          {videoRef.current.map((_, index) => (
            <span
              key={index}
              className="relative mx-2 h-3 w-3 cursor-pointer rounded-full bg-gray-200"
              ref={(el) => {
                if (el) videoDivRef.current[index] = el
              }}
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => {
                  if (el) videoSpanRef.current[index] = el
                }}
              />
            </span>
          ))}
        </div>

        <button className="control-btn" onClick={handleVideoControlClick}>
          <img
            src={buttonControlVideoImage}
            alt={isLast ? 'replay' : !isPlaying ? 'play' : 'pause'}
            width={20}
            height={20}
            className="size-5"
          />
        </button>
      </div>
    </>
  )
}

export default VideoCarousel
