/**
 * Swap two vectors
 * @param {any[]} vector
 * @param {number} positionOne
 * @param {number} positionTwo
 */
const swap = (vector, positionOne, positionTwo) => {
	[vector[positionOne], vector[positionTwo]] = [vector[positionTwo], vector[positionOne]];
};
/**
 * Shuffle a vector
 * @param {any[]} vector
 * @param {number} shuffleAmount
 */
const shuffle = (vector, shuffleAmount) => {
	for (let i = 0; i < shuffleAmount; i++) {
		let positionOne = 0;
		let positionTwo = 0;

		do {
			positionOne = Math.round(Math.random() * (vector.length - 1));
			positionTwo = Math.round(Math.random() * (vector.length - 1));
		} while (positionOne === positionTwo);

		[vector[positionOne], vector[positionTwo]] = [vector[positionTwo], vector[positionOne]];
	}
};

/**
 * Bubble sort a vector
 * @param {number[]} vector
 */
const bubble_sort = (vector) => {
	const n = vector.length;
	let trocou;

	do {
		trocou = false;

		for (let i = 0; i < n - 1; i++) {
			if (vector[i] > vector[i + 1]) {
				swap(vector, i, i + 1);
				trocou = true;
			}
		}
	} while (trocou);
};

/**
 * Selection sort a vector
 * @param {number[]} vector
 */
const selection_sort = (vector) => {
	const n = vector.length;

	for (let i = 0; i < n - 1; i++) {
		let smallestIndex = i;

		for (let j = i + 1; j < n; j++) {
			if (vector[j] < vector[smallestIndex]) {
				smallestIndex = j;
			}
		}

		if (smallestIndex !== i) swap(vector, i, smallestIndex);
	}
};

/**
 * Quick sort a vector
 * @param {number[]} vector
 * @param {number} left
 * @param {number} right
 */
const quick_sort = (vector, left = 0, right = vector.length - 1) => {
	if (left < right) {
		const pivotIndex = particionamento(vector, left, right);

		quick_sort(vector, left, pivotIndex - 1);
		quick_sort(vector, pivotIndex, right);
	}
};

/**
 *
 * @param {number[]} vector
 * @param {number} left
 * @param {number} right
 * @returns {number} Pivot index
 */
const particionamento = (vector, left, right) => {
	const pivot = vector[Math.floor((left + right) / 2)];
	let i = left;
	let j = right;

	while (i <= j) {
		while (vector[i] < pivot) {
			i++;
		}
		while (vector[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(vector, i, j);
			i++;
			j--;
		}
	}

	return i;
};
