import { useState, useEffect } from 'react';
import { Navbar, Contacts, AddContact } from './Components'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { getAllContacts, getAllGroups, createContact } from './Services/contactServices'
import './App.scss'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getGroups, setGroups] = useState([])
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: ""
  })

  const navigate = useNavigate()

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

  const createContactForm = async event => {
    event.preventDefault()
    try{
      const {status} = await createContact(getContact)
      if (status === 201) {
        setContact({})
        navigate("/contacts")
      }
    } catch(err){
      console.log(err.message);
    }
  }

  let setContactInfo = event => {
    setContact({...getContact, [event.target.name]: event.target.value})
  }

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path="/contacts" element={<Contacts contacts={contacts} loading={loading}/>}/>
          <Route path="/contacts/add" element={<AddContact loading={loading} setContactInfo={setContactInfo} contact={getContact} groups={getGroups} createContactForm={createContactForm}/>}/>
        </Routes>
    </>
  );
}
 
export default App;