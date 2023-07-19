let rangeOne = document.getElementById('range1');
let rangeTwo = document.getElementById('range2');
let displayValOne=document.getElementById('slider-1')
let displayValTow=document.getElementById('slider-2')

let minGap = 30;

function rangeOne(){
    if(parseInt(rangeTow.value) - parseInt (rangeOne.value) <=  minGap) {
        rangeOne.value=parseInt(rangeTow.value) + minGap;

    }
    displayValOne.textContent = rangeOne.value;
};

function rangeTow (){
    if(parseInt(rangeTow.value) - parseInt (rangeOne.value) <=  minGap) {
        rangeTow.value=parseInt(rangeOne.value) - minGap;
    }
    displayValTow.textContent = rangeTow.value;
};