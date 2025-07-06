import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({theme}) => {
    const mountRef = useRef(null);
    const cubeRef = useRef();
    const materialRef = useRef();

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ 
            alpha: true,
            antialias: false,        // Wyłącz antialias dla performance
            powerPreference: "high-performance",
            stencil: false,          // Wyłącz stencil buffer
            depth: true             // Zachowaj depth buffer
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Update pixel ratio on resize
        };
        window.addEventListener('resize', handleResize);

        // Simple vertex shader
        const vertexShader = `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `;

        // Liquid marble fragment shader with configurable colors
        const fragmentShader = `
            uniform float time;
            uniform float isDarkTheme;
            uniform vec3 darkColor1;
            uniform vec3 darkColor2;
            uniform vec3 darkColor3;
            uniform vec3 darkColor4;
            uniform vec3 lightColor1;
            uniform vec3 lightColor2;
            uniform vec3 lightColor3;
            uniform vec3 lightColor4;
            uniform float contrastBoost;
            uniform float patternIntensity;
            uniform float swirlIntensity;
            uniform float opacity;
            varying vec2 vUv;
            
            // Simple noise function
            float noise(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }
            
            // Smooth noise
            float smoothNoise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                float a = noise(i);
                float b = noise(i + vec2(1.0, 0.0));
                float c = noise(i + vec2(0.0, 1.0));
                float d = noise(i + vec2(1.0, 1.0));
                vec2 u = f * f * (3.0 - 2.0 * f);
                return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
            }
            
            void main() {
                vec2 uv = vUv;
                float t = time * 0.1;
                
                // Create extreme liquid flow with much higher density
                float noise1 = smoothNoise(uv * 6.0 + t);
                float noise2 = smoothNoise(uv * 8.0 + vec2(noise1 * 8.0, t * 2.5));
                float noise3 = smoothNoise(uv * 146.0 + vec2(noise2 * 6.0, t * 0.8));
                float noise4 = smoothNoise(uv * 52.0 + vec2(noise3 * 4.0, t * 4.0));
                float noise5 = smoothNoise(uv * 64.0 + vec2(noise4 * 3.0, t * 2.0));
                float noise6 = smoothNoise(uv * 128.0 + vec2(noise5 * 2.0, t * 1.2));
                
                // Much denser pattern for reference-like detail
                float pattern = noise1 * 0.4 + noise2 * 0.25 + noise3 * 0.15 + noise4 * 0.1 + noise5 * 0.07 + noise6 * 0.03;
                pattern *= patternIntensity;
                
                // Much more complex regions for dense marble veins
                float regions = smoothstep(0.0, 1.0, pattern);
                regions += smoothstep(0.1, 0.9, noise2) * 1.2;
                regions += smoothstep(0.05, 0.85, noise3) * 1.0;
                regions += smoothstep(0.2, 0.8, noise4) * 0.8;
                regions += smoothstep(0.3, 0.7, noise5) * 0.6;
                regions += smoothstep(0.4, 0.6, noise6) * 0.4;
                
                // Clamp to prevent over-saturation
                regions = clamp(regions, 0.0, 0.3);
                
                // Use configurable colors based on theme
                vec3 color1, color2, color3, color4;
                
                if (isDarkTheme > 0.5) {
                    color1 = darkColor1;
                    color2 = darkColor2;
                    color3 = darkColor3;
                    color4 = darkColor4;
                } else {
                    color1 = lightColor1;
                    color2 = lightColor2;
                    color3 = lightColor3;
                    color4 = lightColor4;
                }
                
                // Create extreme pattern definition
                float extremePattern1 = smoothstep(0.0, 1.0, pattern);
                float extremePattern2 = smoothstep(0.2, 0.8, regions);
                float extremePattern3 = smoothstep(0.4, 0.6, noise2);
                
                // Multi-layer color mixing for organic marble effect
                vec3 layer1 = mix(color1, color2, extremePattern1);
                vec3 layer2 = mix(color2, color3, extremePattern2);
                vec3 layer3 = mix(color3, color4, extremePattern3);
                
                // Combine all layers with strong contrast
                vec3 finalColor = mix(layer1, layer2, 0.6);
                finalColor = mix(finalColor, layer3, 0.4);
                
                // Add organic swirls
                float swirl = smoothNoise(uv * 6.0 + vec2(pattern * 2.0, t * 0.5));
                finalColor = mix(finalColor, color4, smoothstep(0.7, 1.0, swirl) * swirlIntensity);
                
                // Configurable contrast enhancement
                finalColor = pow(finalColor, vec3(contrastBoost));
                finalColor = clamp(finalColor, 0.0, 1.0);
                
                gl_FragColor = vec4(finalColor, opacity);
            }
        `;

        const geometry = new THREE.BoxGeometry();
        
        // Color configuration 
        const colorConfig = {
            dark: {
                // Dark theme 
                color1: new THREE.Color(0.0, 0.0, 0.0),            
                color2: new THREE.Color(0.15, 0.15, 0.15),        
                color3: new THREE.Color(0.45, 0.45, 0.45),         
                color4: new THREE.Color(0.85, 0.85, 0.85)         
            },
            light: {
                // Light theme
                color1: new THREE.Color(1.0, 1.0, 1.0),           
                color2: new THREE.Color(0.95, 0.95, 0.95),        
                color3: new THREE.Color(0.85, 0.85, 0.85),        
                color4: new THREE.Color(0.70, 0.70, 0.70)         
            }
        };
        
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                isDarkTheme: { value: theme.background === '#181818' || theme.background === '#121212' || theme.background === '#1a1a1a' ? 1.0 : 0.0 },
                // Dark theme colors
                darkColor1: { value: colorConfig.dark.color1 },
                darkColor2: { value: colorConfig.dark.color2 },
                darkColor3: { value: colorConfig.dark.color3 },
                darkColor4: { value: colorConfig.dark.color4 },
                // Light theme colors
                lightColor1: { value: colorConfig.light.color1 },
                lightColor2: { value: colorConfig.light.color2 },
                lightColor3: { value: colorConfig.light.color3 },
                lightColor4: { value: colorConfig.light.color4 },
                // Pattern control 
                contrastBoost: { value: 2.5 },        // Stronger contrast
                patternIntensity: { value: 2.5 },     // Higher pattern intensity
                swirlIntensity: { value: 0.1 },       // More swirl details
                // Opacity control - manually adjustable
                opacity: { value: 0.3 }  // Reduced opacity for better text visibility
            },
            vertexShader,
            fragmentShader,
            transparent: true  
        });

        materialRef.current = material;
        const cube = new THREE.Mesh(geometry, material);
        cubeRef.current = cube;
        scene.add(cube);

        camera.position.z = 5;

        // Animation loop
        const clock = new THREE.Clock();
        const animate = function () {
            requestAnimationFrame(animate);
            
            const elapsedTime = clock.getElapsedTime();
            if (materialRef.current) {
                materialRef.current.uniforms.time.value = elapsedTime;
            }
            
            cube.rotation.x += 0.003;
            cube.rotation.y += 0.004;
            
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    useEffect(() => {
        if (materialRef.current) {
            // Update theme when it changes 
            const isDark = theme.background === '#181818' || theme.background === '#121212' || theme.background === '#1a1a1a' || 
                          theme.background.includes('dark') || theme.name === 'dark';
            materialRef.current.uniforms.isDarkTheme.value = isDark ? 1.0 : 0.0;
            
            // Debug log to check theme detection
            console.log('Theme background:', theme.background, 'isDark:', isDark);
        }
    }, [theme]);

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