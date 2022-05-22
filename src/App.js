import Navbar from "./shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from './routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import RequireAuth from "./authentication/RequireAuth";
import Services from "./pages/Services";
import About from "./pages/About";
import AdminRoute from "./authentication/AdminRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddAdmin from "./pages/Dashboard/AddAdmin";
import AddService from "./pages/Dashboard/AddService";


function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <Navbar>
        <Routes>

          {
            publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />}></Route>)
          }

          <Route element={<RequireAuth />}>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="/dashboard" element={<Dashboard />}>

              <Route path='add-admin' element={<AddAdmin />}></Route>
              <Route path='add-service' element={<AddService />}></Route>
            </Route>
          </Route>

        </Routes>

      </Navbar>
    </div>
  );
}
export default App;
