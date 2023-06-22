

document.querySelector('.js-menu-btn').addEventListener('click',()=>{
    document.querySelector('.sidebar-menu').classList.add('show-sidebar-menu');
    document.querySelector('.sidebar-menu').classList.remove('hide-sidebar-menu');
});

document.querySelector('.js-close-btn').addEventListener('click',()=>{
    document.querySelector('.sidebar-menu').classList.add('hide-sidebar-menu');
});

document.querySelectorAll('.menu').forEach(
    (menuBtn)=>{
        menuBtn.addEventListener('click',()=>{
            document.querySelector('.sidebar-menu').classList.add('hide-sidebar-menu');
        });
    }
);