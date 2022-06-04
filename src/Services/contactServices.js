import axios from 'axios';

const SERVER_URL = "http://localhost:9000";

// @desc Get All Contacts
// @route GET https://localhost:9000/contacts:contactid
export const getAllContacts = () => {
    const url = `${SERVER_URL}/contacts`;
    return axios.get(url);
}

// @desc Get Contact With Contact ID
// @route GET https://localhost:9000/contacts:contactid
export const getContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`;
    return axios.get(url)
}

// @desc Get All Group
// @route GET https://localhost:9000/groups
export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url)
}

// @desc Get Group Name With Group ID
// @route GET https://localhost:9000/groups/:groupId
export const getGroup = (groupId) => {
    const url = `${SERVER_URL}/groups/${groupId}`
    return axios.get(url)
}

// @desc Create New Contact
// @route POST https://localhost:9000/contacts
export const createContact = (contact) => {
    const url = `${SERVER_URL}/contacts`;
    return axios.post(url, contact)
}

// @desc Update New Contact
// @route PUT https://localhost:9000/contacts/:contactId
export const updateContact = (contact, contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.put(url, contact)
}

// @desc Delete Contact
// @route Delete https://localhost:9000/contacts/:contactId
export const deleteContact = (contactId) => {
    const url = `${SERVER_URL}/contacts/${contactId}`
    return axios.delete(url)
}