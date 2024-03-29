import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import { Suspense, useMemo } from 'react'
import { Group, Vector3 } from 'three'

import { cn } from '../utils'
import IPhoneModel from './iphone'
import Lights from './lights'
import Loader from './loader'

interface ModelViewProps {
  index: number
  groupRef: React.MutableRefObject<Group>
  gsapType: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controlRef: any
  setRotationState: React.Dispatch<React.SetStateAction<number>>
  item: {
    title: string
    colors: string[]
    image: string
  }
}

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
}: ModelViewProps) => {
  const indexEqualsOne = index === 1

  const groupName = useMemo(
    () => (indexEqualsOne ? 'small' : 'large'),
    [indexEqualsOne],
  )
  const iPhoneScale = useMemo(
    () => (indexEqualsOne ? new Vector3(15, 15, 15) : new Vector3(17, 17, 17)),
    [indexEqualsOne],
  )

  return (
    <View
      index={index}
      id={gsapType}
      className={cn('absolute h-full w-full', {
        'right-[-100%]': index === 2,
      })}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef?.current.getAzimuthalAngle())}
      />

      <group ref={groupRef} name={groupName} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <IPhoneModel scale={iPhoneScale} item={item} />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView
