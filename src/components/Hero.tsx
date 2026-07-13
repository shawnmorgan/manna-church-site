/**
 * Hero Component - Pixel-perfect from Figma with entrance animations
 * Fully responsive for mobile, tablet, and desktop
 * Node ID: 58:4
 */

import { useEffect, useState, useMemo } from 'react';
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

  return { isMobile, isTablet, isDesktop: !isMobile && !isTablet };
}

interface FloatingImage {
  src: string;
  width: number;
  height: number;
  rotation: number;
  left: string;
  top: string;
  borderRadius: string;
}

// All available collage images
const COLLAGE_IMAGES = [
  'imgi_11_assets%2Fe927ca2cb62846a7a02d009f4fa074af%2F9b7ed43dbd1349a39d0ede0d7f190aa2.jpg',
  'imgi_12_IMG_0053-1-scaled.jpg',
  'imgi_12_manna-new-1.jpg',
  'imgi_14_Feb19Outreach-45_websize.jpg',
  'imgi_15_Header.jpg',
  'imgi_15_LcWuH2Wa8aMQw8S8j4fIshIB0a3AR4ljUhAbJxej-2.jpg',
  'imgi_18_IMG_0132-scaled.jpg',
  'imgi_2_mkids.jpg',
  'imgi_23_Jenny-Fillinger-ServeDay_March2022_Jenny-77-scaled-1-2048x1366.jpg',
  'imgi_25_Manna-_2.jpg',
  'imgi_26_4Y1A1714-scaled.jpg',
  'imgi_29_4Y1A1299-1-scaled.jpg',
  'imgi_3_20451305_1440x960_500.jpg',
  'imgi_37_NZ7_6091-scaled.jpg',
  'imgi_38_NZ7_6135-scaled.jpg',
  'imgi_39_DSC_9729-scaled.jpg',
  'imgi_4_2021-3.jpeg',
  'imgi_4_mserve.jpg',
  'imgi_40_DSC_9851-scaled.jpg',
  'imgi_41_521A7206.jpg',
  'imgi_42_NZ7_6099-1-scaled.jpg',
  'imgi_44_521A7275-1.jpg',
  'imgi_5_manna-new-2-2048x1536.jpg',
  'imgi_50_Manna-9.24.24-32_websize.jpg',
  'imgi_6_0C0A9849.jpg',
  'imgi_6_assets%2Fe927ca2cb62846a7a02d009f4fa074af%2F1086e2bafe38453b9a66ed775405e419.jpg',
  'imgi_61_BaptismPhotos-9684-scaled.jpg',
  'imgi_69_IMG_1684-Abigail-Pottorff-scaled.jpg',
  'imgi_72_EP_20220619_SVC-1_2_Greg-40-scaled.jpg',
  'imgi_8_7728510_728x550_500.png',
  'imgi_91_assets%2Fe927ca2cb62846a7a02d009f4fa074af%2F33c657079d57421fa87c3214429c0a04.jpg',
  'imgi_94_IMG_3601-scaled.jpg',
];

