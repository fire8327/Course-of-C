/*jshint esnext: true */
/* navigation */
$("#toggler, #overlay, #close").click(()=>{
  $("#menu").toggleClass("translate-x-full")
  $("body").toggleClass("overflow-hidden")
  $("#overlay").toggleClass("hidden")
})
