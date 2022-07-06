export default function generateRandomizedArray({arraySize,minVal,maxVal}){
    console.log(minVal,maxVal)
    let randomArray = [];

    for (let i = 0; i < arraySize; i++) {
        randomArray.push(Math.floor(Math.random()*(maxVal-minVal) + minVal));
    }
    return randomArray;
}