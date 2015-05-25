/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

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

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


var map;
var MY_MAPTYPE_ID = 'custom_style';
var mapdata;
var latlng = new google.maps.LatLng(36.58, -121.5);
var styleData = {
        icon: "http://alicianoel.github.io/img/map-marker.png",
        size: new google.maps.Size(20, 32),
        fillColor: '#9696B4',
        strokeWeight: 1
           };
infoWindow = new google.maps.InfoWindow({
  content: ""
});
     
function loadData() 
{
  $.getJSON('http://alicianoel.github.io/Data/visual_resume.geojson', function (data) {
mapdata = map.data.addGeoJson(data);
map.data.setStyle(styleData);
});
}

function initialize() {
  var style = [{"featureType":"all","elementType":"geometry.fill","stylers":[{"color":"#404045"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":"0"},{"gamma":"1.00"},{"color":"#3d3e40"},{"visibility":"on"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"},{"lightness":"-9"}]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"lightness":"4"},{"visibility":"on"},{"color":"#2a2f31"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#4b555a"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"lightness":"0"},{"gamma":"0.67"},{"weight":"1"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"on"},{"saturation":"-100"},{"lightness":"-13"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.fill","stylers":[{"lightness":"-8"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"weight":"1.50"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"on"},{"weight":"0.50"},{"color":"#3d3e40"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"all","stylers":[{"color":"#3d3e40"},{"lightness":"11"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"weight":"0.4"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":"-36"}]},{"featureType":"road.local","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"color":"#808080"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#2a2d30"},{"lightness":"3"}]},{"featureType":"transit","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"lightness":"0"},{"color":"#171717"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]}];
  
  var mapOptions = {
    disableDefaultUI: false,
    zoom: 6,
    center: latlng,
    mapTypeControlOptions: {
    style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    position: google.maps.ControlPosition.TOP_RIGHT,
    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]},
    mapTypeId: MY_MAPTYPE_ID
    }
   map = new google.maps.Map(document.getElementById('map'),mapOptions);
    
  var styledMapOptions = {name: 'Simple Atlas'};
  var customMapType = new google.maps.StyledMapType(style, styledMapOptions);
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  
    loadData(); 
     map.data.addListener('click', function(event) {  // info window on click
        //show an infowindow on click
        //infoWindow.setContent(event.feature.getProperty('Updated'));   
        var date = event.feature.getProperty('Date');
        var more = event.feature.getProperty('More');
        var name = event.feature.getProperty('Name');
        var position = event.feature.getProperty('Position');
        infoWindow.setContent("<b>Name:</b> "+name+"<br/><b>Date: </b>"+date+"<br/><b>Position: </b>"+position+" <br/><b>Read More: </b>"+more);
        var anchor = new google.maps.MVCObject();
        anchor.set("position",event.latLng);
        infoWindow.open(map,anchor);
    });
  }
google.maps.event.addDomListener(window, 'load', initialize);

















