import React, { useMemo, useState } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment1 = () => {
    setCount(count + 1);
  };
  const increment2 = () => {
    setCount1(count1 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return count % 2 === 0;
  }, [count]);

  return (
    <>
      <div>Use memo</div>
      <div>
        {count} - {count1}
      </div>

      <div>{isEven ? 'Even' : 'Odd'}</div>

      <button onClick={increment1}>Increment 1</button>
      <button onClick={increment2}>Increment 2</button>
    </>
  );
};

export default UseMemo;
