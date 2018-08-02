$(document).ready(function() {


$("#contactButton").on("click", function() {
  if ($("#aboutCard").is(":visible")) {
    $("#aboutCard").toggle("slow")
  }
  $("#contactCard").toggle("slow")
  $("#fishIcon").toggleClass("fa-flip-horizontal")
})

$("#aboutButton").on("click", function() {

  if ($("#contactCard").is(":visible")) {
    $("#contactCard").toggle("slow")
  }
  $("#aboutCard").toggle("slow")
  $("#fishIcon").toggleClass("fa-flip-horizontal")
})

var apple = []


























})
