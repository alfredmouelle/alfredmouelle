'use client';

import { useEffect, useRef } from 'react';

const findDegree = (element: HTMLDivElement, event: MouseEvent) => {
  const rect = element.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const degreeRadian = Math.atan2(y, x);
  const degree = (degreeRadian * 180) / Math.PI + 180;

  return degree;
};

export const useGradientBorder = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current) return;
      const degree = findDegree(ref.current, event);
      ref.current.style.setProperty('--gradient-rotation', `${degree + 77}deg`);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ref;
};
