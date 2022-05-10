/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var c1=l1,c2=l2,start=null,pre=null
    if(!c1)return c2
    if(!c2)return c1
    if(c1.val<=c2.val){
        pre=c1
        start=c1
        c1=c1.next
    }
    else{
        pre=c2
        start=c2
        c2=c2.next
    }
    while(c1 && c2){
        if(c1.val<=c2.val){
            pre.next=c1
            pre=c1
            c1=c1.next
        }
        else{
            pre.next=c2
            pre=c2
            c2=c2.next
        }
    }
    if(c1){
        pre.next=c1
    }
    if(c2)
    {
        pre.next=c2
    }
    return start
};