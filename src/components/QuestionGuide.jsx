import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { dimensionLabels } from '../data/assessmentQuestions';

function QuestionGuide({ questions, onStartOver }) {
  const [showShareConfirm, setShowShareConfirm] = useState(false);

  // Group questions by dimension
  const questionsByDimension = questions.reduce((acc, question) => {
    // Extract dimension from question id (e.g., 'family_q1' -> 'family')
    const dimension = question.id.split('_')[0];
    if (!acc[dimension]) {
      acc[dimension] = [];
    }
    acc[dimension].push(question);
    return acc;
  }, {});

  const handleShareAsText = () => {
    let text = 'Samvaad - My Conversation Guide\n\n';

    Object.keys(questionsByDimension).forEach(dimension => {
      text += `${dimensionLabels[dimension].toUpperCase()}\n`;
      questionsByDimension[dimension].forEach((q, index) => {
        text += `${index + 1}. ${q.question}\n`;
      });
      text += '\n';
    });

    text += 'Created with Samvaad - www.samvaad.app';

    navigator.clipboard.writeText(text).then(() => {
      setShowShareConfirm(true);
      setTimeout(() => setShowShareConfirm(false), 3000);
    });
  };

  const handleSaveGuide = () => {
    // Data is already saved in localStorage by App.jsx
    alert('Your guide has been saved to your device!');
  };

  return (
    <div className="min-h-screen bg-cream p-6 pb-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Your Conversation Guide
          </h1>
          <p className="text-gray-600 text-lg">
            {questions.length} personalized questions to help you understand your
            prospective partner
          </p>
        </div>

        {/* Questions organized by dimension */}
        {Object.keys(questionsByDimension).map(dimension => (
          <div key={dimension} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {dimensionLabels[dimension]}
            </h2>
            {questionsByDimension[dimension].map((question, index) => (
              <QuestionCard
                key={question.id}
                question={question}
                dimension={dimension}
                number={
                  questions.findIndex(q => q.id === question.id) + 1
                }
              />
            ))}
          </div>
        ))}

        {/* Action Buttons - Fixed at bottom on mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:relative md:mt-8 md:border-0 md:bg-transparent">
          <div className="max-w-3xl mx-auto space-y-3">
            <button
              onClick={handleShareAsText}
              className="btn-primary w-full"
            >
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                Copy to Clipboard
              </span>
            </button>

            <button
              onClick={onStartOver}
              className="btn-secondary w-full"
            >
              Start Over
            </button>
          </div>
        </div>

        {/* Share Confirmation Toast */}
        {showShareConfirm && (
          <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-lg shadow-lg z-50">
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied to clipboard!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionGuide;
