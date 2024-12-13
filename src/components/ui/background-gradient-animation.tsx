"use client";

import { useEffect, useRef, useState } from "react";

interface BackgroundGradientAnimationProps {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className = "",
  interactive = true,
  containerClassName = "",
}: BackgroundGradientAnimationProps) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  useEffect(() => {
    function move() {
      if (!interactive) return;
      setCurX((prevX) => prevX + (tgX - prevX) * 0.08);
      setCurY((prevY) => prevY + (tgY - prevY) * 0.08);
      requestAnimationFrame(move);
    }

    const anim = requestAnimationFrame(move);
    return () => cancelAnimationFrame(anim);
  }, [interactive, tgX, tgY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    setTgX(e.clientX - rect.left);
    setTgY(e.clientY - rect.top);
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={containerClassName}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        ref={interactiveRef}
        onMouseMove={handleMouseMove}
        className={`relative flex h-full w-full items-center justify-center ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              mixBlendMode: blendingValue as any,
              transform: `translate(${curX}px, ${curY}px)`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at center, rgb(${firstColor}) 0%, transparent 20%),
                  radial-gradient(circle at 80% 20%, rgb(${secondColor}) 0%, transparent 20%),
                  radial-gradient(circle at 10% 40%, rgb(${thirdColor}) 0%, transparent 20%),
                  radial-gradient(circle at 90% 60%, rgb(${fourthColor}) 0%, transparent 20%),
                  radial-gradient(circle at 30% 80%, rgb(${fifthColor}) 0%, transparent 20%),
                  radial-gradient(circle at center, rgb(${pointerColor}) 0%, transparent 20%)
                `,
                backgroundSize: size,
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
