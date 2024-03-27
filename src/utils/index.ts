import apple from '../../public/assets/images/apple.svg'
import bag from '../../public/assets/images/bag.svg'
import black from '../../public/assets/images/black.jpg'
import blue from '../../public/assets/images/blue.jpg'
import chip from '../../public/assets/images/chip.jpeg'
import explore1 from '../../public/assets/images/explore1.jpg'
import explore2 from '../../public/assets/images/explore2.jpg'
import frame from '../../public/assets/images/frame.png'
import hero from '../../public/assets/images/hero.jpeg'
import pause from '../../public/assets/images/pause.svg'
import play from '../../public/assets/images/play.svg'
import replay from '../../public/assets/images/replay.svg'
import right from '../../public/assets/images/right.svg'
import search from '../../public/assets/images/search.svg'
import watch from '../../public/assets/images/watch.svg'
import white from '../../public/assets/images/white.jpg'
import yellow from '../../public/assets/images/yellow.jpg'
// import exploremv from '../../public/assets/videos/explore.mp4'
// import framemv from '../../public/assets/videos/frame.mp4'
// import hmv from '../../public/assets/videos/hero.mp4'
// import highlightFirstmv from '../../public/assets/videos/highlight-first.mp4'
// import highlightFourthmv from '../../public/assets/videos/hightlight-fourth.mp4'
// import highlightThirdmv from '../../public/assets/videos/hightlight-sec.mp4'
// import highlightSectmv from '../../public/assets/videos/hightlight-third.mp4'
// import smallmv from '../../public/assets/videos/smallHero.mp4'

export const HERO_IMG = hero

// export const HERO_VIDEO = hmv
// export const SMALL_HERO_VIDEO = smallmv
// export const HIGHLIGHT_FIRST_VIDEO = highlightFirstmv
// export const HIGHLIGHT_SECOND_VIDEO = highlightSectmv
// export const HIGHLIGHT_THIRD_VIDEO = highlightThirdmv
// export const HIGHLIGHT_FOURTH_VIDEO = highlightFourthmv
// export const EXPLORE_VIDEO = exploremv
// export const FRAME_VIDEO = framemv

export const APPLE_IMG = apple
export const SEARCH_IMG = search
export const BAG_IMG = bag
export const WATCH_IMG = watch
export const RIGHT_IMG = right
export const REPLAY_IMG = replay
export const PLAY_IMG = play
export const PAUSE_IMG = pause

export const YELLOW_IMG = yellow
export const BLUE_IMG = blue
export const WHITE_IMG = white
export const BLACK_IMG = black
export const EXPLORE1_IMG = explore1
export const EXPLORE2_IMG = explore2
export const CHIP_IMG = chip
export const FRAME_IMG = frame

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
