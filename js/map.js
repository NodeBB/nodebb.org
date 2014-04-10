$(function(){

	  var markers = [{"_id":"52cbb6a5e746d36b13000063","latLng":[52.37,4.89],"name":"Amsterdam","state":400,"status":100},{"_id":"52cbb6a5e746d36b13000064","latLng":[1.3000,103.8],"name":"Singapore","state":400,"status":100},{"_id":"52cbb6a5e746d36b13000065","latLng":[40.72,-74],"name":"NYC","state":400,"status":100},{"_id":"52cbb6a5e746d36b13000062","latLng":[37.7749300,-122.4167],"name":"SFO","state":400,"status":100}]
	  
	  var colors = [];
	  for (var i = 0; i < markers.length; i++) {
	      if (markers[i].status == 100) {
	          colors[i] = 0;
	      }
	      else if (markers[i].status == 200) {
	          colors[i] = 1;
	      }
	      else if (markers[i].status == 300) {
	          colors[i] = 2;
	      }
	      else if (markers[i].status == 400) {
	          colors[i] = 2;
	      }
	      else {
	          colors[i] = 0;
	      }
	  };
	  
	  
	  $('#world-map-markers').vectorMap({
	    map: 'world_mill_en',
	    zoomButtons : false,              
	    zoomOnScroll: false,
	    onRegionLabelShow: function(event, label, code){
	      event.preventDefault();
	    },
	    scaleColors: ['#FFF', '#FFF'],
	    normalizeFunction: 'linear',
	    hoverOpacity: 1,
	    hoverColor: false,
	    regionStyle: {
	      initial: {
	        fill: '#FFF',
	        "fill-opacity": .45,
	        stroke: 'none',
	        "stroke-width": 0,
	        "stroke-opacity": 0
	      },
	      hover: {
	        "fill-opacity": .45
	      },
	      selected: {
	        fill: ''
	      },
	      selectedHover: {
	      }
	    },
	    markerStyle: {
	      initial: {
	        r: '12'
	      }
	    },
	    backgroundColor: '',
	    markers: markers,
	    series: {
	      markers: [{
	        attribute: 'fill',
	        scale: ['#3B9BE7'],
	        values: colors,
	        stroke: 'none',
	        min: 0,
	        max: 1,
	      },{
	        attribute: 'stroke',
	        scale: ['#3B9BE7'],
	        values: colors,
	        min: 0,
	        max: 1
	      }
	      ]
	    }
	  });
	});