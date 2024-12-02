import React, { useRef, useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const RobotArm = () => {
  const armRef = useRef();
  const obj = useLoader(OBJLoader, "/Robot arm.obj");

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Dynamic material setup
  const [material, setMaterial] = useState(
    new THREE.MeshStandardMaterial({
      color: "steelblue",
      metalness: 0.6,
      roughness: 0.4,
    })
  );

  // Update material dynamically based on hover and click state
  useEffect(() => {
    setMaterial(
      new THREE.MeshStandardMaterial({
        color: hovered ? "orange" : clicked ? "red" : "steelblue",
        metalness: 0.6,
        roughness: 0.4,
      })
    );
  }, [hovered, clicked]);

  // Apply material to the loaded model
  useEffect(() => {
    if (obj) {
      obj.traverse((child) => {
        if (child.isMesh) {
          child.material = material;
        }
      });
    }
  }, [obj, material]);

  // Handle pointer events
  const handlePointerOver = (event) => {
    event.stopPropagation();
    document.body.style.cursor = "pointer";
    setHovered(true);
  };

  const handlePointerOut = (event) => {
    event.stopPropagation();
    document.body.style.cursor = "default";
    setHovered(false);
  };

  const handlePointerDown = (event) => {
    event.stopPropagation();
    setClicked(!clicked);
  };

  return (
    <>
      {/* Lighting for better visibility */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[0, 5, 5]} intensity={0.8} color="white" />

      {/* The robot arm model */}
      <group
        ref={armRef}
        scale={[0.1, 0.1, 0.1]} // Adjust as needed
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onPointerDown={handlePointerDown}
      >
        <primitive object={obj} />
      </group>

      {/* OrbitControls for camera interaction */}
      <OrbitControls />
    </>
  );
};

export default RobotArm;
