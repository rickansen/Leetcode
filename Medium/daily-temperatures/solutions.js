// Solution 1: Working but Timed Out

// var dailyTemperatures = function(temperatures) {
//     return temperatures.map((x,y,z) => z.slice(y,z.length).findIndex(a => a >temperatures[y])).map(x => x === -1 ? 0 : x)
// };

// Solution 2: Working solution

var dailyTemperatures = function(temperatures) {
    let arr = [];

    for(i=0; i<temperatures.length;i++){
        for(j=i+1;j<temperatures.length;j++){
            if(temperatures[i] < temperatures[j]) {
                arr.push(j-i)
                break;
            }
            if(j==temperatures.length-1){
                arr.push(0);
            }
        }
    }

    if(arr.length < temperatures.length){
            arr.push(0);
    }

    return arr;
};
