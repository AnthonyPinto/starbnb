/*global Starbnb*/

Starbnb.Collections.Ports = Backbone.Collection.extend({
  url: "api/photos",
  model: Starbnb.Models.Photo,
  
  initialize: function () {
  }
});