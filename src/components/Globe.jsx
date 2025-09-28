import {useEffect, useRef} from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function  Globe(){
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.clientWidth / mountRef.current.clientHeight,
            0.1, 
            1000
        );
        const renderer = new THREE.WebGLRenderer({antialias : true});
        renderer.setSize(
            mountRef.current.clientWidth,
            mountRef.current.clientHeight
        );
        mountRef.current.appendChild(renderer.domElement);


        const loader = new THREE.TextureLoader();
        const earthTexture = loader.load("/textures/earth_september.jpg")

        const spaceTexture = loader.load("/textures/stars3.jpg");
        scene.background = spaceTexture;

        const geometry = new THREE.SphereGeometry( 5, 48, 48 ); 
        const material = new THREE.MeshBasicMaterial( { map: earthTexture } ); 
        const sphere = new THREE.Mesh( geometry, material ); 

        scene.add( sphere );
        const ambientLight = new THREE.AmbientLight(0x333333);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.minDistance = 10;
        controls.maxDistance = 25;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1.5;
        
        camera.position.z = 20;

        const handleResize = () => {
            if (!mountRef.current) return;
            const W = mountRef.current.clientWidth;
            const H = mountRef.current.clientHeight;
            renderer.setSize(W,H);
            camera.aspect = W/H;
            camera.updateProjectionMatrix();
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };
        window.addEventListener("resize", handleResize);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update();
        };
        animate();

        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };

    }, []);

    return <div ref={mountRef} className="w-full h-auto min-h-screen rounded-md"/>;
};