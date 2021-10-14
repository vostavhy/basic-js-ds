function ListNode(x) {
  this.value = x;
  this.next = null;
}

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

let result = null;

function removeKFromList(l, k) {
  if (!result) result = l;
  if (!l.next) return result;
  if (l.value === k) {
    result = l.next;
    return removeKFromList(l.next, k);
  }
  if (l.next.value === k) {
    l.next = l.next.next;
    return removeKFromList(l, k);
  }
  return removeKFromList(l.next, k);
}

let listNodes = convertArrayToList([3, 1, 2, 3, 4, 5]);
//console.log(listNodes);
console.log(removeKFromList(listNodes, 3));
