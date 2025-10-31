import React, { useEffect, useRef, useState } from 'react';

// Mapbox GL JS via CDN (no npm install). You must set VITE_MAPBOX_TOKEN in your env.
// Uses "any" typings to avoid needing @types.

declare global {
  interface Window { mapboxgl?: any }
}

const MAP_CENTER: [number, number] = [7.3986, 9.0765]; // [lng, lat] Abuja, Nigeria

const loadMapboxFromCdn = () => {
  return new Promise<void>((resolve, reject) => {
    // CSS
    const cssId = 'mapbox-gl-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.css';
      document.head.appendChild(link);
    }

    if (window.mapboxgl) {
      resolve();
      return;
    }

    const scriptId = 'mapbox-gl-js';
    if (document.getElementById(scriptId)) {
      (document.getElementById(scriptId) as HTMLScriptElement).addEventListener('load', () => resolve());
      return;
    }
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://api.mapbox.com/mapbox-gl-js/v3.3.0/mapbox-gl.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Mapbox GL JS'));
    document.body.appendChild(script);
  });
};


const LocationSection: React.FC = () => {
  const theme: 'light' = 'light';
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const token = (import.meta as any).env?.VITE_MAPBOX_TOKEN as string | undefined;

  useEffect(() => {
    let isMounted = true;
    if (!mapRef.current || !token) return;

    loadMapboxFromCdn().then(() => {
      if (!isMounted) return;
      const style = theme === 'dark' ? 'mapbox://styles/mapbox/dark-v11' : 'mapbox://styles/mapbox/light-v11';
      window.mapboxgl.accessToken = token;

      // Create map or update style
      if (!mapInstance.current) {
        mapInstance.current = new window.mapboxgl.Map({
          container: mapRef.current,
          style,
          center: MAP_CENTER,
          zoom: 11,
        });
        mapInstance.current.addControl(new window.mapboxgl.NavigationControl(), 'top-right');
        markerRef.current = new window.mapboxgl.Marker({ color: theme === 'dark' ? '#f59e0b' : '#d97706' })
          .setLngLat(MAP_CENTER)
          .addTo(mapInstance.current);
      } else {
        mapInstance.current.setStyle(style);
        // Re-add marker after style loads
        mapInstance.current.once('styledata', () => {
          if (markerRef.current) {
            markerRef.current.remove();
          }
          markerRef.current = new window.mapboxgl.Marker({ color: theme === 'dark' ? '#f59e0b' : '#d97706' })
            .setLngLat(MAP_CENTER)
            .addTo(mapInstance.current);
        });
      }
    }).catch(console.error);

    return () => { isMounted = false; };
  }, [theme, token]);

  useEffect(() => () => {
    if (mapInstance.current) {
      mapInstance.current.remove();
      mapInstance.current = null;
    }
  }, []);

  const containerTheme = 'bg-white text-gray-900';
  const cardTheme = 'bg-white border-gray-200';
  const mutedText = 'text-gray-600';

  const directionsHref = 'https://www.google.com/maps/dir/?api=1&destination=ZannaTech%20Innovations%20Ltd%2C%20Abuja%2C%20Nigeria';

  return (
    <section className={`py-16 transition-colors duration-300 ${containerTheme}`} aria-label="Location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Our Location</h2>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-6`}>          
          <div className={`lg:col-span-2 rounded-2xl border ${cardTheme} shadow-lg overflow-hidden`}> 
            {token ? (
              <div className="relative">
                <div
                  ref={mapRef}
                  className="w-full h-[360px] md:h-[440px] animate-fade"
                  style={{ transition: 'opacity .4s ease' }}
                />
              </div>
            ) : (
              <iframe
                title="Abuja Map"
                loading="lazy"
                className="w-full h-[360px] md:h-[440px] border-0"
                src="https://www.google.com/maps?q=Abuja%2C%20Nigeria&output=embed"
              />
            )}
          </div>

          <aside className={`rounded-2xl border ${cardTheme} p-6 shadow-lg flex flex-col justify-between`}>
            <div>
              <h3 className="text-lg font-semibold mb-2">ZannaTech Innovations Ltd</h3>
              <p className={`${mutedText}`}>Abuja, Nigeria</p>
              <div className="mt-4 space-y-2 text-sm">
                <p className={`${mutedText}`}>
                  Email: <a className="underline hover:opacity-80" href="mailto:zannatechinnovations@gmail.com">zannatechinnovations@gmail.com</a>
                </p>
                <p className={`${mutedText}`}>
                  Phone: <a className="underline hover:opacity-80" href="https://wa.me/2347045494824" target="_blank" rel="noreferrer">+234 704 549 4824</a>
                </p>
                <p className={`${mutedText}`}>Hours: Mon–Fri, 9:00–18:00</p>
              </div>
            </div>
            <div className="pt-5">
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${theme === 'dark' ? 'bg-amber-500 hover:bg-amber-600 text-black' : 'bg-amber-500 hover:bg-amber-600 text-white'}`}
              >
                Get Directions
              </a>
              {!token && (
                <p className={`mt-3 text-xs ${mutedText}`}>
                  Tip: Add a Mapbox token in VITE_MAPBOX_TOKEN to enable the interactive dark/light map style.
                </p>
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;