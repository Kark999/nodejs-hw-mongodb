import { Contact } from '../db/models/contact.js';

export const getContacts = async () => {
  const contacts = await Contact.find();
  return {
    status: 'success',
    message: 'Successfully found contacts!',
    data: contacts,
  };
};
