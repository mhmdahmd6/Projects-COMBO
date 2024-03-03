// Profile img
let imga =  document.querySelector('#img');

function img_1() {
    imga.style.content = "url('img/burger-1.png')";
}
function img_2() {
    imga.style.content = "url('img/burger-2.png')";
}
function img_3() {
    imga.style.content = "url('img/burger-6.png')";
}
function img_4() {
    imga.style.content = "url('img/burger-5.png')";
}
function img_5() {
    imga.style.content = "url('img/burger-3.png')";
}

// 

const allFilterItems = document.querySelectorAll('.filter-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMcontentloaded', () => {
    allFilterBtns[0].classList.add('active-btn');
})

allFilterBtns.forEach((btn) => {
    btn.addEventListener('click',() => {
        showFilteredContent(btn);
    })
})

function showFilteredContent(btn){
    allFilterItems.forEach((item) => {
        if(item.classList.contains(btn.id)){
            resetActiveBtn();
            btn.classList.add('active-btn')
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}

function resetActiveBtn(){
    allFilterBtns.forEach((btn) => {
        btn.classList.remove('active-btn')
    })
}

// 
const navBtn = document.querySelectorAll('.nav-btn');
window.addEventListener('DOMcontentloaded', () => {
    navBtn[0].classList.add('after');
})

navBtn.forEach((btns) => {
    btns.addEventListener('click',() => {
        showFilteredContents(btns);
    })
})
function showFilteredContents(btns){
    resetActivenavBtn();
            btns.classList.add('after')
}
function resetActivenavBtn(){
    navBtn.forEach((btns) => {
        btns.classList.remove('after')
    })
}

ScrollReveal({ 
    reset: true,
    distance: '15px',
    duration: 2500,
    delay: 400
})

ScrollReveal().reveal('.prof-text , .box-o-1'  , { delay: 500, origin: 'left'});
ScrollReveal().reveal('.footer ,.container', { delay: 600, origin: 'bottom'});
ScrollReveal().reveal('.prof-img ,.box-o-2', { delay: 700, origin: 'right'});
ScrollReveal().reveal('.navber', { delay: 700, origin: 'top'});

// showSidebar

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}