

import { Route, Routes } from 'react-router-dom';

//pages
import Login from './components/pages/Auth/Login'
import Register from './components/pages/Auth/Register'
import Home from './components/pages/Home'
import Profile from './components/pages/user/Profile'
import MyPets from './components/pages/Pet/MyPets'
import AddPet from './components/pages/Pet/AddPet'
import EditPet from './components/pages/Pet/EditPet';
import PetDetails from './components/pages/Pet/PetDetails';


//components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from "./components/layout/Container"
import Message from './components/layout/Message';

//context
import { UserProvider } from './context/UserContext';
import MyAdoptions from './components/pages/Pet/MyAdoptions';


function App() {
  return (
    <>

    <UserProvider>
      
      <Navbar/>
      <Message/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/user/profile" element={<Profile/>} />
          <Route path="/pet/mypets" element={<MyPets/>} />
          <Route path="/pet/add" element={<AddPet/>} />
          <Route path="/pet/edit/:id" element={<EditPet/>} />
          <Route path="/pet/myadoptions" element={<MyAdoptions/>} />
          <Route path="/pet/:id" element={<PetDetails/>} />
          
        </Routes>
      </Container>
      <Footer/>

    </UserProvider>
    </>

  );
}

export default App;
