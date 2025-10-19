import type { InputHTMLAttributes } from 'react';
import classes from './Input.module.css';

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends HTMLInputProps
{
  icon?: string;
  errorMassage?: string;
}

export function Input(props: InputProps)
{
  const {
    icon = '',
    errorMassage,
    ...other
  } = props;

  return (
    <>
      <div className={classes.wrapper}>
        <img className={classes.icon} src={icon} />
        <input
          className={classes.input}
          {...other}
        />
        <span className={classes['error-msg']}>{errorMassage}</span>
      </div>
    </>
  );
}