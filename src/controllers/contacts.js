import { getContactById, getContacts } from '../services/contacts';
import { isValidObjectId } from '../validation/validation';

export const getContactsController = async (req, res) => {
  const contacts = await getContacts();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};
export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return res.json({
      status: 400,
      message: 'Invalid contact ID',
    });
  }
  const contact = await getContactById(contactId);
  if (!contact) {
    return res.json({
      status: 404,
      message: 'Contact not found',
    });
  }
  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
