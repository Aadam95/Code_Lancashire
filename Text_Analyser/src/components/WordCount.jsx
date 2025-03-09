import React from 'react';

function WordCount({ text }) {
 
  const count = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  
  return (
    <div className="bg-pink-100 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-3xl font-bold text-pink-600">{count}</div>
      <div className="text-pink-800 font-medium">Words</div>
    </div>
  );
}

export default WordCount;