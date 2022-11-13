// function sort( arr)
// 	{
// 		var n = arr.length;

// 		// Build heap (rearrange array)
// 		for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
// 			heapify(arr, n, i);

// 		// One by one extract an element from heap
// 		for (var i = n - 1; i > 0; i--) {
// 			// Move current root to end
// 			var temp = arr[0];
// 			arr[0] = arr[i];
// 			arr[i] = temp;

// 			// call max heapify on the reduced heap
// 			heapify(arr, i, 0);
// 		}
// 	}

// 	// To heapify a subtree rooted with node i which is
// 	// an index in arr[]. n is size of heap
// 	function heapify(arr, n, i)
// 	{
// 		var largest = i; // Initialize largest as root
// 		var l = 2 * i + 1; // left = 2*i + 1
// 		var r = 2 * i + 2; // right = 2*i + 2

// 		// If left child is larger than root
// 		if (l < n && arr[l] > arr[largest])
// 			largest = l;

// 		// If right child is larger than largest so far
// 		if (r < n && arr[r] > arr[largest])
// 			largest = r;

// 		// If largest is not root
// 		if (largest != i) {
// 			var swap = arr[i];
// 			arr[i] = arr[largest];
// 			arr[largest] = swap;

// 			// Recursively heapify the affected sub-tree
// 			heapify(arr, n, largest);
// 		}
// 	}

export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    heapSortHelper(array, animations);
    return animations;
}

function heapSortHelper(array, animations) {
    var n = array.length
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--){
        animations.push([i+n, array[i]]);
        animations.push([n, array[0]]);
        heapify(array, n, i, animations);
    }
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        const temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        animations.push([i+n, array[i]]);
        animations.push([n, array[0]]);

        // call max heapify on the reduced heap
        heapify(array, i, 0, animations);
    }
}

function heapify(array, n, i, animations) {
    let largest = i; // Initialize largest as root
    const l = 2 * i + 1; // left = 2*i + 1
    const r = 2 * i + 2; // right = 2*i + 2
    animations.push([l-1, r-1]);
    animations.push([l-1, r-1]);

    // If left child is larger than root
    if (l < n && array[l] > array[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < n && array[r] > array[largest])
        largest = r;

    // If largest is not root
    if (largest !== i) {
        var swap = array[i];
        array[i] = array[largest];
        array[largest] = swap;

        // Recursively heapify the affected sub-tree
        heapify(array, n, largest, animations);
    }
}