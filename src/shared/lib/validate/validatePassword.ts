export const PASSWORD_VALIDATION_ERROR =
  {
    length: 'Password must be at least 8 characters long',
  } as const;

export function validatePassword(password: string)
{
  if (password.length < 8)
    return {
      success: false,
      error: PASSWORD_VALIDATION_ERROR.length,
    };

  return {
    success: true,
    error: '',
  };
}