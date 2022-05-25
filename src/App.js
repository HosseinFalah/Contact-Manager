import { useState } from 'react';
import {Navbar, Contacts} from './Components'
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.scss'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path='/contacts' element={<Contacts contacts={contacts} loading={loading}/>}/>
        </Routes>
    </>
  );
}
 
export default App;