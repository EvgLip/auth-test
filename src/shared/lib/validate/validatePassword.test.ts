import { describe, expect, test } from 'vitest';
import { PASSWORD_VALIDATION_ERROR, validatePassword } from './validatePassword';

describe('Validate Password',
  function ()
  {
    test('should return the {success:true, error:""} with a valid password', () =>
    {
      const result = validatePassword('Pass#123');
      const expectedResult =
      {
        success: true,
        error: ""
      };
      expect(result).toEqual(expectedResult);
    });
    ////////////////////////////////////
    test('should return an error with a password of less than 8 characters', () =>
    {
      const result = validatePassword('123');
      const expectedResult =
      {
        success: false,
        error: PASSWORD_VALIDATION_ERROR.length,
      };
      expect(result).toEqual(expectedResult);
    });
  }
);