"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generate points outside the component render cycle to guarantee purity
function generateSpherePoints() {
    const arr = new Float32Array(6000);
    for (let i = 0; i < 2000; i++) {
        const r = 1.5;
        const theta = Math.random() * 2 * Math.PI;
        const phi = Math.acos(2 * Math.random() - 1);
        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        arr[i * 3] = x;
        arr[i * 3 + 1] = y;
        arr[i * 3 + 2] = z;
    }
    return arr;
}

const SPHERE_POINTS = generateSpherePoints();

function ParticleSphere() {
    const ref = useRef<THREE.Points>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={SPHERE_POINTS} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#6366f1" // Indigo 500
                    size={0.02}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 opacity-40">
            <Canvas camera={{ position: [0, 0, 3] }}>
                <ParticleSphere />
            </Canvas>
        </div>
    );
}
