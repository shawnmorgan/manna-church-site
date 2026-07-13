/**
 * MannaApp Section Component - Pixel-perfect from Figma
 * Fully responsive for mobile, tablet, and desktop
 * Node ID: 56:182
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

interface Feature {
  icon: string;
  text: string;
  key: string;
}

interface MannaAppProps {
  content?: {
    _id?: string;
    _type?: string;
    appTitle?: string;
    appSubtitle?: string;
    appFeatures?: Array<{ _key?: string; feature: string }>;
    appStoreUrl?: string;
    playStoreUrl?: string;
  };
}

export default function MannaApp({ content }: MannaAppProps) {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Default features
  const defaultFeatures: Feature[] = [
    { icon: '/assets/icons/play.svg', text: 'Watch sermons on demand', key: 'feature-0' },
    { icon: '/assets/icons/bell.svg', text: 'Get event reminders', key: 'feature-1' },
    { icon: '/assets/icons/users.svg', text: 'Connect with your group', key: 'feature-2' },
    { icon: '/assets/icons/credit-card.svg', text: 'Give online easily', key: 'feature-3' },
  ];

  // Map Sanity features to component format
  const featureIcons = [
    '/assets/icons/play.svg',
    '/assets/icons/bell.svg',
    '/assets/icons/users.svg',
    '/assets/icons/credit-card.svg',
  ];

  const features: Feature[] = content?.appFeatures
    ? content.appFeatures.map((f, i) => ({
        icon: featureIcons[i] || featureIcons[0],
        text: f.feature,
        key: f._key || String(i),
      }))
    : defaultFeatures;

  const docId = content?._id;
  const docType = content?._type;
  const title = content?.appTitle || 'Manna On the Move';
  const subtitle = content?.appSubtitle || 'Download the Manna Church app and stay connected to your community.';
  const appStoreUrl = content?.appStoreUrl || 'https://apps.apple.com/app/manna-church';
  const playStoreUrl = content?.playStoreUrl || 'https://play.google.com/store/apps/details?id=com.mannachurch';

  return (
    <section
      ref={sectionRef}
      className={`relative w-full flex ${isMobile || isTablet ? 'flex-col' : ''} items-center`}
      style={{
        paddingTop: isMobile ? '40px' : isTablet ? '50px' : '60px',
        paddingLeft: isMobile ? '24px' : isTablet ? '32px' : '64px',
        paddingRight: isMobile ? '24px' : isTablet ? '32px' : '64px',
        paddingBottom: isMobile ? '80px' : isTablet ? '100px' : '140px',
        gap: isMobile ? '40px' : isTablet ? '48px' : '64px',
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradient */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(218.951deg, rgb(243, 115, 33) 12.351%, rgb(231, 131, 66) 89.483%)',
          }}
        />
        {/* Pattern overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/assets/images/manna-app-bg.png)',
            backgroundSize: '61.65px 33.15px',
            backgroundPosition: 'top left',
            backgroundRepeat: 'repeat',
            opacity: 0.05,
          }}
        />
      </div>

      {/* iPhone mockup */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: isMobile ? '280px' : isTablet ? '360px' : '520px',
          height: isMobile ? '400px' : isTablet ? '515px' : '744px',
          marginTop: isMobile ? '0' : isTablet ? '-60px' : '-130px',
          borderRadius: isMobile ? '24px' : isTablet ? '32px' : '40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
          transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          zIndex: 10,
          alignSelf: isMobile || isTablet ? 'center' : 'auto',
        }}
      >
        <div
          className="absolute overflow-hidden pointer-events-none"
          style={{
            inset: 0,
            borderRadius: '40px',
          }}
        >
          <img
            src="/assets/images/iphone-mockup.png"
            alt="Manna Church App"
            style={{
              position: 'absolute',
              width: '78.48%',
              height: '102.96%',
              left: '10.77%',
              top: 0,
              maxWidth: 'none',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col" style={{ gap: '24px' }}>
        <div
          style={{
            width: '48px',
            height: '4px',
            backgroundColor: '#F37321',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s',
          }}
        />

        <h2
          data-sanity={sanityAttr(docId, docType, 'appTitle')}
          style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 800,
            fontSize: isMobile ? '36px' : isTablet ? '44px' : '52px',
            lineHeight: '1.05',
            letterSpacing: '-1.04px',
            color: 'white',
            textTransform: 'uppercase',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s',
          }}
        >
          {title}
        </h2>

        <p
          data-sanity={sanityAttr(docId, docType, 'appSubtitle')}
          style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 400,
            fontSize: isMobile ? '16px' : '18px',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.7)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s',
          }}
        >
          {subtitle}
        </p>

        {/* Feature bullets */}
        <div className="flex flex-col" style={{ gap: '14px' }}>
          {features.map((feature, index) => (
            <div
              key={feature.key}
              data-sanity={sanityAttr(docId, docType, `appFeatures[_key=="${feature.key}"].feature`)}
              className="flex items-center"
              style={{
                gap: '12px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
                transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.6 + index * 0.1}s`,
              }}
            >
              <div
                className="flex items-center justify-center flex-shrink-0 bg-white"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '4px',
                }}
              >
                <img
                  src={feature.icon}
                  alt=""
                  style={{
                    width: '18px',
                    height: '18px',
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: 'normal',
                  color: 'white',
                  flex: 1,
                }}
              >
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        {/* App Store Buttons */}
        <div
          className="flex items-center"
          style={{
            gap: '12px',
            marginTop: '8px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.0s',
          }}
        >
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            <img
              src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1524700800"
              alt="Download on the App Store"
              style={{
                height: '40px',
                width: 'auto',
              }}
            />
          </a>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              style={{
                height: '58px',
                width: 'auto',
                marginLeft: '-8px',
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
