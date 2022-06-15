import { createContext } from 'react';

export const ContactContext = createContext({
    loading: false,
    setLoading: () => {},
    contact: {},
    setContact: () => {},
    contacts: [],
    filterdContacts: [],
    contactQuery: {},
    groups: [],
    onContactChange: () => {},
    deleteContact: () => {},
    EditContact: () => {},
    createContact: () => {},
    contactSearch: () => {}
})