import { useState, useEffect } from 'react';
import { Contacts, AddContact, ViewContact, EditContact, NavBar } from './Components';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getAllContacts, getAllGroups, createContact, deleteContact } from './Services/contactServices';
import { ContactContext } from './Context/ContactContext';
import Swal from 'sweetalert2';
import './App.scss';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([]);
  const [contact, setContact] = useState({});
  const [filterdContacts, setFilterdContacts] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    const ferchData = async () => {
      try{
        setLoading(true)
        const { data: _contactsData } = await getAllContacts();
        const { data: groupsData } = await getAllGroups();
        setContacts(_contactsData)
        setFilterdContacts(_contactsData)
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
      setLoading((prevLoading) => !prevLoading);
      const {status, data} = await createContact(contact)

      if (status === 201) {
        const allContacts = [...contacts, data];
        setContacts(allContacts)
        setFilterdContacts(allContacts)

        setContact({});
        setLoading((prevLoading) => !prevLoading);
        navigate("/contacts");
      }
    } catch(err){
      console.log(err.message);
      setLoading((prevLoading) => !prevLoading);
    }
  }

  let onContactChange = event => {
    setContact({...contact, [event.target.name]: event.target.value})
  }

  const removeContact = async contactId => {
    //Contacts Copy
    const allContact = [...contacts];
    try{

      const updateContact = contacts.filter((item) => item.id !== contactId);
      setContacts(updateContact)
      setFilterdContacts(updateContact)

      //Sending Delete Request to server
      const { status } = await deleteContact(contactId)

      if (status !== 200) {
        setContacts(allContact)
        setFilterdContacts(allContact)
      }
    }catch(err){
      console.log(err.message);

      setContacts(allContact)
      setFilterdContacts(allContact)
    }
  }

  const confirmDelete = (contactId) => {
    Swal.fire({
      title: `Are you sure؟`,
      text: "This operation cannot be reversed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Remove Contact'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result);
        removeContact(contactId)
        Swal.fire(
          '!The operation was done successfully',
          '!Your desired contact has been deleted',
          'success'
        )
      }
    })
  }

  const contactSearch = query => {
    setFilterdContacts(contacts.filter(contact => {
      return contact.fullname.toLowerCase().includes(query.toLowerCase())
    }))
  }

  return (
    <ContactContext.Provider value={{
      loading,
      setLoading,
      contact,
      setContacts,
      setFilterdContacts,
      contacts,
      filterdContacts,
      groups,
      onContactChange,
      deleteContact: confirmDelete,
      createContact: createContactForm,
      contactSearch,
    }}>
      <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/contacts/add" element={<AddContact/>}/>
          <Route path="/contacts/:contactId" element={<ViewContact/>}/>
          <Route path="/contacts/edit/:contactId" element={<EditContact/>}/>
        </Routes>
    </ContactContext.Provider>
  );
}
 
export default App;