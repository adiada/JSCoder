 'use strict'

// console.log(test1());
// test();

// function test1(){
//     return 'hi';
// }

// var test = () => {
//     console.log('hello');
// }

// function reverseArray(a) {
//     var mid = Math.floor(a.length/2);
//     for(let i = 0,j = a.length - 1 ; i < mid ; i++,j--)
//         {
//             temp = a[i];
//             a[i] = a[j];
//             a[j] = temp;
//         }
//     return a;
// }

// function miniMaxSum(arr) {
//     var temp = 0;
//     var mid = 0,minSum = 0,maxSum = 0;
//     for(let i = 0; i < arr.length-1 ; i++){
//         for(let k = i + 1 ; k <arr.length ; k++){
//             if(arr[i] > arr[k])
//                 {
//                     temp = arr[k];
//                     arr[k] = arr[i];
//                     arr[i] = temp;
//                 }
//         }
//     }
    
//     for(let i = 1; i < (arr.length - 1) ; i++)
//         {
//             mid += arr[i];
//         }
    
//     minSum = mid + arr[0];
//     maxSum = mid + arr[arr.length - 1];
    
//     return String(minSum) + ' ' + String(maxSum);

// }

function countOccurenceOfChar(str,ch){

    var retVal = 0;

    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === ch)
            retVal++;
    }

    return retVal;
}

console.log(countOccurenceOfChar('This is a poem about Missisippi','s'));