import { assessmentQuestions } from '../data/assessmentQuestions';

/**
 * Calculate priority scores based on user's assessment answers
 * Returns an object with dimension priorities: { family: 'high', career: 'medium', ... }
 */
export function calculatePriorityScores(answers) {
  const dimensionScores = {};

  // Group answers by dimension
  assessmentQuestions.forEach(question => {
    if (!dimensionScores[question.dimension]) {
      dimensionScores[question.dimension] = {
        high: 0,
        medium: 0,
        low: 0,
        total: 0
      };
    }

    const selectedAnswer = answers[question.id];
    if (selectedAnswer) {
      const selectedOption = question.options.find(opt => opt.id === selectedAnswer);
      if (selectedOption) {
        dimensionScores[question.dimension].total++;

        // Count priority levels
        if (selectedOption.priority === 'high') {
          dimensionScores[question.dimension].high++;
        } else if (selectedOption.priority === 'medium') {
          dimensionScores[question.dimension].medium++;
        } else if (selectedOption.priority === 'low') {
          dimensionScores[question.dimension].low++;
        }
      }
    }
  });

  // Convert counts to priority levels
  const priorityScores = {};

  Object.keys(dimensionScores).forEach(dimension => {
    const scores = dimensionScores[dimension];
    const highPercentage = (scores.high / scores.total) * 100;
    const lowPercentage = (scores.low / scores.total) * 100;

    // If more than 50% answers are "high" priority, mark as high
    if (highPercentage >= 50) {
      priorityScores[dimension] = 'high';
    }
    // If more than 50% answers are "low" priority, mark as low
    else if (lowPercentage >= 50) {
      priorityScores[dimension] = 'low';
    }
    // Otherwise, medium
    else {
      priorityScores[dimension] = 'medium';
    }
  });

  return priorityScores;
}

/**
 * Generate a personalized insight based on priority scores
 */
export function generateInsight(priorityScores, basicInfo) {
  const highPriorities = Object.keys(priorityScores).filter(
    dim => priorityScores[dim] === 'high'
  );

  const lowPriorities = Object.keys(priorityScores).filter(
    dim => priorityScores[dim] === 'low'
  );

  let insight = '';

  if (highPriorities.length === 0) {
    insight = "You seem very flexible across all areas. This openness is valuable, but make sure you're also aware of your own needs and boundaries.";
  } else if (highPriorities.length >= 4) {
    insight = "You have strong preferences across multiple areas. Being clear about your priorities will help you find someone truly compatible.";
  } else {
    const priorityNames = highPriorities.map(p =>
      p.charAt(0).toUpperCase() + p.slice(1)
    ).join(', ');

    insight = `${priorityNames} ${highPriorities.length === 1 ? 'is' : 'are'} your key ${highPriorities.length === 1 ? 'priority' : 'priorities'}. `;

    if (lowPriorities.length > 0) {
      insight += "Your flexibility in other areas gives you room to find common ground with your partner.";
    } else {
      insight += "Focus your conversations on understanding alignment in these areas.";
    }
  }

  // Add context based on basic info
  if (basicInfo.firstMeeting === 'yes') {
    insight += " Since this is your first meeting, these questions will help you start meaningful conversations.";
  }

  return insight;
}

/**
 * Get a human-readable label for priority level
 */
export function getPriorityLabel(priority) {
  const labels = {
    high: 'High Priority',
    medium: 'Medium Priority',
    low: 'Flexible'
  };
  return labels[priority] || priority;
}

/**
 * Get color class for priority level
 */
export function getPriorityColor(priority) {
  const colors = {
    high: 'bg-primary text-white',
    medium: 'bg-accent text-gray-800',
    low: 'bg-gray-200 text-gray-600'
  };
  return colors[priority] || 'bg-gray-200 text-gray-600';
}
