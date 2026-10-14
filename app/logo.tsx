import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({ size = "md", showTagline = true }: LogoProps) {
  const iconSize = size === "sm" ? 30 : size === "lg" ? 44 : 38;

  return (
    <div className={`brand-logo brand-logo-${size}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-logo-icon"
      >
        <defs>
          <linearGradient id="nexusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="nexusGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        {/* Hexágono Geométrico Tech */}
        <polygon
          points="24,4 42,14 42,34 24,44 6,34 6,14"
          fill="url(#nexusGrad)"
        />
        {/* Traçado 'N' Tech */}
        <path
          d="M17 33V15L31 33V15"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Ponto de Conexão */}
        <circle cx="24" cy="24" r="2.8" fill="url(#nexusGlow)" />
      </svg>
      <div className="brand-logo-text">
        <span className="brand-name">
          NEXUS <span className="brand-name-sub">TECH</span>
        </span>
        {showTagline && (
          <span className="brand-tagline">ASSISTÊNCIA TÉCNICA & TI</span>
        )}
      </div>
    </div>
  );
}
