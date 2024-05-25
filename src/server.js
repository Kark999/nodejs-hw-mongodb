import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';
import { getContactById, getContacts } from './services/contacts.js';
import { isValidObjectId } from './validation/validation.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.get('/contacts', async (req, res) => {
    const contacts = await getContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  });
  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    res.json({
      status: 200,
      message: `'Successfully found contact with id ${contactId}!'`,
      data: contact,
    });
  });
  app.use('*', (req, res) => {
    res.json({
      status: 404,
      message: 'Not found',
    });
  });

  app.use('/contacts/:contactId', (contactId, req, res) => {
    if (!isValidObjectId(contactId)) {
      res.json({
        status: 404,
        message: 'Invalid contact ID',
      });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
