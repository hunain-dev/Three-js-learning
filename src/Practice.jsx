import { useEffect } from 'react'
import * as THREE  from "three"
const Practice = () => {

  useEffect(() => {



    const size =  {

      width: window.innerWidth,
      height: window.innerHeight,
    }



    const scene = new THREE.Scene();
    const timer = new THREE.Timer();
    const background = new THREE.Color("white")
    scene.background = background;

    // mesh

    const geometery = new THREE.BoxGeometry(1,1,1);

    const material = new THREE.MeshBasicMaterial({
      color: "red",
    })

    const mesh = new THREE.Mesh(geometery,material);

    mesh.rotation.set(Math.PI / 4,Math.PI / 4,Math.PI / 4);
    scene.add(mesh)


    const camera  = new THREE.PerspectiveCamera(
      75,
      size.innerWidth / size.innerHeight,
      0.1,
      100
    )

    camera.position.z = 3;


    // render
    

  const canvas = document.querySelector("#webgl");

  const render = new THREE.WebGLRenderer({
    canvas:canvas
  })

  render.setSize(size.width,size.height);
  render.render(scene,camera);



  // for moving the mesh

  
  function aniamte() {
    timer.update();
    const delta = timer.getDelta();
    requestAnimationFrame(aniamte)
mesh.rotation.y += delta;
mesh.rotation.x += delta;
render.render(scene,camera);
    
  }

  aniamte();



  function resize() {
    size.width = window.innerWidth;
    size.height = window.innerHeight;

    render.setSize(size.width,size.height);
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
    
  }

  window.addEventListener("resize",resize);

  resize()
  
 
  }, [])
  
  return (
    <div>

      <canvas id='webgl'>

      </canvas>
      
    </div>
  )
}

export default Practice
