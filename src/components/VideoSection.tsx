/**
 * Video Section Component - Military Highway Story
 * Fully responsive for mobile, tablet, and desktop
 */

import { useEffect, useState } from 'react';
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

interface VideoSectionProps {
  content?: {
    _id?: string;
    _type?: string;
    videoUrl?: string;
    videoText?: string;
  };
}

export default function VideoSection({ content }: VideoSectionProps) {
  const { isMobile, isTablet } = useMediaQuery();
  const videoUrl = content?.videoUrl || '/assets/videos/homepage-video.mp4';
  const videoText = content?.videoText ||
    `Manna Church has been serving military communities for over 40 years and is strategically planting expressions of Manna Church along the Military Highway. We believe that the Church exists wherever God's people gather. An expression of Manna Church could meet in its own designated building, a local school or gym, a home, or even online.`;
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{
        backgroundColor: '#222222',
        paddingTop: '0px',
        paddingBottom: isMobile ? '60px' : isTablet ? '80px' : '120px',
      }}
    >
      {/* Content Container */}
      <div
        className="flex flex-col items-center"
        style={{
          width: '100%',
          maxWidth: '1280px',
          paddingLeft: isMobile ? '20px' : isTablet ? '32px' : '64px',
          paddingRight: isMobile ? '20px' : isTablet ? '32px' : '64px',
          gap: isMobile ? '20px' : '32px',
          marginTop: isMobile ? '-120px' : isTablet ? '-160px' : '-216px',
          position: 'relative',
          zIndex: 5,
        }}
      >
        {/* Video Card */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16 / 9',
            borderRadius: '4px',
            overflow: 'hidden',
            boxShadow: '0px 20px 40px -4px rgba(0, 0, 0, 0.5)',
          }}
        >
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        {/* Text Below */}
        <p
          data-sanity={sanityAttr(content?._id, content?._type, 'videoText')}
          style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 400,
            fontSize: isMobile ? '16px' : isTablet ? '18px' : '1.25rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.85)',
            textAlign: 'center',
            maxWidth: isMobile ? '100%' : isTablet ? '90%' : '900px',
          }}
        >
          {videoText}
        </p>
      </div>
    </section>
  );
}
