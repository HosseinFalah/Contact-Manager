import { useState, useEffect } from 'react';
import { Navbar, Contacts, AddContact, ViewContact, EditContact } from './Components'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { getAllContacts, getAllGroups, createContact, deleteContact } from './Services/contactServices'
import Swal from 'sweetalert2'
import './App.scss'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [forceRender, setForceRender] = useState(false)
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

  useEffect(() => {
    const ferchData = async () => {
      try{
        setLoading(true)
        const { data: _contactsData } = await getAllContacts();
        setContacts(_contactsData)
        setTimeout(() => {
          setLoading(false)
        }, 400)
      } catch(err){
        console.log(err.message);
        setLoading(false)
      }
    }
    ferchData()
  }, [forceRender])

  const createContactForm = async event => {
    event.preventDefault()
    try{
      const {status} = await createContact(getContact)
      if (status === 201) {
        setContact({})
        setForceRender(!forceRender)
        navigate("/contacts")
      }
    } catch(err){
      console.log(err.message);
    }
  }

  let setContactInfo = event => {
    setContact({...getContact, [event.target.name]: event.target.value})
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

  const confirmRemoveContact = (contactId) => {
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

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/contacts"/>}/>
          <Route path="/contacts" element={<Contacts contacts={contacts} loading={loading} RemoveContact={confirmRemoveContact}/>}/>
          <Route path="/contacts/add" element={<AddContact loading={loading} setContactInfo={setContactInfo} contact={getContact} groups={getGroups} createContactForm={createContactForm}/>}/>
          <Route path="/contacts/:contactId" element={<ViewContact/>}/>
          <Route path="/contacts/edit/:contactId" element={<EditContact setForceRender={setForceRender} forceRender={forceRender}/>}/>
        </Routes>
    </>
  );
}
 
export default App;