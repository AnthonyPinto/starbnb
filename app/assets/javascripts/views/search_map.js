/*global Starbnb JST*/

Starbnb.Views.Map = Backbone.CompositeView.extend({
  template: JST["search_map"],
  
  initialize: function () {
    this.listenTo(this.collection, "sync", this.updateMarkers);
    this.listenTo(this.collection, 'filter', this.updateMarkers);
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
  
  updateMarkers: function () {
    _(this.markers).each ( function (marker, index) {
      marker.setMap(null);
      marker = null;
    });
    this.markers = [];
    view = this;
    _(this.collection.filteredModels()).each(function(port) {
      var lat = parseFloat(port.get("latitude"));
      var lng = parseFloat(port.get("longitude"));
      var latlng = new google.maps.LatLng(lat, lng);
      var marker = new google.maps.Marker({
          position: latlng,
          map: Mmap,
          title: port.get("name")
      })
      view.markers.push(marker);
    })
    
  }
});