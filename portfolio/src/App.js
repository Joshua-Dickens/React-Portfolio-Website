import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
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
      scale={state.isHovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onClick={(e) => setState({ ...state, isActive: !state.isActive })}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={state.isActive ? '#820263' : '#00FF00'} />
    </mesh>
  )
}

function Planet(props) {
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
      scale={state.isHovered ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      onClick={(e) => setState({ ...state, isActive: !state.isActive })}
      onPointerOver={(e) => setState({ ...state, isHovered: true })}
      onPointerOut={(e) => setState({ ...state, isHovered: false })}>
      <sphereBufferGeometry args={[0.5, 40, 40]} />
      <meshStandardMaterial color={state.isActive ? '#820263' : '#00FF00'} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-2, 0, 0]} />
      <Box position={[2, 0, 0]} />
      <Planet position={[0, 0, 0]} />
    </Canvas>
  )
}
