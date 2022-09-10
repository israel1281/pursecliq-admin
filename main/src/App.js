import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import SavePassword from './pages/SavePassword'
import Account from './components/Account/Account'
import Card from './components/Card/Card'
import Users from './components/Users/Users'
import Dashboard from './pages/Dashboard'
import Main from './components/Main'
import Admin from './components/Admin/Admin'
import Withdrawal from './components/Withdrawal/Withdrawal'
import Loans from './components/Loans/Loans'
import Roles from './components/Roles/Roles'
import Charges from './components/Charges'
import PontSystem from './components/PointSystem'
import PointSystem from './components/PointSystem';

function App() {
  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/ResetPassword' element={<ResetPassword />} />
        <Route path='/save-password' element={<SavePassword />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Main />} />
          <Route path='all-accounts' element={<Account />} />
          <Route path='cards' element={<Card />} />
          <Route path='users' element={<Users />} />
          <Route path='all-admins' element={<Admin />} />
          <Route path='all-withdrawal' element={<Withdrawal />} />
          <Route path='all-Loans' element={<Loans />} />
          <Route path='roles' element={<Roles />} />
          <Route path='charges' element={<Charges />} />
          <Route path='point-system' element={<PointSystem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
