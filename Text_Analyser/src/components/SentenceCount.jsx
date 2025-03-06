import React from 'react';

export default function SentenceCount({ text }) {
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  return (
    <div>
      Sentence Count: {sentenceCount}
    </div>
  );
}
