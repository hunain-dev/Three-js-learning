// import GUI from "lil-gui";
import { useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const Ourwork = () => {

    useEffect(() => {

    const scene = new THREE.Scene();
    const timer = new THREE.Timer();
    // const gui = new GUI();    
   
    const background = new THREE.Color("white");
    scene.background = background;

    const size = {
        width : window.innerWidth,
        height : window.innerHeight,
    }


    // textrue

    const texture = new THREE.TextureLoader();    

    const textload = texture.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYg_BsdqANctTG_bDhjNXScz1pq7SFqhvZeF2n-YM23A&s=10")


    //    for blury
    texture.minFilter = THREE.LinearFilter;    

    //    for for pixelet
    texture.magfilter = THREE.NearestFilter

    // mesh geometry material

    const geometry = new THREE.BoxGeometry(1,1,1);

  const material = new THREE.MeshStandardMaterial({
    color:"red", 
    map:textload,
    roughness: 0.5,
    metalness: 0.5
  })

  const mesh = new THREE.Mesh(geometry,material)
  scene.add(mesh);


//   gui

// gui.add(mesh.position, "x").min(-3).max(3).step(2).name("position X");
// gui.add(mesh.position, "y").min(-3).max(3).step(2).name("position y");
// gui.add(mesh.position, "z").min(-3).max(3).step(2).name("position z");



//   camera

const camera = new THREE.PerspectiveCamera(
    75,
    size.width / size.height,
    0.1,
    100,
)

camera.position.z = 4
camera.lookAt(0,0,0)


// render



const canvas = document.querySelector("#webgl");
const renders = new THREE.WebGLRenderer({
    canvas :canvas
})

renders.setSize(
    size.width,
    size.height,
)

renders.render(scene,camera);

const controls = new OrbitControls(camera, renders.domElement);
controls.enableDamping = true




function animate() {
    timer.update();
    controls.update();
    const delta = timer.getDelta();
    requestAnimationFrame(animate)
    mesh.rotation.x += delta
    mesh.rotation.y += delta;
    renders.render(scene, camera);

}

animate();




function resize() {
    size.width = window.innerWidth;
    size.height = window.innerHeight;

    

    renders.setSize(
        size.width,
        size.height,
    )
    
camera.aspect = size.width / size.height

camera.updateProjectionMatrix();
    
}
 window.addEventListener("resize",resize)

resize();



  
    }, [])
    


  return (
    <div>
        <canvas id="webgl"></canvas>
      
    </div>
  )
}

export default Ourwork
