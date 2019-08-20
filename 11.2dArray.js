
function search2D(arr) {
    const columns = [];
    const rows = [];
    const output = arr;
    for (let i=0;i<arr.length;i++) {
        for (let j=0;j<arr[i].length;j++) {
            if (arr[i][j]===0){
                if (!columns.includes(j)){
                columns.push(j);
                }   
                if (!rows.includes(i)){
                rows.push(i);
                }
            }
        }
    }
    output.map((row,i)=> {
        if (rows.includes(i)) {
            output[i] = new Array(row.length).fill(0);
        } else {
            row.map((column,j)=>{
                if (columns.includes(j)) {
                row[j] = 0;
                }
            });
        }
    });
    return output;

}
let arr =  [[1,0,1,1,0],
            [0,1,1,1,0],
            [1,1,1,1,1],
            [1,0,1,1,1],
            [1,1,1,1,1]];

console.log(search2D(arr));