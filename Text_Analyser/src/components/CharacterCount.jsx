import React from 'react';

function CharacterCount({ text }) {
  
  const count = text.replace(/\s/g, '').length;
  
  return (
    <div className="bg-orange-100 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-3xl font-bold text-orange-600">{count}</div>
      <div className="text-orange-800 font-medium">Characters</div>
    </div>
  );
}

export default CharacterCount;