import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import InputDesign from './components/discuss/InputDesign';
import NavigationButtonList from './components/navbar/NavigationButtonList';
import LoginForm from './components/login/LoginForm';
import { RegistrationForm } from './components/register/RegistrationForm';
import RegistrationPage from './components/register/RegistrationPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RegistrationPage />
    </>
  );
}

export default App;
