import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class ThreeAxe extends React.Component {
    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerWidth, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({
            canvas: document.querySelector('#three-axe'),
        })
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);
        renderer.render(scene, camera)
        const geometry = new THREE.CylinderGeometry( .3, .3, 20, 10 );
        const material = new THREE.MeshStandardMaterial( {color: 0xFF6347} );
        const cylinder = new THREE.Mesh( geometry, material );
        scene.add( cylinder );

        const pointLight = new THREE.PointLight(0xFFFFFF)
        const pointLight2 = new THREE.PointLight(0xFFFFFF)
        pointLight.position.set(5,5,5)
        pointLight2.position.set(-5,-5,-5)
        const ambientLight = new THREE.AmbientLight(0xFFFFFF)
        scene.add(pointLight2, pointLight)

        const lightHelper = new THREE.PointLightHelper(pointLight)
        scene.add(lightHelper);

        const gridHelper = new THREE.GridHelper(200, 50);
        scene.add(gridHelper);

        const loader = new GLTFLoader();
        loader.load(
            // resource URL
            './Axe2.gltf',
            // called when the resource is loaded
            function ( gltf ) {
        
                scene.add( gltf.scene );
                
            },
            // called while loading is progressing
            function ( xhr ) {
        
                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
                console.log(error);
                console.log( 'An error happened' );
        
            }
        );
        const controls = new OrbitControls(camera, renderer.domElement);

        function animate() {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }
        animate()
    }

    render() {
        return (
            <div>
            Three JS
                <canvas 
                    id="three-axe"
                >
                    
                </canvas>
            </div>
        )
    }
    
}