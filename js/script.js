// Google maps
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
//---------------------------------------------

// Клик по гамбургеру
var ham = document.querySelector('.hamburger');
var mobMenu = document.querySelector('.mob-nav-links');

ham.addEventListener('click', function() {
  mobMenu.classList.toggle('active');
});
//---------------------------------------------

// Отображение кнопки "наверх" при скролле
var arrowUp = document.querySelector('.arrow-up');

window.onscroll = function() {
  if (window.pageYOffset > 200) {
    arrowUp.style.display = 'block';
  }

  else if (window.pageYOffset < 200) {
    arrowUp.style.display = 'none';
  }
};
//---------------------------------------------

// Плавный скролл к якорям
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

// Owl carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right" aria-hidden="true"></i>']
  });
});
