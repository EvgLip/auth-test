import { createBrowserRouter } from 'react-router-dom';
import { AuthenticationPage } from '@/pages/authentication-page';


export const router = createBrowserRouter(
  [
    {
      path: '/',
      children:
        [{
          index: true,
          // path: 'auth',
          element: <AuthenticationPage />,
        },
        ]
    }
  ]
);

