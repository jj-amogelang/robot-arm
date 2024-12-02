import React from "react";
import { Canvas } from "@react-three/fiber";
import RobotArm from "./components/RobotArm"; // Adjust the import path as necessary

const App = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <RobotArm />
    </Canvas>
  );
};

export default App;
