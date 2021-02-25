let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".nav");

mobileMenu.addEventListener("click",function() {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu")
    }  else {
   
            mainMenu.classList.remove("active-menu")
            mainMenu.classList.add("hidden-menu")
      
    } 
    
})
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 300) {
        mainMenu.classList.remove("active-menu")
        mainMenu.classList.add("hidden-menu")
        mobileMenu.classList.remove("active-menu")
    }
})

//  arrow______up

let arowUp = document.querySelector(".scroll-up")

function showArrowUp() {
    if (window.pageYOffset > document.body.scrollHeight / 4) {
        arowUp.classList.add("hide-arow")
    } else {
        arowUp.classList.remove("hide-arow")
    }
}
window.addEventListener("scroll", showArrowUp)

$('.scroll-up').click(function () {
    $("html, body").animate({
        scrollTop: $('.intro').offset().top-0 
    }, 3000);
});





$('.list-style-about').click(function () {
    $("html, body").animate({
        scrollTop: $('.section-about-us').offset().top-0 
    }, 1000);
});
$('.list-style-servis').click(function () {
    $("html, body").animate({
        scrollTop: $('.section-our-servicec').offset().top-0 
    }, 2000);
});
$('.list-style-port').click(function () {
    $("html, body").animate({
        scrollTop: $('.section-latest-works').offset().top-0 
    }, 2000);
});
$('.list-style-blog').click(function () {
    $("html, body").animate({
        scrollTop: $('.section-pricing-plan').offset().top-0 
    }, 2000);
});
$('.list-style-cont').click(function () {
    $("html, body").animate({
        scrollTop: $('.section-contat-us').offset().top-0 
    }, 2000);
});
$('.arrow_down').click(function () {
    $("html, body").animate({
        scrollTop: $('.section-about-us').offset().top-0 
    }, 1000);
});


//  search btn

let searchImg = document.querySelector(".search-img")
let searchInpt = document.querySelector(".search-btn")

searchImg.addEventListener("click",function() {
   searchImg.classList.toggle("active-input");
    if(searchImg.classList.contains("active-input")) {
        searchInpt.classList.add("active-search")
    } else {
        searchInpt.classList.remove("active-search")
    }
})



//  animation -plan

let activePereklList = document.querySelectorAll(".slider-tochka-perekl-mobile");
let pricingPlanList = document.querySelectorAll(".pricing-plan-item-mobile");
let tabItemsWrap = document.querySelector(".slider-tochka-mobile")

function hideTabContent() {
    pricingPlanList.forEach(tab => {
        tab.classList.add("hide");
        tab.classList.remove("show")
    })
    activePereklList.forEach(item => {
        item.classList.remove("perekl-active")
    })
}
function showTabContent(i=0) {
    pricingPlanList[i].classList.add("show")
    pricingPlanList[i].classList.remove("hide")
    activePereklList[i].classList.add("perekl-active")
}

hideTabContent();
showTabContent()
tabItemsWrap.addEventListener("click",function(e) {
    let target = e.target;

    if(target.classList.contains("slider-tochka-perekl-mobile")) {
        activePereklList.forEach((tab,i) => {
            if(target == tab) {
                hideTabContent();
                showTabContent(i)
            }
        })
    }
})