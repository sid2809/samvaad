export const assessmentQuestions = [
  // Screen 3: Family (3 questions)
  {
    id: 'family_1',
    dimension: 'family',
    screen: 3,
    question: 'After marriage, where would you ideally want to live?',
    options: [
      { id: 'A', text: 'With or very close to my parents', priority: 'high' },
      { id: 'B', text: 'Same city as family, but our own place', priority: 'high' },
      { id: 'C', text: 'Wherever makes sense for careers', priority: 'low' },
      { id: 'D', text: "I'm flexible on this", priority: 'low' }
    ]
  },
  {
    id: 'family_2',
    dimension: 'family',
    screen: 3,
    question: 'When making major life decisions, whose input matters most?',
    options: [
      { id: 'A', text: 'Primarily my spouse and I decide together', priority: 'low' },
      { id: 'B', text: 'We decide but with significant family input', priority: 'high' },
      { id: 'C', text: 'Family consensus is essential', priority: 'high' },
      { id: 'D', text: 'Depends on the decision', priority: 'medium' }
    ]
  },
  {
    id: 'family_3',
    dimension: 'family',
    screen: 3,
    question: 'How involved do you expect families to be in day-to-day married life?',
    options: [
      { id: 'A', text: 'Very involved - regular visits, shared meals, holidays together', priority: 'high' },
      { id: 'B', text: 'Moderately involved - weekly or monthly connection', priority: 'medium' },
      { id: 'C', text: 'Minimally involved - we live our own life mostly', priority: 'low' },
      { id: 'D', text: "Haven't thought about this much", priority: 'medium' }
    ]
  },

  // Screen 4: Career (3 questions)
  {
    id: 'career_1',
    dimension: 'career',
    screen: 4,
    question: "If your spouse got a great job in another city, your first reaction would be:",
    options: [
      { id: 'A', text: "Exciting! Let's make it work", priority: 'high' },
      { id: 'B', text: 'Concerned but open to discussion', priority: 'medium' },
      { id: 'C', text: 'Hesitant - stability matters more', priority: 'high' },
      { id: 'D', text: 'Depends on specifics', priority: 'medium' }
    ]
  },
  {
    id: 'career_2',
    dimension: 'career',
    screen: 4,
    question: "How important is it that your spouse's career ambition matches yours?",
    options: [
      { id: 'A', text: 'Very - we should both be equally driven', priority: 'high' },
      { id: 'B', text: 'Somewhat - baseline ambition needed', priority: 'medium' },
      { id: 'C', text: 'Not much - I care more about who they are', priority: 'low' },
      { id: 'D', text: "Haven't thought about it", priority: 'low' }
    ]
  },
  {
    id: 'career_3',
    dimension: 'career',
    screen: 4,
    question: 'Your view on work-life balance in marriage:',
    options: [
      { id: 'A', text: 'Career comes first in early years, balance later', priority: 'high' },
      { id: 'B', text: 'Balance is important from day one', priority: 'medium' },
      { id: 'C', text: 'Family should always come before career', priority: 'high' },
      { id: 'D', text: 'Flexible based on circumstances', priority: 'low' }
    ]
  },

  // Screen 5: Finances (3 questions)
  {
    id: 'finances_1',
    dimension: 'finances',
    screen: 5,
    question: 'Discussing exact salaries and savings before marriage is:',
    options: [
      { id: 'A', text: 'Essential - complete transparency', priority: 'high' },
      { id: 'B', text: 'Important but can happen gradually', priority: 'medium' },
      { id: 'C', text: 'Uncomfortable - general sense is enough', priority: 'low' },
      { id: 'D', text: 'Not sure how I feel', priority: 'low' }
    ]
  },
  {
    id: 'finances_2',
    dimension: 'finances',
    screen: 5,
    question: 'How should a couple manage money?',
    options: [
      { id: 'A', text: 'Everything pooled into joint accounts', priority: 'high' },
      { id: 'B', text: 'Joint for shared expenses, separate for personal', priority: 'medium' },
      { id: 'C', text: 'Mostly separate with agreed contributions', priority: 'low' },
      { id: 'D', text: 'Will figure it out together', priority: 'low' }
    ]
  },
  {
    id: 'finances_3',
    dimension: 'finances',
    screen: 5,
    question: 'Financial support to extended family:',
    options: [
      { id: 'A', text: 'Expected and budgeted for', priority: 'high' },
      { id: 'B', text: 'Case-by-case basis', priority: 'medium' },
      { id: 'C', text: 'Our nuclear family comes first', priority: 'low' },
      { id: 'D', text: "Haven't considered this", priority: 'low' }
    ]
  },

  // Screen 6: Lifestyle (4 questions)
  {
    id: 'lifestyle_1',
    dimension: 'lifestyle',
    screen: 6,
    question: 'Your ideal weekend looks like:',
    options: [
      { id: 'A', text: 'Active - outings, socializing, activities', priority: 'high' },
      { id: 'B', text: 'Balanced - some plans, some rest', priority: 'medium' },
      { id: 'C', text: 'Quiet - home, rest, personal hobbies', priority: 'high' },
      { id: 'D', text: 'Varies based on mood', priority: 'low' }
    ]
  },
  {
    id: 'lifestyle_2',
    dimension: 'lifestyle',
    screen: 6,
    question: 'How important is it that your spouse shares your dietary preferences?',
    options: [
      { id: 'A', text: 'Very - we should eat the same way', priority: 'high' },
      { id: 'B', text: 'Somewhat - respect is enough', priority: 'medium' },
      { id: 'C', text: 'Not at all - food is personal choice', priority: 'low' },
      { id: 'D', text: 'Flexible', priority: 'low' }
    ]
  },
  {
    id: 'lifestyle_3',
    dimension: 'lifestyle',
    screen: 6,
    question: 'Social life after marriage:',
    options: [
      { id: 'A', text: 'Active social life with friends is important', priority: 'high' },
      { id: 'B', text: 'Some social time but mostly couple/family focused', priority: 'medium' },
      { id: 'C', text: 'Prefer private life, small circle', priority: 'low' },
      { id: 'D', text: 'No strong preference', priority: 'low' }
    ]
  },
  {
    id: 'lifestyle_4',
    dimension: 'lifestyle',
    screen: 6,
    question: 'Daily routines and habits:',
    options: [
      { id: 'A', text: 'Should be aligned - similar wake/sleep times, lifestyle', priority: 'high' },
      { id: 'B', text: 'Some alignment needed, but flexibility is fine', priority: 'medium' },
      { id: 'C', text: 'We can have different routines', priority: 'low' },
      { id: 'D', text: "Haven't thought about it", priority: 'low' }
    ]
  },

  // Screen 7: Values & Communication (4 questions)
  {
    id: 'values_1',
    dimension: 'values',
    screen: 7,
    question: 'How important is religious/spiritual alignment?',
    options: [
      { id: 'A', text: 'Essential - must share beliefs and practices', priority: 'high' },
      { id: 'B', text: 'Important - similar values, flexible on practices', priority: 'medium' },
      { id: 'C', text: 'Not important - mutual respect is enough', priority: 'low' },
      { id: 'D', text: 'Prefer someone with different perspective', priority: 'low' }
    ]
  },
  {
    id: 'values_2',
    dimension: 'values',
    screen: 7,
    question: 'When upset with your partner, you\'re likely to:',
    options: [
      { id: 'A', text: 'Address it directly and immediately', priority: 'high' },
      { id: 'B', text: 'Wait until calm, then discuss', priority: 'medium' },
      { id: 'C', text: 'Drop hints and hope they notice', priority: 'high' },
      { id: 'D', text: 'Withdraw until it passes', priority: 'medium' }
    ]
  },
  {
    id: 'values_3',
    dimension: 'values',
    screen: 7,
    question: 'What\'s your deal-breaker?',
    options: [
      { id: 'A', text: 'Dishonesty or lack of transparency', priority: 'high' },
      { id: 'B', text: 'Disrespect towards family', priority: 'high' },
      { id: 'C', text: 'Lack of ambition or drive', priority: 'high' },
      { id: 'D', text: 'Incompatible life goals', priority: 'high' }
    ]
  },
  {
    id: 'values_4',
    dimension: 'values',
    screen: 7,
    question: 'How much personal space do you need?',
    options: [
      { id: 'A', text: 'A lot - I need regular alone time', priority: 'high' },
      { id: 'B', text: 'Some - but togetherness is important', priority: 'medium' },
      { id: 'C', text: 'Not much - I prefer being together', priority: 'low' },
      { id: 'D', text: 'Flexible', priority: 'low' }
    ]
  }
];

export const dimensionLabels = {
  family: 'Family',
  career: 'Career',
  finances: 'Finances',
  lifestyle: 'Lifestyle',
  values: 'Values'
};
