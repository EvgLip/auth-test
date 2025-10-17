import logo from '@/shared/assets/logo.svg';
import emailIcon from '@/shared/assets/email.svg';
import lockIcon from '@/shared/assets/lock.svg';
import { Button, Input } from '@/shared/ui';
import classes from './AuthForm.module.css';


export default function AuthForm()
{

  return (
    <form className={classes['auth-form']}>
      <img src={logo} alt='company logo' />

      <h3>Sign in to your account to continue</h3>

      <Input
        name='email'
        type='email'
        icon={emailIcon}
        placeholder='Email'
        autoComplete='off'
      />

      <Input
        name='password'
        type='password'
        icon={lockIcon}
        placeholder='Password'
        autoComplete='off'
      />

      <Button
        stretch
        disabled
      >
        Log in
      </Button>
    </form >
  );
}