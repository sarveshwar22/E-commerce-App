import './App.css';
import NavBar from './components/header/NavBar';
import NewNav from './components/newNavBar/newNav';
import MainComponent from './components/home/mainComponent';
import Footer from './components/footer/footer';
import SignIn from './components/signup_signin/signIn'
import SignUp from './components/signup_signin/signUp';

import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <>
      <NavBar />
      <NewNav />
      <Routes>
        <Route path='/' element={<MainComponent />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
