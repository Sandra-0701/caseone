//1: array as input and checks if the first element of the array is prime or not:

let arr = [79, 3, 4, 5];

let f = arr[0];

let isPrime = true;

if (f < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < f; i++) {
        if (f % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime === true) {
    console.log("prime");
} else {
    console.log("not prime");
}




//2: find the most frequent item of an array
function findMostFrequentItem(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return;
    }

    let frequencyMap = {};
    let mostFrequentItem;
    let maxFrequency = 0;

    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;

        
        if (frequencyMap[item] > maxFrequency) {
            mostFrequentItem = item;
            maxFrequency = frequencyMap[item];
        }
    });

    console.log(`The most frequent item is: ${mostFrequentItem} (occurs ${maxFrequency} times)`);
}


const myArray = [2, 3, 5, 2, 8, 2, 5, 2, 6, 5, 2, 1, 7];
findMostFrequentItem(myArray);


//3: check number odd or even
for (let j=0;j<=15;j++){
    if (j % 2 === 0){
        console.log(j + "is even");
    } else {
        console.log(j + "is odd");
    }
} 
// 4: find the sum of squares of the elements of an array
const arr2=[1,2,3,4,5];
    let sumOfSquares = 0;
    for(let i =0; i< arr2.length;i++){
        sumOfSquares += arr2[i] ** 2;
    }
    console.log("the sum of squares of the element of the array "+sumOfSquares);
    