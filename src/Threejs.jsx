import { useEffect } from 'react'
import * as THREE from "three"
const Threejs = () => {
    useEffect(() => {

        const scenes = new THREE.Scene();
        scenes.background = new THREE.Color("white");
        // mesh (geometry, material, mesh)

        const geo = new THREE.TorusGeometry(1, 0.4, 16, 32);
        
        const material = new THREE.MeshBasicMaterial({
            color:"#75441A"
        })

        const cube = new THREE.Mesh(geo,material)

        cube.rotation.set(Math.PI / 2,Math.PI / 4,0)

         
    // cube.rotation.y = Math.PI / 4;
    // cube.rotation.set(Math.PI / 3, Math.PI / 4, 0);

        scenes.add(cube)

        
        const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        100    
        )

        camera.position.z = 4;


        // render

        const canvas = document.querySelector("#webgl")


        const render = new THREE.WebGLRenderer({

            canvas:canvas
        })
        render.setSize(
            window.innerWidth,
            window.innerHeight
        )
        
        render.render(scenes,camera)


        function animate() {
                  requestAnimationFrame(animate);
            
                  cube.rotation.x += 0.01;
                  cube.rotation.y += 0.01;
            
                  render.render(scenes, camera);
                }
            
                animate();
            
              }, []);
   

    
  return (
        <canvas id='webgl'></canvas>
      
  )
}

export default Threejs
