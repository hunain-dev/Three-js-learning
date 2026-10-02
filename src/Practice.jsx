import { useEffect } from 'react'
import * as THREE  from "three"
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

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

    // const geometery = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const geometery = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );

    const material = new THREE.MeshBasicMaterial({
      color: "red",
      wireframe:true
    })



    const mesh = new THREE.Mesh(geometery,material);

    // mesh.rotation.set(Math.PI / 4,Math.PI / 4,Math.PI / 4);
    scene.add(mesh)


    const camera  = new THREE.PerspectiveCamera(
      75,
      size.innerWidth / size.innerHeight,
      0.1,
      100
    )

    camera.position.z = 4;
    camera.lookAt(0,0,0);




    // render
    

  const canvas = document.querySelector("#webgl");

  const renderer = new THREE.WebGLRenderer({
    canvas:canvas
  })

  renderer.setSize(size.width,size.height);

  

    // for camera moving

    const controls = new OrbitControls(camera,renderer.domElement);
    controls.enableDamping = true


    renderer.render(scene,camera);



  // for moving the mesh

  
  function aniamte() {
    timer.update();
    controls.update();
    const delta = timer.getDelta();
    requestAnimationFrame(aniamte)
mesh.rotation.y += delta;
mesh.rotation.x += delta;
renderer.render(scene,camera);
    
  }

  aniamte();



  function resize() {
    size.width = window.innerWidth;
    size.height = window.innerHeight;

    renderer.setSize(size.width,size.height);
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
