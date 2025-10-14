import { useEffect, useState } from 'react';

type CurrencyInfo = {
  isNigeria: boolean;
  rateNGNtoUSD: number | null;
  loading: boolean;
  error: string | null;
};

// Fallback rate in case the external API fails (approximate)
const FALLBACK_RATE = 0.0013; // 1 NGN ~ 0.0013 USD (example)

export default function useCurrency() {
  const [info, setInfo] = useState<CurrencyInfo>({ isNigeria: true, rateNGNtoUSD: null, loading: true, error: null });

  useEffect(() => {
    const detectCountryByGeoIP = async (): Promise<boolean> => {
      try {
        // ipapi.co provides a simple JSON endpoint with country code
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Geo-IP fetch failed');
        const data = await res.json();
        const country = (data && data.country) ? String(data.country).toUpperCase() : null;
        return country === 'NG';
      } catch (e) {
        // fallback to locale detection
        try {
          const locale = Intl.DateTimeFormat().resolvedOptions().locale || navigator.language || 'en-US';
          const regionMatch = locale.match(/-([A-Z]{2})$/i);
          const region = regionMatch ? regionMatch[1].toUpperCase() : null;
          return region === 'NG';
        } catch (err) {
          return true;
        }
      }
    };

    const init = async () => {
      const isNigeria = await detectCountryByGeoIP();

      try {
        const res = await fetch('https://api.exchangerate.host/latest?base=NGN&symbols=USD');
        if (!res.ok) throw new Error('Rate fetch failed');
        const data = await res.json();
        const rate = data && data.rates && data.rates.USD ? Number(data.rates.USD) : FALLBACK_RATE;
        setInfo({ isNigeria, rateNGNtoUSD: rate, loading: false, error: null });
      } catch (err: any) {
        setInfo({ isNigeria, rateNGNtoUSD: FALLBACK_RATE, loading: false, error: err?.message || 'Failed to fetch rate' });
      }
    };

    init();
  }, []);

  return info;
}
