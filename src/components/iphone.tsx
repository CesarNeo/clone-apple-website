import { useGLTF, useTexture } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { useEffect } from 'react'
import * as THREE from 'three'

type Materials = {
  [name: string]: THREE.Material & { color: THREE.Color }
}

type Nodes = {
  [name: string]: THREE.Object3D<THREE.Object3DEventMap> & {
    geometry: THREE.BufferGeometry
  }
}

type ModelProps = GroupProps & {
  item: {
    title: string
    colors: string[]
    image: string
  }
}

function Model(props: ModelProps) {
  const { nodes, materials } = useGLTF('/models/scene.glb')
  const materialsFormatted = Object.entries(materials as Materials)
  const nodesFormatted = nodes as Nodes

  const texture = useTexture(props.item.image)

  useEffect(() => {
    materialsFormatted.map((material) => {
      if (
        material[0] !== 'zFdeDaGNRwzccye' &&
        material[0] !== 'ujsvqBWRMnqdwPx' &&
        material[0] !== 'hUlRcbieVuIiOXG' &&
        material[0] !== 'jlzuBkUzuJqgiAK' &&
        material[0] !== 'xNrofRCqOXXHVZt'
      ) {
        return (material[1].color = new THREE.Color(props.item.colors[0]))
      }
      return (material[1].needsUpdate = true)
    })
  }, [materials, materialsFormatted, props.item])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.ttmRoLdJipiIOmf?.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.DjsDkGiopeiEJZK?.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.buRWvyqhBBgcJFo?.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.rMmlCAsAxJpYqQ_0?.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.qbHSzWaUxBCwxY_0?.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.QvGDcbDApaGssma?.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.vFwJFNASGvEHWhs?.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.evAxFwhaQUwXuua?.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.USxQiqZgxHbRvqB?.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.TvgBVmqNmSrFVfW?.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.GuYJryuYunhpphO?.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.pvdHknDTGDzVpwc?.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.CfghdUoyzvwzIum?.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.DjdhycfQYjKMDyn?.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.usFLmqcyrnltBUr?.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.xXDHkMplTIDAXLN?.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        <meshStandardMaterial roughness={1} map={texture as THREE.Texture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.vELORlCJixqPHsZ?.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.EbQGKrWAqhBHiMv?.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.EddVrWkqZTlvmci?.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.KSWlaxBcnPDpFCs?.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.TakBsdEjEytCAMK?.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.IykfmVvLplTsTEW?.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.wLfSXtbwRlBrwof?.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.WJwwVjsahIXbJpU?.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.YfrJNXgMvGOAfzz?.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.DCLCbjzqejuvsqH?.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.CdalkzDVnwgdEhS?.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.NtjcIgolNGgYlCg?.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.pXBNoLiaMwsDHRF?.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.IkoiNqATMVoZFKD?.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodesFormatted.rqgRAGHOwnuBypi?.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  )
}

export default Model

useGLTF.preload('/models/scene.glb')
