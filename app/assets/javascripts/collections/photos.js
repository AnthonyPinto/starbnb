/*global Starbnb*/

Starbnb.Collections.Photos = Backbone.Collection.extend({
  url: "api/photos",
  model: Starbnb.Models.Photo,
  
  initialize: function () {
  }
});