import $ from "jquery";

$(function() {
    
});

// $(".dropdown-menu").dropdown("1s");

// $('.parallax-window').parallax({imageSrc: '/img/hero.jpg'});

google.maps.event.addDomListener(window, 'load', init);
        
function init() {
        var mapOptions = {
        zoom: 11,
        
        center: new google.maps.LatLng(40.6700, -73.9400), 
        
        styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}
