


function mergeArray(arr1, arr2) {

    let newArr = [];

    return newArr = [...arr1, ...arr2].sort()
    // let i = 0;
    // let j = 0;
    // while( i <= arr1.length && j <= arr2.length) {
    //     console.log(arr1.length)
    //     console.log(i, j)
    //     if(arr1[i] === undefined && arr2[j] === undefined) {
    //         console.log('bv')
    //         return newArr;
    //     }
    //     if(arr2[j] === undefined ) {
    //         console.log('un2')
    //         newArr.push(arr1[i]);
    //         i++;
    //     }
    //     if(arr1[i] === undefined) {
    //         console.log('un1')
    //         newArr.push(arr2[j]);
    //         j++;
    //     }
    //     if(arr1[i] <= arr2[j]) {
    //         console.log('line26')
    //         newArr.push(arr1[i]);
    //         i++;
    //     }
    //     if(arr2[j] < arr1[i]) {
    //         console.log('line31')
    //         newArr.push(arr2[j]);
    //         j++;
    //     }
    // } return newArr;

}
let arr2 =[1,3]
let arr1 = [2, 5]
console.log(mergeArray(arr1, arr2))