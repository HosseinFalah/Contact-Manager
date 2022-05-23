import { useState } from 'react';
import {Navbar, Contacts} from './Components'
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