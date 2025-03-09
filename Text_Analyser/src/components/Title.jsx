import React from 'react';

function Title() {
  
  const gradientTextStyle = {
    backgroundSize: '200% 100%',
    backgroundPosition: '0% center',
    transition: 'background-position 3s linear',
  };

  const gradientTextHoverStyle = {
    backgroundPosition: '200% center',
  };

  return (
    <h1 
      className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 inline-block text-transparent bg-clip-text cursor-default"
      style={gradientTextStyle}
      onMouseEnter={(e) => {
        Object.assign(e.target.style, gradientTextHoverStyle);
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundPosition = '0% center';
      }}
    >
      Text Analyzer
    </h1>
  );
}

export default Title;