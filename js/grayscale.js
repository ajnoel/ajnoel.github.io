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

      var latlng = new google.maps.LatLng(40.453650, -98.003783);
      var styleData = {
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

    map.data.setStyle({
      visible: true
  });
});
    }

 

      
      
    

    
function initialize() {
  
  
  var style = [ { "featureType" : "poi",
    "stylers" : [ { "visibility" : "off" } ]
  },
  { "elementType" : "geometry",
    "featureType" : "administrative",
    "stylers" : [ { "visibility" : "off" } ]
  },
  { "elementType" : "geometry",
    "featureType" : "administrative.land_parcel",
    "stylers" : [ { "visibility" : "on" } ]
  },
  { "elementType" : "geometry",
    "featureType" : "administrative.country",
    "stylers" : [ { "visibility" : "on" } ]
  },
  { "elementType" : "geometry",
    "featureType" : "administrative.province",
    "stylers" : [ { "visibility" : "on" } ]
  },
  { "elementType" : "geometry",
    "featureType" : "administrative.neighborhood",
    "stylers" : [ { "visibility" : "on" } ]
  },
  { "elementType" : "geometry",
    "featureType" : "administrative.locality",
    "stylers" : [ { "visibility" : "on" } ]
  },
  { "elementType" : "labels",
    "featureType" : "administrative.locality",
    "stylers" : [ { "hue" : "#548096" },
        { "saturation" : -50 },
        { "lightness" : 35 },
        { "visibility" : "on" }
      ]
  },
  { "elementType" : "labels",
    "featureType" : "road",
    "stylers" : [ { "visibility" : "simplified" } ]
  },
  { "elementType" : "geometry",
    "featureType" : "water",
    "stylers" : [ { "hue" : "#548096" },
        { "saturation" : -37 },
        { "lightness" : -10 },
        { "visibility" : "on" }
      ]
  },
  { "elementType" : "all",
    "featureType" : "landscape",
    "stylers" : [ { "hue" : "#E3CBAC" },
        { "saturation" : 31 },
        { "lightness" : -12 },
        { "visibility" : "on" }
      ]
  },
  { "featureType" : "road",
    "stylers" : [ { "visibility" : "simplified" },
        { "saturation" : -49 },
        { "lightness" : 5 }
      ]
  },
  { "elementType" : "geometry",
    "featureType" : "road",
    "stylers" : [ { "visibility" : "simplified" },
        { "saturation" : -90 },
        { "lightness" : 90 }
      ]
  },
  { "featureType" : "administrative.land_parcel",
    "stylers" : [ { "visibility" : "off" },
        { "lightness" : 25 }
      ]
  }
];
  
    

    
    
    

  var mapOptions = {
    disableDefaultUI: false,
    zoom: 5,
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
  

  
loadData(); //loading in all the data as invisible
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

















