import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({theme}) => {
    const mountRef = useRef(null);
    const cubeRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild (renderer.domElement);

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener('resize', handleResize);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: theme.secondary , wireframe: false });
        const cube = new THREE.Mesh(geometry, material);
        cubeRef.current = cube;
        scene.add(cube);

        camera.position.z = 5;

        const animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.002;
            cube.rotation.y += 0.002;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    useEffect(() => {
        if (cubeRef.current) {
            cubeRef.current.material.color.set(theme.secondary);
        }
    }, [theme.text])

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    );
};


export default ThreeBackground;