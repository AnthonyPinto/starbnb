/*global Starbnb JST*/

Starbnb.Views.Map = Backbone.CompositeView.extend({
  template: JST["search_map"],
  
  initialize: function () {
    this.listenTo(this.collection, "sync", this.updateMarkers);
    this.listenTo(this.collection, 'filter', this.updateMarkers);
    this.listenTo(this.collection, 'hovering', this.highlightMarker);
    this.listenTo(this.collection, 'notHovering', this.resetMarker);
    this.markers = [];
  },
  
  
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  onRender: function () {
    var mapOptions = {
      center: { lat: 0, lng: 0},
      zoom: 2
    };
    var mapView = this
    this.map = new google.maps.Map(this.$('#map-canvas')[0], mapOptions);
    google.maps.event.addListener(this.map, 'bounds_changed', function() {
      console.log('bounds changed');
      mapView.filterResults();
    });
  },
  
  filterResults: function () {
    console.log(this.map.getBounds());
    this.collection.setBounds(this.map.getBounds())
  },
  
  
  highlightMarker: function (id) {
    if (id) {
      _(this.markers).each( function (marker) {
        if (marker.spaceportId === id) {
          marker.setIcon('assets/marker-highlight.png');
          marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
        }
      }) 
    }
  },
  
  resetMarker: function (id) {
    if (id) {
      _(this.markers).each( function (marker) {
        if (marker.spaceportId === id) {
          marker.setIcon('assets/marker-standard.png');
          marker.setZIndex(marker.spaceportId);
        }
      }) 
    }
  },
  
  
  updateMarkers: function () {
    var mapView = this;
    _(this.markers).each ( function (marker, index) {
      marker.setMap(null);
      marker = null;
    });
    this.markers = [];
    mapView = this;
    _(this.collection.filteredModels()).each(function(spaceport) {
      
      //literal html because subviews do not attach properly in info windows
      var contentString = "" +
        "<a href='#/spaceports/" + spaceport.get('id') + "'>" +
          "<img src='" + spaceport.photos().at(0).escape('url') + "' class='brief-img'>" +
          "<div class='user-starport-price-frame'>" +
            "<span class='brief-dollar price-color'><strong>$</strong></span>" +
            "<h3 class='brief-price price-color'>" + spaceport.escape('price') + "</h3>" +
          "</div>" +
          "<div>" +
            "<h5>" + spaceport.escape("name") + "</h5>"
          "<div>"
        "</a>"

      var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
      });
      
      
      
      var lat = parseFloat(spaceport.get("latitude"));
      var lng = parseFloat(spaceport.get("longitude"));
      var latlng = new google.maps.LatLng(lat, lng);
      var image = 'assets/marker-standard.png';
      var marker = new google.maps.Marker({
          position: latlng,
          map: mapView.map,
          title: spaceport.get("name"),
          icon: image,
          spaceportId: spaceport.get("id"),
          zIndex: spaceport.get("id")
      })
      
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(mapView.map,marker);
        if (mapView.openWindow && mapView.openWindow !== infowindow) {
          mapView.openWindow.close();
        } 
        mapView.openWindow = infowindow;
      });
      
      mapView.markers.push(marker);
    })
    
  },
  
  
  
});