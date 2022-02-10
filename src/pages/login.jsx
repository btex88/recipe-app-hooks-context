import React, { useState, useEffect, useContext, useCallback } from 'react';
import validateEmail from '../assets/helpers/validate-email';
import * as COMP from '../components';
import GlobalContext from '../context/global-context';
import local from '../assets/helpers/local';

export default function Login() {
  const { setLoginButtonStatus } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');
  const SIX = 6;

  useEffect(() => {
    function handleInput() {
      if (validateEmail(email) && passwd.length > SIX) {
        setLoginButtonStatus(false);
      } else {
        setLoginButtonStatus(true);
      }
    }
    handleInput();
  });

  const handleClick = useCallback(
    () => {
      local.set('user', { email });
      local.set('mealsToken', 1);
      local.set('cocktailsToken', 1);
    },
    [email],
  );

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly bg-yellow-50">
      <COMP.LoginTitle />
      <COMP.LoginInput
        type="email"
        placeholder="example@email.com"
        testId="email-input"
        value={ email }
        handleChange={ setEmail }
      />
      <COMP.LoginInput
        type="password"
        placeholder="******"
        testId="password-input"
        value={ passwd }
        handleChange={ setPasswd }
      />
      <COMP.LoginButton
        label="Login"
        testId="login-submit-btn"
        handleClick={ handleClick }
      />
    </div>
  );
}
