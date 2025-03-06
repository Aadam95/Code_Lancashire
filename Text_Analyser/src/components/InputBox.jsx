import React, { useState } from 'react';

export default function InputBox({ onTextChange }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      className="w-full h-40 p-2 border border-gray-300 rounded"
      placeholder="Type or paste your text here..."
    />
  );
}
