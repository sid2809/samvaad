const STORAGE_KEYS = {
  BASIC_INFO: 'samvaad_basic_info',
  ASSESSMENT_ANSWERS: 'samvaad_assessment_answers',
  PRIORITY_SCORES: 'samvaad_priority_scores',
  PERSONALIZED_QUESTIONS: 'samvaad_personalized_questions',
  INSIGHT: 'samvaad_insight'
};

/**
 * Save data to localStorage
 */
export function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
}

/**
 * Load data from localStorage
 */
export function loadFromStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return null;
  }
}

/**
 * Clear all app data from localStorage
 */
export function clearAllData() {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
}

/**
 * Save basic info
 */
export function saveBasicInfo(basicInfo) {
  return saveToStorage(STORAGE_KEYS.BASIC_INFO, basicInfo);
}

/**
 * Load basic info
 */
export function loadBasicInfo() {
  return loadFromStorage(STORAGE_KEYS.BASIC_INFO);
}

/**
 * Save assessment answers
 */
export function saveAssessmentAnswers(answers) {
  return saveToStorage(STORAGE_KEYS.ASSESSMENT_ANSWERS, answers);
}

/**
 * Load assessment answers
 */
export function loadAssessmentAnswers() {
  return loadFromStorage(STORAGE_KEYS.ASSESSMENT_ANSWERS);
}

/**
 * Save priority scores
 */
export function savePriorityScores(scores) {
  return saveToStorage(STORAGE_KEYS.PRIORITY_SCORES, scores);
}

/**
 * Load priority scores
 */
export function loadPriorityScores() {
  return loadFromStorage(STORAGE_KEYS.PRIORITY_SCORES);
}

/**
 * Save personalized questions
 */
export function savePersonalizedQuestions(questions) {
  return saveToStorage(STORAGE_KEYS.PERSONALIZED_QUESTIONS, questions);
}

/**
 * Load personalized questions
 */
export function loadPersonalizedQuestions() {
  return loadFromStorage(STORAGE_KEYS.PERSONALIZED_QUESTIONS);
}

/**
 * Save insight
 */
export function saveInsight(insight) {
  return saveToStorage(STORAGE_KEYS.INSIGHT, insight);
}

/**
 * Load insight
 */
export function loadInsight() {
  return loadFromStorage(STORAGE_KEYS.INSIGHT);
}

/**
 * Check if user has completed assessment
 */
export function hasCompletedAssessment() {
  const answers = loadAssessmentAnswers();
  const scores = loadPriorityScores();
  return !!(answers && scores);
}

export { STORAGE_KEYS };
