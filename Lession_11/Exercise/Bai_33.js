let arr = [9,8,7,6,4,5,3,2,1]

function BubbleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1]= temp
            }     
        }
    }
    return arr
}
console.log(BubbleSort(arr));