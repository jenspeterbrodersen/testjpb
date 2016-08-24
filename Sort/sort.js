var arrayOfObjects = [   
    {
        eggnumber: 1,
        weight: 2000, 
    },
    {

        eggnumber: 2,
        weight: 6, 
    },
    {            
        eggnumber: 3,
        weight: 65, 
    },    
    {
        eggnumber: 4,
        weight: 7, 
    }
];

// use slice() to copy the array and not just make a reference
var byWeight = arrayOfObjects.slice(0);
byWeight.sort(function(a,b) {
    return a.weight - b.weight;
});
console.log('by weight:');
console.log(arrayOfObjects[3].eggnumber);