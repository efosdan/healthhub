import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import AdminDashboard from './components/Admin/Dashboard/Home';
import ManageAppointments from './components/Admin/ManageAppointments/ManageAppointments';
import ManageUsers from './components/Admin/ManageUsers/ManageUsers';
import ManageDoctors from './components/Admin/ManageDoctors/ManageDoctors';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/sign-up' exact Component={SignUp} />
        <Route path='/sign-in' exact Component={SignIn} />
        <Route path='/admin/dashboard' exact Component={AdminDashboard} />
        <Route
          path='/admin/manage-appointments'
          exact
          Component={ManageAppointments}
        />
        <Route path='/admin/manage-users' exact Component={ManageUsers} />
        <Route path='/admin/manage-doctors' exact Component={ManageDoctors} />
      </Routes>
    </>
  );
}

export default App;
