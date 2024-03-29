import { View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap'
import { CSSProperties, memo, useEffect, useRef, useState } from 'react'
import { Group } from 'three'

import { animateWithGsapTimeline } from '../utils'
import ModelView from './model-view'

interface IPhoneCanvasProps {
  model: {
    title: string
    colors: string[]
    image: string
  }
  size: string
}

const DEFAULT_CANVAS_STYLE = {
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: 'hidden',
} satisfies CSSProperties

function Component({ size, model }: IPhoneCanvasProps) {
  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)

  const cameraControlSmall = useRef()
  const cameraControlLarge = useRef()
  const small = useRef(new Group())
  const large = useRef(new Group())

  useEffect(() => {
    const tl = gsap.timeline()

    if (size === 'large') {
      animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 2,
      })
    }

    if (size === 'small') {
      animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 2,
      })
    }
  }, [largeRotation, size, smallRotation])

  return (
    <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
      <ModelView
        index={1}
        groupRef={small}
        gsapType="view1"
        controlRef={cameraControlSmall}
        setRotationState={setSmallRotation}
        item={model}
      />

      <ModelView
        index={2}
        groupRef={large}
        gsapType="view2"
        controlRef={cameraControlLarge}
        setRotationState={setLargeRotation}
        item={model}
      />

      <Canvas
        className="size-full"
        style={DEFAULT_CANVAS_STYLE}
        eventSource={document.getElementById('root') ?? undefined}
      >
        <View.Port />
      </Canvas>
    </div>
  )
}

const IPhoneCanvas = memo(Component)

export default IPhoneCanvas
