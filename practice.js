class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function sumLists(node1, node2){

    let number1 = [];
    let number2 = [];

    while(node1 || node2){
        number1.push(node1.value);
        number2.push(node2.value);
        node1 = node1.next;
        node2 = node2.next;
    }

    let number3 = parseInt(number1.reverse().join('')) + parseInt(number2.reverse().join(''));
    
    number3 = number3.toString().split('');
    let head = new Node(null);
    head.next = new Node(parseInt(number3.shift()));
    let node = head.next;
    while(number3.length > 0){
        node.next = new Node(parseInt(number3.shift()));
        node = node.next;
    }

    return head.next;
}


let node1 = new Node(7);
let node2 = new Node(1);
let node3 = new Node(6);
let node4 = new Node(5);
let node5 = new Node(9);
let node6 = new Node(2);
let node7 = new Node(9);
let node8 = new Node(1);
let node9 = new Node(2);


node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;

let answer = sumLists(node1,node4);
console.log('should be a node that points to 9, 1,2 in order', answer.value, answer.next.value, answer.next.next.value);
