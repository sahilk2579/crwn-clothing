const array = [1,2,3,4,5];

const abc = array.reduce((accumulator,currElement)=>
    accumulator+ currElement 
,0)

console.log(abc)