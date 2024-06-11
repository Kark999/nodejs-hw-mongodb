import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getContactByIdController,
  getContactsController,
  patchContactController,
  upsertContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { createContactSchema } from '../validation/contacts.js';

const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getContactsController));
contactsRouter.get('/:contactId', ctrlWrapper(getContactByIdController));
contactsRouter.post(
  '',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);
contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));
contactsRouter.put('/:contactId', ctrlWrapper(upsertContactController));
contactsRouter.patch(
  '/:contactId',
  validateBody(createContactSchema),
  ctrlWrapper(patchContactController),
);

export default contactsRouter;
