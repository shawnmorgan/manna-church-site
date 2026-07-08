/**
 * LocationCard Component - Pixel-perfect from Figma
 * Fully responsive for mobile, tablet, and desktop
 * Node ID: 56:68 (location-card)
 */

interface LocationCardProps {
  image: string;
  imageAlt?: string;
  name: string;
  type: string;
  city: string;
  state: string;
  badge?: string;
  href?: string;
}

export default function LocationCard({
  image,
  imageAlt = '',
  name,
  type,
  city,
  state,
  badge,
  href = '#',
}: LocationCardProps) {
  return (
    <a
      href={href}
      className="group block bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
      style={{
        width: '100%',
        height: '265px',
        borderRadius: '4px',
      }}
    >
      {/* Photo section */}
      <div
        className="relative w-full flex flex-col justify-end"
        style={{
          height: '160px',
          padding: '5px',
        }}
      >
        <img
          src={image}
          alt={imageAlt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            maxWidth: 'none',
          }}
        />

        {/* Badge */}
        {badge && (
          <div
            className="relative overflow-hidden flex flex-col items-start justify-end"
            style={{
              backgroundColor: '#EF6207',
              borderRadius: '2px',
              padding: '4px 8px',
              alignSelf: 'flex-start',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '10px',
                color: 'white',
                lineHeight: 'normal',
                whiteSpace: 'nowrap',
              }}
            >
              {badge}
            </p>
          </div>
        )}
      </div>

      {/* Info footer */}
      <div
        className="flex items-start justify-between"
        style={{
          backgroundColor: 'white',
          border: '1px solid #E5E5E5',
          padding: '16px 16px 28px 16px',
        }}
      >
        {/* Text content */}
        <div className="flex flex-col" style={{ gap: '8px', width: '184px' }}>
          <h3
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              color: '#222222',
              lineHeight: 'normal',
            }}
          >
            {name}
          </h3>
          <p
            style={{
              fontFamily: 'Archivo Narrow, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: '#808184',
              lineHeight: 'normal',
            }}
          >
            {type}
          </p>
          <p
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 500,
              fontSize: '13px',
              color: '#BFBFC1',
              lineHeight: 'normal',
            }}
          >
            {city}, {state}
          </p>
        </div>

        {/* Arrow button */}
        <button
          className="flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            width: '32px',
            height: '32px',
            backgroundColor: '#222222',
            borderRadius: '2px',
          }}
          aria-label={`View ${name} location`}
        >
          <img
            src="/assets/icons/arrow-right.svg"
            alt=""
            className="transition-transform duration-300 group-hover:-rotate-[30deg]"
            style={{ width: '18px', height: '18px', filter: 'invert(1)' }}
          />
        </button>
      </div>
    </a>
  );
}
