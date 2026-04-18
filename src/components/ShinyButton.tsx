import React, { useRef, useState, ReactNode } from "react";

interface ShinyButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const ShinyButton: React.FC<ShinyButtonProps> = ({
  children,
  className = "",
  onClick,
  type = "button"
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mouseX, setMouseX] = useState<number>(0.5);
  const [mouseY, setMouseY] = useState<number>(0.5);

  const mouseMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMouseX((e.clientX - rect.left) / rect.width);
      setMouseY((e.clientY - rect.top) / rect.height);
    }
  };

  return (
    <button
      ref={buttonRef}
      onPointerMove={mouseMove}
      onClick={onClick}
      type={type}
      className={`group relative py-3.5 px-7 rounded-[20px] bg-zinc-800 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          "--mx": `${mouseX * 100}%`,
          "--my": `${mouseY * 100}%`
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 glow"></div>
        <div className="absolute inset-0 shine mix-blend-screen"></div>
      </div>
      <div className="absolute inset-0.5 rounded-[18px] bg-zinc-900/75"></div>
      <div className="relative text-zinc-300 group-hover:text-zinc-50 transition-colors duration-100">
        {children}
      </div>

      <style jsx>{`
        .glow {
          background: radial-gradient(
            600px circle at var(--mx) var(--my),
            rgba(255, 255, 255, 0.1),
            transparent 40%
          );
        }

        .shine {
          background: conic-gradient(
            from 0deg at var(--mx) var(--my),
            transparent 0deg,
            rgba(255, 255, 255, 0.3) 60deg,
            transparent 120deg,
            transparent 240deg,
            rgba(255, 255, 255, 0.2) 300deg,
            transparent 360deg
          );
        }
      `}</style>
    </button>
  );
};