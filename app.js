//variables 
// Navbar Variables
const navi = document.querySelector('.nav');
const naviLogo = document.querySelector('.nav__logo');
const navOverlay = document.querySelector('.nav__overlay');
const navBtn = document.querySelector('.menu');
// on and off navbar
//edition variables
const sliderItem = document.querySelectorAll('.edition__slide');
const editionNextBtn = document.querySelector('.next--1');
const editionPrevBtn = document.querySelector('.prev--1');
const editionLabel = document.querySelectorAll('.edition__item');
const editionList = document.querySelector('.edition__list');
let editionCount = 0;

//media query
const mq = window.matchMedia('(max-width:900px)');

// Screenshots Variables
const showScreenshotBtn =  document.querySelector('.screenshots__btn');
const screenshots = document.querySelectorAll('.collection__cover');
const screenshotBtnOffset = showScreenshotBtn.getBoundingClientRect();
let btnTopOffset = screenshotBtnOffset.top;


//modal variables
//modal for wallpapers
const wallpapers = document.querySelector('.gallery');
const modal = document.querySelector('.modal');

// modal btn

const modalCloseBtn = document.querySelector('.close');
const modalImg = document.querySelector('.modal__img');
const modalNextBtn = document.querySelector('.next--3');
const modalPrevBtn = document.querySelector('.prev--3');
let modalCount = 1;
const ytVid = document.querySelector('iframe');
const modalCounter = document.querySelector('.modal__counter');

//modal for videso
const trailers = document.querySelectorAll('.trailer');
const modalCover = document.querySelector('.modal__cover');

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
navBtn.addEventListener('click',()=>{
    navOverlay.classList.toggle('slideInOverlay');
    navi.classList.remove('showNavi');
    naviLogo.classList.add('showNaviLogo');

    if(naviLogo.classList.contains('showNaviLogo')){
        navBtn.firstElementChild.firstElementChild.setAttribute('href','./img/sprites.svg#icon-menu');
    }
    else{
        naviLogo.classList.add('showNaviLogo');
        naviLogo.classList.add('showNavi');
        navBtn.firstElementChild.firstElementChild.setAttribute('href','./img/sprites.svg#icon-close');
    }
});

//edition slider 

sliderItem.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
})

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
        slide.style.transform = `translateX(-${editionCount * 100}%)`;
    });

    editionLabel.forEach((label,index) =>{
        if(editionCount === 1){
            editionList.style.transform = `translateX(-100px)`;
        }
        else{
            editionList.style.transform = `translateX(-${(label.clientWidth) * editionCount}px)`;
        }
    });
}


//mobile story slider

if(mq){
    const storyItems = document.querySelectorAll('.story__item');
    const storyNextBtn = document.querySelector('.next--2');
    const storyPrevBtn = document.querySelector('.prev--2');
    const storyDots = document.querySelectorAll('.story__dot');
    let storyCount = 0;
    storyPrevBtn.style.display = 'none';

    storyItems.forEach((item,index)=>{
        item.style.left = `${index * 100}%`;
    })

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

// Show Screenshots
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


modalCloseBtn.addEventListener('click',()=>{
    modal.classList.remove('showModal');
    ytVid.style.display = 'none';
});

wallpapers.addEventListener('click',showModal);

function showModal(e){
    console.log(e.target);
    console.log(e.target.parentElement);
    modalImg.style.display = 'block';
    modalNextBtn.style.display = 'none';
    modalPrevBtn.style.display = 'none';
    modalCounter.style.opacity = '0';

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
screenshots.forEach((shot,index)=>{
    shot.addEventListener('click',function(){
        modalCounter.style.opacity = '1';
        modalCounter.textContent = `${modalCount}/${screenshots.length}`;
        modalImg.style.display = 'block';
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
    modalCounter.style.opacity = '1';
    modalCounter.textContent = `${modalCount}/${screenshots.length}`;
    modal.lastElementChild.firstElementChild.setAttribute('src',`./img/${modalCount}.jpg`);

}
//modal for videos
ytVid.style.display = 'none';
trailers.forEach((trailer,index)=>{
    trailer.addEventListener('click',function(){
        modalCounter.style.opacity = '0';
        let videoSrc;
        modalImg.style.display = 'none';
        ytVid.style.display = 'block';
        modal.classList.add('showModal');

        if(index === 0){
            videoSrc = 'https://www.youtube.com/embed/_nisfcYeQwY';
        }
        if(index === 1){
            videoSrc = 'https://www.youtube.com/embed/eIO4VTx-6uo';
        }
        if(index === 2){
            videoSrc = 'https://www.youtube.com/embed/tU8BRn32wwM';
        }

        ytVid.setAttribute('src',videoSrc);
        ytVid.className = 'importedVid';
    });
});