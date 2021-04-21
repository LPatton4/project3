var map;
 
function initMap(){
	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8781, lng: -87.6298},
    zoom: 10
  });
	
	const rtds = new google.maps.Marker ({
		animation: google.maps.Animation.DROP,
		position: {lat: 41.845460, lng: -87.622810},
		map,
		title: "Russell Talbert Dance Studio",
	});
	
	const jones = new google.maps.Marker ({
		animation: google.maps.Animation.DROP,
		position: {lat: 41.872898, lng: -87.627930},
		map,
		title: "Jones College Prep",
	});
	
	const fullerpark = new google.maps.Marker ({
		animation: google.maps.Animation.DROP,
		position: {lat: 41.811770, lng: -87.634600},
		map,
		title: "Fuller Park",
	});
}
	
$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 600
});	