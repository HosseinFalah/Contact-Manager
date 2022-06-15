import { useState, useEffect } from 'react';
import { Navbar, Contacts, AddContact, ViewContact, EditContact } from './Components';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getAllContacts, getAllGroups, createContact, deleteContact } from './Services/contactServices';
import { ContactContext } from './Context/ContactContext';
import Swal from 'sweetalert2';
import './App.scss';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([])
  const [contact, setContact] = useState({})
  const [contactQuery, setContactQuery] = useState({text: ""})
  const [filterdContacts, setFilterdContacts] = useState([])

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
      const {status} = await createContact(contact)
      if (status === 201) {
        setContact({})
        navigate("/contacts")
      }
    } catch(err){
      console.log(err.message);
    }
  }

  let onContactChange = event => {
    setContact({...contact, [event.target.name]: event.target.value})
  }

  const removeContact = async contactId => {
    try{
      setLoading(true)
      const response = await deleteContact(contactId)
      if (response) {
        const {data: contactsData} = await getAllContacts()
        setContacts(contactsData)
        setLoading(false)
      }
    }catch(err){
      console.log(err.message);
    }
  }

  const confirmDelete = (contactId) => {
    Swal.fire({
      title: `آیا مطمعن هستی؟`,
      text: "این عملیات دیگر قابل برگشت نیست!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'حذف مخاطب'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result);
        removeContact(contactId)
        Swal.fire(
          '!عملیات با موفقعیت انجام شد',
          '!مخاطب مورد نظر شما حذف شد',
          'success'
        )
      }
    })
  }
 
  const contactSearch = event => {
    setContactQuery({...contactQuery, text: event.target.value})
    const allContacts = contacts.filter(contact => {
      return contact.fullname.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setFilterdContacts(allContacts)
  }

  return (
    <ContactContext.Provider value={{
      loading,
      setLoading,
      contact,
      setContact,
      contactQuery,
      contacts,
      filterdContacts,
      groups,
      onContactChange,
      deleteContact: confirmDelete,
      createContact: createContactForm,
      contactSearch,

    }}>
      <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path="/contacts" element={<Contacts contacts={filterdContacts} loading={loading} RemoveContact={confirmDelete}/>}/>
          <Route path="/contacts/add" element={<AddContact loading={loading} setContactInfo={onContactChange} contact={contact} groups={groups} createContactForm={createContactForm}/>}/>
          <Route path="/contacts/:contactId" element={<ViewContact/>}/>
          <Route path="/contacts/edit/:contactId" element={<EditContact/>}/>
        </Routes>
    </ContactContext.Provider>
  );
}
 
export default App;