// Image position templates (dimensions, rotation, position)
const IMAGE_POSITIONS = [
  // Large images (original 8)
  { width: 280, height: 200, rotation: -6, left: '80px', top: '90.73px', borderRadius: '4px' },
  { width: 240, height: 320, rotation: 4, left: '1077.68px', top: '60px', borderRadius: '4px' },
  { width: 260, height: 260, rotation: 5, left: '40px', top: '580px', borderRadius: '4px' },
  { width: 300, height: 200, rotation: -7, left: '1096px', top: '434px', borderRadius: '4px' },
  { width: 200, height: 140, rotation: -3, left: '400px', top: '29.53px', borderRadius: '4px' },
  { width: 180, height: 240, rotation: 8, left: '816.6px', top: '100px', borderRadius: '4px' },
  { width: 320, height: 160, rotation: -5, left: '340px', top: '703px', borderRadius: '4px' },
  { width: 220, height: 220, rotation: 3, left: '1016px', top: '680px', borderRadius: '4px' },
  // Smaller images for depth (new 4)
  { width: 140, height: 140, rotation: -8, left: '735px', top: '40px', borderRadius: '4px' },
  { width: 130, height: 150, rotation: 6, left: '260px', top: '310px', borderRadius: '4px' },
  { width: 120, height: 120, rotation: -4, left: '120px', top: '430px', borderRadius: '4px' },
  { width: 150, height: 140, rotation: 7, left: '890px', top: '715px', borderRadius: '4px' },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface HeroProps {
  content?: {
    _id?: string;
    _type?: string;
    heroTitle?: string;
    heroSubtitle?: string;
    heroCollageImages?: string[];
  };
}

export default function Hero({ content }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  // Text comes from Sanity so Presentation overlays can attach to it. Fallbacks
  // keep the design intact if the CMS is unreachable.
  const heroTitle = content?.heroTitle || 'A Vision to Change the World';
  const heroSubtitle =
    content?.heroSubtitle ||
    'Our mission is to glorify God by equipping His people to change their world and by planting churches with the same world-changing vision.';
  // Add a random seed that changes on each mount to force re-shuffle
  const [randomSeed] = useState(() => Math.random());
  // Track which image is being clicked for animation
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  // Use Sanity images if available, otherwise fallback to random selection from hardcoded images
  const floatingImages: FloatingImage[] = useMemo(() => {
    let imageSources: string[];

    if (content?.heroCollageImages && content.heroCollageImages.length >= 12) {
      // Shuffle Sanity images and take 12
      imageSources = shuffleArray(content.heroCollageImages).slice(0, 12);
    } else {
      // Fallback to hardcoded images
      imageSources = shuffleArray(COLLAGE_IMAGES).slice(0, 12).map(img => `/assets/images/collage/${img}`);
    }

    return IMAGE_POSITIONS.map((pos, index) => ({
      ...pos,
      src: imageSources[index],
    }));
  }, [content?.heroCollageImages, randomSeed]);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Responsive dimensions
  const sectionHeight = isMobile ? '700px' : isTablet ? '800px' : '900px';
  const sectionPadding = isMobile ? '24px' : isTablet ? '40px' : '80px';

  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        height: sectionHeight,
        padding: sectionPadding,
        background: 'linear-gradient(180deg, #0d0d0d 0%, #1a1a1a 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Ellipse 1 */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '-88px',
          top: '-162px',
          width: '577px',
          height: '577px',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
        }}
        aria-hidden="true"
      >
        <div style={{ position: 'absolute', inset: '-31.2%' }}>
          <img
            src="/assets/icons/ellipse-1.svg"
            alt=""
            style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
          />
        </div>
      </div>

      {/* Ellipse 2 */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: '1209px',
          top: '232px',
          width: '577px',
          height: '577px',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s',
        }}
        aria-hidden="true"
      >
        <div style={{ position: 'absolute', inset: '-15.6%' }}>
          <img
            src="/assets/icons/ellipse-2.svg"
            alt=""
            style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }}
          />
        </div>
      </div>

      {/* Floating gallery images - hide on mobile, show limited on tablet */}
      <div className="absolute inset-0" aria-hidden="true">
        {floatingImages.map((img, index) => {
          // On mobile, hide all images. On tablet, show only first 6. On desktop, show all 12
          if (isMobile) return null;
          if (isTablet && index >= 6) return null;
          // Calculate center of viewport position
          const viewportCenterX = '50%';
          const viewportCenterY = '50%';

          // Image timing based on visual sequence (left to right, top then bottom)
          // Large images: indices 0-7
          // Small depth images: indices 8-11
          const delays: Record<number, number> = {
            0: 0.6,   // Image 1 (top left - large)
            4: 0.8,   // Image 2 (top center-left - large)
            8: 1.0,   // Small image (top center)
            5: 1.4,   // Image 3 (top center-right - large)
            1: 1.6,   // Image 4 (top right - large)
            9: 1.8,   // Small image (left middle)
            2: 2.0,   // Image 5 (bottom left - large)
            6: 2.2,   // Image 6 (bottom center-left - large)
            10: 2.4,  // Small image (bottom left)
            7: 2.6,   // Image 7 (bottom center-right - large)
            3: 2.8,   // Image 8 (bottom right - large)
            11: 3.0,  // Small image (bottom right)
          };

          const delay = delays[index] || 0;
          // Smaller images have softer shadows for depth
          const boxShadow = index >= 8
            ? '0px 12px 24px -4px rgba(0, 0, 0, 0.3)'
            : '0px 20px 40px -4px rgba(0, 0, 0, 0.5)';
          // Smaller images sit behind larger images (but all behind text)
          const zIndex = index >= 8 ? 1 : 2;

          const isClicked = clickedIndex === index;

          return (
            <div
              key={index}
              className="absolute flex items-center justify-center group hover:z-50"
              style={{
                left: isLoaded ? img.left : viewportCenterX,
                top: isLoaded ? img.top : viewportCenterY,
                transform: `rotate(${img.rotation}deg) scale(${isLoaded ? 1 : 0.3}) translate(${isLoaded ? '0, 0' : '-50%, -50%'})`,
                opacity: isLoaded ? 1 : 0,
                transition: `all 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
                zIndex: zIndex,
                cursor: 'pointer',
              }}
              onClick={() => {
                setClickedIndex(index);
                setTimeout(() => setClickedIndex(null), 200);
              }}
            >
            <div
              className="relative transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-2xl"
              style={{
                width: `${img.width}px`,
                height: `${img.height}px`,
                borderRadius: img.borderRadius,
                boxShadow: boxShadow,
                transform: isClicked ? 'scale(0.95)' : 'scale(1)',
              }}
            >
              <img
                src={img.src}
                alt=""
                className="transition-all duration-300 ease-out group-hover:brightness-110"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: img.borderRadius,
                  maxWidth: 'none',
                }}
              />
              {/* Hover overlay with subtle glow */}
              <div
                className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  borderRadius: img.borderRadius,
                  boxShadow: '0 0 20px 4px rgba(243, 115, 33, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                }}
              />
            </div>
          </div>
          );
        })}
      </div>

      {/* Content Block */}
      <div
        className="relative flex flex-col items-center"
        style={{
          width: isMobile ? '100%' : isTablet ? '90%' : '920px',
          maxWidth: '100%',
          gap: isMobile ? '32px' : '48px',
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: isMobile ? '220px' : isTablet ? '280px' : '316px',
            height: isMobile ? '17px' : isTablet ? '22px' : '25px',
            overflow: 'hidden',
            position: 'relative',
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.2s',
          }}
        >
          <img
            src="/assets/icons/logo.svg"
            alt="Manna Church"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', maxWidth: 'none' }}
          />
        </div>

        {/* Headline */}
        {/* Headline - bound to Sanity heroTitle (uppercase via CSS so the
            stega-encoded characters survive for click-to-edit overlays) */}
        <h1
          data-sanity={sanityAttr(content?._id, content?._type, 'heroTitle')}
          style={{
            fontFamily: 'Archivo Black, sans-serif',
            fontWeight: 900,
            fontSize: isMobile ? '48px' : isTablet ? '72px' : '104px',
            lineHeight: '0.9',
            color: 'white',
            textAlign: 'center',
            width: '100%',
            textTransform: 'uppercase',
            textShadow: '0px 4px 12px rgba(0, 0, 0, 0.6), 0px 2px 4px rgba(0, 0, 0, 0.4)',
            opacity: isLoaded ? 1 : 0,
            transform: `scale(${isLoaded ? 1 : 0.3})`,
            transition: 'all 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.0s',
          }}
        >
          {heroTitle}
        </h1>

        {/* Body text - bound to Sanity heroSubtitle */}
        <p
          data-sanity={sanityAttr(content?._id, content?._type, 'heroSubtitle')}
          style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 400,
            fontSize: isMobile ? '16px' : '20px',
            lineHeight: '1.6',
            color: 'white',
            opacity: isLoaded ? 0.7 : 0,
            textAlign: 'center',
            width: isMobile ? '100%' : isTablet ? '90%' : '640px',
            maxWidth: '100%',
            transform: isLoaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'all 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.2s',
          }}
        >
          {heroSubtitle}
        </p>

        {/* Down Arrow */}
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) 3.2s',
            animation: isLoaded ? 'bounce 2s ease-in-out infinite' : 'none',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ cursor: 'pointer' }}
          >
            <path
              d="M12 5L12 19M12 19L19 12M12 19L5 12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <style>{`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(10px);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
