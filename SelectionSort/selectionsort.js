let sortArr = [3, 5, 15, 8, 333, 4, 9, 6, 7, 10, 85, 66, 200, 1028, 5602, 12, 21];

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return console.log(arr);
}

selectionSort(sortArr);