function myMap() {
  myLatLng = {lat: 38.707103, lng: -77.021698};
  map = new google.maps.Map(document.querySelector('.gmap'), {
    center: myLatLng,
    zoom: 15,
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#ffffff'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}

var right = document.querySelector('.slide-arrow-right');
var left = document.querySelector('.slide-arrow-left');
var slideWrapper = document.querySelector('.slide-wrapper');
var slide = document.querySelector('.slide');

var offSet = 0; //ширина сдвига слайда
var width = document.querySelector('.slide').offsetWidth + 5; //ширина слайда
var click = 0;


// Обработка кликов по кнопкам слайдера
right.addEventListener('click', function(){

  if ( !(click >= 2) ) {
    offSet = offSet - width;
    slideWrapper.style.transform = 'translateX('+offSet+'px)';
    click ++;
  }
  console.log(click);
});

left.addEventListener('click', function(e){

  if ( !(click <= 0) ) {
    offSet = offSet + width;
    slideWrapper.style.transform = 'translateX('+offSet+'px)';
    click --;
  }
  console.log(click);
});

// Клик по гамбургеру

var ham = document.querySelector('.hamburger');
var mobMenu = document.querySelector('.mob-nav-links');

ham.addEventListener('click', function() {
  mobMenu.classList.toggle('active');
});
