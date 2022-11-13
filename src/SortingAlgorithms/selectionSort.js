// void sort(int arr[])
//     {
//         int n = arr.length;
//         // One by one move boundary of unsorted subarray
//         for (int i = 0; i < n-1; i++)
//         {
//             // Find the minimum element in unsorted array
//             int min_idx = i;
//             for (int j = i+1; j < n; j++)
//                 if (arr[j] < arr[min_idx])
//                     min_idx = j;
 
//             // Swap the found minimum element with the first
//             // element
//             int temp = arr[min_idx];
//             arr[min_idx] = arr[i];
//             arr[i] = temp;
//         }
//     }
export function getSelectinSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    selectionSortHelper(array, animations,);
    return animations;
  }

  function selectionSortHelper(array, animations) {
      const arrayLength = array.length;
      for(let i = 0; i < arrayLength; i++) {
          let min_id = i;
          for(let j = i+1; j < arrayLength; j++) {
              if (array[j] < array[min_id]) {
                  min_id = j;
                  animations.push([i, j]);
                  animations.push([i, j]);
              }
              else {
                animations.push([i, j]);
                animations.push([i, j]);
              }
          }
          const temp = array[min_id];
          array[min_id] = array[i];
          array[i] = temp;
          animations.push([(i+arrayLength), array[i]]);
          animations.push([(min_id+arrayLength), array[min_id]]);
      }
  }