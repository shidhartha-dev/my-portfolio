"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    let dotX = 0;
    let dotY = 0;
    
    let currentX = 0;
    let currentY = 0;
    const smoothFactor = 0.2;
    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const isPointer = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.closest("a") !== null ||
        target.closest("button") !== null;

      if (cursorDotRef.current) {
        if (isPointer) {
          cursorDotRef.current.classList.add("hover");
        } else {
          cursorDotRef.current.classList.remove("hover");
        }
      }
    };

    const animateDot = () => {
      // Linear interpolation for smooth trailing
      currentX += (dotX - currentX) * smoothFactor;
      currentY += (dotY - currentY) * smoothFactor;

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      animFrameId = requestAnimationFrame(animateDot);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animFrameId = requestAnimationFrame(animateDot);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isTouchDevice) return;
    
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <div 
      ref={cursorDotRef} 
      className="cursor-dot"
      style={{ opacity: isVisible ? 1 : 0 }}
    />
  );
}
