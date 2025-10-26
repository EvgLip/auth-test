import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { User } from '@/entities/user';
import type { AuthData } from '../type/authData';


export function useLogin()
{
  const queryClient = useQueryClient();
  const { mutate: login, isPending, data } = useMutation(
    {
      mutationFn(user: User) 
      {
        return Promise.resolve({ user, token: 'token', authCode: '123456' });
      },
      onSuccess: (data: AuthData) =>
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
