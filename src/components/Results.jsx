import React from 'react';
import { dimensionLabels } from '../data/assessmentQuestions';
import { getPriorityLabel, getPriorityColor } from '../utils/scoring';

function Results({ priorityScores, insight, onSeeQuestions }) {
  const dimensions = Object.keys(priorityScores);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mb-4">
            <svg
              className="w-16 h-16 text-primary mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Your Priority Profile
          </h2>
          <p className="text-gray-600 text-lg">
            Here's what matters most to you
          </p>
        </div>

        {/* Priority Cards */}
        <div className="space-y-4 mb-8">
          {dimensions.map(dimension => (
            <div
              key={dimension}
              className="card p-6 flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {dimensionLabels[dimension]}
                </h3>
                <p className="text-gray-600 text-sm">
                  {dimension === 'family' && 'How you envision family relationships'}
                  {dimension === 'career' && 'Your professional ambitions and priorities'}
                  {dimension === 'finances' && 'Money management and transparency'}
                  {dimension === 'lifestyle' && 'Daily habits and social preferences'}
                  {dimension === 'values' && 'Core beliefs and communication style'}
                </p>
              </div>
              <span
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ml-4 ${getPriorityColor(
                  priorityScores[dimension]
                )}`}
              >
                {getPriorityLabel(priorityScores[dimension])}
              </span>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="card bg-gradient-to-br from-primary/5 to-accent/5 p-6 mb-8 border-l-4 border-primary">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Your Personal Insight
          </h3>
          <p className="text-gray-700 leading-relaxed">{insight}</p>
        </div>

        {/* CTA Button */}
        <button onClick={onSeeQuestions} className="btn-primary w-full text-lg">
          See Your Questions
        </button>

        {/* Info Text */}
        <p className="text-center text-sm text-gray-500 mt-4">
          We've prepared {dimensions.filter(d => priorityScores[d] === 'high').length > 0 ? '15-20' : '12-15'} personalized questions based on your priorities
        </p>
      </div>
    </div>
  );
}

export default Results;
