import React from 'react';

const Title = () => {
  console.log('Titler');
  return <div>Use Callback hook</div>;
};

export default React.memo(Title);
