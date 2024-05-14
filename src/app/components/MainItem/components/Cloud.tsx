"use client"
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function Cloud () {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvasRef.current as HTMLCanvasElement
    });
    const mountRefCurrent = mountRef.current;
    mountRefCurrent && mountRefCurrent.appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 0);

    const aspectRatio = 1;
    const d = 4;
    const camera = new THREE.OrthographicCamera(-d * aspectRatio, d * aspectRatio, d, -d, -100, 1000);
    camera.position.set(0, 2, 2);
    camera.lookAt(0, 2, 2);
    scene.add(camera);
  
    let light = new THREE.HemisphereLight(0xffffff, 0x81d1ff, 4);
    scene.add(light);

    const onMouseMove = (event:MouseEvent) => {
      camera.position.x = -(event.clientX / window.innerWidth) * 2 + 1;
      camera.position.y = (event.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener('mousemove', onMouseMove);
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false;
    controls.update();

    let loader = new GLTFLoader();
    loader.load('/assets/gltf/cloud/cloud.gltf', function(g){
      g.scene.scale.set(1, 1.5, 1);
      g.scene.position.set(-7, -1, 0);
      scene.add(g.scene);
      renderer.render(scene, camera);
      function animate(){
        requestAnimationFrame(animate)
        // g.scene.rotation.y += 0.01;
        controls.update();
        renderer.render(scene, camera);
      }
      animate()
    });

    const currentMountRef = mountRef.current;
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      if(currentMountRef) currentMountRef.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <aside ref={mountRef} className='mainCloudObject'>
         <canvas id="canvas" width="480" height="300" ref={canvasRef}></canvas>
    </aside>
  );
}