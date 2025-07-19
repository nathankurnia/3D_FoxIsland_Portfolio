import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import birdScene from "../assets/3d/bird.glb";

// 3D Model from: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export const Bird = () => {
  const birdRef = useRef();

  // Load the 3D model and animations from the provided GLTF file
  const { scene, animations } = useGLTF(birdScene);

  // Get access to the animations for the bird
  const { actions } = useAnimations(animations, birdRef);

  // Play the "Take 001" animation when the component mounts
  // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  const angleRef = useRef(0); // untuk menyimpan sudut rotasi
  const center = new THREE.Vector3(0, 10, -50); // pusat orbit (tepat di atas pulau)
  const radius = 30; // jarak orbit dari pusat
  const speed = 0.2; // kecepatan terbang (radian per detik)

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  useFrame((state, delta) => {
    angleRef.current -= delta * speed; // naikkan sudut seiring waktu

    // Posisi burung dalam orbit horizontal
    const x = center.x + radius * Math.cos(angleRef.current);
    const z = center.z + radius * Math.sin(angleRef.current);
    const y = center.y + Math.sin(state.clock.elapsedTime * 2) * 0.2; // gerakan naik turun

    // Update posisi
    birdRef.current.position.set(x, y, z);

    // Rotasi agar menghadap arah gerak
    birdRef.current.rotation.y = -angleRef.current + Math.PI / 2;
  });

  return (
    <mesh ref={birdRef} scale={[0.01, 0.01, 0.01]}>
      {/* Gunakan komentar JSX yang valid */}
      {/* use the primitive element when you want to directly embed a complex 3D model or scene */}
      <primitive object={scene} />
    </mesh>
  );
};
