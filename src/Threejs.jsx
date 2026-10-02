import { useEffect } from 'react'
import * as THREE from "three"
const Threejs = () => {
    useEffect(() => {

        const size = 
        {
           width : window.innerWidth,
           height : window.innerHeight
        }
       
        
       
       
               const scene = new THREE.Scene();
               const timer = new THREE.Timer();
            // scene.background = new THREE.Color("black");
       
               // mesh
               const geo = new THREE.BoxGeometry(10, 2,3,4,5);
       
               const material = new THREE.MeshBasicMaterial({
                   color:"blue"
               })
       
               const cube = new THREE.Mesh(geo,material);
       
               cube.rotation.set(Math.PI / 1, Math.PI / 1,0);
               scene.add(cube);
       
               // camera
       
               const camera = new THREE.PerspectiveCamera(
                 75,
                 size.innerWidth / size.innerHeight,
                 0.1,
                 100
               )
       
               camera.position.z = 5
       
       
               const canvas = document.querySelector("#webgl")
       
               // render
       
         const render = new THREE.WebGLRenderer({
           canvas:canvas
         })
       
         render.setSize(
           size.width,
           size.height
       )
       
       
       function resize() {
       
         size.width = window.innerWidth;
         size.height = window.innerHeight;
       
         camera.aspect = size.width / size.height;
         camera.updateProjectionMatrix();
       
         render.setSize(size.width, size.height);
       
       
       } 
       window.addEventListener("resize",resize);
       
         resize();
       
       function animate() {
           timer.update();
           const delta = timer.getDelta();
          cube.rotation.x += delta;
          cube.rotation.y += delta;
          render.render(scene, camera);
          requestAnimationFrame(animate);
       } animate() 
           
           }, [])
   

    
  return (
        <canvas id='webgl'></canvas>
      
  )
}

export default Threejs
