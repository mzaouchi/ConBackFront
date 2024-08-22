import './App.css';
import AddContact from './Components/AddContact';
import Home from './Components/Home';
import ListContacts from './Components/ListContacts';
import NavContact from './Components/NavContact';
import {Route, Routes} from 'react-router-dom'
import UpdateContact from './Components/UpdateContact';
function App() {
  return (
    <div>
      <NavContact/>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ListContacts' element={<ListContacts/>}/>
          <Route path='/AddContact' element={<AddContact/>}/>
          <Route path='/UpdateContact/:id' element={<UpdateContact/>}/>
      </Routes>
    </div>
  );
}

export default App;
