import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function BeeCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  
  const isHoveringTextRef = useRef(false);
  const isVisibleRef = useRef(false);
  const lastPollenPos = useRef({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotation = useMotionValue(0);

  // Movimento suave de voo
  const springX = useSpring(mouseX, { stiffness: 800, damping: 35, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 800, damping: 35, mass: 0.5 });
  const springRot = useSpring(rotation, { stiffness: 200, damping: 22 });

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;

    const createPollen = (x: number, y: number) => {
      if (isHoveringTextRef.current || !isVisibleRef.current) return;

      const pollen = document.createElement("div");
      const size = Math.random() * 2.5 + 2;
      pollen.style.width = `${size}px`;
      pollen.style.height = `${size}px`;
      pollen.style.position = "fixed";
      pollen.style.background = "radial-gradient(circle, #F3D999 0%, #D8B36B 100%)";
      pollen.style.boxShadow = "0 0 6px rgba(216, 179, 107, 0.65)";
      pollen.style.borderRadius = "50%";
      pollen.style.pointerEvents = "none";
      pollen.style.zIndex = "99998";
      pollen.style.left = `${x - size / 2}px`;
      pollen.style.top = `${y - size / 2}px`;
      pollen.style.opacity = "0.75";
      pollen.style.transition =
        "transform 0.85s cubic-bezier(0.21, 0.47, 0.32, 0.98), opacity 0.85s ease-out";

      document.body.appendChild(pollen);
      void pollen.offsetWidth;

      const endX = (Math.random() - 0.5) * 26;
      const endY = 12 + Math.random() * 18;
      pollen.style.transform = `translate(${endX}px, ${endY}px) scale(0)`;
      pollen.style.opacity = "0";

      setTimeout(() => {
        pollen.remove();
      }, 850);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisibleRef.current) {
        setIsVisible(true);
        isVisibleRef.current = true;
      }

      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;

      if (Math.abs(deltaX) > 1.5 || Math.abs(deltaY) > 1.5) {
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
        let currentRot = rotation.get();
        let diff = angle - (currentRot % 360);
        if (diff > 180) diff -= 360;
        if (diff < -180) diff += 360;
        rotation.set(currentRot + diff);
      }

      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const distSinceLastPollen = Math.hypot(
        e.clientX - lastPollenPos.current.x,
        e.clientY - lastPollenPos.current.y
      );
      if (distSinceLastPollen > 28) {
        createPollen(e.clientX, e.clientY);
        lastPollenPos.current = { x: e.clientX, y: e.clientY };
      }

      lastX = e.clientX;
      lastY = e.clientY;

      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.getAttribute("contenteditable") === "true"
      ) {
        if (!isHoveringTextRef.current) {
          setIsHoveringText(true);
          isHoveringTextRef.current = true;
          setIsHoveringInteractive(false);
        }
      } else {
        if (isHoveringTextRef.current) {
          setIsHoveringText(false);
          isHoveringTextRef.current = false;
        }
        const isInteractive =
          target.closest("a") !== null ||
          target.closest("button") !== null ||
          target.closest('[role="button"]') !== null;
        setIsHoveringInteractive(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      isVisibleRef.current = false;
    };
    const handleMouseEnter = () => {
      setIsVisible(true);
      isVisibleRef.current = true;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, rotation]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: springX,
        y: springY,
        rotate: springRot,
        opacity: isVisible && !isHoveringText ? 1 : 0,
        translateX: "-50%",
        translateY: "-50%",
        filter: "drop-shadow(0 2px 5px rgba(31, 36, 45, 0.22))",
      }}
      animate={{
        scale: isVisible && !isHoveringText ? (isHoveringInteractive ? 1.22 : 1) : 0.5,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {/* Abelha Favo Fineline Inspirada na Logo Oficial */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Antenas delicadas */}
        <path
          d="M29.5 14.5C28.5 11.2 26.2 9.5 23.8 9.2"
          stroke="#23192D"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <circle cx="23.5" cy="9.2" r="1" fill="#D8B36B" />
        <path
          d="M34.5 14.5C35.5 11.2 37.8 9.5 40.2 9.2"
          stroke="#23192D"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <circle cx="40.5" cy="9.2" r="1" fill="#D8B36B" />

        {/* Patinhas dianteiras e traseiras sutis */}
        <path
          d="M27.5 20.5C24.8 18.8 23.2 16.8 22.5 14.8"
          stroke="#23192D"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M36.5 20.5C39.2 18.8 40.8 16.8 41.5 14.8"
          stroke="#23192D"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M26.8 37.5C24.5 40.5 23.2 43 22.2 45.2"
          stroke="#23192D"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M37.2 37.5C39.5 40.5 40.8 43 41.8 45.2"
          stroke="#23192D"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* ================= ASAS ESQUERDAS (Com vitral de favo) ================= */}
        <g>
          {/* Asa Superior Esquerda */}
          <path
            d="M27.2 25.5C19.5 19.5 10.2 17.2 5.2 19.2C3.2 20 3.2 23.8 6.5 27.5C10.5 31.8 19.2 31.5 27.2 27.8Z"
            fill="#FFFFF0"
            fillOpacity="0.92"
            stroke="#23192D"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          {/* Célula roxa na ponta da asa superior esquerda (fiel à logo) */}
          <path
            d="M5.2 19.2C7.8 18.2 11.4 18.5 14.5 19.8L11.8 24.2L6.2 25.2C4 23 3.6 20 5.2 19.2Z"
            fill="#38183A"
          />
          {/* Veios geométricos internos da asa superior esquerda */}
          <path
            d="M14.5 19.8L11.8 24.2L16.5 26.8L21.5 24.5M11.8 24.2L7.2 27.8M16.5 26.8L14.2 30.2M20.5 22.2L25.5 26.2"
            stroke="#23192D"
            strokeWidth="1.05"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Asa Inferior Esquerda */}
          <path
            d="M27.2 28.2C20.5 30.2 14.8 33.8 14.2 37.8C13.8 40.5 16.8 42.2 20.2 40.8C23.8 39.2 26.2 34.2 27.4 29.8Z"
            fill="#FFFFF0"
            fillOpacity="0.92"
            stroke="#23192D"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          {/* Detalhe roxo na ponta da asa inferior esquerda */}
          <path
            d="M14.3 37.2L19.2 36.8L20.8 40.4C17.4 41.9 14.1 40.2 14.3 37.2Z"
            fill="#38183A"
          />
          <path
            d="M19.2 36.8L23.5 33.5M19.2 36.8L16.5 34.2"
            stroke="#23192D"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>

        {/* ================= ASAS DIREITAS (Com vitral de favo) ================= */}
        <g>
          {/* Asa Superior Direita */}
          <path
            d="M36.8 25.5C44.5 19.5 53.8 17.2 58.8 19.2C60.8 20 60.8 23.8 57.5 27.5C53.5 31.8 44.8 31.5 36.8 27.8Z"
            fill="#FFFFF0"
            fillOpacity="0.92"
            stroke="#23192D"
            strokeWidth="1.35"
            strokeLinejoin="round"
          />
          {/* Célula roxa na ponta da asa superior direita */}
          <path
            d="M58.8 19.2C56.2 18.2 52.6 18.5 49.5 19.8L52.2 24.2L57.8 25.2C60 23 60.4 20 58.8 19.2Z"
            fill="#38183A"
          />
          {/* Veios geométricos internos da asa superior direita */}
          <path
            d="M49.5 19.8L52.2 24.2L47.5 26.8L42.5 24.5M52.2 24.2L56.8 27.8M47.5 26.8L49.8 30.2M43.5 22.2L38.5 26.2"
            stroke="#23192D"
            strokeWidth="1.05"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Asa Inferior Direita */}
          <path
            d="M36.8 28.2C43.5 30.2 49.2 33.8 49.8 37.8C50.2 40.5 47.2 42.2 43.8 40.8C40.2 39.2 37.8 34.2 36.6 29.8Z"
            fill="#FFFFF0"
            fillOpacity="0.92"
            stroke="#23192D"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          {/* Detalhe roxo na ponta da asa inferior direita */}
          <path
            d="M49.7 37.2L44.8 36.8L43.2 40.4C46.6 41.9 49.9 40.2 49.7 37.2Z"
            fill="#38183A"
          />
          <path
            d="M44.8 36.8L40.5 33.5M44.8 36.8L47.5 34.2"
            stroke="#23192D"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </g>

        {/* ================= CORPO CENTRAL (Cabeça, Tórax e Abdômen) ================= */}
        {/* Cabeça */}
        <ellipse
          cx="32"
          cy="17.8"
          rx="4.2"
          ry="3.6"
          fill="#FFFFF0"
          stroke="#23192D"
          strokeWidth="1.4"
        />

        {/* Tórax com toque dourado suave */}
        <ellipse
          cx="32"
          cy="24.5"
          rx="5.2"
          ry="4.6"
          fill="#FAF4E4"
          stroke="#23192D"
          strokeWidth="1.45"
        />
        <path
          d="M27.4 23.2C30.2 21.8 33.8 21.8 36.6 23.2"
          stroke="#D8B36B"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Abdômen orgânico afunilado */}
        <path
          d="M26.8 30.2C26.2 37.5 28.2 45.2 32 49.2C35.8 45.2 37.8 37.5 37.2 30.2C35.2 28.8 28.8 28.8 26.8 30.2Z"
          fill="#FFFFF0"
          stroke="#23192D"
          strokeWidth="1.45"
          strokeLinejoin="round"
        />

        {/* Listras curvas orgânicas do abdômen (estilo gravura da logo) */}
        <path
          d="M26.9 33.2C30.2 34.6 33.8 34.6 37.1 33.2"
          stroke="#23192D"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <path
          d="M27.1 36.8C30.3 38.2 33.7 38.2 36.9 36.8"
          stroke="#38183A"
          strokeWidth="1.45"
          strokeLinecap="round"
        />
        <path
          d="M27.8 40.4C30.5 41.6 33.5 41.6 36.2 40.4"
          stroke="#23192D"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
        <path
          d="M29.1 44C31 44.8 33 44.8 34.9 44"
          stroke="#D8B36B"
          strokeWidth="1.35"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
