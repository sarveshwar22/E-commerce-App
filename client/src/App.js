import './App.css';
import NavBar from './components/header/NavBar';
import NewNav from './components/newNavBar/newNav';
import MainComponent from './components/home/mainComponent';
import Footer from './components/footer/footer'

function App() {
  return (
    <>
      <NavBar />
      <NewNav />
      <MainComponent />
      <Footer />
    </>
  );
}

export default App;
