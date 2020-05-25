// on and off navbar

const navi = document.querySelector('.nav');
const naviLogo = document.querySelector('.nav__logo');
// let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    // console.log(`prevScroll:${prevScrollPos}`);
    console.log(`currentScroll:${currentScrollPos}`);

    if(currentScrollPos > 0){
        navi.classList.add('showNavi');
        naviLogo.classList.add('showNaviLogo');
    }else{
        navi.classList.remove('showNavi');
        naviLogo.classList.remove('showNaviLogo');
    }



}

// Slide in nav overlay

const navOverlay = document.querySelector('.nav__overlay');
const navBtn = document.querySelector('.menu');
navBtn.addEventListener('click',()=>{
    navOverlay.classList.toggle('slideInOverlay');
    navi.classList.remove('showNavi');

    if(naviLogo.classList.contains('showNaviLogo')){
        naviLogo.classList.remove('showNaviLogo');
        navBtn.firstElementChild.firstElementChild.setAttribute('href','./img/sprites.svg#icon-menu');
    }
    else{
        naviLogo.classList.add('showNaviLogo');
        navBtn.firstElementChild.firstElementChild.setAttribute('href','./img/sprites.svg#icon-close');
    }
});

//edition slider 

const sliderItem = document.querySelectorAll('.edition__slide');
const editionNextBtn = document.querySelector('.next--1');
const editionPrevBtn = document.querySelector('.prev--1');
const editionLabel = document.querySelectorAll('.edition__item');
const editionList = document.querySelector('.edition__list');
sliderItem.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
})

let editionCount = 0;
editionPrevBtn.style.display = 'none';

editionNextBtn.addEventListener('click',()=>{
    editionCount++;
    moveEdition();
})
editionPrevBtn.addEventListener('click',()=>{
    editionCount--;
    moveEdition();
})

editionLabel.forEach((label,index)=>{
    label.addEventListener('click',()=>{
        editionCount = index;
        moveEdition();
    })
});

function moveEdition(){
    if(editionCount === 0){
        editionPrevBtn.style.display = 'none';
    }
    else{
        editionPrevBtn.style.display = 'block';
    }
    if(editionCount === sliderItem.length - 1){
        editionNextBtn.style.display = 'none';
    }
    else{
        editionNextBtn.style.display = 'block';
    }

    editionLabel.forEach((label,index)=>{
        if(index === editionCount){
            label.classList.add('pickedEdition');
        }
        else{
            label.classList.remove('pickedEdition');
        }
    });

    sliderItem.forEach((slide,index)=>{
        slide.style.transform = `translateX(-${editionCount * 100}%)`
    });

    editionLabel.forEach((label,index) =>{
        if(editionCount === 1){
            editionList.style.transform = `translateX(-100px)`
        }
        else{
            editionList.style.transform = `translateX(-${(label.clientWidth) * editionCount}px)`;
        }
    });
    // editionList.style.transform = `translateX(-${(editionList.clientWidth / editionList.children[editionCount].clientWidth) * 100})%`;

}


//mobile story slider

const mq = window.matchMedia('(max-width:900px)');

if(mq){
    const storyItems = document.querySelectorAll('.story__item');
    const storyNextBtn = document.querySelector('.next--2');
    const storyPrevBtn = document.querySelector('.prev--2');
    const storyDots = document.querySelectorAll('.story__dot');
    storyPrevBtn.style.display = 'none';

    storyItems.forEach((item,index)=>{
        item.style.left = `${index * 100}%`;
    })

    let storyCount = 0;


    storyDots.forEach((dot,index)=>{
        dot.addEventListener('click',function(){
            storyCount = index;
            moveStory();
        });
    });

    function moveStory(){
        if(storyCount === 0){
            storyPrevBtn.style.display = 'none';
        }
        else{
            storyPrevBtn.style.display = 'block';
        }
        if(storyCount === storyItems.length - 1){
            storyNextBtn.style.display = 'none';
        }
        else{
            storyNextBtn.style.display = 'block';
        }
    
     storyItems.forEach((story,index)=>{
            story.style.transform = `translateX(-${storyCount * 100}%)`
        });

    storyDots.forEach((dot,index)=>{
        if(index === storyCount){
            dot.classList.add('currentDot');
        }
        else{
            dot.classList.remove('currentDot');
        }
    });
    }

    storyNextBtn.addEventListener('click',function(){
        storyCount++;
        moveStory();
    });
    storyPrevBtn.addEventListener('click',function(){
        storyCount--;
        moveStory();
    });

 
}

// show screenshots
const showScreenshotBtn =  document.querySelector('.screenshots__btn');
const screenshots = document.querySelectorAll('.collection__cover');
const screenshotBtnOffset = showScreenshotBtn.getBoundingClientRect();
let btnTopOffset = screenshotBtnOffset.top;

showScreenshotBtn.addEventListener('click',showScreenshots);

for(let i = 6; i < screenshots.length;i++){
    screenshots[i].style.display = 'none';
}

function showScreenshots(){
    for(let i = 6; i < screenshots.length;i++){
        screenshots[i].classList.toggle('showScreenshot');
    }

    if(screenshots[8].classList.contains('showScreenshot')){
        showScreenshotBtn.firstChild.textContent = 'Close gallery';
        showScreenshotBtn.firstElementChild.firstElementChild.setAttribute('href','./img/sprites.svg#icon-cheveron-up')
    }else{
        showScreenshotBtn.firstChild.textContent = 'Show all 30 screenshots';
        showScreenshotBtn.firstElementChild.firstElementChild.setAttribute('href','./img/sprites.svg#icon-cheveron-down')
    }
}

//modal for wallpapers
const wallpapers = document.querySelector('.gallery');
const modal = document.querySelector('.modal');

// modal btn

const modalCloseBtn = document.querySelector('.close');
const modalImg = document.querySelector('.modal__img');
const modalNextBtn = document.querySelector('.next--3');
const modalPrevBtn = document.querySelector('.prev--3');
let modalCount;
modalCloseBtn.addEventListener('click',()=>{
    modal.classList.remove('showModal');
});

wallpapers.addEventListener('click',showModal);

function showModal(e){
    console.log(e.target);
    console.log(e.target.parentElement);

    modalNextBtn.style.display = 'none';
    modalPrevBtn.style.display = 'none';

    if(e.target.parentElement.className.includes('cover')){
        console.log('showModal');
        modal.classList.add('showModal');
        let target = e.target.src;
        if(target.includes('wp-2') || target.includes('wp-3')){
            modalImg.style.width = 'auto';
            console.log(target);
        }else{
            modalImg.style.width = '100%';
        }
        modal.lastElementChild.firstElementChild.setAttribute('src',target);
    }

}


//modal for images
const modalCounter = document.querySelector('.modal__counter');
screenshots.forEach((shot,index)=>{
    shot.addEventListener('click',function(){
        modalCount = index + 1;
        modal.classList.add('showModal');
        modal.lastElementChild.firstElementChild.setAttribute('src',`./img/${modalCount}.jpg`);
        modalNextBtn.style.display = 'block';
        modalPrevBtn.style.display = 'block';
    });
});


modalNextBtn.addEventListener('click',function(){
    modalCount++;
    showNextImg();
});

modalPrevBtn.addEventListener('click',function(){
    modalCount--;
    showNextImg();
});




function showNextImg(){
    if(modalCount <= 0){
        modalCount = screenshots.length;
    }
    else if(modalCount === screenshots.length + 1){
        modalCount = 1;
    }

    modal.lastElementChild.firstElementChild.setAttribute('src',`./img/${modalCount}.jpg`);
    modalCounter.textContent = `${modalCount}/${screenshots.length}`;

}
//modal for videos