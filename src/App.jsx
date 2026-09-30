// import { useEffect } from "react";
// import * as THREE from "three";

// function App() {
//   useEffect(() => {
//     const scene = new THREE.Scene();

//     const geometry = new THREE.BoxGeometry(1, 1, 1);

//     const material = new THREE.MeshBasicMaterial({
//       color: "red",
//     });

//     const cube = new THREE.Mesh(geometry, material);
  
//     // cube.rotation.y = Math.PI / 4;
//     // cube.rotation.set(Math.PI / 3, Math.PI / 4, 0);

//     scene.add(cube);

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       100
//     );

//     camera.position.z = 3;

//     const canvas = document.querySelector("#webgl");

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas,
//     });

//     renderer.setSize(
//       window.innerWidth,
//       window.innerHeight
//     );

//     renderer.render(scene, camera);

//     function animate() {
//       requestAnimationFrame(animate);

//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     }

//     animate();

//   }, []);

//   return <canvas id="webgl"></canvas>;
// }

// export default App; 


import Threejs from './Threejs'

const App = () => {
  return (
    <div>
      <Threejs/>
      
    </div>
  )
}

export default App

