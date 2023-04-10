

import { Route, Routes } from 'react-router-dom';

//pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'

//components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from "./components/layout/Container"

//context
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <>

    <UserProvider>
      
      <Navbar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Container>
      <Footer/>

    </UserProvider>
    </>

  );
}

export default App;
