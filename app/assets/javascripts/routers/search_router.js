/*global Starbnb*/

Starbnb.Routers.SearchRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "" : "search"
  },
  
  search: function () {
    var ports = new Starbnb.Collections.Ports();
    ports.fetch();
    var searchView = new Starbnb.Views.Search({collection: ports});
    this._swapView(searchView);
  },
  
  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
    newView.onRender();
  }
  
  
});