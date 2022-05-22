import Navbar from "./shared/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from './routes/publicRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


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

        </Routes>
      </Navbar>
    </div>
  );
}
export default App;
