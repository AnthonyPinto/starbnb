/*global Starbnb*/

Starbnb.Collections.Comments = Backbone.Collection.extend({
  url: "api/comments",
  model: Starbnb.Models.Comment
});