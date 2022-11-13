// for (int i = 0; i < n - 1; i++)
//             for (int j = 0; j < n - i - 1; j++)
//                 if (arr[j] > arr[j + 1]) {
//                     int temp = arr[j];
//                     arr[j] = arr[j + 1];
//                     arr[j + 1] = temp;
//                 }
export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSortHelper(array, animations);
    return animations;
}

function bubbleSortHelper(
    mainArray,
    animations,
) {
    const arrayLen = mainArray.length;
    animations.push([arrayLen-2, arrayLen-1]);
    animations.push([arrayLen-2, arrayLen-1]);
    animations.push([arrayLen-1, Math.max(...mainArray)]);
    for (let i = 0; i < mainArray.length; i++) {
        for (let j = 0; j < mainArray.length-1; j++) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j, j + 1]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j, j + 1]);
            if (mainArray[j] > mainArray[j + 1]) {
                const temp = mainArray[j];
                mainArray[j] = mainArray[j + 1];
                mainArray[j + 1] = temp;
            }
            animations.push([j, mainArray[j]]);
        }
    }
}