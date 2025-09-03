import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    const newContacts = createFakeContact();
    const updatedContacts = [...contacts, newContacts];
    await writeContacts(updatedContacts);
    console.log('Додано 1 контакт', newContacts);
    console.log(`Всього контактів тепер: ${updatedContacts.length}`);
  } catch (error) {
    console.error('Помилка при додаванні контакту', error.message);
  }
};
addOneContact();
