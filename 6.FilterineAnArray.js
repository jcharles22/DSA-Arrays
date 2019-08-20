

function filterArray(arr, num) {
    let newArr = [];
    arr.forEach(item => { (item >= num) && newArr.push(item) })
    return newArr;
}


console.log(filterArray([1,3,4,5,6,7,8,9], 5));