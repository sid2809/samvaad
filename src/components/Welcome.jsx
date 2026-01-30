import React from 'react';

function Welcome({ onGetStarted }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center">
        {/* App Logo/Name */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-primary mb-3">
            Samvaad
          </h1>
          <p className="text-xl text-gray-600 font-medium mb-6">
            Walk into your first meeting with clarity
          </p>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            A thoughtful guide to help you prepare for arranged marriage conversations.
            Answer a few questions about your values and priorities, and get a personalized
            conversation guide tailored just for you.
          </p>
        </div>

        {/* Illustration or Visual Element */}
        <div className="mb-12">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onGetStarted}
          className="btn-primary w-full text-lg"
        >
          Get Started
        </button>

        {/* Trust indicator */}
        <p className="mt-6 text-sm text-gray-500">
          Your responses are private and stored only on your device
        </p>
      </div>
    </div>
  );
}

export default Welcome;
