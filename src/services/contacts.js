import { Contact } from '../db/models/contact.js';

export const getContacts = async () => {
  const contacts = await Contact.find();
  return {
    status: 'success',
    message: 'Successfully found contacts!',
    data: contacts,
  };
};
export const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  if (!contact) {
    return {
      status: 'error',
      message: 'Contact not found',
      data: null,
    };
  }
  return {
    status: 'success',
    message: `'Successfully found contact with id ${contactId}!'`,
    data: contact,
  };
};
