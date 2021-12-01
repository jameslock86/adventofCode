const fs = require('fs');
fs.readFile('data.txt', (err, data) =>{
    if (err) throw err;
    
let Data = data.toString();
// console.log(Data);
    const data2 = Data.split("\n");
    data2.shift();
    // const data3 = data2.map(num);
    // console.log(data2);
    let data3 = data2.map(Number);
    // console.log(data3);

    for (let i =  1; i < n -1; i++ ){
        if (data3[i] > data3[ i - 1 ] && data3[i] > data3[ i + 1 ]){
            let n = data3.length;
        }
        console.log(n)
    }
    
})


// const fileURL = './data.txt';

// fetch(fileURL)
//     .then(r => r.text() )
//     .then( t => console.log(t) )