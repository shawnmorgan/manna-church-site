/**
 * LocationSearch Section Component - Pixel-perfect from Figma
 * Node ID: 56:38
 */

import { useEffect, useRef, useState } from 'react';
import LocationCard from './LocationCard';
import locationsData from '../data/locations.json';

interface Location {
  id: string;
  image: string;
  name: string;
  type: string;
  city: string;
  state: string;
  badge?: string;
  link: string;
}

export default function LocationSearch() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);
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

  // Filter locations based on search query
  const filteredLocations = (locationsData as Location[]).filter((location) => {
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      location.name.toLowerCase().includes(query) ||
      location.city.toLowerCase().includes(query) ||
      location.state.toLowerCase().includes(query) ||
      location.type.toLowerCase().includes(query)
    );
  });

  // Get visible locations based on count
  const visibleLocations = filteredLocations.slice(0, visibleCount);

  // Calculate how many cards to show in each row
  const getRowLocations = (startIndex: number, count: number) => {
    return visibleLocations.slice(startIndex, startIndex + count);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Reset visible count when searching
    setVisibleCount(8);
  };

  // Calculate number of rows needed
  const rows: Location[][] = [];
  for (let i = 0; i < visibleLocations.length; i += 4) {
    rows.push(visibleLocations.slice(i, i + 4));
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex flex-col items-center justify-center"
      style={{
        minHeight: '1044px',
        paddingTop: '240px',
        paddingLeft: '48px',
        paddingRight: '48px',
        paddingBottom: '360px',
        gap: '40px',
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/images/location-bg.png"
            alt=""
            style={{
              position: 'absolute',
              width: '82.57%',
              height: '100%',
              left: '8.72%',
              top: '-12.62%',
              maxWidth: 'none',
            }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #1a1a1a 8.173%, rgba(46, 46, 46, 0.8) 91.346%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center" style={{ gap: '24px' }}>
        {/* Section header */}
        <div
          className="flex flex-col items-center"
          style={{
            gap: '16px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '4px',
              backgroundColor: '#F37321',
            }}
          />
          <h2
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 700,
              fontSize: '42px',
              lineHeight: '1',
              color: 'white',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
          >
            Find Your Location
          </h2>
        </div>

        {/* Search input */}
        <div
          className="flex items-center"
          style={{
            width: '480px',
            height: '48px',
            backgroundColor: '#2e2e2e',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '2px',
            padding: '0 16px',
            gap: '12px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s',
          }}
        >
          <img
            src="/assets/icons/search.svg"
            alt=""
            style={{ width: '18px', height: '18px' }}
          />
          <input
            type="text"
            placeholder="Search by city or state..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
              color: searchQuery ? 'white' : 'rgba(255, 255, 255, 0.4)',
            }}
          />
        </div>

        {/* Location cards grid - Dynamic rows */}
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="w-full flex justify-center"
            style={{
              gap: '24px',
              marginTop: rowIndex === 0 ? '32px' : '0',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.6 + rowIndex * 0.2}s`,
            }}
          >
            {row.map((location) => (
              <LocationCard key={location.id} {...location} />
            ))}
          </div>
        ))}

        {/* No results message */}
        {filteredLocations.length === 0 && (
          <div
            style={{
              marginTop: '32px',
              padding: '40px',
              textAlign: 'center',
              fontFamily: 'Archivo, sans-serif',
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.5)',
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s',
            }}
          >
            No locations found matching "{searchQuery}"
          </div>
        )}

        {/* Load More Button */}
        {visibleLocations.length < filteredLocations.length && (
          <button
            onClick={handleLoadMore}
            style={{
              marginTop: '24px',
              padding: '0',
              backgroundColor: 'transparent',
              border: 'none',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              color: '#F37321',
              cursor: 'pointer',
              textDecoration: 'underline',
              transition: 'opacity 0.2s',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionProperty: 'all',
              transitionDuration: '0.8s',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transitionDelay: '1.0s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Load More ({filteredLocations.length - visibleLocations.length} remaining)
          </button>
        )}
      </div>
    </section>
  );
}
