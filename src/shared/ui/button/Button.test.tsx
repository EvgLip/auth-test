import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button, ButtonSizeList } from './Button';

describe('Button',
  function ()
  {
    test('should render the button with class primary and children property', () =>
    {
      render(<Button>test</Button>);
      const btnEl = screen.getByText('test');

      expect(btnEl).toBeInTheDocument();
      expect(btnEl).toHaveClass('primary');
    });
    ///////////////////////////
    test('should set the class for the size M', () =>
    {
      render(<Button size={ButtonSizeList.M}>test</Button>);

      const btnEl = screen.getByRole('button');
      expect(btnEl).toHaveClass(ButtonSizeList.M);
    });
    ///////////////////////////
    test('should set the class for the size L', () =>
    {
      render(<Button size={ButtonSizeList.L}>test</Button>);

      const btnEl = screen.getByRole('button');
      expect(btnEl).toHaveClass(ButtonSizeList.L);
    });
    ///////////////////////////
    test('should set the class for the size XL', () =>
    {
      render(<Button size={ButtonSizeList.XL}>test</Button>);

      const btnEl = screen.getByRole('button');
      expect(btnEl).toHaveClass(ButtonSizeList.XL);
    });
    ///////////////////////////
    test('should set the class for the property stretch', () =>
    {
      render(<Button stretch>test</Button>);

      const btnEl = screen.getByRole('button');
      expect(btnEl).toHaveClass('stretch');
    });
  }
);