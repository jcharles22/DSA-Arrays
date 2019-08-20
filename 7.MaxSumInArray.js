


function sumSubArray(arr) {
    let sum = 0;
    let maxSum = arr[0];

    for(let i = 0; i< arr.length; i++) {
            sum = 0;
        for (let j=i; j< arr.length; j++) {
            sum += arr[j]
            if(sum> maxSum) {
                maxSum=sum;
            }
        }

    } 
    return(maxSum);
}1

console.log(sumSubArray([1,3,-2,-3,2,-4]));
console.log(sumSubArray([-2,-3,2,-4]));
console.log(sumSubArray([1,2,3,4,5,6]));
console.log(sumSubArray([1,3,-4]));