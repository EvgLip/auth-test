import type { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import classes from './Button.module.css';

export const ButtonAppearanceList =
  {
    PRIMARY: 'primary',
  } as const;

type ButtonAppearance = (typeof ButtonAppearanceList)[keyof typeof ButtonAppearanceList];

export const ButtonSizeList =
  {
    M: 'size-m',
    L: 'size-l',
    XL: 'size-xl',
  } as const;

type ButtonSize = (typeof ButtonSizeList)[keyof typeof ButtonSizeList];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
  className?: string;
  appearance?: ButtonAppearance;
  stretch?: boolean;
  size?: ButtonSize;
  children: ReactNode;
}
export function Button(props: ButtonProps)
{
  const {
    className,
    appearance = ButtonAppearanceList.PRIMARY,
    stretch = false,
    children,
    size = ButtonSizeList.M,
    ...other
  } = props;

  return (
    <button
      className={classNames(classes.btn, className, classes[appearance], classes[size], { [classes.stretch]: stretch })}
      {...other}
    >
      {children}
    </button>
  );
}