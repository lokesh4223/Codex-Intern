# React Dashboard with Professional Features

A modern React application built with Vite, featuring a professional dashboard with multiple interactive pages including a live translator, random string generator, and React Router demonstration.

## Features

### 🏠 Dashboard Home
- Professional gradient design with responsive card layout
- Navigation to all feature pages
- Smooth hover animations and transitions

### 🌐 Live Translator
- **Real-time translation** with RapidAPI integration
- Support for 15 languages including Indian languages (Hindi, Telugu, Tamil, Malayalam, Kannada)
- Debounced input for optimal API usage
- Fallback to mock translations when API is unavailable

### 🎲 Random String Generator
- Comprehensive React hooks demonstration (useState, useEffect, useCallback)
- Customizable string generation with length and character type controls
- Copy to clipboard functionality
- Statistics tracking

### 🧭 React Router Demo
- Educational content about client-side routing
- Interactive navigation examples
- Code samples and best practices

## Technology Stack

- **React 18** with modern hooks
- **React Router v6** for client-side routing
- **Tailwind CSS** for responsive styling
- **Vite** for fast development and building
- **Axios** for API requests
- **RapidAPI** for translation services (Google Translator 9)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Translation API Setup (Optional)

To enable real translations in the translator page:

1. **Sign up for RapidAPI:**
   - Visit [rapidapi.com](https://rapidapi.com)
   - Create an account

2. **Subscribe to Google Translator 9 API:**
   - Search for "Google Translator 9" on RapidAPI
   - Subscribe to the Google Translator 9 API
   - Get your API key

3. **Configure Environment Variables:**
   ```bash
   # Copy the example file
   cp .env.example .env
   
   # Edit .env and add your API key
   REACT_APP_RAPIDAPI_KEY=your_actual_api_key_here
   ```

4. **Restart the development server:**
   ```bash
   npm run dev
   ```

### Supported Languages

The translator supports the following languages:
- **Indian Languages:** Hindi (हिंदी), Telugu (తెలుగు), Tamil (தமிழ்), Malayalam (മലയാളം), Kannada (ಕನ್ನಡ)
- **International:** Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Korean, Russian, Arabic

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── DashboardCard.jsx # Card component for dashboard
│   └── Navbar.jsx       # Navigation component
├── pages/               # Page components
│   ├── Dashboard.jsx    # Home dashboard
│   ├── Translator.jsx   # Live translator
│   ├── RandomStringGenerator.jsx # String generator with hooks demo
│   └── RouterDemo.jsx   # Router documentation
├── App.jsx              # Main app with routing
├── App.css              # App styles
└── index.css           # Tailwind CSS imports
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The translator page demonstrates real API integration with:
- Google Translator 9 API via RapidAPI
- Enhanced error handling and fallback mechanisms
- Environment variable configuration
- Proper request headers and JSON data formatting
- Multiple response format support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
