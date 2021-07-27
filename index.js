// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

// Initialize a value 'load'
let load = 0

// create a variable 'int'
let int = setInterval(blurring, 30);

function blurring() {
    load++ 

    if(load > 99) {
        clearInterval(int)
    }

   loadText.innerText = `${load}%`
   loadText.style.opacity = scale(load, 0, 200, 1, 0)
   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// In the tutorial, 200 is actually 100

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}