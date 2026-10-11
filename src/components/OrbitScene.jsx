import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { gsap } from "../lib/motion";

function makeCross() {
  const shape = new THREE.Shape();
  shape.moveTo(-0.17, -0.67);
  shape.lineTo(0.17, -0.67);
  shape.lineTo(0.17, -0.17);
  shape.lineTo(0.67, -0.17);
  shape.lineTo(0.67, 0.17);
  shape.lineTo(0.17, 0.17);
  shape.lineTo(0.17, 0.67);
  shape.lineTo(-0.17, 0.67);
  shape.lineTo(-0.17, 0.17);
  shape.lineTo(-0.67, 0.17);
  shape.lineTo(-0.67, -0.17);
  shape.lineTo(-0.17, -0.17);
  shape.closePath();
  return new THREE.ExtrudeGeometry(shape, {
    depth: 0.1,
    bevelEnabled: true,
    bevelThickness: 0.06,
    bevelSize: 0.04,
    bevelSegments: 3,
  });
}

function makeDust() {
  const positions = new Float32Array(150 * 3);
  let seed = 41;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };

  for (let index = 0; index < 150; index += 1) {
    const angle = random() * Math.PI * 2;
    const radius = 2.0 + random() * 1.1;
    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = Math.sin(angle) * radius;
    positions[index * 3 + 2] = (random() - 0.5) * 2.2;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      color: 0xc5f2e9,
      size: 0.026,
      transparent: true,
      opacity: 0.66,
      depthWrite: false,
    }),
  );
}

