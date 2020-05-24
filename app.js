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

//edition slider 

const sliderItem = document.querySelectorAll('.edition__slide');

sliderItem.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`;
})
//mobile story slider
//modal for images
//modal for videos