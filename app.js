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



//  animation - our team member

function animationTeam () {
    if (screen.width > 767) {
        $('.our-team-items').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
     });
    } else {
        $('.our-team-items').slick({
           
            
            
            dots: true,
            arrows: false,
        });
    }
}
animationTeam ();

function animationMobilePricing () {
    if (screen.width < 768) {
        $('.pricing-plan-items').slick({
            infinite: true,
            dots: true,
            arrows: false,
         });
        }
}

animationMobilePricing ();
 





