import { randint } from './random.js'

/**
 * 
 * @param {*} nums 
 * @param {*} k 
 */
// var findKthLargest = function(nums, k) {
//     var len=nums.length
//     var i=-1
//     while(i<len-k){
//         var x=nums[len-1]
//         for(let j=i+1;j<=len-2;j++){
//             if(nums[j]<=x){
//                 i++;
//                 [nums[j], nums[i]] = [nums[i], nums[j]]
//             }
//         }
//         [nums[len-1], nums[i + 1]] = [nums[i + 1], nums[len-1]]
//     }
//     console.log(nums)
// };

var findKthLargest = function(nums, k) {
    function partition(A, p, r) {
        // var i = randint(p, r);
        // [A[r], A[i]] = [A[i], A[r]]
        var x = A[r]
        var i = p - 1
        for (let j = p; j <= r - 1; j++) {
            if (A[j] > x) {
                i = i + 1;
                [A[j], A[i]] = [A[i], A[j]]
            }
        }
        [A[r], A[i + 1]] = [A[i + 1], A[r]]
        return i + 1
    }
    function select(A,p,r,i){
        if(p===r){
            return A[p]
        }
        var q=partition(A,p,r)
        var k=q-p+1
        if(i===k)
            return A[q]
        else if(i<k)
            return select(A,p,q-1,i)
        else
            return select(A,q+1,r,i-k)
    }
    return select(nums,0,nums.length-1,k)
};
var res=findKthLargest([4,3,5,6,7,10,1,8,2],1)
console.log(res);

// void maxHeapify(vector<int>& a, int i, int heapSize) {
//     int l = i * 2 + 1, r = i * 2 + 2, largest = i;
//     if (l < heapSize && a[l] > a[largest]) {
//         largest = l;
//     } 
//     if (r < heapSize && a[r] > a[largest]) {
//         largest = r;
//     }
//     if (largest != i) {
//         swap(a[i], a[largest]);
//         maxHeapify(a, largest, heapSize);
//     }
// }

// void buildMaxHeap(vector<int>& a, int heapSize) {
//     for (int i = heapSize / 2; i >= 0; --i) {
//         maxHeapify(a, i, heapSize);
//     } 
// }

// int findKthLargest(vector<int>& nums, int k) {
//     int heapSize = nums.size();
//     buildMaxHeap(nums, heapSize);
//     for (int i = nums.size() - 1; i >= nums.size() - k + 1; --i) {
//         swap(nums[0], nums[i]);
//         --heapSize;
//         maxHeapify(nums, 0, heapSize);
//     }
//     return nums[0];
// }
// };



