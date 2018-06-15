$(document).ready(function(){
  $('.slide-one').owlCarousel({
    loop:true,
    margin:0,
    padding:0,
    nav:false,
    dots:false,
    center:true,
    autoWidth:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
      0:{
          items:1
      },
      900:{
          items:1
      },
      1000:{
          items:3
      },
      2300:{
          items:5
      }


    }
});
});


$(document).ready(function(){
   document.addEventListener('scroll', abc);
  $('.slide-two').owlCarousel({
    loop:true,
    margin:0,
    padding:0,
    nav:false,
    dots:false,
    items: 1,
    // center:true,
    // autoWidth:true,
    autoplaySpeed: 6500,
    autoplay:true,
    // autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
});


// AOS.init({
//   duration: 1000
// });

new WOW().init();


// initMap() - функция инициализации карты
function initMap() {
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(47.248070, 39.628464);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);



var abc = function (bca) {
  console.log(bca);
  console.log({abc: this});
}
