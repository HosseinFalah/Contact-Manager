import { useState } from 'react';
import Contacts from './Components/Contacts/Contacts';
import Navbar from "./Components/Navbar/Navbar";
import './App.scss'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Navbar/>
      <Contacts contacts={contacts} loading={loading}/>
    </>
  );
}
 
export default App;