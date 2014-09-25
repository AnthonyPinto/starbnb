/*global Starbnb*/

Starbnb.Collections.Ports = Backbone.Collection.extend({
  url: "api/ports",
  
  model: Starbnb.Models.Port
});