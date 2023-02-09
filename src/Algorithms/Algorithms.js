export function selectionSort(array) {
    const animations = [];
  
    for(let i = 0; i < array.length; i++) {
        let minIndex = i;
  
        for(let j = i+1; j < array.length; j++) {
            animations.push([j, minIndex]);
            animations.push([j, minIndex]);
            animations.push([null]);
            if(array[j] < array[minIndex]) {
            minIndex = j;
            }
        }
  
        if (minIndex != i) {
            animations.push([i, minIndex]);
            animations.push([i, minIndex]);
            animations.push([array[i], array[minIndex]]);
            swap(array, i, minIndex)
        }
      
    }
    return animations;
}
  
export function bubbleSort(array) {
    const animations = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length-i-1; j++) {
            animations.push([j, j+1]);
            animations.push([j, j+1]);
  
            if(array[j] > array[j+1]) {
                animations.push([array[j], array[j+1]]);
                swap(array, j+1, j)
            }
            else {
                animations.push([null])
            }
        }
    }
    return animations;
  }
  
export function mergeSort(array) {
    const animations = [];
    if(array.length <= 1) {
        return array;
    }  
    const arr = array.slice();
    mergeSorting(array, arr, 0, array.length-1, animations);
    return animations;
}
  
function mergeSorting(array, arr, left, right, animations) {
    if(left == right) {
        return;
    }  
    const mid = left + parseInt((right-left)/2);
    mergeSorting(arr, array, left, mid, animations);
    mergeSorting(arr, array, mid+1, right, animations);
    merge(array, arr, left, mid, right, animations);
}
  
function merge(array, arr, left, mid, right, animations) {
    let i = left;
    let j = left;
    let k = mid + 1;
  
    while(j <= mid && k <= right) {
        animations.push([j, k]);
        animations.push([j, k]);
  
        if(arr[j] <= arr[k]) {
            animations.push([i, arr[j]]);
            array[i++] = arr[j++];
        }
        else {
            animations.push([i, arr[k]]);
            array[i++] = arr[k++];
        }
    }
  
    while(j <= mid) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([i, arr[j]]);
        array[i++] = arr[j++];
    }
  
    while(k <= right) {
        animations.push([k, k]);
        animations.push([k, k]);
        animations.push([i, arr[k]]);
        array[i++] = arr[k++];
    }
  
}
  
export function quickSort(array) {
    const animations = [];
    quickSorting(array, 0, array.length-1, animations);
    return animations;
}
  
function quickSorting(array, left, right, animations) {
    if(left < right) {
        let part = partition(array, left, right, animations);
        quickSorting(array, left, part-1, animations);
        quickSorting(array, part+1, right, animations);
    }
}
  
function partition(array, left, right, animations) {
    let pivot = array[right];
    let i = left-1;
    for(let j = left; j <= right-1; j++) {
  
        if(array[j] < pivot) {
            i++;
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([array[i], array[j]]);
            swap(array, j, i)
        }
    }
    animations.push([i+1, right]);
    animations.push([i+1, right]);
    animations.push([array[i+1], array[right]]);
    swap(array, right, i+1)
  
    return i+1;
}
  
export function insertionSort(array) {
    const animations = [];  
  
    for(let i = 1; i < array.length; i++) {
        let value = array[i];
        let j = i-1;
  
        while(j >= 0 && array[j] > value) {
            animations.push([j+1, j]);
            animations.push([j+1, j]);
            animations.push(array[j]);
            array[j+1] = array[j];
            j--;
        }
        animations.push([j+1, i]);
        animations.push([j+1, i]);
        animations.push(value);
        array[j+1] = value;
    }
    return animations;
}
  
function swap(array, i, j) {
    let temp = array[j];
    array[j] = array[i];
    array[i] = temp
}  