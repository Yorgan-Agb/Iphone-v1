import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Iphone12.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-0.4, 3.22, -0.78]}
        rotation={[Math.PI / 2, -0.01, -Math.PI / 2]}
        scale={0.07}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={nodes.Circle001_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={nodes.Circle001_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={nodes.Circle001_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_4.geometry}
          material={nodes.Circle001_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_5.geometry}
          material={nodes.Circle001_5.material}
        />
        <group position={[0.05, 0, -2.72]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={nodes.Circle_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={nodes.Circle_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_3.geometry}
            material={nodes.Circle_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_4.geometry}
            material={nodes.Circle_4.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_5.geometry}
            material={nodes.Circle_5.material}
          />
        </group>
        <group position={[2.58, 0, -1.43]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={nodes.Circle002_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={nodes.Circle002_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_3.geometry}
            material={nodes.Circle002_3.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_4.geometry}
            material={nodes.Circle002_4.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_5.geometry}
            material={nodes.Circle002_5.material}
          />
        </group>
        <group
          position={[4.83, -1.28, 10.29]}
          rotation={[0, 0, 3.14]}
          scale={13.55}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.PhoneBody}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={nodes.Plane_2.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_3.geometry}
            material={materials.Screen}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
          position={[1.36, -0.2, -1.31]}
          scale={[3.05, 3.05, 3.05]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Iphone12.gltf')
