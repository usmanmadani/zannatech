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
      // Strict behavior:
      // - If geo-IP responds with a country code, return whether it's NG.
      // - If geo-IP fails or times out, default to NG (i.e., treat as Nigeria).
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 3000); // 3s timeout
      try {
        const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
        clearTimeout(timeout);
        if (!res.ok) return true; // default to NG on unexpected status
        const data = await res.json();
        const country = (data && data.country) ? String(data.country).toUpperCase() : null;
        if (!country) return true; // default to NG if no country provided
        return country === 'NG';
      } catch (e) {
        // On any error (network, timeout, CORS), default to Nigeria
        clearTimeout(timeout);
        return true;
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
