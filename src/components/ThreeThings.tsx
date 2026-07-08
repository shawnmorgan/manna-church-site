/**
 * ThreeThings Section Component - Pixel-perfect from Figma
 * Node ID: 56:157
 */

import { useEffect, useRef, useState } from 'react';

interface Thing {
  number: string;
  title: string;
  description: string;
}

interface CardScale {
  scale: number;
  rotate: number;
}

export default function ThreeThings() {
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardScales, setCardScales] = useState<CardScale[]>([
    { scale: 1, rotate: 0 },
    { scale: 1, rotate: 0 },
    { scale: 1, rotate: 0 },
  ]);

  const things: Thing[] = [
    {
      number: '01',
      title: 'Love God',
      description:
        'We strive to provide inspiring worship experiences. We call them experiences because our goal is to passionately pursue the Presence of God and make much of His glory. Though we are one church that meets in many locations, each of our experiences is designed to meet this goal.',
    },
    {
      number: '02',
      title: 'Love Each Other',
      description:
        'We believe that the church of Jesus Christ is not a building or a location or even just a weekend experience. We believe that the church is people, and people were created to be in relationship. Our church engages in relationship and discipleship through our small group system.',
    },
    {
      number: '03',
      title: 'Love The World',
      description:
        "We believe we're called to change the world, and we prioritize an intentional outreach strategy by equipping believers to serve our community and the places they live and work. For Manna, serving is an incredible opportunity to show people the love of Jesus, no strings attached.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!cardsContainerRef.current) return;

      const containerRect = cardsContainerRef.current.getBoundingClientRect();
      const stickyTop = 96; // paddingTop of section
      const targetRotations = [-5, 0, 5];

      const newScales = cardRefs.current.map((cardEl, index) => {
        if (!cardEl) return { scale: 1, rotate: 0 };

        const cardRect = cardEl.getBoundingClientRect();

        // Calculate how far the card has scrolled past its sticky position
        const scrolled = stickyTop - cardRect.top;

        // Only apply scaling/rotation if card is stuck and being scrolled over
        if (scrolled > 0) {
          // Progressive scale reduction (max 15% reduction)
          const scaleReduction = Math.min(scrolled * 0.0003, 0.15);
          const scale = 1 - scaleReduction;

          // Progressive rotation - happens faster now (200px instead of 400px)
          const rotationProgress = Math.min(scrolled / 200, 1);
          const rotate = targetRotations[index] * rotationProgress;

          return { scale, rotate };
        }

        return { scale: 1, rotate: 0 };
      });

      setCardScales(newScales);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="w-full flex flex-col items-start"
      style={{
        backgroundColor: '#222222',
        paddingTop: '160px',
        paddingBottom: '200px',
      }}
    >
      <div className="w-full flex items-start">
        {/* Left column */}
        <div
          className="flex flex-col flex-shrink-0"
          style={{
            width: '478px',
            paddingLeft: '64px',
            paddingRight: '32px',
            gap: '20px',
            position: 'sticky',
            top: '96px',
            alignSelf: 'flex-start',
          }}
        >
          <h2
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 800,
              fontSize: '70px',
              lineHeight: '1.05',
              letterSpacing: '-1.4px',
              color: 'white',
              textTransform: 'uppercase',
              whiteSpace: 'pre-wrap',
            }}
          >
            {'We Do \nThree \nThings'}
          </h2>

          <p
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '300px',
            }}
          >
            Everything we do ladders to three simple commitments. These are not programs - they are the heartbeat of who we are as a church.
          </p>
        </div>

        {/* Right column - Cards */}
        <div
          ref={cardsContainerRef}
          className="flex-1 flex flex-col"
          style={{
            width: '962px',
            paddingRight: '64px',
            gap: '40px',
          }}
        >
          {things.map((thing, index) => (
            <div
              key={thing.number}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative flex items-start"
              style={{
                backgroundColor: '#2d2d2d',
                borderRadius: '4px',
                padding: index === 0 ? '40px 40px 40px 120px' : '28px 28px 28px 120px',
                position: 'sticky',
                top: '96px',
                transformOrigin: 'center top',
                transform: `scale(${cardScales[index].scale}) rotate(${cardScales[index].rotate}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Number and accent line */}
              <div
                className="absolute flex items-center"
                style={{
                  left: '40px',
                  top: index === 0 ? '48px' : '36px',
                  gap: '12px',
                  flexDirection: 'column',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 900,
                    fontSize: '32px',
                    lineHeight: 'normal',
                    color: 'transparent',
                    WebkitTextStroke: '1.5px #F37321',
                    transform: 'rotate(90deg)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {thing.number}
                </p>
                <div
                  style={{
                    width: '2px',
                    height: '80px',
                    backgroundColor: '#F37321',
                    borderRadius: '999px',
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1" style={{ gap: '6px' }}>
                <h3
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 700,
                    fontSize: '48px',
                    lineHeight: 'normal',
                    color: 'white',
                  }}
                >
                  {thing.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {thing.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
