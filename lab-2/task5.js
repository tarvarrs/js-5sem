console.log('\ntask 5\n')
/*Создайте коллекцию ключ-значение с помощью Map,
 *добавьте в нее три элемента, выведите в консоль
 * значение последнего добавленного элемента.
 * Удалите любой элемент, проверьте его отсутствие в коллекции.*/
let dictionary = new Map();
dictionary.set('key1', 'val1');
dictionary.set('key2', 'val2');
dictionary.set('key3', 'val3');

console.log(dictionary);
console.log(dictionary.get('key3'))
dictionary.delete('key1')
console.log('has key1:',dictionary.has('key1'))
