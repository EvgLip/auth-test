import type { JSX, ReactNode } from 'react';
import clsx from 'clsx';

import classes from './Heading.module.css';

export const HeadingList =
  {
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
  } as const;

type HeadingAs = typeof HeadingList[(keyof typeof HeadingList)];

export const TypeOfAlign =
  {
    CENTER: 'center',
    JASTIFY: 'justify',
    LEFT: 'left',
    RIGHT: 'right',
  } as const;

type Align = typeof TypeOfAlign[keyof typeof TypeOfAlign];

interface HeadingProps
{
  children: ReactNode;
  As?: Extract<keyof JSX.IntrinsicElements, HeadingAs>;
  textAlign?: Align;
}

export function Heading(props: HeadingProps)
{
  const {
    children,
    As = HeadingList.H1,
    textAlign = TypeOfAlign.LEFT,
    ...other
  } = props;

  const cls = clsx(classes[As], classes[textAlign]);

  return (
    <As className={cls} {...other}>{children}</As>
  );

}