/**
 * Footer Component
 */

import { useEffect, useRef, useState } from 'react';

interface LinkColumn {
  links: string[];
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const columnOne = ['Locations', 'Mobile App', 'Micro Sites'];
  const columnTwo = ['About', 'Multiply', 'Contact'];
  const columnThree = ['Privacy Policy', '@2026 Manna Church'];

  return (
    <footer
      ref={sectionRef}
      className="relative w-full"
      style={{
        backgroundColor: '#1a1a1a',
        zIndex: 1,
        marginTop: '-200px',
      }}
    >

      {/* Part 1: Links section with left space for phone */}
      <div
        className="relative w-full flex"
        style={{
          paddingTop: '140px',
          paddingBottom: '60px',
          paddingLeft: '64px',
          paddingRight: '64px',
        }}
      >
        {/* Left column - Empty space for phone */}
        <div
          style={{
            width: '520px',
            flexShrink: 0,
          }}
        />

        {/* Right column - Links */}
        <div
          className="flex-1 flex"
          style={{
            gap: '80px',
            paddingLeft: '100px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          {/* Column 1 */}
          <div className="flex flex-col" style={{ gap: '20px', minWidth: '120px' }}>
            {columnOne.map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col" style={{ gap: '20px', minWidth: '120px' }}>
            {columnTwo.map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col" style={{ gap: '20px', minWidth: '160px' }}>
            {columnThree.map((link, index) => (
              <a
                key={index}
                href="#"
                style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1.5',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Part 2: Logo section */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          paddingTop: '40px',
          paddingBottom: '40px',
          paddingLeft: '64px',
          paddingRight: '64px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s',
        }}
      >
        <img
          src="/assets/icons/logo-white.svg"
          alt="Manna Church"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </footer>
  );
}
