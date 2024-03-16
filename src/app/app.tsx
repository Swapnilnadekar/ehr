import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import './app.css';
import Footer from './footer/Footer';
import './footer/Footer.css';
// import Header from './header/head';
import './header/header.css';
import Navbar from './navbar/Navbar';
import './navbar/Navbar.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import './pages/service/service.css';
import AppointmentForm from './form/Form';
import Department from './pages/department/Department';
import Login from './Component/login/login';
import Doctors from './pages/doctor/Doctor';
import { SnackbarProvider } from 'notistack';

const App: React.FC = () => {


  return (
    <Router>
      <div>
        {/* <Header /> */}
        <SnackbarProvider  autoHideDuration={2000}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} maxSnack={3}>
        <Navbar />

        <Routes>
        <Route path="/"  Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/about" Component={About} />
          <Route path="/doctor" Component={Doctors} />
          <Route path="/Form" Component={AppointmentForm} />
          <Route path="/department" Component={Department} />
          {/* <Route path='/dashboard'Component={Dashboard}/>
          <Route path="/home" Component={dashHome} />
          <Route path="/products" Component={Products} />
          <Route path="/analytics" Component={Analytics} />
          <Route path="/settings" Component={Settings} /> */}
        </Routes>
        

        <Footer />
        </SnackbarProvider>
      </div>
    </Router>
  );
};

export default App;

