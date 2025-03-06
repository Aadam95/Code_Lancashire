import React, { useState } from 'react';
import Title from './components/Title.jsx';
import InputBox from './components/InputBox.jsx';
import CharacterCount from './components/CharacterCount.jsx';
import WordCount from './components/WordCount.jsx';
import SentenceCount from './components/SentenceCount.jsx';
import './index.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="h-screen w-screen bg-gray-900 text-white p-4">
      <Title />
      <InputBox onTextChange={setText} />
      <CharacterCount text={text} />
      <WordCount text={text} />
      <SentenceCount text={text} />
    </div>
  );
}

export default App;
