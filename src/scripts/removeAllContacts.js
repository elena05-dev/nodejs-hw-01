import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    console.log('Усі контакти видалено');
  } catch (error) {
    console.error('Помилка при видаленні контактів', error.massege);
  }
};

removeAllContacts();
