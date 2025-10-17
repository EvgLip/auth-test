import type { InputHTMLAttributes } from 'react';
import classes from './Input.module.css';

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends HTMLInputProps
{
  icon?: string;
}

export function Input(props: InputProps)
{
  const {
    icon = '',
    ...other
  } = props;

  return (
    <div className={classes.wrapper}>
      <img className={classes.icon} src={icon} />
      <input
        className={classes.input}
        {...other}
      />
    </div>
  );
}