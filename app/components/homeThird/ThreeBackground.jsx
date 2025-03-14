"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, Html } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import "./Homethird.css";

const Wave = ({ mousePosition }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    meshRef.current.rotation.z = time * 0.1;
    meshRef.current.rotation.x = mousePosition.y * 0.1;
    meshRef.current.rotation.y = mousePosition.x * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10, 50, 50]} />
      <MeshWobbleMaterial
        attach="material"
        color={"#f4e7d4"}
        factor={1}
        speed={0.5}
        wireframe
      />
    </mesh>
  );
};

const Particles = ({ mousePosition }) => {
  const particleRef = useRef();

  useFrame(() => {
    particleRef.current.rotation.x = mousePosition.y * 0.05;
    particleRef.current.rotation.y = mousePosition.x * 0.05;
  });

  const positions = new Float32Array(1500 * 3); // 5000 particles * 3 (x, y, z)

  for (let i = 0; i < positions.length; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particleRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#f4e7d4" size={0.02} />
    </points>
  );
};

const FloatingText = () => {
  return (
    <Html center>
      <div className="glass-effect text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#f4e7d4] tracking-wider">
        Crafting Code, Creating Experiences.
      </div>
    </Html>
  );
};

const ThreeModel = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  return (
    <div onMouseMove={handleMouseMove} className="w-full h-screen rounded-xl">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} />
        <Wave mousePosition={mousePosition} />
        <Particles mousePosition={mousePosition} />
        <FloatingText />
      </Canvas>
    </div>
  );
};

export default ThreeModel;
