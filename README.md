# Samvaad

**Walk into your first meeting with clarity**

A mobile-first web app that helps Indians prepare for arranged marriage first meetings. Complete a self-assessment and get a personalized conversation guide with thoughtful questions tailored to your priorities.

## Features

- **Self-Assessment**: 17 questions across 5 dimensions (Family, Career, Finances, Lifestyle, Values)
- **Personalized Guide**: Get 15-20 questions customized based on your priorities
- **Mobile-First Design**: Optimized for smartphone use
- **Privacy-Focused**: All data stored locally on your device
- **PWA-Ready**: Can be installed on mobile devices
- **Offline-First**: Works without internet connection once loaded

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **localStorage** - Client-side data persistence

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository (or you're already in it!)

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
samvaad/
├── src/
│   ├── components/          # React components
│   │   ├── Welcome.jsx      # Welcome screen
│   │   ├── BasicInfo.jsx    # Basic info collection
│   │   ├── Assessment.jsx   # Assessment questions
│   │   ├── ProgressBar.jsx  # Progress indicator
│   │   ├── Processing.jsx   # Loading screen
│   │   ├── Results.jsx      # Priority profile results
│   │   ├── QuestionGuide.jsx # Personalized questions
│   │   └── QuestionCard.jsx # Individual question card
│   ├── data/
│   │   ├── assessmentQuestions.js  # Assessment questions data
│   │   └── outputQuestions.js      # Output questions bank
│   ├── utils/
│   │   ├── scoring.js       # Scoring and insights logic
│   │   └── storage.js       # localStorage utilities
│   ├── App.jsx              # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── public/
│   └── manifest.json       # PWA manifest
└── index.html             # HTML template
```

## User Flow

1. **Welcome** - Introduction to the app
2. **Basic Info** - Collect gender, age, meeting timeline
3. **Assessment** - 5 screens with 17 questions total
   - Family (3 questions)
   - Career (3 questions)
   - Finances (3 questions)
   - Lifestyle (4 questions)
   - Values (4 questions)
4. **Processing** - Brief loading animation
5. **Results** - Show priority profile and personal insight
6. **Question Guide** - Display personalized questions organized by dimension

## Personalization Logic

The app analyzes responses to calculate priority levels for each dimension:

- **High Priority**: 50%+ answers indicate strong preferences
- **Medium Priority**: Mixed responses
- **Low Priority**: 50%+ answers indicate flexibility

Question count per dimension:
- High Priority: 5-6 questions
- Medium Priority: 3-4 questions
- Low Priority: 2-3 essential questions

## Design Philosophy

- **Warm & Trustworthy**: Not a dating app - more like a trusted friend helping you prepare
- **Clean & Minimal**: Generous spacing, easy to read
- **Mobile-First**: Optimized for smartphone use
- **Non-Judgmental**: All responses are valid and respected

## Color Palette

- **Primary**: Deep Teal (#0D7377)
- **Accent**: Soft Gold (#D4AF37)
- **Background**: Cream (#FDF6E3)

## Data Privacy

All user data is stored locally in the browser's localStorage. No data is sent to any server. Users can clear their data at any time using the "Start Over" button.

## Future Enhancements (Not in MVP)

- Payment/paywall for premium features
- User accounts and cloud sync
- Backend/database
- Export to PDF
- Analytics
- Multiple languages (Hindi, Tamil, Telugu, etc.)
- More question banks
- Partner matching suggestions

## Browser Support

- Chrome/Edge (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

This is currently a personal project. If you'd like to contribute or have suggestions, please reach out!

## License

All rights reserved.

## Acknowledgments

Built with love for everyone navigating the arranged marriage process. May you find clarity and confidence in your conversations.

---

**Samvaad** (संवाद) - Sanskrit/Hindi word meaning dialogue, conversation, or communication.
