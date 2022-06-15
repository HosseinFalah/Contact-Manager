import { createContext } from 'react';

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    contact: {},
    setContacts: () => {},
    setFilterdContacts: () => {},
    contacts: [],
    filterdContacts: [],
    contactQuery: {},
    groups: [],
    onContactChange: () => {},
    deleteContact: () => {},
    createContact: () => {},
    contactSearch: () => {}
})