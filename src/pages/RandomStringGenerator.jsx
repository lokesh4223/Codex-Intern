import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';

const RandomStringGenerator = () => {
  const [randomString, setRandomString] = useState('');
  const [stringLength, setStringLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generationCount, setGenerationCount] = useState(0);

  // Generate random string using useCallback
  const generateRandomString = useCallback(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    let charset = letters;
    if (includeNumbers) charset += numbers;
    if (includeSymbols) charset += symbols;
    
    let result = '';
    for (let i = 0; i < stringLength; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    setRandomString(result);
    setGenerationCount(prev => prev + 1);
    
    console.log(`Generated string #${generationCount + 1}: ${result}`);
  }, [stringLength, includeNumbers, includeSymbols, generationCount]);

  // Use useEffect to log when component mounts and when dependencies change
  useEffect(() => {
    console.log('RandomStringGenerator component mounted');
    generateRandomString();
  }, []); // Empty dependency array - runs only on mount

  useEffect(() => {
    console.log('String generation settings changed:', {
      length: stringLength,
      includeNumbers,
      includeSymbols
    });
  }, [stringLength, includeNumbers, includeSymbols]);

  // Use useState for managing component state
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = async () => {
    if (randomString) {
      try {
        await navigator.clipboard.writeText(randomString);
        setCopyMessage('Copied to clipboard!');
        setTimeout(() => setCopyMessage(''), 2000);
      } catch (err) {
        setCopyMessage('Failed to copy');
        setTimeout(() => setCopyMessage(''), 2000);
      }
    }
  };

  const resetSettings = () => {
    setStringLength(16);
    setIncludeNumbers(true);
    setIncludeSymbols(false);
    setGenerationCount(0);
    setRandomString('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-600">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Random String Generator
            </h1>
            <p className="text-xl text-white/80">
              Demonstrating React Hooks: useState, useEffect, and useCallback
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            {/* Settings */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-lg mb-4">Generation Settings</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    String Length: {stringLength}
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="64"
                    value={stringLength}
                    onChange={(e) => setStringLength(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="includeNumbers"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="includeNumbers" className="ml-2 text-white/80 text-sm font-medium">
                    Include Numbers
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="includeSymbols"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="w-4 h-4 text-purple-600 bg-white border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label htmlFor="includeSymbols" className="ml-2 text-white/80 text-sm font-medium">
                    Include Symbols
                  </label>
                </div>
              </div>
            </div>

            {/* Generated String Display */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-3">
                Generated String:
              </label>
              <div className="relative">
                <div className="w-full p-4 bg-gray-900 border border-gray-700 rounded-lg font-mono text-green-400 text-lg break-all min-h-[60px] flex items-center">
                  {randomString || 'Click "Generate String" to create a random string'}
                </div>
                {randomString && (
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-xs rounded transition-colors"
                  >
                    Copy
                  </button>
                )}
              </div>
              {copyMessage && (
                <p className="text-green-300 text-sm mt-2">{copyMessage}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={generateRandomString}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
              >
                Generate String
              </button>
              
              <button
                onClick={resetSettings}
                className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-700 transform hover:scale-105 transition-all duration-300"
              >
                Reset Settings
              </button>
            </div>

            {/* Statistics */}
            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <h4 className="text-white font-semibold mb-2">Statistics</h4>
              <p className="text-white/80 text-sm">
                Total strings generated: <span className="font-mono text-yellow-300">{generationCount}</span>
              </p>
              <p className="text-white/80 text-sm mt-1">
                Current string length: <span className="font-mono text-yellow-300">{randomString.length}</span>
              </p>
            </div>

            {/* React Hooks Info */}
            <div className="mt-8 p-4 bg-blue-100/20 rounded-lg border border-blue-300/30">
              <h4 className="text-blue-100 font-semibold mb-2">React Hooks Demonstrated:</h4>
              <ul className="text-blue-100/80 text-sm space-y-1">
                <li><strong>useState:</strong> Managing component state (string, length, settings)</li>
                <li><strong>useEffect:</strong> Logging component lifecycle and settings changes</li>
                <li><strong>useCallback:</strong> Memoizing the string generation function</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomStringGenerator;