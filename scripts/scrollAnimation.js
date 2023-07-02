window.addEventListener('scroll',reveal);

function reveal(){
    document.querySelectorAll('.reveal-ani').forEach((revealSection)=>{
        let windowHeight = window.innerHeight;
        let revealTop = revealSection.getBoundingClientRect().top;
        let revealPoint = 150;


        if( revealTop < windowHeight - revealPoint){
            revealSection.classList.add('active-ani');
        }
        else{
            revealSection.classList.remove('active-ani');
        }
    });
}