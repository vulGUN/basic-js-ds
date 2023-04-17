const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Голова очереди
    this.tail = null; // Хвост очереди
  }

  // Метод для добавления элемента в конец очереди
  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.tail === null) {
      // Если очередь пустая, устанавливаем и голову и хвост на новый узел
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Если в очереди уже есть элементы, добавляем новый узел в конец
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Метод для извлечения и удаления элемента из головы очереди
  dequeue() {
    if (this.isEmpty()) {
      return undefined; // Возвращаем undefined, если очередь пустая
    }
    const removedNode = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null; // Если после удаления головного узла очередь стала пустой, сбрасываем хвост
    }
    return removedNode.value;
  }

  // Метод для возврата базового связанного списка
  getUnderlyingList() {
    return this.head;
  }

  // Метод для проверки, пуста ли очередь
  isEmpty() {
    return this.head === null;
  }
}

module.exports = {
  Queue,
};
