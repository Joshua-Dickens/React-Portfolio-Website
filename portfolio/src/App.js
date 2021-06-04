import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useTexture } from "@react-three/drei";

function Sun(props) {
  const [colorMap] = useTexture(['Sun_texture.jpg'])
  const mesh = useRef()
  const [state, setState] = useState({ isHovered: false, isActive: false })
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = time / 5
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      
      scale={[1, 1, 1]}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}>
      <sphereGeometry args={[0.5, 100, 100]} map={colorMap} />
      <meshStandardMaterial map={colorMap} transparent={true} emissive={'#444444'} emissiveIntensity={0.3}/>
    </mesh>
  )
}

function Earth(props) {
  const mesh = useRef()
  const [state, setState] = useState({ isHovered: false, isActive: false })
  const [colorMap] = useTexture(['Earth_texture.jpg'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.position.x = 4 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 4 * Math.cos(time / 10)
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = time / 2
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.5, 0.5, 0.5]}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}>
      <sphereBufferGeometry args={[0.5, 40, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function Loading(props) {
  const mesh = useRef()
  const [state, setState] = useState({ isHovered: false, isActive: false })

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.position.x = mesh.current.position.x + Math.sin(time * 2) / 100
    mesh.current.rotation.y = mesh.current.rotation.x += 0.005
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={state.isHovered ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setState({ ...state, isActive: !state.isActive })}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={state.isActive ? '#820263' : '#00FF00'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas camera={{position: [0, 2, 8]}}>
      <Suspense fallback={<Loading />}>
      <Sun position={[0, 0, 0]} />
      <Earth position={[3, 0, 0]} />
      </Suspense>
      <ambientLight intensity={0.02}/>
      <pointLight position={[0, 0, 0]}/>
      
      <spotLight position={[1.5, 0, 0]} distance={4}/>
      <spotLight position={[-1.5, 0, 0]} distance={4}/>
      <spotLight position={[0, 0, -1.5]} distance={4}/>
      <spotLight position={[0, 0, 1.5]} distance={4}/>
      <spotLight position={[0, 1.5, 0]} distance={4}/>
      <spotLight position={[0, -1.5, 0]} distance={4}/>
    </Canvas>
  )
}
