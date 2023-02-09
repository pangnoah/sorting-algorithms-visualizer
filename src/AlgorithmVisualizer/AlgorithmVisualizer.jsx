import React from 'react';
import './AlgorithmVisualizer.css';
import * as Algorithms from '../Algorithms/Algorithms.js';

export default class AlgorithmVisualizer extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.generateNewArray();
    }

    randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    generateNewArray() {
        const array = [];      
        this.setState({array});
        for(let i = 0; i < window.innerWidth*0.07; i++) {
            array.push(randomInteger(10, window.innerHeight*0.67));
        }
    }

    selectionSort() {
        const animations = Algorithms.selectionSort(this.state.array);
        const chunkAnimations = []
        chunkAnimations.push(chunkArray(animations, 3))
        const animationsArray = chunkAnimations[0]
        for(let i = 0; i < animations.length; i++) {
            const chunk = animationsArray[i]
            for(let j = 0; j < chunk.length; j++) {
                const bars = document.getElementsByClassName('bar');
                if(j === 2) {
                    setTimeout(() => {
                        const [firstHeightIndex, secondHeightIndex] = animations[j+i*3];
                        const [firstBarIndex, secondBarIndex] = animations[j-1+i*3];
                        const firstBarStyle = bars[firstBarIndex].style;
                        const secondBarStyle = bars[secondBarIndex].style;
                        firstBarStyle.height = `${secondHeightIndex}px`;
                        secondBarStyle.height = `${firstHeightIndex}px`;
                    }, (j+i*3)*2.5);
                }
                else {
                    const [firstBarIndex, secondBarIndex] = animations[j+i*3];
                    const firstBarStyle = bars[firstBarIndex].style;
                    const secondBarStyle = bars[secondBarIndex].style;
                    if(j === 0) {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'violet';
                            secondBarStyle.backgroundColor = 'violet';
                        }, (j+i*3)*2.5);
                    }
                    else {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'khaki';
                            secondBarStyle.backgroundColor = 'khaki';
                        }, (j+i*3)*2.5);
                    }
                }
            }
        }
    }

    bubbleSort() {
        const animations = Algorithms.bubbleSort(this.state.array);
        const chunkAnimations = []
        chunkAnimations.push(chunkArray(animations, 3))
        const animationsArray = chunkAnimations[0]
        for(let i = 0; i < animations.length; i++) {
            const chunk = animationsArray[i]
            for(let j = 0; j < chunk.length; j++) {
                const bars = document.getElementsByClassName('bar');
                if(j === 2) {
                    setTimeout(() => {
                        const [firstHeightIndex, secondHeightIndex] = animations[j+i*3];
                        const [firstBarIndex, secondBarIndex] = animations[j-1+i*3];
                        const firstBarStyle = bars[firstBarIndex].style;
                        const secondBarStyle = bars[secondBarIndex].style;
                        firstBarStyle.height = `${secondHeightIndex}px`;
                        secondBarStyle.height = `${firstHeightIndex}px`;
                    }, (j+i*3)*3.5);
                }
                else {
                    const [firstBarIndex, secondBarIndex] = animations[j+i*3];
                    const firstBarStyle = bars[firstBarIndex].style;
                    const secondBarStyle = bars[secondBarIndex].style;
                    if(j === 0) {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'violet';
                            secondBarStyle.backgroundColor = 'violet';
                        }, (j+i*3)*3.5);
                    }
                    else {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'khaki';
                            secondBarStyle.backgroundColor = 'khaki';
                        }, (j+i*3)*3.5);
                    }
                }
            }
        }
    }

    mergeSort() {
        const animations = Algorithms.mergeSort(this.state.array);
        const chunkAnimations = []
        chunkAnimations.push(chunkArray(animations, 3))
        const animationsArray = chunkAnimations[0]
        for(let i = 0; i < animationsArray.length; i++) {
            const chunk = animationsArray[i]
            for(let j = 0; j < chunk.length; j++) {
                const bars = document.getElementsByClassName('bar');
                if(j === 2) {
                    setTimeout(() => {
                        const [firstBarIndex, newBarHeight] = animations[j+i*3];
                        const firstBarStyle = bars[firstBarIndex].style;
                        firstBarStyle.height = `${newBarHeight}px`;
                    }, (j+i*3)*8);
                }
                else {
                    const [firstBarIndex, secondBarIndex] = animations[j+i*3];
                    const firstBarStyle = bars[firstBarIndex].style;
                    const secondBarStyle = bars[secondBarIndex].style;
                    if(j === 0) {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'violet';
                            secondBarStyle.backgroundColor = 'violet';
                        }, (j+i*3)*8);
                    }
                    else {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'khaki';
                            secondBarStyle.backgroundColor = 'khaki';
                        }, (j+i*3)*8);
                    }
                }
            }
        }
    }

    quickSort() {
        const animations = Algorithms.quickSort(this.state.array);
        const chunkAnimations = []
        chunkAnimations.push(chunkArray(animations, 3))
        const animationsArray = chunkAnimations[0]
        for(let i = 0; i < animations.length; i++) {
            const chunk = animationsArray[i]
            for(let j = 0; j < chunk.length; j++) {
                const bars = document.getElementsByClassName('bar');
                if(j === 2) {
                    setTimeout(() => {
                        const [firstHeightIndex, secondHeightIndex] = animations[j+i*3];
                        const [firstBarIndex, secondBarIndex] = animations[j-1+i*3];
                        const firstBarStyle = bars[firstBarIndex].style;
                        const secondBarStyle = bars[secondBarIndex].style;
                        firstBarStyle.height = `${secondHeightIndex}px`;
                        secondBarStyle.height = `${firstHeightIndex}px`;
                    }, (j+i*3)*11);
                }
                else {
                    const [firstBarIndex, secondBarIndex] = animations[j+i*3];
                    const firstBarStyle = bars[firstBarIndex].style;
                    const secondBarStyle = bars[secondBarIndex].style;
                    if(j === 0) {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'violet';
                            secondBarStyle.backgroundColor = 'violet';
                        }, (j+i*3)*11);
                    }
                    else {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'khaki';
                            secondBarStyle.backgroundColor = 'khaki';
                        }, (j+i*3)*11);
                    }
                }
            }
        }
    }

    insertionSort() {
        const animations = Algorithms.insertionSort(this.state.array);
        const chunkAnimations = []
        chunkAnimations.push(chunkArray(animations, 3))
        const animationsArray = chunkAnimations[0]
        for(let i = 0; i < animations.length; i++) {
            const chunk = animationsArray[i]
            for(let j = 0; j < chunk.length; j++) {
                const bars = document.getElementsByClassName('bar');
                if(j === 2) {
                    setTimeout(() => {
                        const firstHeight = animations[j+i*3];
                        const [firstBarIndex] = animations[j-1+i*3];
                        const firstBarStyle = bars[firstBarIndex].style;
                        firstBarStyle.height = `${firstHeight}px`;
                    }, (j+i*3)*3);
                }
                else {
                    const [firstBarIndex, secondBarIndex] = animations[j+i*3];
                    const firstBarStyle = bars[firstBarIndex].style;
                    const secondBarStyle = bars[secondBarIndex].style;
                    if(j === 0) {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'violet';
                            secondBarStyle.backgroundColor = 'violet';
                        }, (j+i*3)*3);
                    }
                    else {
                        setTimeout(() => {
                            firstBarStyle.backgroundColor = 'khaki';
                            secondBarStyle.backgroundColor = 'khaki';
                        }, (j+i*3)*3);
                    }
                }
            }
        }
    }

    render() {
        const {array} = this.state;
        return (
            <div className="main-container">
                <div className='title'>
                    <h1>Sorting Algorithm Visualizer</h1>
                </div>
                {array.map((value) => (
                    <div 
                    className = "bar"
                    style={{
                        height: `${value}px`}}
                    ></div>
                ))}
                <div className="buttons">
                    <button onClick={() => this.generateNewArray()}>Generate New Array</button>
                    <button onClick={() => this.selectionSort()}>Selection Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                </div>
            </div>
        );
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}

function chunkArray(array, size) {
    const newArray = [];
    for (let i = 0; i < array.length; i += size) {
        newArray.push(array.slice(i, i+size));
    }
    return newArray;
}