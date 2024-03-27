/* eslint-disable react/no-unknown-property */
import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import { Suspense } from 'react'
import * as THREE from 'three'

import IPhone from './iphone'
import Lights from './lights'
import Loader from './loader'

interface ModelViewProps {
  index: number
  groupRef: React.MutableRefObject<THREE.Group>
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
  return (
    <View
      index={index}
      id={gsapType}
      className={`absolute h-full w-full ${index === 2 ? 'right-[-100%]' : ''}`}
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
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef?.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
          />
        </Suspense>
      </group>
    </View>
  )
}

export default ModelView
