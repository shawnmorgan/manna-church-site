/**
 * MannaApp Section Component - Pixel-perfect from Figma
 * Node ID: 56:182
 */

import { useEffect, useRef, useState } from 'react';

interface Feature {
  icon: string;
  text: string;
}

interface MannaAppProps {
  content?: {
    appTitle?: string;
    appSubtitle?: string;
    appFeatures?: Array<{ feature: string }>;
    appStoreUrl?: string;
    playStoreUrl?: string;
  };
}

export default function MannaApp({ content }: MannaAppProps) {
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
    { icon: '/assets/icons/play.svg', text: 'Watch sermons on demand' },
    { icon: '/assets/icons/bell.svg', text: 'Get event reminders' },
    { icon: '/assets/icons/users.svg', text: 'Connect with your group' },
    { icon: '/assets/icons/credit-card.svg', text: 'Give online easily' },
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
      }))
    : defaultFeatures;

  const title = content?.appTitle || 'Manna On the Move';
  const subtitle = content?.appSubtitle || 'Download the Manna Church app and stay connected to your community.';
  const appStoreUrl = content?.appStoreUrl || 'https://apps.apple.com/app/manna-church';
  const playStoreUrl = content?.playStoreUrl || 'https://play.google.com/store/apps/details?id=com.mannachurch';

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center"
      style={{
        paddingTop: '60px',
        paddingLeft: '64px',
        paddingRight: '64px',
        paddingBottom: '140px',
        gap: '64px',
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
          width: '520px',
          height: '744px',
          marginTop: '-130px',
          borderRadius: '40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-60px)',
          transition: 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          zIndex: 10,
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
          style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 800,
            fontSize: '52px',
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
          style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
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
              key={index}
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
