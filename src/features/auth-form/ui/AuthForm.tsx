import { useState, type ChangeEvent, type FormEvent } from 'react';

import logo from '@/shared/assets/logo.svg';
import emailIcon from '@/shared/assets/email.svg';
import lockIcon from '@/shared/assets/lock.svg';
import { Button, HeadingList, Input, TypeOfAlign } from '@/shared/ui';
import { Heading } from '@/shared/ui';
import { useLogin } from '../model/hooks/useLogin';
import { validateEmail } from '@/shared/lib/validate/validateEmail';
import { validatePassword } from '@/shared/lib/validate/validatePassword';
import classes from './AuthForm.module.css';

export default function AuthForm()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const { login, data } = useLogin();

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const isEmail = validateEmail(email);
  const { success: isPassword, error: passwordErrorMsg } = validatePassword(password);

  const emailValidation = () => { if (!isEmail) setEmailError('Incorrect email'); };
  const passwordValidation = () => { if (!isPassword) setPasswordError(passwordErrorMsg); };

  function handleSubmit(e: FormEvent<HTMLFormElement>)
  {
    e.preventDefault();

    if (!isEmail || !isPassword) return;

    login(('user'),
      { onSettled: () => { console.log('login', email); setEmail(''); setPassword(''); } }
    );
  }

  console.log('data', data);
  return (
    <form className={classes['auth-form']} onSubmit={handleSubmit}>
      <img src={logo} alt='company logo' />

      <Heading
        As={HeadingList.H3}
        textAlign={TypeOfAlign.CENTER}
      >
        Sign in to your account to continue
      </Heading>

      <Input
        name='email'
        type='email'
        icon={emailIcon}
        placeholder='Email'
        autoComplete='email'
        onChange={emailHandler}
        value={email}
        onBlur={emailValidation}
        onFocus={() => setEmailError('')}
        errorMassage={emailError}
      />

      <Input
        name='password'
        type='password'
        icon={lockIcon}
        placeholder='Password'
        autoComplete='new-password'
        onChange={passwordHandler}
        value={password}
        onBlur={passwordValidation}
        onFocus={() => setPasswordError('')}
        errorMassage={passwordError}
      />

      <Button
        stretch
        disabled={!(isEmail && isPassword)}
      >
        Log in
      </Button>
    </form >
  );
}