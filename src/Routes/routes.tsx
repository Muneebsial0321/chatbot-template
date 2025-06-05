import Home from '../Pages/Home';
import Login from '../Pages/Auth/Login';
import Settings from '../Pages/Settings';
import Sidebar from '../Shared/SideBar';

export const routes = [
  {
    path: '/',
    element: <Sidebar children={<Home />} />
  },
  {
    path: '/login',
    element: <Sidebar children={<Login />} />
  },
  {
    path: '/settings',
    element: <Sidebar children={<Settings />} />
  },
];

export default routes
