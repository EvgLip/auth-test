import { PASSWORD_VALIDATION_ERROR, validatePassword } from './validatePassword';

describe('validatePassword',
  function ()
  {

    test('should return {success:true, error:""} for the valid password', () =>
    {
      const expectedResult = { success: true, error: '' };
      const password = 'Pass123#';
      const result = validatePassword(password);

      expect(result).toEqual(expectedResult);
    });

    test.todo('should return an error message for a password of less than 8 characters');
  }
);