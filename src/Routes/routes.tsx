import { AttachEmail, HomeFilled, Person, ReceiptSharp } from '@mui/icons-material';
import Home from '../Pages/Home';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Settings from '../Pages/Settings';


const routes = [
  { icon:<HomeFilled/>,
    name: 'Home', 
    path: '/', 
    element: <Home /> 
  },
  { icon:<Person/>,
    name: 'login', 
    path: '/login', 
    element: <Login /> 
  },
  { icon:<AttachEmail/>,
    name: 'register', 
    path: '/attendence', 
    element: <Register /> 
  },
  { icon:<ReceiptSharp/>,
    name: 'Invoice', 
    path: '/invoice', 
    element: <Settings /> 
  },
];

export default routes;
