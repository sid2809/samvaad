import React, { useState } from 'react';
import { assessmentQuestions, dimensionLabels } from '../data/assessmentQuestions';
import ProgressBar from './ProgressBar';

function Assessment({ onComplete, initialAnswers }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers || {});

  const currentQuestion = assessmentQuestions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === assessmentQuestions.length - 1;
  const hasAnswer = !!answers[currentQuestion.id];

  const handleSelectOption = optionId => {
    setAnswers({
      ...answers,
      [currentQuestion.id]: optionId
    });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete(answers);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Get current screen info for dimension label
  const currentScreen = currentQuestion.screen;
  const dimensionLabel = dimensionLabels[currentQuestion.dimension];

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <ProgressBar
          current={currentQuestionIndex + 1}
          total={assessmentQuestions.length}
        />

        {/* Dimension Badge */}
        <div className="mb-6">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
            {dimensionLabel}
          </span>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {currentQuestion.options.map(option => (
            <button
              key={option.id}
              onClick={() => handleSelectOption(option.id)}
              className={`card-selectable w-full text-left p-5 ${
                answers[currentQuestion.id] === option.id
                  ? 'card-selected'
                  : ''
              }`}
            >
              <div className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center mr-4">
                  {answers[currentQuestion.id] === option.id && (
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-lg text-gray-700 flex-1">
                  {option.text}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          {currentQuestionIndex > 0 && (
            <button
              onClick={handleBack}
              className="btn-secondary flex-1"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={!hasAnswer}
            className="btn-primary flex-1"
          >
            {isLastQuestion ? 'Complete' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
