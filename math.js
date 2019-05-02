let arr1 = [1, 2, 3, [10, 20]];
let obj = {
    first: 11,
    second: 22,
    arr2: [33, 44, [55, 66, [77, 88, [99, 100]]]],
    myObj: { third: 333, fourth: 444 }
}
arr1.push(obj);
let path = [];
function myFunc(parameter) {
    // console.log('>>>>>>>>');
    
    for (let key in parameter) {
        if (typeof (parameter[key]) === 'object') {
            path.push(parameter[key]);
            myFunc(parameter[key]);
        }
        else {
            console.log(`path: ${path} key: ${key}       parameter[key]: ${parameter[key]}      type: ${typeof parameter[key]}`)
        }
    }
    path.pop();
}
myFunc(arr1);
//console.log(arr1)


