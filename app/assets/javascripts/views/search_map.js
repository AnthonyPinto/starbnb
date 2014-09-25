/*global Starbnb JST*/

Starbnb.Views.Map = Backbone.CompositeView.extend({
  template: JST["search_map"],
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  
  onRender: function () {
    handler = Gmaps.build('Google');
    handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
      markers = handler.addMarkers([
        {
          "lat": 0,
          "lng": 0,
          "picture": {
            "url": "https://addons.cdn.mozilla.net/img/uploads/addon_icons/13/13028-64.png",
            "width":  36,
            "height": 36
          },
          "infowindow": "hello!"
        }
      ]);
      handler.bounds.extendWith(markers);
      handler.fitMapToBounds();
    });
  }
  
});