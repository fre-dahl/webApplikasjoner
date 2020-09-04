
const myList = [];
myList.push({ id: 1, title: 'todo', author: 'Frederik' });
const todo = myList.splice(0, 1);
console.log(todo); // [ { id: 1, title: 'todo', author: 'Frederik' } ]
console.log(todo.author); // undefined
console.log(todo[0].author); // Frederik

Utfordringen din med splice er at den returnerer et array og ikke et objekt.

Feilen knyttet til todo.transfer() er at den ikke referer til Todo.transfer() metoden.

function Todo() {
  const x = 'x';
  function transfer(todo) {
    console.log(todo, this.x);
  }
  return { transfer, x };
}

const TodoObject = {
  x: 'x',
  transfer() {
    console.log('transfer', this.x);
  },
};

function Cards(TodoFunction) {
  this.todo = TodoFunction();
  const todo = 'test';
  // todo.transfer(); // error
  Todo().transfer(todo); // test x
  TodoObject.transfer(); // transfer x
  this.todo.transfer(todo); // transfer x
}

Cards(Todo);