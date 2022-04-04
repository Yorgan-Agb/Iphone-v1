import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Model from './components/Model'
import './App.css'

export default function App() {
  const ref = useRef()
  return (
    <div className='canvasContainer'>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage
            controls={ref}
            preset='rembrandt'
            intensity={1}
            environment='city'
          >
            <Model className='mobile' />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref}  />
      </Canvas>
    </div>
  )
}
