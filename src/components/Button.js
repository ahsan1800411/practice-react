import React from 'react';

const Button = ({ children, handleClick }) => {
  console.log(`Increment`, children);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default React.memo(Button);
