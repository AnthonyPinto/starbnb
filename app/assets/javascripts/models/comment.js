/*global Starbnb*/

Starbnb.Models.Comment = Backbone.Model.extend({
  urlRoot: "api/comments",
  
  parse: function (response) {
    if (response.photo_url) {
      this.photoUrl = response.photo_url;
      delete response.photo_url;
    }
    if (response.username) {
      this.username = response.username;
      delete response.username;
    }
    return response;
  },
});