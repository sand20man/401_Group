import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/login/LoginForm';
import { RegistrationForm } from './components/register/RegistrationForm';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register2" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
