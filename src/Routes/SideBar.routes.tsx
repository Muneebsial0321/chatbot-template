import { HomeFilled, Person, ReceiptSharp } from "@mui/icons-material";

export const SideBarRoutes = [
  { icon:<HomeFilled/>,
    name: 'Home', 
    path: '/', 
  },
  { icon:<Person/>,
    name: 'login', 
    path: '/login', 
  },
  { icon:<ReceiptSharp/>,
    name: 'Settings', 
    path: '/settings', 
  },
];
