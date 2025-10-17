import type { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import classes from './Button.module.css';

export const ButtonAppearanceList =
  {
    PRIMARY: 'primary',
  } as const;

type ButtonAppearance = (typeof ButtonAppearanceList)[keyof typeof ButtonAppearanceList];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
  className?: string;
  appearance?: ButtonAppearance;
  stretch?: boolean;
  children: ReactNode;
}
export function Button(props: ButtonProps)
{
  const {
    className,
    appearance = ButtonAppearanceList.PRIMARY,
    stretch = false,
    children,
    ...other
  } = props;

  return (
    <button
      className={classNames(classes.btn, className, classes[appearance], { [classes.stretch]: stretch })}
      {...other}
    >
      {children}
    </button>
  );
}