/*global Starbnb*/

Starbnb.Routers.SearchRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "" : "index"
  },
  
  index: function () {
    var spaces = new Starbnb.Collections.Spaces;
    spaces.fetch(); 
    var indexView = new Starbnb.Views.IndexSpaces({collection: spaces});
    this._swapView(indexView);
  },
  
  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
  }
  
  
});