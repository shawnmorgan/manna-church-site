/**
 * Footer Component
 * Fully responsive for mobile, tablet, and desktop
 */

import { useEffect, useRef, useState } from 'react';

// Hook to detect screen size
function useMediaQuery() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return { isMobile, isTablet };
}

interface LinkColumn {
  links: string[];
}

export default function Footer() {
  const { isMobile, isTablet } = useMediaQuery();
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
        marginTop: isMobile ? '-100px' : isTablet ? '-140px' : '-200px',
      }}
    >

      {/* Part 1: Links section with left space for phone */}
      <div
        className={`relative w-full flex ${isMobile || isTablet ? 'flex-col' : ''}`}
        style={{
          paddingTop: isMobile ? '80px' : isTablet ? '100px' : '140px',
          paddingBottom: isMobile ? '40px' : '60px',
          paddingLeft: isMobile ? '24px' : isTablet ? '32px' : '64px',
          paddingRight: isMobile ? '24px' : isTablet ? '32px' : '64px',
        }}
      >
        {/* Left column - Empty space for phone (desktop only) */}
        {!isMobile && !isTablet && (
          <div
            style={{
              width: '520px',
              flexShrink: 0,
            }}
          />
        )}

        {/* Right column - Links */}
        <div
          className={`flex-1 flex ${isMobile ? 'flex-col' : ''}`}
          style={{
            gap: isMobile ? '32px' : isTablet ? '48px' : '80px',
            paddingLeft: isMobile || isTablet ? '0' : '100px',
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
          paddingTop: isMobile ? '32px' : '40px',
          paddingBottom: isMobile ? '32px' : '40px',
          paddingLeft: isMobile ? '24px' : isTablet ? '32px' : '64px',
          paddingRight: isMobile ? '24px' : isTablet ? '32px' : '64px',
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
