// page loader hear
$(document).ready(function(){
    $(".dot-pulse").fadeOut(500,()=>{
        $(".loader").fadeOut(800)
        $("body").css("overflow","scroll")
    })
})

// navbar scroll hear
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".header-nav").style.backgroundColor = "white";
    document.querySelector(".header-nav").style.padding = "0.2rem 0rem";
  }else {
    document.querySelector(".header-nav").style.backgroundColor = "transparent";
    document.querySelector(".header-nav").style.padding = "0.8rem 0rem";
  }
}

// navbar active hear
$(".navbar .nav-hov").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
    $('.navbar-collapse').collapse('hide')
});

// navbar active with scroll hear
let scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarNav'
})

// active client review hear
$('.client-container').on('click', function(){
    $(".client-container").find(".active-client").removeClass("active-client"); // remove all active-client class from rate star
    $(this).addClass('active-client').siblings().removeClass('active-client'); // add active-client class to li who clicked it and remove this class from another li
    $(this).find('.client-rate p').addClass('active-client'); // add active-client class to rate star who clicked it
    $('.client-right-part > div').hide(); // hide all clients reviews
    $($(this).data('target')).show(); // show the review who has the same data-target with clicked li
})








    


