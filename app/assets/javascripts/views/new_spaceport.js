/*global Starbnb JST*/

Starbnb.Views.NewSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/new_spaceport"],
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
    this.marker = null;
    return this;
  },
  
  onRender: function () {
    var mapOptions = {
      center: { lat: 0, lng: 0},
      zoom: 1,
      draggableCursor:'pointer'
    };
    var mapView = this;
    this.map = new google.maps.Map(this.$('#new-map-canvas')[0], mapOptions);
    google.maps.event.addListener(this.map, 'click', function(event) {
      if (mapView.marker) {
        mapView.marker.setPosition(event.latLng);
      } else {
        mapView.marker = new google.maps.Marker({
          position: event.latLng,
          map: mapView.map,
          title: "spaceport location",
          icon: 'assets/marker-standard.png',
        })
      }
      mapView.updateCoords();
    });
  },
  
  updateCoords: function () {
    var $lat = this.$("#new-spaceport-latitude");
    var $lng = this.$("#new-spaceport-longitude");
    $lat.html(this.marker.position.lat());
    $lng.html(this.marker.position.lng());
  }
  
  
});