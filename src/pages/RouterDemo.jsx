import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RouterDemo = () => {
  const navigate = useNavigate();

  const handleBackToDashboard = () => {
    navigate('/');
  };

  const routingConcepts = [
    {
      title: 'Client-Side Routing',
      description: 'React Router enables navigation between different components without full page reloads, creating a smooth single-page application experience.'
    },
    {
      title: 'Route Components',
      description: 'Each route renders a specific component. We use <Route> elements to define which component should render for each URL path.'
    },
    {
      title: 'Navigation Links',
      description: 'Use <Link> components instead of anchor tags to navigate between routes without refreshing the page.'
    },
    {
      title: 'URL Parameters',
      description: 'Routes can include dynamic segments (like /user/:id) to pass data through the URL structure.'
    },
    {
      title: 'Programmatic Navigation',
      description: 'Use the useNavigate hook to navigate programmatically in response to user actions or business logic.'
    }
  ];

  const navigationItems = [
    { name: 'Dashboard', path: '/', description: 'Return to the main dashboard with project cards' },
    { name: 'Translator', path: '/translator', description: 'Live translation tool with API integration' },
    { name: 'Random Generator', path: '/random', description: 'Generate random strings with React hooks' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              React Router Demo
            </h1>
            <p className="text-xl text-white/80">
              Understanding Client-Side Routing in React Applications
            </p>
          </div>

          <div className="space-y-8">
            {/* Routing Concepts */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">How Client-Side Routing Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {routingConcepts.map((concept, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-2">{concept.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{concept.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Demo */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Navigation Demo</h2>
              <p className="text-white/80 mb-6">
                Click the links below to navigate between different pages. Notice how the URL changes 
                without a full page refresh, and the navigation state is preserved.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {navigationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-lg border border-white/20 hover:from-white/20 hover:to-white/10 transition-all duration-300 transform hover:scale-105"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={handleBackToDashboard}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300"
                >
                  Back to Dashboard (Programmatic Navigation)
                </button>
              </div>
            </div>

            {/* Code Examples */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Setting up Routes:</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
{`import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/translator" element={<Translator />} />
        <Route path="/random" element={<RandomGenerator />} />
        <Route path="/router-demo" element={<RouterDemo />} />
      </Routes>
    </BrowserRouter>
  );
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Navigation with Links:</h3>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm">
{`import { Link } from 'react-router-dom';

// Declarative navigation
<Link to="/translator">Go to Translator</Link>

// Programmatic navigation
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();
navigate('/dashboard');`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">Benefits of Client-Side Routing</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-white/80">Faster navigation (no full page reloads)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-white/80">Preserved application state</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-white/80">Better user experience</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-white/80">Reduced server load</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-white/80">Mobile app-like experience</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-white/80">SEO-friendly with proper setup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouterDemo;