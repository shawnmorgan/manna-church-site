/**
 * Video Section Component - Military Highway Story
 */

interface VideoSectionProps {
  content?: {
    videoUrl?: string;
    videoText?: string;
  };
}

export default function VideoSection({ content }: VideoSectionProps) {
  const videoUrl = content?.videoUrl || '/assets/videos/homepage-video.mp4';
  const videoText = content?.videoText ||
    `Manna Church has been serving military communities for over 40 years and is strategically planting expressions of Manna Church along the Military Highway. We believe that the Church exists wherever God's people gather. An expression of Manna Church could meet in its own designated building, a local school or gym, a home, or even online.`;
  return (
    <section
      className="w-full flex items-center justify-center"
      style={{
        backgroundColor: '#222222',
        paddingTop: '0px',
        paddingBottom: '120px',
      }}
    >
      {/* Content Container */}
      <div
        className="flex flex-col items-center"
        style={{
          width: '100%',
          maxWidth: '1280px',
          paddingLeft: '64px',
          paddingRight: '64px',
          gap: '32px',
          marginTop: '-216px',
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
          style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 400,
            fontSize: '1.25rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.85)',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          {videoText}
        </p>
      </div>
    </section>
  );
}
