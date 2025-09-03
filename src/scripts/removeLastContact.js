import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length === 0) {
      console.log('Немає контактів для видалення');
      return;
    }

    contacts.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('Останній контакт успішно видалено');
  } catch (error) {
    console.error('Помилка при видаленні останнього контакту', error.message);
  }
};

removeLastContact();
