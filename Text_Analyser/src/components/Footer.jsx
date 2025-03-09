import React from 'react';

function Footer({ text, onClear }) {
  return (
    <div className="px-6 py-3 bg-slate-700 border-t border-slate-600 flex justify-between items-center">
      <button 
        onClick={onClear}
        className="px-4 py-2 bg-slate-600 text-slate-200 rounded hover:bg-slate-500 transition-colors duration-200"
      >
        Clear
      </button>
      
      <div className="text-sm text-slate-400">
        {text ? `Last updated: ${new Date().toLocaleTimeString()}` : 'No text entered yet'}
      </div>
    </div>
  );
}

export default Footer;