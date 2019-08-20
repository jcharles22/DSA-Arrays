let Array = require('./array')


function main() {
    Array.SIZE_RATIO = 3;
    let arr = new Array();

    arr.push(5);
    console.log(arr); // Array { length: 1, _capacity: 1, ptr: 0 }
  
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
    console.log(arr); // Array { length: 6, _capacity: 6, ptr: 3 }
    // We move the pointer just before exceeding capacity.
  
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr); // Array { length: 3, _capacity: 12, ptr: 3 }
    // Removing items from the array does not decrease capacity or move the pointer.
  
    console.log(arr.get(1));
  
    arr.pop();
    arr.pop();
    arr.pop();
  
    arr.push('adrian');
    // the array only contains one item but the pointer & capacity remain dont change.
  
    // Array { length: 1, _capacity: 12, ptr: 3 }
    // The resize function ensures memory capacity will be allocated as needed, moving the pointer when necessary.

}

main();
