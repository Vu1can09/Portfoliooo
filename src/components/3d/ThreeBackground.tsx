"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function CircuitNetwork({ count = 200 }) {
    const pointsRef = useRef<THREE.Points>(null);
    const linesRef = useRef<THREE.LineSegments>(null);

    const [positions, connections] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const pointsData: THREE.Vector3[] = [];

        for (let i = 0; i < count; i++) {
            // eslint-disable-next-line react-hooks/purity
            const x = (Math.random() - 0.5) * 15;
            // eslint-disable-next-line react-hooks/purity
            const y = (Math.random() - 0.5) * 15;
            // eslint-disable-next-line react-hooks/purity
            const z = (Math.random() - 0.5) * 15;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            pointsData.push(new THREE.Vector3(x, y, z));
        }

        const indices: number[] = [];
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dist = pointsData[i].distanceTo(pointsData[j]);
                if (dist < 2.5) {
                    indices.push(i, j);
                }
            }
        }

        return [positions, new Uint16Array(indices)];
    }, [count]);

    useFrame((_, delta) => {
        if (pointsRef.current && linesRef.current) {
            pointsRef.current.rotation.y += delta * 0.04;
            pointsRef.current.rotation.x += delta * 0.02;
            linesRef.current.rotation.y += delta * 0.04;
            linesRef.current.rotation.x += delta * 0.02;
        }
    });

    return (
        <group>
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.03}
                    color="#00f0ff"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>

            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                    <bufferAttribute
                        attach="index"
                        args={[connections, 1]}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#8a2be2"
                    transparent
                    opacity={0.15}
                />
            </lineSegments>
        </group>
    );
}

export function ThreeBackground() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background/80 mix-blend-screen pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                dpr={[1, 2]}
                gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
            >
                <fog attach="fog" args={["#0b0b0f", 4, 12]} />
                <CircuitNetwork count={200} />
            </Canvas>
        </div>
    );
}
