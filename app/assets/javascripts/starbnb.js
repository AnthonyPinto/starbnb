/*global Starbnb*/

window.Starbnb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("div.results")
    new Starbnb.Routers.SearchRouter({$rootEl: $rootEl});
    Backbone.history.start();
  }
};

