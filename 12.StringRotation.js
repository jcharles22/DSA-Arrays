

function stringRotate(str1, str2) {
    let check = false 
    str1 = str1.split('');
    str2 = str2.split('');
    for(let i = 0; i < str1.length; i++ ) {
        let temp = str1.shift();
        str1.push(temp)
        if(str1.join('')===str2.join('')) {
            check = true
        }
    }
    return check;
}

console.log(stringRotate('amazon', 'azonma'))
console.log(stringRotate('amazon', 'azonam'))