
$( document ).ready(function() {
    //alert("--");
  $('#home_canhelp_btn').click(myFunction);
  $('#home_canhelp_bethe_btn').click(myFunctionDos);
  
});



function myFunction() {
    $("#home_share_facts_izq").slideToggle();
    $("#home_share_facts_der").hide();
 }
 function myFunctionDos() {
    $("#home_share_facts_der").slideToggle();
    $("#home_share_facts_izq").hide();
 
 }