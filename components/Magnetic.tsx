"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Magnetic = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const boundingClientRect = ref.current?.getBoundingClientRect();
        
        if (boundingClientRect) {
            const { height, width, left, top } = boundingClientRect;
            // Menghitung seberapa jauh kursor dari tengah elemen
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            
            // Menggeser elemen sedikit mengikuti kursor (dikali 0.1 agar tidak terlalu ekstrem)
            setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="w-max inline-block"
        >
            {children}
        </motion.div>
    );
};