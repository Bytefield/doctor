import db from './database.js';
import crud from './crud.js';

const realm = await db.connect();

const userId = await crud.create('User', { name: 'Alice', email: 'alice@example.com', password: 'secret' });
const users = await crud.read('User', { email: 'alice@example.com' });
console.log(users);

await crud.update('User', userId, { password: 'newpassword' });
await crud.del('User', userId);