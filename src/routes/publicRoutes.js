import Home from "../pages/Home/Home";
import Contact from "../pages/Contact";

import Login from "../pages/Login";


export const publicRoutes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/home', name: 'Home', Component: Home },
  { path: '/login', name: 'Login', Component: Login },
  { path: '/contact', name: 'Contact', Component: Contact }
]
