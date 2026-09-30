import  { useEffect } from 'react'
import * as THREE from "three"
const Practice = () => {


    useEffect(() => {
        const scene = new THREE.Scene();
        const timer = new THREE.Timer();
     scene.background = new THREE.Color("white")

        // mesh
        const geo = new THREE.TorusGeometry(1, 0.4, 16, 32);

        const material = new THREE.MeshBasicMaterial({
            color:"red"
        })

        const cube = new THREE.Mesh(geo,material);

        cube.rotation.set(Math.PI / 2, Math.PI / 4,0);
        scene.add(cube);

        // camera

        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
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
    window.innerWidth,
    window.innerHeight
)



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
    <div>
        <canvas id='webgl'></canvas>
      
    </div>
  )
}

export default Practice
