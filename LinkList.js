/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
function buildList(arr) {
    var head = new ListNode(arr[0])
    var p = head
    for (let i = 1; i < arr.length; i++) {
        p.next = new ListNode(arr[i])
        p = p.next
    }
    return head
}
function travsesal(head) {
    var arr = []
    while (head) { 
        arr.push(head.val); 
        head = head.next 
    }
    console.log(arr);
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    var pre = null, cur = head, temp
    while (cur) {
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};
function reverse(head, k) {
    // var tn=tail.next
    
    var i = 1
    var tail=head
    while(tail && i++<k)
    {
        tail=tail.next
    }
    if(!tail)return [head,null]
    tail=tail.next
    var p1 = head, p2 = p1.next, p3, i=1
    while (i < k) {
        p3 = p2.next
        p2.next = p1
        i++
        p1 = p2
        p2 = p3

    }
    head.next = tail
    return [p1, head]
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    if (k == 1) return head
    var tail,h,t
    [head,tail]=reverse(head,k)
    while(tail&&tail.next){
        [h,t]=reverse(tail.next,k)
        tail.next=h
        tail=t
    }
    return head
};
var head = buildList([1, 2, 3, 4,5,6,7,8])
// var [h, e] = reverse(head, 3)
var h=reverseKGroup(head,1)
travsesal(h)
// console.log(h);
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    /**
定义两个指针, 第一轮让两个到达末尾的节点指向另一个链表的头部, 最后如果相遇则为交点(在第一轮移动中恰好抹除了长度差)
两个指针等于移动了相同的距离, 有交点就返回, 无交点就是各走了两条指针的长度
**/
    // a1a2c1c2c3b1b2b3c1
    // b1b2b3c1c2c3a1a2c1
    if (!headA || !headB) return null
    var pa = headA, pb = headB
    // 在这里第一轮体现在pA和pB第一次到达尾部会移向另一链表的表头, 而第二轮体现在如果pA或pB相交就返回交点, 不相交最后就是null==null
    while (pa != pb) {
        pa = pa ? pa.next : headB
        pb = pb ? pb.next : headA
    }
    return pa
};