import React from "react";
import './SortingVisualise.css';
//import RangeInput from "./rangeInput";
import { getMergeSortAnimations } from '../SortingAlgorithms/mergeSort.js'
import { getBubbleSortAnimations } from '../SortingAlgorithms/bubbleSort.js'
import { getSelectinSortAnimations } from "../SortingAlgorithms/selectionSort";
import { getRadixSortAnimations } from "../SortingAlgorithms/radixSort";
import { getHeapSortAnimations } from "../SortingAlgorithms/heapSort";
// This is primary color of the array bars
const PRIMARY_COLOR = 'rgb(15, 93, 101)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

// This is the size of the array
const ARRAY_SIZE = 100;


export default class SortingVisualise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        var array = [];
        for (let i = 0; i < ARRAY_SIZE; i++) {
            let temp = Math.floor(590 / ARRAY_SIZE) * (i + 1) + 10;
            if (temp > 590) {
                temp = 590;
            }
            array.push(temp);
        }
        this.setState({ array });
    }

    /* Randomize array in-place using Durstenfeld shuffle algorithm */
    shuffleArray(array) {
        var animations = [];
        for (var i = array.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            animations.push([i, j]);
            animations.push([i, j]);
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            animations.push([i, array[i]]);
        }
        createAnimationsType1(animations, 10);
    }

    // Sorting algorithms 
    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        createAnimationsType1(animations, 2);
        setTimeout(() => {
            finalAnimaiton();
        }, 500 * ARRAY_SIZE);
    }
    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        createAnimationsType1(animations, 8);
        setTimeout(() => {
            finalAnimaiton();
        }, 165 * ARRAY_SIZE);
    }
    selectionSort() {
        const animations = getSelectinSortAnimations(this.state.array);
        createAnimationsType2(animations, 1.5);
        setTimeout(() => {
            finalAnimaiton();
        }, 190 * ARRAY_SIZE);
    }
    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        createAnimationsType2(animations, 5);
        setTimeout(() => {
            finalAnimaiton();
        }, 100 * ARRAY_SIZE);
    }
    radicSort() {
        const animations = getRadixSortAnimations(this.state.array);
        createAnimationsType2(animations, 10);
        setTimeout(() => {
            finalAnimaiton();
        }, 190 * ARRAY_SIZE);
    }
    render() {
        const { array } = this.state;
        const widthValue = Math.floor((1020 - ARRAY_SIZE) / ARRAY_SIZE);
        return (
            <div>
                <div className="button-class">
                    <p className="logo">SORTING VISUALISER</p>
                    <button className="button" onClick={() => this.shuffleArray(this.state.array)} id='shuffle'>Shuffle</button>
                    <button className="button" onClick={() => this.bubbleSort()} id='bubblesort'>Bubble Sort</button>
                    <button className="button" onClick={() => this.mergeSort()} id='mergesort'>Merge Sort</button>
                    <button className="button" onClick={() => this.selectionSort()} id='selectionsort'>Selection Sort</button>
                    <button className="button" onClick={() => this.heapSort()} id='heapsort'>Heap Sort</button>
                    <button className="button" onClick={() => this.radicSort()} id='radixsort'>Radix Sort</button>
                </div>
                {/* <RangeInput></RangeInput> */}
                <div>
                    <div className="array">
                        {array.map((value, id) => (
                            <div
                                className="array-bars"
                                key={id}
                                style={{ height: `${value}px`, width: `${widthValue}px` }}
                            >
                            </div>
                        ))}
                    </div>
                    <div>
                        {/* side with the bars to display information of the sorting algorithms */}
                    </div>
                </div>
            </div>
        );
    }
}

async function createAnimationsType1(animations, animationSpeed) {
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bars');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * animationSpeed);
        } else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * animationSpeed);
        }
    }
}

async function createAnimationsType2(animations, animationSpeed) {
    let color_id = 0;
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bars');
        const [barOneIdx, barTwoIdx] = animations[i];
        if (barOneIdx < ARRAY_SIZE) {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = color_id % 2 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * animationSpeed);
            color_id++;
        }
        else {
            setTimeout(() => {
                const [barOneIdx, newHeight] = animations[i];
                const barOneStyle = arrayBars[barOneIdx - ARRAY_SIZE].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * animationSpeed);
        }

    }
}

async function finalAnimaiton() {
    const arrayBars = document.getElementsByClassName('array-bars');
    const color = 'chocolate'
    for (let i = 0; i < ARRAY_SIZE - 4; i++) {
        const barOneStyle = arrayBars[i].style;
        const barTwoStyle = arrayBars[i + 1].style;
        const barThreeStyle = arrayBars[i + 2].style;
        const barFourStyle = arrayBars[i + 3].style;
        const barFiveStyle = arrayBars[i + 4].style;

        setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            barThreeStyle.backgroundColor = color;
            barFourStyle.backgroundColor = color;
            barFiveStyle.backgroundColor = color;
        }, i * 8);

        setTimeout(() => {
            barOneStyle = arrayBars[i].style;
            barOneStyle.backgroundColor = '#0f5d65';
        }, i * 8);
    }
}