import React, { useEffect } from 'react'
import * as THREE  from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
const Mainwork = () => {
  useEffect(() => {

    const scene = new THREE.Scene();
    const timer = new THREE.Timer();
    const bacgkround = new THREE.Color("white");
    scene.background = bacgkround


    // sizer 
    const size = {
      width:window.innerWidth,
      height:window.innerHeight,
    }

    // texture 

    const texture = new THREE.TextureLoader();

    const  load = texture.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9r1T7qKHyMP5-0uoi9La8OdwRz2NKQ05qBljEVvgk_w&s=10");
    load.colorSpace = THREE.SRGBColorSpace

    const ambiton = new THREE.AmbientLight("#353535",3);
    scene.add(ambiton)

    const distance = new THREE.DirectionalLight("red",3);
     distance.position.set(1,1,1)
    scene.add(distance)



    const geometry = new THREE.BoxGeometry(1,1,1);

    const material = new THREE.MeshBasicMaterial({
      // color:"red"
      map:load,
      // wireframe:true
    })
    
    const mesh = new THREE.Mesh(geometry,material);
    scene.add(mesh);


    // camera
    const camera = new THREE.PerspectiveCamera(
      75,
      size.width / size.height,
      0.1,
      100
    );

    camera.position.z  = 3;
    camera.lookAt(0,0,0)


  // renderer

  const canvas =  document.querySelector("#webgl");

  const renderer  = new THREE.WebGLRenderer({
    canvas:canvas
  });

  renderer.setSize(
    size.width,
    size.height,
  );

  renderer.render(scene, camera);

  // controls 

  const controls = new OrbitControls(camera,renderer.domElement);
  controls.enableDamping = true


  function animate() {
    timer.update();
    controls.update();
    const delta = timer.getDelta();
    requestAnimationFrame(animate);
    mesh.rotation.x += delta
    mesh.rotation.y += delta;
    renderer.render(scene, camera);
    
  }animate();

  function resize() {
    size.width = window.innerWidth;
    size.height = window.innerHeight;
    renderer.setSize(
      size.width,
      size.height,
    );
    camera.aspect = size.width / size.height;

 
  

    camera.updateProjectionMatrix();

  }
  window.addEventListener("resize",resize)
  
  resize()







  
  }, [])
  
  return (
    <canvas id='webgl'>
      
    </canvas>
  )
}

export default Mainwork
