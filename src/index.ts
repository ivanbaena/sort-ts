import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([3, 0, -15, -10]);
numbersCollection.sort();
console.log(numbersCollection);

const charactersCollection = new CharactersCollection('xaabbyre');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(-500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();

linkedList.print();
