"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const platforms = [
  { name: "YouTube", logo: "/platforms/youtube.jpg" },
  { name: "X", logo: "/platforms/x.jpg" },
  { name: "Instagram", logo: "/platforms/instagram.jpg" },
  { name: "LinkedIn", logo: "/platforms/linkedin.jpg" },
  { name: "Facebook", logo: "/platforms/facebook.jpg" },
];

export default function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Inject keyframes into document
    const styleId = "marquee-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }

    track.style.animation = "marquee-scroll 20s linear infinite";
  }, []);

  const items = [...platforms, ...platforms, ...platforms, ...platforms];

  return (
    <section className="py-10 border-y border-gray-100 overflow-hidden">
      <p className="text-sm text-gray-400 mb-6 text-center">
        Providing solutions for best platforms
      </p>
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "80px",
            width: "max-content",
          }}
        >
          {items.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="opacity-70 hover:opacity-100 transition-opacity"
              style={{ flexShrink: 0 }}
            >
              <Image
                src={p.logo}
                alt={p.name}
                width={56}
                height={56}
                style={{ width: 56, height: 56, objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
