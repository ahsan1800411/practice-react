import React, { useState } from 'react';

const Props = ({ name }) => {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>{name}</h1>
      <h1>{count}</h1>
      <input
        type='text'
        value={state.email}
        name='email'
        // onChange={(e) => setEmail(e.target.value)}
        onChange={handleChange}
      />
      <input
        type='text'
        name='password'
        value={state.password}
        // onChange={(e) => setPassword(e.target.value)}
        onChange={handleChange}
      />
      <button onClick={() => setCount(count + 1)}>Increment Functional</button>
    </>
  );
};

export default Props;
