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
    Mmap = new google.maps.Map(this.$('#map-canvas')[0], mapOptions);
  },
  
  highlightMarker: function (id) {
    if (id) {
      _(this.markers).each( function (marker) {
        if (marker.spaceportId === id) {
          marker.setMap(null);
          marker.icon = 'assets/marker-highlight.png'
          marker.setMap(Mmap);
        }
      }) 
    }
  },
  
  resetMarker: function (id) {
    if (id) {
      _(this.markers).each( function (marker) {
        if (marker.spaceportId === id) {
          marker.setMap(null);
          marker.icon = 'assets/marker-standard.png'
          marker.setMap(Mmap);
        }
      }) 
    }
  },
  
  
  updateMarkers: function () {
    _(this.markers).each ( function (marker, index) {
      marker.setMap(null);
      marker = null;
    });
    this.markers = [];
    view = this;
    _(this.collection.filteredModels()).each(function(spaceport) {
      var lat = parseFloat(spaceport.get("latitude"));
      var lng = parseFloat(spaceport.get("longitude"));
      var latlng = new google.maps.LatLng(lat, lng);
      var image = 'assets/marker-standard.png';
      var marker = new google.maps.Marker({
          position: latlng,
          map: Mmap,
          title: spaceport.get("name"),
          icon: image,
          spaceportId: spaceport.get("id")
      })
      view.markers.push(marker);
    })
    
  }
});