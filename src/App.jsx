import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import AllHomeComponents from './Components/AllHomeComponents/AllHomeComponents';
import AboutUsSeparate from './Components/AboutUsSeparate/AboutUsSeparate';
import MegaNavigation from "./Components/MegaNavigation/MegaNavigation";
import Footer from './Components/Footer/Footer';
import Career from './Components/Career/Career';
import Blogs from './Components/Blogs/Blogs';
import SeparateBlog from './Components/Blogs/SeparateBlog/SeparateBlog';
import DashboardMain from './Components/Dashboard/DashboardMain';
import PortalLogin from './Components/Dashboard/PortalLogin';
import "./App.css"
import DashboardState from './Components/Dashboard/DashboardContext/DashboardState';
import Testimonials from './Components/AllHomeComponents/Testimonials/Testimonials';
import WhatsappButton from './Components/CommonUsedComponents/WhatsappButton/WhatsappButton';
// import DashboardIndex from './Components/Dashboard/DashboardContext/DashboardIndex';
import Cookies from './Components/CommonUsedComponents/Cookies/Cookies';
import NotFound from './Components/NotFound/NotFound';
import SeparateServiceComponent from './Components/Services/SeparateServiceComponent';
import SanguineLife from './Components/SanguineLife/SanguineLife';
import WorkWithUs from './Components/WorkWithUs/WorkWithUs';
function App() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("email") && localStorage.getItem("password");

  // ❗ Hide Nav/Footer on these pages
  const isAuthPage = location.pathname === '/sign-in' || location.pathname === '/dashboard';

  return (
    <>
      {!isAuthPage && <MegaNavigation />}
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<AllHomeComponents />} />
        <Route path='/about-us' element={<AboutUsSeparate />} />
        <Route path='/career' element={<Career />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:slug' element={<SeparateBlog />} />
        <Route path='/services/:slug' element={<SeparateServiceComponent />} />
        <Route path='/sign-in' element={<PortalLogin />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/sanguine-life' element={<SanguineLife />} />
        <Route path='/work-with-sanguine' element={<WorkWithUs />} />
        {/* <Route path='/dashboardIndex' element={<DashboardIndex />} /> */}
        <Route
          path='/dashboard'
          element={isLoggedIn ?
            <DashboardState>
              <DashboardMain />
            </DashboardState> : <Navigate to="/sign-in" />}
        />
      </Routes>
      {!isAuthPage && <Cookies />}
      {!isAuthPage && <Footer />}
      {/* {!isAuthPage && <WhatsappButton />} */}
    </>
  );
}

export default App;
