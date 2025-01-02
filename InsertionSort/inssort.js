let sortArr  = [57, 5, 15, 8, 333, 4, 9, 6, 7, 10, 88, 66, 200, 1028, 5602, 12, 21];

function insSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return console.log(arr);
}

insSort(sortArr);