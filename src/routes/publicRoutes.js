import Home from "../pages/Home/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";


export const publicRoutes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/home', name: 'Home', Component: Home },
  { path: '/services', name: 'Services', Component: Services },
  { path: '/about', name: 'About', Component: About },
  { path: '/login', name: 'Login', Component: Login },
  { path: '/contact', name: 'Contact', Component: Contact }
]
