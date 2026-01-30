import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import BasicInfo from './components/BasicInfo';
import Assessment from './components/Assessment';
import Processing from './components/Processing';
import Results from './components/Results';
import QuestionGuide from './components/QuestionGuide';
import { calculatePriorityScores, generateInsight } from './utils/scoring';
import { getPersonalizedQuestions } from './data/outputQuestions';
import {
  saveBasicInfo,
  loadBasicInfo,
  saveAssessmentAnswers,
  loadAssessmentAnswers,
  savePriorityScores,
  loadPriorityScores,
  savePersonalizedQuestions,
  loadPersonalizedQuestions,
  saveInsight,
  loadInsight,
  clearAllData
} from './utils/storage';

function App() {
  // Screen flow: 'welcome' -> 'basic-info' -> 'assessment' -> 'processing' -> 'results' -> 'guide'
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [basicInfo, setBasicInfo] = useState(null);
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [priorityScores, setPriorityScores] = useState(null);
  const [personalizedQuestions, setPersonalizedQuestions] = useState([]);
  const [insight, setInsight] = useState('');

  // Load saved data on mount
  useEffect(() => {
    const savedBasicInfo = loadBasicInfo();
    const savedAnswers = loadAssessmentAnswers();
    const savedScores = loadPriorityScores();
    const savedQuestions = loadPersonalizedQuestions();
    const savedInsight = loadInsight();

    if (savedBasicInfo) setBasicInfo(savedBasicInfo);
    if (savedAnswers) setAssessmentAnswers(savedAnswers);
    if (savedScores) setPriorityScores(savedScores);
    if (savedQuestions) setPersonalizedQuestions(savedQuestions);
    if (savedInsight) setInsight(savedInsight);

    // If user has completed everything, show guide
    if (savedQuestions && savedQuestions.length > 0) {
      setCurrentScreen('guide');
    }
    // If user has completed assessment but not yet seen guide
    else if (savedAnswers && Object.keys(savedAnswers).length > 0) {
      setCurrentScreen('assessment');
    }
    // If user has entered basic info
    else if (savedBasicInfo) {
      setCurrentScreen('basic-info');
    }
  }, []);

  const handleGetStarted = () => {
    setCurrentScreen('basic-info');
  };

  const handleBasicInfoComplete = info => {
    setBasicInfo(info);
    saveBasicInfo(info);
    setCurrentScreen('assessment');
  };

  const handleAssessmentComplete = answers => {
    setAssessmentAnswers(answers);
    saveAssessmentAnswers(answers);
    setCurrentScreen('processing');

    // Calculate scores and generate questions
    const scores = calculatePriorityScores(answers);
    const questions = getPersonalizedQuestions(scores);
    const insightText = generateInsight(scores, basicInfo);

    setPriorityScores(scores);
    setPersonalizedQuestions(questions);
    setInsight(insightText);

    // Save to storage
    savePriorityScores(scores);
    savePersonalizedQuestions(questions);
    saveInsight(insightText);
  };

  const handleProcessingComplete = () => {
    setCurrentScreen('results');
  };

  const handleSeeQuestions = () => {
    setCurrentScreen('guide');
  };

  const handleStartOver = () => {
    if (
      confirm(
        'Are you sure you want to start over? This will clear all your data.'
      )
    ) {
      clearAllData();
      setCurrentScreen('welcome');
      setBasicInfo(null);
      setAssessmentAnswers({});
      setPriorityScores(null);
      setPersonalizedQuestions([]);
      setInsight('');
    }
  };

  return (
    <div className="app">
      {currentScreen === 'welcome' && (
        <Welcome onGetStarted={handleGetStarted} />
      )}

      {currentScreen === 'basic-info' && (
        <BasicInfo
          onContinue={handleBasicInfoComplete}
          initialData={basicInfo}
        />
      )}

      {currentScreen === 'assessment' && (
        <Assessment
          onComplete={handleAssessmentComplete}
          initialAnswers={assessmentAnswers}
        />
      )}

      {currentScreen === 'processing' && (
        <Processing onComplete={handleProcessingComplete} />
      )}

      {currentScreen === 'results' && (
        <Results
          priorityScores={priorityScores}
          insight={insight}
          onSeeQuestions={handleSeeQuestions}
        />
      )}

      {currentScreen === 'guide' && (
        <QuestionGuide
          questions={personalizedQuestions}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
}

export default App;
