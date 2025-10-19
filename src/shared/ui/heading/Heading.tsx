import type { ReactNode } from 'react';
import classNames from 'classnames';
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
  as?: HeadingAs;
  textAlign?: Align;
}

export function Heading(props: HeadingProps)
{
  const {
    children,
    as = HeadingList.H1,
    textAlign = TypeOfAlign.LEFT,
    ...other
  } = props;

  const cls = classNames(classes[as], classes[textAlign]);

  switch (as)
  {
    case 'h1':
      return <h1 className={cls} {...other}>{children}</h1>;
    case 'h2':
      return <h2 className={cls} {...other}>{children}</h2>;
    case 'h3':
      return <h3 className={cls} {...other}>{children}</h3>;
    case 'h4':
      return <h4 className={cls} {...other}>{children}</h4>;
    case 'h5':
      return <h5 className={cls} {...other}>{children}</h5>;
    case 'h6':
      return <h6 className={cls} {...other}>{children}</h6>;
    default:
      return <h1 className={cls} {...other}>{children}</h1>;

  }
}