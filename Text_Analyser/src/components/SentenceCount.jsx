import React from 'react';

function SentenceCount({ text }) {

  const count = text.trim() === '' ? 0 : 
    text.split(/[.!?]+/)
        .filter(sentence => sentence.trim().length > 0)
        .length;
  
  return (
    <div className="bg-purple-100 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-3xl font-bold text-purple-600">{count}</div>
      <div className="text-purple-800 font-medium">Sentences</div>
    </div>
  );
}

export default SentenceCount;