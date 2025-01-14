import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Kelvin', age: 31 });
myDatabaseClassic.add({ name: 'Rodrigo', age: 21 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
