let left = 0;
let timer;
let step = 128;
autoSlider();


document.getElementById('slider-right').onclick = function (){
    let polosa = document.getElementById('polosa');
    left = left - 128;
    if(left <= -454){
        left = left + 128;
    }
    polosa.style.left = left +'px';
}

document.getElementById('slider-left').onclick = function (){
    let polosa = document.getElementById('polosa');
    left = left + 128;
    if(left > 0){
        left = 0;
    }
    polosa.style.left = left +'px';
    
}

function autoSlider() {
    timer = setTimeout (function () {
        var polosa = document.getElementById('polosa');
        left = left - step;
        if(left <= -334){
            step = -128;
        }
        if(left > 0){
            left = 0;
            step = 128;
        }
        polosa.style.left = left + 'px';
        autoSlider();
    },5000);
}