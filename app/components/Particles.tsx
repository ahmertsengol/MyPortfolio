import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";

import './Particles.css';

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  className?: string;
  activeSection?: string;
}

const defaultColors: string[] = ["#ffffff", "#ffffff", "#ffffff"];

// Section-based color schemes
const sectionColors = {
  home: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'],
  about: ['#8b5cf6', '#ec4899', '#06b6d4', '#3b82f6'],
  skills: ['#10b981', '#06b6d4', '#3b82f6', '#8b5cf6'],
  projects: ['#f59e0b', '#ef4444', '#8b5cf6', '#3b82f6'],
  contact: ['#ec4899', '#8b5cf6', '#3b82f6', '#06b6d4']
};

const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map((c) => c + c).join("");
  }
  const int = parseInt(hex, 16);
  const r = ((int >> 16) & 255) / 255;
  const g = ((int >> 8) & 255) / 255;
  const b = (int & 255) / 255;
  return [r, g, b];
};

const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;
  attribute vec3 color;
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  uniform float uMouseInfluence;
  uniform vec2 uMouse;
  uniform float uScrollInfluence;
  uniform float uInteractionStrength;
  
  varying vec4 vRandom;
  varying vec3 vColor;
  varying float vDistanceToMouse;
  
  void main() {
    vRandom = random;
    vColor = color;
    
    vec3 pos = position * uSpread;
    pos.z *= 10.0;
    
    // Time-based movement
    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    float t = uTime;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);
    
    // Mouse interaction
    vec2 mousePos = uMouse;
    vec2 particlePos = mPos.xy;
    float distanceToMouse = length(particlePos - mousePos);
    vDistanceToMouse = distanceToMouse;
    
    // Attraction to mouse
    if (distanceToMouse < 3.0) {
      vec2 direction = normalize(mousePos - particlePos);
      float strength = (3.0 - distanceToMouse) / 3.0;
      mPos.xy += direction * strength * uMouseInfluence * 0.5;
    }
    
    // Scroll influence
    mPos.y += uScrollInfluence * 0.3;
    
    // Interactive elements influence
    mPos.xy += sin(t + random.xy * 6.28) * uInteractionStrength * 0.2;
    
    vec4 mvPos = viewMatrix * mPos;
    
    // Dynamic size based on mouse distance
    float sizeMultiplier = 1.0;
    if (distanceToMouse < 2.0) {
      sizeMultiplier = 1.0 + (2.0 - distanceToMouse) * 0.5;
    }
    
    gl_PointSize = (uBaseSize * (1.0 + uSizeRandomness * (random.x - 0.5)) * sizeMultiplier) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  
  uniform float uTime;
  uniform float uAlphaParticles;
  uniform float uMouseInfluence;
  varying vec4 vRandom;
  varying vec3 vColor;
  varying float vDistanceToMouse;
  
  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    
    // Dynamic color based on mouse distance
    vec3 finalColor = vColor;
    if (vDistanceToMouse < 2.0) {
      float proximity = (2.0 - vDistanceToMouse) / 2.0;
      finalColor = mix(vColor, vec3(1.0, 1.0, 1.0), proximity * 0.3);
    }
    
    // Color animation
    finalColor += 0.2 * sin(uv.yxx + uTime + vRandom.y * 6.28);
    
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) {
        discard;
      }
      
      // Glow effect near mouse
      float alpha = 1.0;
      if (vDistanceToMouse < 1.5) {
        alpha = 1.0 + (1.5 - vDistanceToMouse) * 0.5;
      }
      
      gl_FragColor = vec4(finalColor, alpha);
    } else {
      float circle = smoothstep(0.5, 0.4, d);
      
      // Enhanced alpha for interactive particles
      float alpha = circle * 0.8;
      if (vDistanceToMouse < 1.5) {
        alpha = mix(alpha, 1.0, (1.5 - vDistanceToMouse) / 1.5 * 0.4);
      }
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  }
`;

const Particles: React.FC<ParticlesProps> = ({
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = false,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 100,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  className,
  activeSection = 'home',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const smoothMouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const scrollRef = useRef<number>(0);
  const interactionRef = useRef<number>(0);
  const rendererRef = useRef<Renderer | null>(null);
  const programRef = useRef<Program | null>(null);
  const colorsRef = useRef<Float32Array>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ depth: false, alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);
    rendererRef.current = renderer;

    const camera = new Camera(gl, { fov: 15 });
    camera.position.set(0, 0, cameraDistance);

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize, false);
    resize();

    // Global mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current = { x, y };
    };

    // Global scroll tracking
    const handleScroll = () => {
      scrollRef.current = window.scrollY * 0.001;
    };

    // Interactive elements detection
    const handleInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.closest('button') || 
          target.classList.contains('hover:') || target.closest('[class*="hover:"]')) {
        interactionRef.current = Math.min(interactionRef.current + 0.1, 1.0);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseover", handleInteraction);

    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const randoms = new Float32Array(count * 4);
    const colors = new Float32Array(count * 3);
    
    // Get colors based on active section
    const currentColors = sectionColors[activeSection as keyof typeof sectionColors] || 
                         particleColors || defaultColors;

    for (let i = 0; i < count; i++) {
      let x: number, y: number, z: number, len: number;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        z = Math.random() * 2 - 1;
        len = x * x + y * y + z * z;
      } while (len > 1 || len === 0);
      const r = Math.cbrt(Math.random());
      positions.set([x * r, y * r, z * r], i * 3);
      randoms.set([Math.random(), Math.random(), Math.random(), Math.random()], i * 4);
      const col = hexToRgb(currentColors[Math.floor(Math.random() * currentColors.length)]);
      colors.set(col, i * 3);
    }

    colorsRef.current = colors;

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors },
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 },
        uMouseInfluence: { value: 0.5 },
        uMouse: { value: [0, 0] },
        uScrollInfluence: { value: 0 },
        uInteractionStrength: { value: 0 },
      },
      transparent: true,
      depthTest: false,
    });

    programRef.current = program;
    const particles = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    let animationFrameId: number;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t: number) => {
      animationFrameId = requestAnimationFrame(update);
      const delta = t - lastTime;
      lastTime = t;
      elapsed += delta * speed;

      program.uniforms.uTime.value = elapsed * 0.001;

      // Smooth mouse tracking
      const lerpFactor = 0.1;
      smoothMouseRef.current.x += (mouseRef.current.x - smoothMouseRef.current.x) * lerpFactor;
      smoothMouseRef.current.y += (mouseRef.current.y - smoothMouseRef.current.y) * lerpFactor;

      // Update uniforms
      program.uniforms.uMouse.value = [smoothMouseRef.current.x, smoothMouseRef.current.y];
      program.uniforms.uScrollInfluence.value = scrollRef.current;
      program.uniforms.uInteractionStrength.value = interactionRef.current;

      // Decay interaction strength
      interactionRef.current = Math.max(interactionRef.current - 0.02, 0);

      if (moveParticlesOnHover) {
        particles.position.x = -smoothMouseRef.current.x * particleHoverFactor;
        particles.position.y = -smoothMouseRef.current.y * particleHoverFactor;
      } else {
        particles.position.x = 0;
        particles.position.y = 0;
      }

      if (!disableRotation) {
        particles.rotation.x = Math.sin(elapsed * 0.0002) * 0.1;
        particles.rotation.y = Math.cos(elapsed * 0.0005) * 0.15;
        particles.rotation.z += 0.01 * speed;
      }

      renderer.render({ scene: particles, camera });
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseover", handleInteraction);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    particleCount,
    particleSpread,
    speed,
    moveParticlesOnHover,
    particleHoverFactor,
    alphaParticles,
    particleBaseSize,
    sizeRandomness,
    cameraDistance,
    disableRotation,
    activeSection,
    particleColors,
  ]);

  // Update colors when section changes
  useEffect(() => {
    if (!colorsRef.current || !programRef.current) return;

    const currentColors = sectionColors[activeSection as keyof typeof sectionColors] || 
                         particleColors || defaultColors;
    
    // Smooth color transition
    const colors = colorsRef.current;
    const colorCount = colors.length / 3;
    
    for (let i = 0; i < colorCount; i++) {
      const newColor = hexToRgb(currentColors[Math.floor(Math.random() * currentColors.length)]);
      const index = i * 3;
      
      // Animate color change
      const currentR = colors[index];
      const currentG = colors[index + 1];
      const currentB = colors[index + 2];
      
      colors[index] = currentR + (newColor[0] - currentR) * 0.1;
      colors[index + 1] = currentG + (newColor[1] - currentG) * 0.1;
      colors[index + 2] = currentB + (newColor[2] - currentB) * 0.1;
    }

    // Note: Color updates will be applied on next render cycle
  }, [activeSection, particleColors]);

  return (
    <div
      ref={containerRef}
      className={`particles-container ${className}`}
    />
  );
};

export default Particles; 