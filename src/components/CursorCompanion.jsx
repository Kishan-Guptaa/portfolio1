import React, { useState, useEffect, useRef } from 'react';
import companionImg from '../assets/images/companion.png';

// How many pixels the companion must be from the target before it moves
const STOP_DISTANCE = 48;
// Speed factor: lower = slower
const SPEED = 0.04;

const CursorCompanion = () => {
  const [companionPos, setCompanionPos] = useState({ x: -100, y: -100 });
  const [isMoving, setIsMoving] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef({ x: -100, y: -100 });
  const companionRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef();
  const movingTimeoutRef = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [isVisible]);

  useEffect(() => {
    const tick = () => {
      const dx = targetRef.current.x - companionRef.current.x;
      const dy = targetRef.current.y - companionRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > STOP_DISTANCE) {
        // Slow lerp
        companionRef.current.x += dx * SPEED;
        companionRef.current.y += dy * SPEED;

        setCompanionPos({ x: companionRef.current.x, y: companionRef.current.y });
        setIsMoving(true);

        // Determine facing direction
        if (Math.abs(dx) > 2) {
          setFacingLeft(dx < 0);
        }
      } else {
        setIsMoving(false);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: companionPos.x,
          top: companionPos.y,
          width: '40px',
          height: '40px',
          transform: `translate(-50%, -50%) scaleX(${facingLeft ? -1 : 1})`,
          pointerEvents: 'none',
          zIndex: 9997,
          imageRendering: 'pixelated',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <img
          src={companionImg}
          alt="companion"
          className={isMoving ? 'companion-walk' : 'companion-idle'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            imageRendering: 'pixelated',
            display: 'block',
          }}
        />
      </div>

      <style>{`
        @keyframes companion-bob {
          0%   { transform: translateY(0px); }
          50%  { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        @keyframes companion-idle-breath {
          0%   { transform: translateY(0px) scale(1); }
          50%  { transform: translateY(-2px) scale(1.02); }
          100% { transform: translateY(0px) scale(1); }
        }

        .companion-walk {
          animation: companion-bob 0.45s steps(2, end) infinite;
        }

        .companion-idle {
          animation: companion-idle-breath 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default CursorCompanion;
