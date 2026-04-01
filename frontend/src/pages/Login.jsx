import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <form className="min-h-[80vh] flex items-center">
      <div>
        <p>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>
          Please {state === 'Sign Up' ? 'sign up' : 'login'} to book appointment
        </p>
        <div>
          <p>Full Name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            placeholder="Full Name"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="Email"
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder="Password"
          />
        </div>
      </div>
    </form>
  );
};

export default Login;
