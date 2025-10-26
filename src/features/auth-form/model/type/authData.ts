import type { User } from '@/entities/user';

export interface AuthData
{
  user: User;
  token: string;
  authCode: string;
}