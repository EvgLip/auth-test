import { describe, expect, test } from 'vitest';
import { validateEmail } from './validateEmail';

describe('Validate emeil',
  function ()
  {
    test('should return true with valid email', () =>
    {
      const result = validateEmail('test@test.com');

      expect(result).toBe(true);
    });
    ///////////////////////////////
    test('should return false with invalid email', () =>
    {
      const result = validateEmail('test@test');

      expect(result).toBe(false);
    });
  }

);