

function products(arr) {
    let newArr = [];
    for(let i = 0; i< arr.length; i++) {
        let sum =1;
        for(let j = 0; j< arr.length; j++) {
           if (j != i) {
                sum *= arr[j]
            };
        }newArr.push(sum);
    } return newArr;
};


console.log(products([1, 3, 9, 4]));