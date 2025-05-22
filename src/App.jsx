import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import AllHomeComponents from './Components/AllHomeComponents/AllHomeComponents';
import AboutUsSeparate from './Components/AboutUsSeparate/AboutUsSeparate';
import MegaNavigation from "./Components/MegaNavigation/MegaNavigation";
import Footer from './Components/Footer/Footer';
import Career from './Components/Career/Career';
import Blogs from './Components/Blogs/Blogs';
import SeparateBlog from './Components/Blogs/SeparateBlog/SeparateBlog';
import DashboardMain from './Components/Dashboard/DashboardMain';
import SignIn from './Components/Dashboard/Signin';
import "./app.css"
import DashboardState from './Components/Dashboard/DashboardContext/DashboardState';
// import DashboardIndex from './Components/Dashboard/DashboardContext/DashboardIndex';

function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("email") && localStorage.getItem("password");

  // ❗ Hide Nav/Footer on these pages
  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/dashboard';

  return (
    <>
      {!isAuthPage && <MegaNavigation />}
      <Routes>
        <Route path='/' element={<AllHomeComponents />} />
        <Route path='/about-us' element={<AboutUsSeparate />} />
        <Route path='/career' element={<Career />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:slug' element={<SeparateBlog />} />
        <Route path='/sign-in' element={<SignIn />} />
        {/* <Route path='/dashboardIndex' element={<DashboardIndex />} /> */}
        <Route
          path='/dashboard'
          element={isLoggedIn ?
            <DashboardState>
              <DashboardMain />
            </DashboardState> : <Navigate to="/sign-in" />}
        />
      </Routes>

      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
