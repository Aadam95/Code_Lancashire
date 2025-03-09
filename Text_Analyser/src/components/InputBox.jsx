import React from 'react';

function InputBox({ text, setText }) {
  return (
    <div className="mb-6">
      <label htmlFor="text-input" className="block text-sm font-medium text-slate-300 mb-2">
        Enter your text:
      </label>
      <textarea
        id="text-input"
        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-h-40 transition-all duration-200 text-white"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default InputBox;