import asyncSetTimeout from "../helperFunctions/asyncSetTimeout";
                
export const mergeSort = async (arr, setArray)=>{
    console.log('mergesort');
    var n = arr.length;
    if(n==1){
        return arr;
    }
    var mid = Math.floor(n/2);
    var left = mergeSort(arr.slice(0,mid));
    var right = mergeSort(arr.slice(mid,n));

    var i,j,k=0;

    while(i<mid && j<n-mid){
        if(left[i] < right[j]){
            arr[k] =left[i];
            i=i+1;
            k=k+1;
            setArray(arr)
        }
        else{
            arr[k] = right[j];
            j=j+1;
            k=k+1;
            setArray(arr)
        }
    }

    while(i<mid){
        arr[k] =left[i];
        i=i+1;
        k=k+1;
        setArray(arr)
    }

    while(j<n-mid){
        arr[k] = right[j];
        j=j+1;
        k=k+1;
        setArray(arr)
    }

    console.log(left,right);
    // return arr;
    
}



