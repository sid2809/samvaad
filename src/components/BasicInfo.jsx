import React, { useState } from 'react';

function BasicInfo({ onContinue, initialData }) {
  const [formData, setFormData] = useState(
    initialData || {
      gender: '',
      ageRange: '',
      firstMeeting: '',
      timeline: ''
    }
  );

  const isFormValid = () => {
    return (
      formData.gender &&
      formData.ageRange &&
      formData.firstMeeting &&
      formData.timeline
    );
  };

  const handleContinue = () => {
    if (isFormValid()) {
      onContinue(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-primary mb-2">
            Let's start with the basics
          </h2>
          <p className="text-gray-600">
            This helps us personalize your experience
          </p>
        </div>

        {/* Form */}
        <div className="space-y-8">
          {/* Gender */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Gender
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setFormData({ ...formData, gender: 'male' })}
                className={`card-selectable ${
                  formData.gender === 'male' ? 'card-selected' : ''
                }`}
              >
                <span className="text-lg font-medium">Male</span>
              </button>
              <button
                onClick={() => setFormData({ ...formData, gender: 'female' })}
                className={`card-selectable ${
                  formData.gender === 'female' ? 'card-selected' : ''
                }`}
              >
                <span className="text-lg font-medium">Female</span>
              </button>
            </div>
          </div>

          {/* Age Range */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Age Range
            </label>
            <select
              value={formData.ageRange}
              onChange={e => setFormData({ ...formData, ageRange: e.target.value })}
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-lg bg-white"
            >
              <option value="">Select your age range</option>
              <option value="23-25">23-25</option>
              <option value="26-28">26-28</option>
              <option value="29-32">29-32</option>
              <option value="33-35">33-35</option>
              <option value="35+">35+</option>
            </select>
          </div>

          {/* First Meeting */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              Is this your first arranged marriage meeting?
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setFormData({ ...formData, firstMeeting: 'yes' })}
                className={`card-selectable ${
                  formData.firstMeeting === 'yes' ? 'card-selected' : ''
                }`}
              >
                <span className="text-lg font-medium">Yes</span>
              </button>
              <button
                onClick={() => setFormData({ ...formData, firstMeeting: 'no' })}
                className={`card-selectable ${
                  formData.firstMeeting === 'no' ? 'card-selected' : ''
                }`}
              >
                <span className="text-lg font-medium">No</span>
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-3">
              When is your next meeting?
            </label>
            <div className="space-y-3">
              <button
                onClick={() => setFormData({ ...formData, timeline: 'this-week' })}
                className={`card-selectable w-full text-left ${
                  formData.timeline === 'this-week' ? 'card-selected' : ''
                }`}
              >
                <span className="text-lg font-medium">This week</span>
              </button>
              <button
                onClick={() => setFormData({ ...formData, timeline: 'within-month' })}
                className={`card-selectable w-full text-left ${
                  formData.timeline === 'within-month' ? 'card-selected' : ''
                }`}
              >
                <span className="text-lg font-medium">Within a month</span>
              </button>
              <button
                onClick={() => setFormData({ ...formData, timeline: 'exploring' })}
                className={`card-selectable w-full text-left ${
                  formData.timeline === 'exploring' ? 'card-selected' : ''
                }`}
              >
                <span className="text-lg font-medium">Just exploring</span>
              </button>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!isFormValid()}
          className="btn-primary w-full mt-8 text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default BasicInfo;
