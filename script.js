'use strict';

//1
function searchArrayWord(array, word){
    for(let i = 0; i < array.length; i += 1){
        if( array[i] === word){
           return true; 
        }
    }

    return false;
}
console.log(searchArrayWord(['Кот', 'Собака', 'Жираф'], 'Собака'));

//2

function avr(array){
    let sum = 0;

    for(let i = 0; i < array.length; i += 1){
        sum = sum + array[i];
    }

    return sum / array.length;
}

console.log(avr([1, 2, 3, 7, 6, 9]));


//3
function reverse(array){
   let revArray = [];

   for(let i = 0; i < array.length; i += 1){
       revArray.unshift(array[i])
   }

   return revArray;
}
console.log(reverse([1, 3, 5, 6, 7, 9]));


//4
function setKeys(object){
    return Object.keys(object);
}
console.log(setKeys({html:'HTML', css: 'CSS', js: 'ECMA'}));


//5
const order = {
    'name' : 'Alina',
    'phone' : '0657840987',
    'adress' : 'Poltava 4',
    'total_cost' : '830',
    'total_weight' : '2700',
    'buying_goods' : [
        {
            'type' : 'Чашка',
            'price' : '100',
            'weight' : '200'
        },
        {
            'type' : 'Ложка',
            'price' : '30',
            'weight' : '100'
        },
        {
            'type' : 'Чайник',
            'price' : '550',
            'weight' : '2000'
        },
        {
            'type' : 'Кружка',
            'price' : '150',
            'weight' : '400'
        }
    ] 
}