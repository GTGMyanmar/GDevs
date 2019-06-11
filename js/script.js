$(document).ready(function () {
    
$(".dropdown-button").dropdown({
  inDuration: 300,
  outDuration: 225,
  hover: true, // Activate on hover
  belowOrigin: true, // Displays dropdown below the button
  alignment: "right" // Displays dropdown with edge aligned to the left of button
});
$(".dropdown-button1").dropdown({
    hover: false, 
    belowOrigin: true, // Displays dropdown below the button
    alignment: "right" // Displays dropdown with edge aligned to the left of button
});
$(".button-collapse").sideNav(); 

        

    
});
