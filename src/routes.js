import Users from './pages/users';
import Home from './pages/home';
import Auth from './pages/auth';

export const routes = [
  {
    isNavBar: true,
    isExact: true,
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    isNavBar: true,
    path: '/users',
    isPrivate: true,
    name: 'Users',
    component: Users,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
  },
];