function OrbitScene({ phase, onError }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const latestPhase = useRef(phase);
  const reportError = useRef(onError);

  useEffect(() => {
    latestPhase.current = phase;
    reportError.current = onError;
  }, [phase, onError]);

  useEffect(() => {
    const mount = mountRef.current;
    const canvas = document.createElement("canvas");
    const options = { alpha: true, antialias: true, powerPreference: "low-power" };
    const context = canvas.getContext("webgl2", options) || canvas.getContext("webgl", options);
    if (!context) {
      reportError.current();
      return;
    }

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, context, ...options });
    } catch {
      reportError.current();
      return;
    }

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    canvas.className = "care-orbit-webgl";
    mount.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 30);
    camera.position.set(0, 0, 7.5);
    scene.add(new THREE.AmbientLight(0xc9faf2, 1.25));
    const keyLight = new THREE.PointLight(0xffffff, 95);
    keyLight.position.set(2.5, 3, 4);
    scene.add(keyLight);
    const edgeLight = new THREE.PointLight(0x10b0a6, 55);
    edgeLight.position.set(-3, -1, -2);
    scene.add(edgeLight);

    const scrollGroup = new THREE.Group();
    const responseGroup = new THREE.Group();
    const phaseGroup = new THREE.Group();
    scene.add(scrollGroup);
    scrollGroup.add(responseGroup);
    responseGroup.add(phaseGroup);
    phaseGroup.rotation.z = latestPhase.current * 0.28;

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.04, 48, 32),
      new THREE.MeshPhysicalMaterial({
        color: 0x087f82,
        metalness: 0.18,
        roughness: 0.16,
        clearcoat: 0.9,
        clearcoatRoughness: 0.12,
        transparent: true,
        opacity: 0.66,
        depthWrite: false,
      }),
    );
    phaseGroup.add(sphere);

    const cross = new THREE.Mesh(
      makeCross(),
      new THREE.MeshPhysicalMaterial({
        color: 0xf3fffd,
        metalness: 0.12,
        roughness: 0.2,
        clearcoat: 0.7,
        emissive: 0x0b756f,
        emissiveIntensity: 0.24,
      }),
    );
    cross.position.z = 1.1;
    phaseGroup.add(cross);

    const rings = [
      { radius: 1.66, color: 0x77ded2, x: 0.3, y: 0.35 },
      { radius: 1.96, color: 0xd5a52e, x: 1.08, y: -0.38 },
      { radius: 2.18, color: 0xbcebe6, x: -0.72, y: 0.92 },
    ];
    const ringGroups = [];
    const nodes = [];

    rings.forEach(({ radius, color, x, y }, index) => {
      const ringGroup = new THREE.Group();
      ringGroup.rotation.set(x, y, index * 0.22);
      ringGroup.add(
        new THREE.Mesh(
          new THREE.TorusGeometry(radius, index === 1 ? 0.014 : 0.01, 8, 144),
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: index === 2 ? 0.45 : 0.8,
            depthWrite: false,
          }),
        ),
      );
      const node = new THREE.Mesh(
        new THREE.SphereGeometry(index === 1 ? 0.09 : 0.07, 14, 10),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: index === latestPhase.current ? 1 : 0.56 }),
      );
      node.position.set(radius, 0, 0);
      ringGroup.add(node);
      phaseGroup.add(ringGroup);
      ringGroups.push(ringGroup);
      nodes.push(node);
    });

    const dust = makeDust();
    responseGroup.add(dust);
    const clock = new THREE.Clock();
    const pointer = { x: 0, y: 0 };

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.position.z = width < 480 ? 8.5 : 7.5;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      renderer.render(scene, camera);
    };

    const render = () => {
      const elapsed = clock.getElapsedTime();
      responseGroup.position.y = Math.sin(elapsed * 0.85) * 0.07;
      responseGroup.rotation.x += (pointer.y - responseGroup.rotation.x) * 0.045;
      responseGroup.rotation.y += (pointer.x - responseGroup.rotation.y) * 0.045;
      ringGroups[0].rotation.z = elapsed * 0.075;
      ringGroups[1].rotation.z = -elapsed * 0.055 + 0.22;
      ringGroups[2].rotation.z = elapsed * 0.035 + 0.44;
      dust.rotation.z = elapsed * 0.012;
      renderer.render(scene, camera);
    };

    let inView = false;
    const updatePlayback = () => {
      renderer.setAnimationLoop(inView && !document.hidden ? render : null);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        updatePlayback();
      },
      { rootMargin: "100px" },
    );
    observer.observe(mount);

    const onPointerMove = (event) => {
      const bounds = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.34;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.2;
    };
    const onPointerLeave = () => {
      pointer.x = 0;
      pointer.y = 0;
    };
    const onContextLost = (event) => {
      event.preventDefault();
      renderer.setAnimationLoop(null);
      reportError.current();
    };

    mount.addEventListener("pointermove", onPointerMove, { passive: true });
    mount.addEventListener("pointerleave", onPointerLeave);
    canvas.addEventListener("webglcontextlost", onContextLost);
    document.addEventListener("visibilitychange", updatePlayback);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();
    mount.parentElement.classList.add("care-orbit-ready");

    const scrollTween = gsap.to(scrollGroup.rotation, {
      y: Math.PI * 0.82,
      x: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: mount.closest(".care-orbit-section"),
        start: "top bottom",
        end: "bottom top",
        scrub: 0.65,
      },
    });

    sceneRef.current = { phaseGroup, nodes };

    return () => {
      sceneRef.current = null;
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
      resizeObserver.disconnect();
      observer.disconnect();
      mount.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("pointerleave", onPointerLeave);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      document.removeEventListener("visibilitychange", updatePlayback);
      renderer.setAnimationLoop(null);
      const geometries = new Set();
      const materials = new Set();
      scene.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) {
          (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => materials.add(material));
        }
      });
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      canvas.remove();
      mount.parentElement?.classList.remove("care-orbit-ready");
    };
  }, []);

  useEffect(() => {
    if (!sceneRef.current) return;
    const { phaseGroup, nodes } = sceneRef.current;
    const tweens = [
      gsap.to(phaseGroup.rotation, {
        z: phase * 0.28,
        duration: 1.15,
        ease: "power3.out",
        overwrite: "auto",
      }),
      ...nodes.map((node, index) =>
        gsap.to(node.material, {
          opacity: index === phase ? 1 : 0.55,
          duration: 0.65,
          overwrite: "auto",
        }),
      ),
    ];
    return () => tweens.forEach((tween) => tween.kill());
  }, [phase]);

  return <div ref={mountRef} className="care-orbit-canvas" />;
}

OrbitScene.propTypes = {
  phase: PropTypes.number.isRequired,
  onError: PropTypes.func.isRequired,
};

export default OrbitScene;
