import { useMutation, useQueryClient } from '@tanstack/react-query';

interface User
{
  user: string;
  token: string;
  code: string;
}

export function useLogin()
{
  const queryClient = useQueryClient();
  const { mutate: login, isPending, data } = useMutation(
    {
      mutationFn(data: string) 
      {
        return Promise.resolve({ user: data, token: 'token', code: '123456' });
      },
      onSuccess: (data: User) =>
      {
        queryClient.setQueryData(['user'], data.user);
      },
      onError: (err) =>
      {
        console.log('useLogin.ERROR ', err);
      }
    }
  );

  return { login, isPending, data };
}
