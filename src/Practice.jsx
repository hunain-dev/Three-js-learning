import  { useEffect } from 'react'
import * as THREE from "three"
const Practice = () => {


    useEffect(() => {

 const size = 
 {
    width : window.innerWidth,
    height : window.innerHeight
 }

 


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



window.addEventListener("resize",()=>{
    size.width = window.innerWidth;
    size.height = window.innerHeight;

    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();

    render.setSize(
        size.width,
        size.height
    )
    
    


})


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
