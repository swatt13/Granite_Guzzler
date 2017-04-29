var map;
function initialize(){
  var center = new google.maps.LatLng(57.1497, 2.0943);
  map = new google.maps.Map(document.getElementById('map'),{
    center: center,
    zoom: 13
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
