import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber";
import { Float, Line, Icosahedron, TorusKnot, Box } from "@react-three/drei";
import * as THREE from "three";

/**
 * WebGL 3D backdrop — floating wireframe architectural forms
 * (icosahedron, torus knot, boxes) drifting on a subtle mouse
 * parallax. Sits behind hero content as an animated layer.
 *
 * Cheap: single canvas, only line materials, no lighting, no
 * post-processing. Respects prefers-reduced-motion by dropping
 * frame updates.
 */
export function SceneCanvas({
  className,
  density = "regular",
  parallaxStrength = 0.35,
}: {
  className?: string;
  density?: "regular" | "sparse";
  parallaxStrength?: number;
}) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
      aria-hidden
    >
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <Scene density={density} parallaxStrength={parallaxStrength} />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene({
  density,
  parallaxStrength,
}: {
  density: "regular" | "sparse";
  parallaxStrength: number;
}) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useFrame(({ pointer, clock }) => {
    if (reduced || !group.current) return;
    // Smooth pointer parallax
    target.current.x += (pointer.x * parallaxStrength - target.current.x) * 0.05;
    target.current.y += (pointer.y * parallaxStrength - target.current.y) * 0.05;
    group.current.rotation.y = target.current.x;
    group.current.rotation.x = -target.current.y * 0.5;
    // Gentle idle sway
    group.current.position.y = Math.sin(clock.elapsedTime * 0.3) * 0.05;
  });

  const shapes = density === "sparse" ? 3 : 5;

  return (
    <group ref={group}>
      {/* Central architectural icosahedron */}
      <Float speed={0.9} rotationIntensity={0.35} floatIntensity={0.6}>
        <Icosahedron args={[1.4, 1]} position={[0, 0, -1]}>
          <meshBasicMaterial wireframe color="#bb1c1c" transparent opacity={0.22} />
        </Icosahedron>
      </Float>

      {/* Orbiting torus knot */}
      <Float speed={0.7} rotationIntensity={0.6} floatIntensity={0.8}>
        <TorusKnot args={[0.9, 0.12, 128, 12]} position={[2.6, 0.4, -1.5]}>
          <meshBasicMaterial wireframe color="#6f6dc5" transparent opacity={0.28} />
        </TorusKnot>
      </Float>

      {/* Distant tall box — architectural */}
      <Float speed={0.4} rotationIntensity={0.15} floatIntensity={0.3}>
        <Box args={[0.6, 2.4, 0.6]} position={[-2.6, -0.3, -1.8]}>
          <meshBasicMaterial wireframe color="#3835a8" transparent opacity={0.35} />
        </Box>
      </Float>

      {shapes >= 4 && (
        <Float speed={0.55} rotationIntensity={0.4} floatIntensity={0.5}>
          <Box args={[1, 0.6, 1]} position={[1.4, -1.6, -0.8]}>
            <meshBasicMaterial
              wireframe
              color="#bb1c1c"
              transparent
              opacity={0.18}
            />
          </Box>
        </Float>
      )}

      {shapes >= 5 && (
        <Float speed={0.35} rotationIntensity={0.2} floatIntensity={0.4}>
          <Icosahedron args={[0.5, 0]} position={[-1.6, 1.8, -0.6]}>
            <meshBasicMaterial
              wireframe
              color="#ec5959"
              transparent
              opacity={0.4}
            />
          </Icosahedron>
        </Float>
      )}

      {/* Long ground rule — a horizon line for depth */}
      <GroundLines />
    </group>
  );
}

function GroundLines() {
  const points = useMemo(() => {
    const out: THREE.Vector3[] = [];
    for (let i = -6; i <= 6; i++) {
      out.push(new THREE.Vector3(-8, -2.4, i * 0.7));
      out.push(new THREE.Vector3(8, -2.4, i * 0.7));
    }
    return out;
  }, []);

  return (
    <group>
      {points.reduce<React.ReactElement[]>((acc, _, i, arr) => {
        if (i % 2 === 0 && arr[i + 1]) {
          acc.push(
            <Line
              key={i}
              points={[arr[i], arr[i + 1]]}
              color="#3835a8"
              transparent
              opacity={0.18}
              lineWidth={1}
            />
          );
        }
        return acc;
      }, [])}
    </group>
  );
}

/* Type-safety for JSX intrinsic elements when @react-three/fiber
   drops the module augmentation in some Vite setups. */
export type _ThreeIntrinsics = ThreeElements;
