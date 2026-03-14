import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const ringRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();
  const ringElement = useRef();

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    const onMouseEnterLink = () => setIsHovering(true);
    const onMouseLeaveLink = () => setIsHovering(false);

    const handleHoverListeners = () => {
      const links = document.querySelectorAll('a, button, [role="button"]');
      links.forEach(link => {
        link.addEventListener('mouseenter', onMouseEnterLink);
        link.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    
    // Initial listeners
    handleHoverListeners();

    // Re-bind when DOM changes (simplified approach)
    const observer = new MutationObserver(handleHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      observer.disconnect();
    };
  }, [isVisible]);

  // Smooth ring following
  const animate = () => {
    const lerp = (start, end, factor) => start + (end - start) * factor;
    
    ringRef.current.x = lerp(ringRef.current.x, position.x, 0.15);
    ringRef.current.y = lerp(ringRef.current.y, position.y, 0.15);

    if (ringElement.current) {
      ringElement.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0)`;
    }
    
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

  if (typeof window === 'undefined' || !isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: 9999,
      mixBlendMode: 'difference'
    }}>
      {/* Small Dot */}
      <div style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        backgroundColor: '#fff',
        borderRadius: '50%',
        transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        transition: 'width 0.2s, height 0.2s',
        opacity: isHovering ? 0 : 1
      }} />

      {/* Outer Ring */}
      <div 
        ref={ringElement}
        style={{
          position: 'absolute',
          width: isHovering ? '60px' : '30px',
          height: isHovering ? '60px' : '30px',
          border: '1.5px solid #fff',
          borderRadius: '50%',
          marginTop: isHovering ? '-30px' : '-15px',
          marginLeft: isHovering ? '-30px' : '-15px',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1), margin 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease',
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          transform: isActive ? 'scale(0.8)' : 'scale(1)',
        }} 
      />
    </div>
  );
};

export default CustomCursor;
