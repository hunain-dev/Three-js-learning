import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as THREE from "three"
import { useEffect } from "react";
const Mainwork = () => {

    useEffect(() => {
        const scene = new THREE.Scene();
        const timer = new THREE.Timer();
        // const gui = new GUI();
        // const texture = new THREE.TextureLoader();
    
        // const load = texture.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVpBepXsCHG4K39bTEekY6HZclEerGSFogyIVKXd1CQ&s=10",
    
        // ()=>{
        //   console.log("chal raha hai")
        // },
    
        // ()=>{
        //   console.log("nahi chal raha hai")
        // },
        // ()=>{
        //   console.log("sahi nahi chal raha hai")
        // }
    load
    
        // )
    
        // for practice
    
      //   const practic1 = texture.load("https://cdn.polyhaven.com/asset_img/primary/broken_brick_wall.png?height=760&quality=95&v=d5775c24")
      // practic1.colorSpace = THREE.SRGBColorSpace
    
        const background = new THREE.Color("white");
        scene.background = background;
    
        const size = {
          width: window.innerWidth,
          height: window.innerHeight,
        };

    
        // mesh
    
        const geometry = new THREE.BoxGeometry(3, 1.5, 2);
        // let count = 50;
    
        // const postionarray = new Float32Array(count * 3 * 3);
    
        // for (let i = 0; i < count * 3 * 3; i++) {
        //   postionarray[i] = (Math.random() - 0.5) * 4;
        // }
    
        // geometry.setAttribute(
        //   "position",
        //   new THREE.BufferAttribute(postionarray, 3)
        // );

        const ambientlight = new THREE.AmbientLight("#353535",3)
        scene.add(ambientlight)

        const directionlight = new THREE.DirectionalLight("red",2)
        directionlight.position.set(2,2,2)
        scene.add(directionlight)
    
        const material = new THREE.MeshStandardMaterial({
          color: 0xff0000,
          // map:practic1,  
          // wireframe: true  
        });
    
        const cube = new THREE.Mesh(geometry, material);
    
        scene.add(cube);
    
        // gui
        //   .add(cube.position, "x")
        //   .min(-3)
        //   .max(3)
        //   .step(0.1)
        //   .name("position x")
    
          // gui
          // .add(cube.position, "y")
          // .min(-3)
          // .max(3)
          // .step(0.1)
          // .name("position y");
    
          // gui
          // .add(cube.position, "z")
          // .min(-3)
          // .max(3)
          // .step(0.1)
          // .name("position Z")
    
        // camera
    
        const camera = new THREE.PerspectiveCamera(
          75,
          size.width / size.height,
          0.1,
          100
        );
    
        camera.position.z = 4;
        camera.lookAt(1, 1, 1);
    
        // render
    
        const canvas = document.querySelector("#webgl");
    
        const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
        });
    
        const controls = new OrbitControls(
          camera,
          renderer.domElement
        );
    
        controls.enableDamping = true;
    
        renderer.setSize(
          size.width,
          size.height
        );
    
        renderer.render(scene, camera);
    
        function animate() {
          timer.update();
          controls.update();
    
          // const delta = timer.getDelta();
    
          requestAnimationFrame(animate);
    
            // cube.rotation.x += delta;
            // cube.rotation.y += delta;
    
          renderer.render(scene, camera);
        }
    
        animate();
    
        function resize() {
          size.width = window.innerWidth;
          size.height = window.innerHeight;
    
          renderer.setSize(
            size.width,
            size.height
          );
    
          camera.aspect =
            size.width / size.height;
    
          camera.updateProjectionMatrix();
        }
    
        window.addEventListener("resize", resize);
    
        resize();
      }, []);
  return (
    <div>
      <canvas id="webgl"></canvas>
      
    </div>
  )
}

export default Mainwork
