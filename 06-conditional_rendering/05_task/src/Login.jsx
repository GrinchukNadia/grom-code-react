import React from 'react';
import './login.scss';

const Login = ({onLogin}) => {
  return <button onClick={() => onLogin()} className='login btn'>Login</button>;
};

export default Login;
