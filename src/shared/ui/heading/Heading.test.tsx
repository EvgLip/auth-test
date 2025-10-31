import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading, TypeOfAlign, HeadingLevel } from './Heading';

const text = 'Hello world!';

describe('Heading',
  function ()
  {
    test('should render with children', () => 
    {
      render(<Heading>{text}</Heading>);
      const headingEl = screen.getByText(text);
      screen.debug(headingEl);

      expect(headingEl).toBeInTheDocument();
    });
    /////////////////////////
    test('should render with correct html tag', () => 
    {
      const { container } = render(<Heading As={HeadingLevel.H3}>{text}</Heading>);
      const htmlTag = container.querySelector(HeadingLevel.H3);

      expect(htmlTag).toBeInTheDocument();
    });
    /////////////////////////
    test('should render heading with the className CENTER', () => 
    {
      render(<Heading textAlign={TypeOfAlign.CENTER}> {text}</Heading >);
      const headingEl = screen.getByText(text);

      expect(headingEl).toBeInTheDocument();
      expect(headingEl).toHaveClass('center');
    });
    /////////////////////////
    test('should render heading with the className JASTIFY', () => 
    {
      render(<Heading textAlign={TypeOfAlign.JUSTIFY}> {text}</Heading >);
      const headingEl = screen.getByText(text);

      expect(headingEl).toBeInTheDocument();
      expect(headingEl).toHaveClass('justify');
    });
    /////////////////////////
    test('should render heading with the className LEFT', () => 
    {
      render(<Heading textAlign={TypeOfAlign.LEFT}> {text}</Heading >);
      const headingEl = screen.getByText(text);

      expect(headingEl).toBeInTheDocument();
      expect(headingEl).toHaveClass('left');
    });
    /////////////////////////
    test('should render heading with the className RIGHT', () => 
    {
      render(<Heading textAlign={TypeOfAlign.RIGHT}> {text}</Heading >);
      const headingEl = screen.getByText(text);

      expect(headingEl).toBeInTheDocument();
      expect(headingEl).toHaveClass('right');
    });
  }
);