//PORTFOLIO FILTER

$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});


 //BASIC INITIALIZATION OF MODALS

//demo 01
// $("#demo01").animatedModal();


//demo 02
// $("#demo02").animatedModal({
//     modalTarget:'modal-02',
//     animatedIn:'fadeIn',
//     animatedOut:'zoomOut',
//     color:'#3498db',
//     // Callbacks
//     beforeOpen: function() {
//         console.log("The animation was called");
//     },           
//     afterOpen: function() {
//         console.log("The animation is completed");
//     }, 
//     beforeClose: function() {
//         console.log("The animation was called");
//     }, 
//     afterClose: function() {
//         console.log("The animation is completed");
//     }
// });


//demo 03
// $("#demo03").animatedModal({
//     modalTarget:'modal-03',
//     animatedIn:'fadeIn',
//     animatedOut:'zoomOut',
//     color:'#333',
//     // Callbacks
//     beforeOpen: function() {
//         console.log("The animation was called");
//     },           
//     afterOpen: function() {
//         console.log("The animation is completed");
//     }, 
//     beforeClose: function() {
//         console.log("The animation was called");
//     }, 
//     afterClose: function() {
//         console.log("The animation is completed");
//     }
// });

