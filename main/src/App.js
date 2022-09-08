import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import SavePassword from './pages/SavePassword'
import Dashboard from './pages/Dashboard'
import Main from './components/Main'

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
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
