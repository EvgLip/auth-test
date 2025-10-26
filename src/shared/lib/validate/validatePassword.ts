export function validatePassword(password: string)
{
  if (password.length < 8)
    return {
      success: false,
      error: 'Password must be at least 8 characters long',
    };

  return {
    success: true,
    error: '',
  };
}