import { useEffect } from "react";
import * as THREE from "three";

function App() {
  useEffect(() => {
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material = new THREE.MeshBasicMaterial({
      color: "red",
    });

    const cube = new THREE.Mesh(geometry, material);
  
    // cube.rotation.y = Math.PI / 4;
    cube.rotation.set(Math.PI / 3, Math.PI / 4, 0);

    scene.add(cube);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    camera.position.z = 3;

    const canvas = document.querySelector("#webgl");

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    renderer.render(scene, camera);


  }, []);

  return <canvas id="webgl"></canvas>;
}

export default App; 