import React from 'react';

function TextStatistics({ text }) {
  // Character count (excluding spaces)
  const charCount = text.replace(/\s/g, '').length;
  
  // Word count
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  
  // Sentence count
  const sentenceCount = text.trim() === '' ? 0 : 
    text.split(/[.!?]+/)
        .filter(sentence => sentence.trim().length > 0)
        .length;
  
  // Calculate statistics
  const avgWordLength = wordCount ? (charCount / wordCount).toFixed(1) : 0;
  const avgSentenceLength = sentenceCount ? (wordCount / sentenceCount).toFixed(1) : 0;
  const readingTime = wordCount > 0 ? Math.max(1, Math.ceil(wordCount / 200)) : 0;
  
  return (
    <>
      <li>Average word length: {avgWordLength} characters</li>
      <li>Average sentence length: {avgSentenceLength} words</li>
      {wordCount > 0 && <li>Reading time: {readingTime} min</li>}
    </>
  );
}

export default TextStatistics;