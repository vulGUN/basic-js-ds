const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = []; // Массив для хранения элементов стека
  }

  // Метод для добавления элемента в стек
  push(element) {
    this.items.push(element);
  }

  // Метод для удаления и возврата верхнего элемента из стека
  pop() {
    if (this.isEmpty()) {
      return undefined; // Возвращаем undefined, если стек пуст
    }
    return this.items.pop();
  }

  // Метод для возврата верхнего элемента из стека, не удаляя его
  peek() {
    if (this.isEmpty()) {
      return undefined; // Возвращаем undefined, если стек пуст
    }
    return this.items[this.items.length - 1];
  }

  // Метод для проверки, пуст ли стек
  isEmpty() {
    return this.items.length === 0;
  }

  // Метод для возврата количества элементов в стеке
  size() {
    return this.items.length;
  }

  // Метод для очистки стека
  clear() {
    this.items = [];
  }
}

module.exports = {
  Stack,
};
