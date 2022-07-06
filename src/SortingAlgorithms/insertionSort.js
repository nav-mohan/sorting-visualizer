import asyncSetTimeout from "../helperFunctions/asyncSetTimeout";

export const insertionSort = async function({
    setArray,
    array,
    setColorsArray,
    waitTime,
  } = {}) {
    let n = array.length;

    for (let i = 0; i < n; i++) {
        let currentVal = array[i];
        let j = i-1;
        while(j >= 0 && array[j] > currentVal){
            let newColorsArray = new Array(n).fill(0);
            newColorsArray[i] = 3;
            newColorsArray[j] = 2;
            newColorsArray[j+1] = 1;
            setColorsArray(newColorsArray);
            await(asyncSetTimeout({waitTime:waitTime}))

            array[j+1] = array[j]
            array[j] = currentVal;
            array = array.concat();//make a new copy of the array
            setArray(array);
            j=j-1;
        }
    }
}
  