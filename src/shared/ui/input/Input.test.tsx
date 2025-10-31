import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Input',
  function ()
  {
    test('should render the wrapper for input element', () =>
    {
      render(<Input />);
      const wrapper = screen.getByTestId('wrapper');

      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass('wrapper');
    });
    //////////////////////////
    test('should render the input element with the input class', () =>
    {
      const textPlaceholder = 'test';
      render(<Input placeholder={textPlaceholder} />);
      const inputEl = screen.getByPlaceholderText(textPlaceholder);

      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toHaveClass('input');
    });
    //////////////////////////
    test('should render an element to display an error message', () =>
    {
      render(<Input />);
      const errEl = screen.getByTestId('error-msg');

      expect(errEl).toBeInTheDocument();
      expect(errEl).toHaveClass('error-msg');
    });
    //////////////////////////
    test('should display an error message', () =>
    {
      const errorMsg = 'error message';
      render(<Input errorMassage={errorMsg} />);
      const expectedText = screen.getByTestId('error-msg').textContent;

      expect(expectedText).toEqual(errorMsg);
    });
  }
);