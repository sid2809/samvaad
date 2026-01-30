import React, { useEffect } from 'react';

function Processing({ onComplete }) {
  useEffect(() => {
    // Simulate processing delay
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Animated Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/20 animate-ping absolute"></div>
            <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center relative">
              <svg
                className="w-12 h-12 text-white animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Creating your personalized guide...
        </h2>
        <p className="text-gray-600">
          Analyzing your priorities and preparing thoughtful questions
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

export default Processing;
