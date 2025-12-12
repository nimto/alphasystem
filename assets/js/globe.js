import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

export function initGlobe(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.001); // Subtle fog for depth

    // CAMERA
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 1, 2000);
    camera.position.z = 250;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // GLOBE GROUP
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // 1. EARTH SPHERE (Textured Map)
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('./assets/img/earth_map.png');

    const sphereGeometry = new THREE.SphereGeometry(70, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        map: earthTexture,
        transparent: true,
        opacity: 1.0,
        color: 0xffffff
    });
    const globeMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(globeMesh);

    // 2. ATMOSPHERE GLOW
    const glowGeometry = new THREE.SphereGeometry(72, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xFF0000,
        transparent: true,
        opacity: 0.15,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending
    });
    const globeGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    globeGroup.add(globeGlow);

    // 3. INNER BLACK SPHERE
    const blackBase = new THREE.Mesh(
        new THREE.SphereGeometry(69.5, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    globeGroup.add(blackBase);

    // 4. NETWORK LINES & MARKERS
    const geometry = new THREE.IcosahedronGeometry(70, 4);
    const vertices = geometry.attributes.position.array;
    const vertexCount = vertices.length / 3;

    // Line Materials (Basic Lines to avoid computeLineDistances error)
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xFF0000,
        transparent: true,
        opacity: 0.15,
        linewidth: 1
    });

    const activeLineMaterial = new THREE.LineBasicMaterial({
        color: 0xFF4500, // Brighter Orange-Red
        transparent: true,
        opacity: 0.8,
        linewidth: 1.5
    });

    const lineGroup = new THREE.Group();
    const connectionCount = 70;

    // Store active lines to animate them
    const activeLines = [];

    for (let i = 0; i < connectionCount; i++) {
        const idx1 = Math.floor(Math.random() * vertexCount) * 3;
        const idx2 = Math.floor(Math.random() * vertexCount) * 3;

        const v1 = new THREE.Vector3(vertices[idx1], vertices[idx1 + 1], vertices[idx1 + 2]);
        const v2 = new THREE.Vector3(vertices[idx2], vertices[idx2 + 1], vertices[idx2 + 2]);

        const dist = v1.distanceTo(v2);

        if (dist > 30 && dist < 120) {
            const midPoint = v1.clone().add(v2).multiplyScalar(0.5);
            midPoint.setLength(90); // Arc height

            const curve = new THREE.QuadraticBezierCurve3(v1, midPoint, v2);
            const points = curve.getPoints(30);
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

            const isActive = Math.random() > 0.6;
            let mat;

            if (isActive) {
                // Clone material so we can animate it specifically? 
                // Actually sharing material is better for direct draw calls, 
                // but if we want different pulses, individual mats. 
                // For performance, let's use one shared "Active" material and pulse it globally.
                mat = activeLineMaterial;
            } else {
                mat = lineMaterial;
            }

            const line = new THREE.Line(lineGeometry, mat);
            lineGroup.add(line);
        }
    }
    globeGroup.add(lineGroup);

    // Markers
    const markerGeometry = new THREE.SphereGeometry(1.5, 8, 8);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
    const markers = [];

    for (let i = 0; i < 15; i++) {
        const idx = Math.floor(Math.random() * vertexCount) * 3;
        const pos = new THREE.Vector3(vertices[idx], vertices[idx + 1], vertices[idx + 2]);
        const marker = new THREE.Mesh(markerGeometry, markerMaterial);
        marker.position.copy(pos);
        globeGroup.add(marker);
        markers.push({ mesh: marker, phase: Math.random() * Math.PI * 2 });
    }

    // ANIMATION LOOP
    const animate = () => {
        requestAnimationFrame(animate);

        // Rotation
        globeGroup.rotation.y += 0.005;
        globeGroup.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;

        // Pulse Animation
        const time = Date.now() * 0.005;

        // Pulse markers
        markers.forEach(m => {
            const scale = 1 + Math.sin(time + m.phase) * 0.6;
            m.mesh.scale.set(scale, scale, scale);
        });

        // Global Pulse for active lines
        activeLineMaterial.opacity = 0.4 + Math.sin(time * 3) * 0.4; // Flash between 0.0 and 0.8

        renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}
