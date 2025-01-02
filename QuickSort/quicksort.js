let sortArr = [3, 5, 15, 8, 333, 4, 9, 6, 7, 10, 85, 66, 200, 1028, 5602, 12, 21];

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, low = 0 , high = null) {
    if (high === null) {
        high = arr.length - 1;
    }
    if (low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
    }
    return console.log(arr);
}

quickSort(sortArr);