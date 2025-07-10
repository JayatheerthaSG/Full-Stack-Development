import User, { validateEmail } from './user.js';

const user = new User('Alice');
console.log(user.getInfo());

const email = 'jayatheertha2381@gmail.com';
console.log(`Is "${email}" a valid email?`, validateEmail(email));
