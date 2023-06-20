let currentSlide = 0;

const slides = document.querySelectorAll('.slides');


function showSlide(n){

    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    }

    slides[n].classList.add('active');
}


function nextSlide(){
    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function previousSlide(){
    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}


// showSlide(currentSlide);
// setInterval(nextSlide,4000);


document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('next-btn').addEventListener('click',nextSlide);
    document.getElementById('prv-btn').addEventListener('click',previousSlide);
});

