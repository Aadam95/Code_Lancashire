import React, { useState } from 'react';
import Title from './components/Title.jsx';
import InputBox from './components/InputBox.jsx';
import CharacterCount from './components/CharacterCount.jsx';
import WordCount from './components/WordCount.jsx';
import SentenceCount from './components/SentenceCount.jsx';
import TextStatistics from './components/TextStatistics.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [text, setText] = useState('');
  
  return (
    <div className="min-h-screen bg-slate-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-slate-800 rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 bg-slate-700 text-white">
          <Title />
          <p className="text-orange-200">Count characters, words, and sentences in your text</p>
        </div>
        
        <div className="p-6">
          <InputBox text={text} setText={setText} />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CharacterCount text={text} />
            <WordCount text={text} />
            <SentenceCount text={text} />
          </div>
          
          {text && (
            <div className="mt-6 p-4 border border-slate-600 rounded-lg bg-slate-700">
              <h2 className="text-lg font-semibold text-slate-200 mb-2">Text Statistics</h2>
              <ul className="space-y-1 text-sm text-slate-300">
                <TextStatistics text={text} />
              </ul>
            </div>
          )}
        </div>
        
        <Footer text={text} onClear={() => setText('')} />
      </div>
    </div>
  );
}

export default App;