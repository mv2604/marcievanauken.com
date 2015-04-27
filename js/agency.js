/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


//Header - Hides and Shows orange bar
function hide_orangebar() {
	document.getElementById('orange-top').style.visibility="hidden";
}
function show_orangebar() {
	document.getElementById('orange-top').style.visibility="visible";
}

//Profile - image fader
$(function(){
    // Hide all images except the first within your "fade In" <div>
    $('.fadein img:gt(0)').hide();
    // Set an interval to occur every 3 seconds (3000ms)
    setInterval(function(){
      // Fade out the first element and fade in the next and then move the elements
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      3500);
});


//Resume - Toggles between different resume views
$(function() {
    $("[name=toggler]").click(function(){
            $('.resume-experience').hide();
            $("#resume-left-"+$(this).val()).fadeToggle();
    });
 });

//Process - Pie chart RESEARCH
var pieDataResearch = [
    {
        value: 50,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Inspiration"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Ideation"
    },
    {
        value: 0,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Implementation"
    }
]

//Process - Pie chart CONCEPTS
var pieDataConcepts = [
    {
        value: 30,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Inspiration"
    },
    {
        value: 30,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Ideation"
    },
    {
        value: 40,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Implementation"
    }
]


$(document).ready(function(){

  //Resume - experience slider
	$('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: true
	});

  //Process - Pie chart RESEARCH
  var pieCtx = $("#pieChartResearch").get(0).getContext("2d");
  var myPieChart = new Chart(pieCtx).Pie(pieDataResearch, {
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%> <%=(segments[i].value/total*100).toFixed(0)%>%<%}%></li><%}%></ul>"
  });

  //Process - Pie chart LEGEND RESERCH
  var legend = myPieChart.generateLegend();
    $('.legendResearch').append(legend);

  
  //Process - Pie chart CONCEPTS
  var pieConcepts = $("#pieChartConcepts").get(0).getContext("2d");
  var myPieConcepts = new Chart(pieConcepts).Pie(pieDataConcepts, {
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%> <%=(segments[i].value/total*100).toFixed(0)%>%<%}%></li><%}%></ul>"
  });
  
  //Process - Pie chart LEGEND RESERCH
  var legend = myPieConcepts.generateLegend();
    $('.legendConcepts').append(legend);


});


//Contact - Hides and Shows orange bar - css is hiding it onload
function show_orangetype() {
	document.getElementById('contact-orange-type').style.visibility="visible";
}
function hide_orangetype() {
	document.getElementById('contact-orange-type').style.visibility="hidden";
}




