import { useGLTF, useTexture } from '@react-three/drei'
import { GroupProps } from '@react-three/fiber'
import { memo } from 'react'
import type {
  BufferGeometry,
  Material,
  Object3D,
  Object3DEventMap,
  Texture,
} from 'three'
import { Color } from 'three'

type Materials = {
  [name: string]: Material & { color: Color }
}

type Nodes = {
  [name: string]: Object3D<Object3DEventMap> & {
    geometry: BufferGeometry
  }
}

type ModelProps = GroupProps & {
  item: {
    title: string
    colors: string[]
    image: string
  }
}

function Component({ item, ...props }: ModelProps) {
  const { nodes, materials } = useGLTF('/models/scene.glb')
  const texture = useTexture(item.image)

  const nodesFormatted = nodes as Nodes

  Object.entries(materials as Materials).forEach((material) => {
    if (
      material[0] !== 'zFdeDaGNRwzccye' &&
      material[0] !== 'ujsvqBWRMnqdwPx' &&
      material[0] !== 'hUlRcbieVuIiOXG' &&
      material[0] !== 'jlzuBkUzuJqgiAK' &&
      material[0] !== 'xNrofRCqOXXHVZt'
    ) {
      material[1].color = new Color(item.colors[0])
    }
    material[1].needsUpdate = true
  })

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
        <meshStandardMaterial roughness={1} map={texture as Texture} />
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

const IPhoneModel = memo(Component)

export default IPhoneModel
