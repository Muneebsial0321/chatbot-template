import Home from '../Pages/Home';
import Settings from '../Pages/Settings';
import Sidebar from '../Shared/SideBar';
import Auth from '../Pages/Auth';

export const routes = [
  {
    path: '/',
    element: <Sidebar children={<Home />} />
  },
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/settings',
    element: <Sidebar children={<Settings />} />
  },
];

export default routes
