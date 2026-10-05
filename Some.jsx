import GUI from "lil-gui";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
const Some = () => {
  useEffect(() => {
    const sizer = {
      height: window.innerHeight,
      width: window.innerWidth,
    };



    const scene = new THREE.Scene();
    const timer = new THREE.Timer();
    const gui = new GUI();
    const texture = new THREE.TextureLoader();
    const background = new THREE.Color("white");
    scene.background = background



// add a texture = wraper 
const load = texture.load("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpzkX300tpUvLXtPg1py8BcebtrbImQ9JK6zYIA6B1-g&s=10");
load.colorSpace = THREE.SRGBColorSpace



    // geomery material mesh

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const material = new THREE.MeshBasicMaterial({
    //   color: "red",
      map:load
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);



    // ui debug

    gui.add(mesh.position, "x").min(-3).max(3).step(0.1).name("position X");
    gui.add(mesh.position, "y").min(-3).max(3).step(0.1).name("position y");
    gui.add(mesh.position, "z").min(-3).max(3).step(0.1).name("position z");


    // const ambiton = new THREE.AmbientLight("#353535",3);
    // scene.add(ambiton)

    // const distance = new THREE.DirectionalLight("red",3);
    //  distance.position.set(1,1,1)
    // scene.add(distance)

    //   camera

    const camera = new THREE.PerspectiveCamera(
      75,
      sizer.width / sizer.innerWidth,
      0.1,
      100,
    );

    camera.position.z = 2;
    camera.lookAt(0,0,0)




    // render

    const canvas = document.querySelector("#webgl");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });

    renderer.setSize(sizer.width, sizer.height);

    renderer.render(camera,scene)

    const controls = new OrbitControls(camera,renderer.domElement);
controls.enableDamping = true

    function animate() {
        timer.update();
        controls.update();
        const delta = timer.getDelta();
        requestAnimationFrame(animate);
        mesh.rotation.x += delta;
        mesh.rotation.y += delta;
        renderer.render(camera,scene)
      }
      animate();


    // resizer

    function resizer() {
      sizer.width = window.innerWidth;
      sizer.height = window.innerHeight;

      renderer.setSize(sizer.width, sizer.height);
      camera.aspect = sizer.width / sizer.height;

      camera.updateProjectionMatrix();
    }

    window.addEventListener("resizer", resizer);

    resizer();

    // animate


  }, []);

  return (
    <div>
      <canvas id="webgl"></canvas>
    </div>
  );
};

export default Some;
