/*global Starbnb*/

window.Starbnb = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $("div#index-wrapper")
    new Starbnb.Routers.SearchRouter({$rootEl: $rootEl});
    Backbone.history.start();
  }
};

