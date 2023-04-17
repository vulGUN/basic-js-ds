const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Проверка на пустой список
  if (l === null) return null;

  // Удаление узлов со значением, равным k в начале списка
  while (l !== null && l.value === k) {
    l = l.next;
  }

  let current = l; // Текущий узел
  let prev = null; // Предыдущий узел

  // Обход списка и удаление узлов со значением, равным k
  while (current !== null) {
    if (current.value === k) {
      // Удаление текущего узла
      prev.next = current.next;
    } else {
      // Переход к следующему узлу
      prev = current;
    }
    current = current.next;
  }

  return l; // Возвращаем обновленный список
}

module.exports = {
  removeKFromList,
};
