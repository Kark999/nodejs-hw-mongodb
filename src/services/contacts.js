import { Contact } from '../db/models/contact.js';

export const getContacts = async () => {
  const contacts = await Contact.find();
  return {
    status: 'success',
    message: 'Successfully found contacts!',
    data: contacts,
  };
};
export const getContactById = async (id) => {
  const contact = await Contact.findById(id);
  if (!contact) {
    return {
      status: 'error',
      message: 'Contact not found',
      data: null,
    };
  }
  return {
    status: 'success',
    message: `'Successfully found contact with id ${id}!'`,
    data: contact,
  };
};
