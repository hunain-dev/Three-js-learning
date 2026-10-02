import { useEffect } from 'react'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const App = () => {
  useEffect(() => {

    const scene = new THREE.Scene();
    const timer = new THREE.Timer();
    const background = new THREE.Color("white")
    scene.background = background;

    const size = {
      width : window.innerWidth,
      height : window.innerHeight,
    }

    // mesh

    // const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );


    // making a own custom geometry


   const geometry  =  new THREE.BufferGeometry();

    const count  = 50;  

    const positionarray = new Float32Array(count *3 * 3);


    for(let i = 0; i < count*3*3; i++ ){
      positionarray[i] = (Math.random() - 0.5) *4;


    }

    geometry.setAttribute("position",new THREE.BufferAttribute(positionarray,3))


  

    const material = new THREE.MeshBasicMaterial({
      color:"red",
      // wireframe:true
    })

    const cube = new THREE.Mesh(geometry,material);

    scene.add(cube);


    // camera

    const camera = new THREE.PerspectiveCamera(
   75,
   size.innerWidth / size.innerHeight,
   0.1,
   100,
    )

    camera.position.z = 4;
    camera.lookAt(0,0,0)


    // render

    const canvas = document.querySelector("#webgl");

    
    const renderer = new THREE.WebGLRenderer(
      {
      canvas: canvas
      }
    )

    const controls = new OrbitControls(camera,renderer.domElement);
    controls.enableDamping = true

    renderer.setSize(
      size.width,
      size.height,
    )

    renderer.render(camera,scene);


    function animate() {
      timer.update();
      controls.update();
      const delta = timer.getDelta();
      requestAnimationFrame(animate);

      cube.rotation.x += delta;
      cube.rotation.y += delta;
      renderer.render(scene,camera);

    }

  
    animate()


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
      <canvas id='webgl'></canvas>
      
    </div>
  )
}

export default App
