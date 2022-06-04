import { useState, useEffect } from 'react';
import { Navbar, Contacts } from './Components'
import { Routes, Route, Navigate } from 'react-router-dom'
import { getAllContacts, getAllGroups } from './Services/contactServices'
import './App.scss'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getGroups, setGroups] = useState([])

  useEffect(() => {
    const ferchData = async () => {
      try{
        setLoading(true)
        const { data: _contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(_contactsData)
        setGroups(groupsData)
        setTimeout(() => {
          setLoading(false)
        }, 400)
      } catch(err){
        console.log(err.message);
        setLoading(false)
      }
    }

    ferchData()
  }, [])

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