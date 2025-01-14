import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Messi', age: 35 });
myDatabaseClassic.add({ name: 'Cristiano Ronaldo', age: 37 });
myDatabaseClassic.add({ name: 'Thiago Azaf', age: 17 });

export { myDatabaseClassic };
