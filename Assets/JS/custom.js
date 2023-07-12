/*jshint esnext: true */
/* navigation */
$("#toggler, #overlay, #close, .link").click(()=>{
  $("#menu").toggleClass("translate-x-full")
  $("body").toggleClass("overflow-hidden")
  $("#overlay").toggleClass("hidden")
})


/* back to top */
let toTopButton = $("#to-top-button");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        toTopButton.removeClass("hidden");
    } else {
        toTopButton.addClass("hidden");
    }
}

function goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}