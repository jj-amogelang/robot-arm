import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import RobotArm from './RobotArm';

const Simulation = () => {
  return (
    <Canvas
      camera={{ position: [5, 5, 5], fov: 50 }}
      style={{ height: '100vh', width: '100%' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      
      {/* Robot Arm */}
      <RobotArm rotationSpeed={0.01} />

      {/* Orbit Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default Simulation;
