import React, { useState } from 'react';
import { dimensionLabels } from '../data/assessmentQuestions';

function QuestionCard({ question, dimension, number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const dimensionColors = {
    family: 'bg-purple-100 text-purple-700',
    career: 'bg-blue-100 text-blue-700',
    finances: 'bg-green-100 text-green-700',
    lifestyle: 'bg-orange-100 text-orange-700',
    values: 'bg-pink-100 text-pink-700'
  };

  return (
    <div className="card mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left"
      >
        <div className="flex items-start gap-4">
          {/* Number Badge */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
            {number}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                {question.question}
              </h3>
              <svg
                className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {/* Dimension Tag */}
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                dimensionColors[dimension] || 'bg-gray-100 text-gray-700'
              }`}
            >
              {dimensionLabels[dimension]}
            </span>
          </div>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                Why this matters:
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {question.whyMatters}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                What to listen for:
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {question.listenFor}
              </p>
            </div>
          </div>
        )}
      </button>
    </div>
  );
}

export default QuestionCard;
