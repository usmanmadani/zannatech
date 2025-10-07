import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
  submessage?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Loading your form...",
  submessage = "This might take a few seconds"
}) => {
  return (
    <div className="text-center scale-110 transform transition-transform">
      <div className="relative">
        {/* Multiple spinning rings */}
        {[200, 400, 600].map((speed, index) => (
          <div 
            key={index}
            className="absolute inset-0 w-20 h-20 rounded-full"
            style={{
              border: '4px solid transparent',
              borderTopColor: `rgb(251, 191, 36, ${0.8 - index * 0.2})`,
              borderLeftColor: `rgb(251, 191, 36, ${0.8 - index * 0.2})`,
              animation: `spin ${speed}ms linear infinite`
            }}
          />
        ))}
        {/* Central pulsing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <p className="text-amber-600 font-medium animate-pulse">
          {message}
        </p>
        <p className="text-amber-400 text-sm">
          {submessage}
        </p>
        <div className="flex justify-center space-x-1 mt-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 bg-amber-400 rounded-full"
              style={{
                animation: `bounce 1.4s ease-in-out ${i * 0.16}s infinite`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;