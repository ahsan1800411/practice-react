import React, { useCallback, useState } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

const ParentComp = () => {
  const [age, setAge] = useState(22);
  const [salary, setSalary] = useState(5000);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary]);
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  return (
    <>
      <Title />
      <Count text='age' count={age} />
      <Count text='salary' count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      <Button handleClick={incrementAge}>Increment age</Button>
    </>
  );
};

export default ParentComp;
