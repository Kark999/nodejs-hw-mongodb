import { getContactById, getContacts } from '../services/contacts.js';
import { isValidObjectId } from '../validation/validation.js';
import createHttpError from 'http-errors';

export const getContactsController = async (req, res) => {
  const contacts = await getContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};
export const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params;

  if (!isValidObjectId(contactId)) {
    next(createHttpError(400, 'Invalid contact ID'));
    return;
  }
  const contact = await getContactById(contactId);
  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
