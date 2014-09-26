/*global Starbnb*/

Starbnb.Collections.Users = Backbone.Collection.extend({
  url: "api/users",
  model: Starbnb.Models.User,
  
  initialize: function () {
  }
});