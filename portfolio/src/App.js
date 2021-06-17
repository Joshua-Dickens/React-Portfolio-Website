import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { useTexture } from "@react-three/drei";

function Sun(props) {
  const [colorMap] = useTexture(['Sun_texture.jpg'])
  const mesh = useRef()
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
      
      scale={[1, 1, 1]}>
      <sphereGeometry args={[0.5, 100, 100]} map={colorMap} />
      <meshStandardMaterial map={colorMap} transparent={true} emissive={'#444444'} emissiveIntensity={0.3}/>
    </mesh>
  )
}

function Earth(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['Earth_texture.jpg'])
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
      scale={[0.5, 0.5, 0.5]}>
      <sphereBufferGeometry args={[0.5, 40, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function Mars(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['Mars_texture.png'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + 90
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
      scale={[0.4, 0.4, 0.4]}>
      <sphereBufferGeometry args={[0.4, 40, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function Venus(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['Venus_texture.jpg'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + 40
    mesh.current.position.x = 2 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 2 * Math.cos(time / 10)
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = time / 2
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.45, 0.45, 0.45]}>
      <sphereBufferGeometry args={[0.4, 40, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function Mercury(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['Mercury_texture.png'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + 10
    mesh.current.position.x = 1 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 1 * Math.cos(time / 10)
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = time / 2
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.35, 0.35, 0.35]}>
      <sphereBufferGeometry args={[0.35, 40, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function Jupiter(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['Jupiter_texture.jpg'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + 50
    mesh.current.position.x = 6 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 6 * Math.cos(time / 10)
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = time / 2
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.9, 0.9, 0.9]}>
      <sphereBufferGeometry args={[0.9, 40, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function Saturn(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['Saturn_texture.png'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + 20
    mesh.current.position.x = 8.5 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 8.5 * Math.cos(time / 10)
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = time / 2
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.75, 0.75, 0.75]}>
      <sphereBufferGeometry args={[0.75, 40, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function SaturnRing(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['SaturnRing_texture.png'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + 20
    mesh.current.position.x = 8.5 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 8.5 * Math.cos(time / 10)
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 45
    mesh.current.rotation.y = 0
  })

  return (
    <mesh
      {...props}
      ref={mesh}>
      <ringBufferGeometry args={[0.75, 1, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} emissive={"#FFFFFF"} emissiveIntensity={0.01}/>
    </mesh>
  )
}

function Uranus(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['Uranus_texture.jpg'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + 40
    mesh.current.position.x = 10.5 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 10.5 * Math.cos(time / 10)
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = time / 2
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.55, 0.55, 0.55]}>
      <sphereBufferGeometry args={[0.55, 40, 40]} map={colorMap} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function Neptune(props) {
  const mesh = useRef()
  const [colorMap] = useTexture(['Neptune_texture.jpg'])
  useFrame((state) => {
    const time = state.clock.getElapsedTime() + 70
    mesh.current.position.x = 11.5 * Math.sin(time / 10)
    mesh.current.position.y = 0
    mesh.current.position.z = 11.5 * Math.cos(time / 10)
    mesh.current.rotation.z = 0
    mesh.current.rotation.x = 0
    mesh.current.rotation.y = time / 2
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[0.5, 0.5, 0.5]}>
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
    <Canvas camera={{position: [0, 4, 16]}}>
      <Suspense fallback={<Loading />}>
      <Sun />
      <Earth />
      <Mars />
      <Venus />
      <Mercury />
      <Jupiter />
      <Saturn />
      <SaturnRing />
      <Uranus />
      <Neptune />
      </Suspense>
      <ambientLight intensity={0.03}/>
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
