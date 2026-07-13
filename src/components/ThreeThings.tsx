/**
 * ThreeThings Section Component - Pixel-perfect from Figma
 * Fully responsive for mobile, tablet, and desktop
 * Node ID: 56:157
 */

import { useEffect, useRef, useState } from 'react';
import { sanityAttr } from '../lib/sanity-attr';

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

interface ThreeThingsCard {
  _key?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
}

interface ThreeThingsProps {
  content?: {
    _id?: string;
    _type?: string;
    threeThingsTitle?: string;
    threeThingsDescription?: string;
    threeThingsCards?: ThreeThingsCard[];
  };
}

interface CardScale {
  scale: number;
  rotate: number;
}

// Fallback design copy if the CMS is unreachable.
const FALLBACK_CARDS: ThreeThingsCard[] = [
  {
    _key: 'card-1',
    eyebrow: '01',
    title: 'Love God',
    body: 'We strive to provide inspiring worship experiences. We call them experiences because our goal is to passionately pursue the Presence of God and make much of His glory. Though we are one church that meets in many locations, each of our experiences is designed to meet this goal.',
  },
  {
    _key: 'card-2',
    eyebrow: '02',
    title: 'Love Each Other',
    body: 'We believe that the church of Jesus Christ is not a building or a location or even just a weekend experience. We believe that the church is people, and people were created to be in relationship. Our church engages in relationship and discipleship through our small group system.',
  },
  {
    _key: 'card-3',
    eyebrow: '03',
    title: 'Love The World',
    body: "We believe we're called to change the world, and we prioritize an intentional outreach strategy by equipping believers to serve our community and the places they live and work. For Manna, serving is an incredible opportunity to show people the love of Jesus, no strings attached.",
  },
];

export default function ThreeThings({ content }: ThreeThingsProps) {
  const { isMobile, isTablet } = useMediaQuery();
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardScales, setCardScales] = useState<CardScale[]>([
    { scale: 1, rotate: 0 },
    { scale: 1, rotate: 0 },
    { scale: 1, rotate: 0 },
  ]);

  const docId = content?._id;
  const docType = content?._type;
  const sectionTitle = content?.threeThingsTitle || 'We Do Three Things';
  const sectionDescription =
    content?.threeThingsDescription ||
    'Everything we do ladders to three simple commitments. These are not programs - they are the heartbeat of who we are as a church.';
  const cards: ThreeThingsCard[] =
    content?.threeThingsCards && content.threeThingsCards.length > 0
      ? content.threeThingsCards
      : FALLBACK_CARDS;

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
        paddingTop: isMobile ? '80px' : isTablet ? '120px' : '160px',
        paddingBottom: isMobile ? '100px' : isTablet ? '140px' : '200px',
      }}
    >
      <div className={`w-full flex items-start ${isMobile || isTablet ? 'flex-col' : ''}`}>
        {/* Left column */}
        <div
          className="flex flex-col flex-shrink-0"
          style={{
            width: isMobile || isTablet ? '100%' : '478px',
            paddingLeft: isMobile ? '24px' : isTablet ? '32px' : '64px',
            paddingRight: isMobile ? '24px' : '32px',
            gap: '20px',
            position: isMobile || isTablet ? 'relative' : 'sticky',
            top: isMobile || isTablet ? 'auto' : '96px',
            alignSelf: 'flex-start',
            marginBottom: isMobile || isTablet ? '40px' : '0',
          }}
        >
          <h2
            data-sanity={sanityAttr(docId, docType, 'threeThingsTitle')}
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 800,
              fontSize: isMobile ? '42px' : isTablet ? '56px' : '70px',
              lineHeight: '1.05',
              letterSpacing: '-1.4px',
              color: 'white',
              textTransform: 'uppercase',
              maxWidth: isMobile || isTablet ? '100%' : '340px',
            }}
          >
            {sectionTitle}
          </h2>

          <p
            data-sanity={sanityAttr(docId, docType, 'threeThingsDescription')}
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 400,
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: isMobile || isTablet ? '100%' : '300px',
            }}
          >
            {sectionDescription}
          </p>
        </div>

        {/* Right column - Cards */}
        <div
          ref={cardsContainerRef}
          className="flex-1 flex flex-col"
          style={{
            width: isMobile || isTablet ? '100%' : '962px',
            paddingRight: isMobile ? '24px' : isTablet ? '32px' : '64px',
            paddingLeft: isMobile ? '24px' : isTablet ? '32px' : '0',
            gap: isMobile ? '24px' : '40px',
          }}
        >
          {cards.map((thing, index) => {
            const cardKey = thing._key || String(index);
            const cardPath = `threeThingsCards[_key=="${cardKey}"]`;
            return (
            <div
              key={cardKey}
              ref={(el) => (cardRefs.current[index] = el)}
              data-sanity={sanityAttr(docId, docType, cardPath)}
              className="relative flex items-start"
              style={{
                backgroundColor: '#2d2d2d',
                borderRadius: '4px',
                padding: isMobile
                  ? '24px 24px 24px 64px'
                  : isTablet
                  ? (index === 0 ? '32px 32px 32px 96px' : '24px 24px 24px 96px')
                  : (index === 0 ? '40px 40px 40px 120px' : '28px 28px 28px 120px'),
                position: isMobile || isTablet ? 'relative' : 'sticky',
                top: isMobile || isTablet ? 'auto' : '96px',
                transformOrigin: 'center top',
                transform: isMobile || isTablet ? 'none' : `scale(${cardScales[index].scale}) rotate(${cardScales[index].rotate}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Number and accent line */}
              <div
                className="absolute flex items-center"
                style={{
                  left: isMobile ? '24px' : isTablet ? '32px' : '40px',
                  top: isMobile
                    ? '32px'
                    : isTablet
                    ? (index === 0 ? '40px' : '32px')
                    : (index === 0 ? '48px' : '36px'),
                  gap: '12px',
                  flexDirection: 'column',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 900,
                    fontSize: isMobile ? '24px' : '32px',
                    lineHeight: 'normal',
                    color: 'transparent',
                    WebkitTextStroke: isMobile ? '1px #F37321' : '1.5px #F37321',
                    transform: 'rotate(90deg)',
                    whiteSpace: 'nowrap',
                  }}
                  data-sanity={sanityAttr(docId, docType, `${cardPath}.eyebrow`)}
                >
                  {thing.eyebrow}
                </p>
                <div
                  style={{
                    width: '2px',
                    height: isMobile ? '60px' : '80px',
                    backgroundColor: '#F37321',
                    borderRadius: '999px',
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1" style={{ gap: '6px' }}>
                <h3
                  data-sanity={sanityAttr(docId, docType, `${cardPath}.title`)}
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 700,
                    fontSize: isMobile ? '32px' : isTablet ? '40px' : '48px',
                    lineHeight: 'normal',
                    color: 'white',
                  }}
                >
                  {thing.title}
                </h3>
                <p
                  data-sanity={sanityAttr(docId, docType, `${cardPath}.body`)}
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 400,
                    fontSize: isMobile ? '16px' : isTablet ? '18px' : '20px',
                    lineHeight: '1.6',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {thing.body}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
