import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsUserLogin } from '../redux/action';

interface errorProps {
  isError: boolean;
  errorMessage: string;
}
const defaultError: errorProps = {
  isError: false,
  errorMessage: '',
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<errorProps>(defaultError);

  useEffect(() => {
    setError(defaultError);
  }, [username, password]);

  const handleLogin = () => {
    if (
      (username === 'dalvifaraz' ||
        username === 'xyzabc' ||
        username === 'dalviayaz') &&
      password === '123456'
    ) {
      setError(defaultError);
      sessionStorage.setItem('username', username);
      dispatch(setIsUserLogin(true));
      navigate('/pinterest');
    } else {
      setError({
        isError: true,
        errorMessage: 'Incorrect username or password.',
      });
      dispatch(setIsUserLogin(false));
    }
  };
  return (
    <div className='login-page'>
      <div className='login-container'>
        <h2>Login</h2>
        <input
          className='login-input'
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className='login-input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={{ color: 'red' }}>{error.errorMessage}</p>
        <button className='login-button' onClick={handleLogin}>
          Log In
        </button>
        <Link to='./pinterest' onClick={() => dispatch(setIsUserLogin(false))}>
          <p>continue without login...</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
