// 1 <= capacity <= 3000
// 0 <= key <= 10000
// 0 <= value <= 105
// 双向链表按照被使用的顺序存储了这些键值对，靠近头部的键值对是最近使用的，而靠近尾部的键值对是最久未使用的。
class Node {
    constructor(key = -1, value = -1) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.pre = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache=new Map()
    this.capacity=capacity
    this.head=new Node()
    this.tail=new Node()
    this.size=0
    this.head.next=this.tail
    // this.tail.next=this.head
    this.tail.pre=this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)){
        return -1
    }
    var node= this.cache.get(key)
    node.pre.next=node.next
    node.next.pre=node.pre
    this.visit(node)
    return node.value
};
/** 
 * @param {object} node
 * @return {null}
 */
LRUCache.prototype.visit = function(node) {
    node.next=this.head.next
    node.pre=this.head
    this.head.next.pre=node
    this.head.next=node
}
/** 
 * @param {} 
 * @return {object}
 */
LRUCache.prototype.removetail = function() {
    var waste=this.tail.pre
    waste.pre.next=this.tail
    this.tail.pre=waste.pre
    return waste
}
/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.cache.has(key)){
        var node=new Node(key,value)
        this.cache.set(key,node)
        this.visit(node)
        this.size++
        if(this.size>this.capacity){
            var waste=this.removetail()
            this.cache.delete(waste.key)
            this.size--
        }
    }
    else{
        var node=this.cache.get(key)
        node.value=value
        node.pre.next=node.next
        node.next.pre=node.pre
        this.visit(node)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var lru=new LRUCache(2)
console.log(lru.put(2,1));
console.log(lru.put(1,1));
// console.log(lru.get(1))
console.log(lru.put(2,3));
// console.log(lru.get(2))
console.log(lru.put(4,1));
console.log(lru.get(1))
console.log(lru.get(2))
// console.log(lru.get(4))