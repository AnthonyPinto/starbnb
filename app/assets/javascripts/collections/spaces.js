/*global Starbnb*/

Starbnb.Collections.Spaces = Backbone.Collection.extend({
  url: "api/spaces",
  
  model: Starbnb.Models.Space
});