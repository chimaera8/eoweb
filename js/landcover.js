
var map;

initMap();
initInterface();

function initMap() {
 L.mapbox.accessToken = 'pk.eyJ1Ijoia2ltYWVyYSIsImEiOiJFRmx4Q2k0In0.1xgFS81ORguzsqeKGavBiA';
 var satellite = L.mapbox.tileLayer('mapbox.satellite')
 var streets = L.mapbox.tileLayer('mapbox.streets')
 
  map = L.mapbox.map('map',null, { // 'mapbox.streets'
        minZoom: 6,
        maxZoom: 12,
        attribution: false,
        preferCanvas: true,
        zoomControl: true,
		layers: [streets]
  }).setView([51.08, 10.13], 7);   // latitude 40, longitude -75, zoom level 5

	var baseMaps = {
	"Satellite": satellite,
    "Streets": streets
	};
	
  L.control.layers(baseMaps, null, { position: 'topleft' }).addTo(map);

  L.easyButton('<img src="img/info_small.png" class="icon">', function(btn, map){
		disp = document.getElementById("infoText").style.visibility
		if(disp == "hidden") {
			document.getElementById("infoText").style.visibility = "visible"
		} else {
			document.getElementById("infoText").style.visibility = "hidden"
		}
	}, 'Site Information', {
  position: 'topleft'
  }).addTo(map);

  tilesNew = L.tileLayer('data/tv1o/{z}/{x}/{y}.png', {tms:true});
  //tilesOld = L.tileLayer('data/tv1o/{z}/{x}/{y}.png', {tms:true});
  //slovakia = L.tileLayer('data/slovakia_noBlanks/{z}/{x}/{-y}.png');
  //slovakia2 = L.tileLayer('data/slovakia/{z}/{x}/{y}.png', {tms:true});
 
  //map.addLayer(tilesOld)
  map.addLayer(tilesNew)
  //map.addLayer(slovakia)
  //map.addLayer(slovakia2)
  tilesNew.bringToFront();
  //slovakia.bringToFront();
  
  //ar = new L.GeoJSON.AJAX("data/area.geojson", {onEachFeature: onEachCountry});
  //ar.addTo(map);
  //ar.on('data:loaded', function() {
  //  ar.bringToFront()

  //  ar.setStyle(regularStyle);
    //getFeatureByName(countries, "Burkina Faso", "SOVEREIGNT").setStyle(burkinaRegular);

    //var ctx = document.getElementById("chart_population");
    //createLineChartFromPolygon(ctx, getFeatureByName(countries, "Burkina Faso", "SOVEREIGNT"));
  //}.bind(this));
}

function initInterface() {
  attribution = L.control.attribution({ position: 'bottomright' }).addTo(map);
  scale = L.control.scale({ position: 'bottomright' }).addTo(map);

  // Opacity Slider
  var slider = document.getElementById('slider');
  var sliderValue = document.getElementById('slider-value');

  slider.addEventListener('input', function(e) {
      tilesNew.setOpacity(parseInt(e.target.value, 10) / 100)
      //tilesOld.setOpacity(parseInt(e.target.value, 10) / 100)
	  //slovakia.setOpacity(parseInt(e.target.value, 10) / 100)
	  //slovakia2.setOpacity(parseInt(e.target.value, 10) / 100)
      sliderValue.textContent = e.target.value + '%';
  });

 var img = document.createElement("img");
 img.src = "img/legend.png";
 var src = document.getElementById("x");
 legend.appendChild(img);

 var closeButton = document.createElement('div');
 closeButton.className = 'cB';
 legend.appendChild(closeButton);
 closeButton.onclick = function() {
   document.getElementById("legend").style.visibility = 'hidden';
   document.getElementById("showLegend").style.visibility = 'visible';
   document.getElementById("exmpl").style.bottom = '40px';
   document.getElementById("showExamples").style.bottom = '40px';
 }

 document.getElementById("showLegend").onclick = function() {
   document.getElementById("legend").style.visibility = 'visible';
   document.getElementById("showLegend").style.visibility = 'hidden';
   document.getElementById("exmpl").style.bottom = '130px';
   document.getElementById("showExamples").style.bottom = '130px';
 }
 
  var closeExamples = document.createElement('div');
 closeExamples.className = 'cE';
 exmpl.appendChild(closeExamples);
 closeExamples.onclick = function() {
   document.getElementById("exmpl").style.visibility = 'hidden';
   document.getElementById("showExamples").style.visibility = 'visible';
 }

 document.getElementById("showExamples").onclick = function() {
   document.getElementById("exmpl").style.visibility = 'visible';
   document.getElementById("showExamples").style.visibility = 'hidden';
 }
 
 
 var input = document.getElementById('toggle');
 var outputtext = document.getElementById('name');

 input.addEventListener('change',function(){
    if(this.checked) {
		//slovakia.bringToFront()
		//tilesOld.bringToFront()
    } else {
		//slovakia2.bringToFront()
		//tilesNew.bringToFront()
    }
});
}

function zoomTo(arg) {
	if(arg == 'ex1') {
		map.setView([52.5102, 13.3962], 12)
	}
	if(arg == 'ex2') {
		map.setView([53.0823, 8.7999], 12)
	}
	if(arg == 'ex3') {
		map.setView([49.3904, 8.2866], 12)
	}
	if(arg == 'ex4') {
		map.setView([47.3602, 10.8683], 12)
	}
}

function onEachCountry(feature, layer) {
  	layer.on({
  		mouseover: function(e) {
			layer.setStyle(hoverStyle)
  		},
  		mouseout: function(e) {
			layer.setStyle(regularStyle)
  		},
      click: function(e) {
	  }
  	});

	//if(displayAvailabilitiesS2Color || displayAvailabilitiesLSS2Color) {
	//	layer.bindTooltip('Tile: '+feature.properties.Name + '<br>' + "blabla");
	//} else {
	//	layer.bindTooltip('Tile: '+feature.properties.Name);
	//}

	//layer.on('click', (evt) => {
	//  if(s2Chart != null) {
	//	s2Chart.clear()
	//  }
	//});
  }
