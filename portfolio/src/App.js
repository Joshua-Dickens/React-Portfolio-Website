import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { Sphere } from 'three'

function Box(props) {
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

function Sun(props) {
  const [colorMap] = useLoader(TextureLoader, ['Sun_texture.jpg'])
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
      
      scale={state.isHovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}>
      <sphereGeometry args={[0.5, 100, 100]} map={colorMap} />
      <meshStandardMaterial map={colorMap}/>
    </mesh>
  )
}

function Earth(props) {
  const mesh = useRef()
  const [state, setState] = useState({ isHovered: false, isActive: false })
  const [colorMap] = useLoader(TextureLoader, ['Earth_texture.jpg'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.position.x = 3 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 3 * Math.cos(time / 10)
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



export default function App() {
  return (
    <Canvas camera={{position: [0, 2, 8], rotation: [0, -45, 0]}}>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} />
      <Sun position={[0, 0, 0]} />
      <Earth position={[3, 0, 0]} />
    </Canvas>
  )
}
