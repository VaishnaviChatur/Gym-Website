// import logo from './logo.svg';
// import './App.css';
// import Home from './atoms/Home/Home';
import MainPage from './atoms/MainPage/MainPage';
// import About from './molucules/AboutInfo/About';
// import Footer from './molucules/Footer/Footer';
// import Navbar from './molucules/Navbar/Navbar';
// import PrincipalSection from './molucules/Principal/PrincipalSection';
// import FirstPageTeam from './molucules/Team/FirstPageTeam';
import Team from './molucules/Team/Team';
// import Training from './molucules/TrainingProgram/Training';
// import WhyChoose from './molucules/WhyChoose/WhyChoose';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Registration from './pages/UserDetails/RegistrationPage/Registration';
import Login from './pages/UserDetails/LoginPage/Login';


function App() {
  return (
    <BrowserRouter>
    
    <div>
      {/* <MainPage/> */}
      {/* <Navbar/>
     <Home/>
     <About/>
   
   
     <Training/>
     <FirstPageTeam/>
     {/* <Team/> */}
     {/* <PrincipalSection/>
     <Footer/> */} 
    </div>
    <Routes>
    <Route path="/" Component={MainPage} />

    <Route path="wholeteam" Component={Team} />
    <Route path="login" Component={Login} /> 
    <Route path="register" Component={Registration} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
