import React from 'react';

export default function WordCount({ text }) {
  const wordCount = text.trim().split(/\s+/).filter(word => word.match(/\w$/)).length;
  return (
    <div>
      Word Count: {wordCount}
    </div>
  );
}
