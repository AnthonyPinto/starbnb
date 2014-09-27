/*global Starbnb*/

Starbnb.Routers.SearchRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "" : "search",
		"ports/:id" : "show"
  },
  
  search: function () {
    var ports = Starbnb.Collections.ports;
    ports.fetch();
    var searchView = new Starbnb.Views.Search({collection: ports});
    this._swapView(searchView);
  },
	
	show: function (id) {
		var port = Starbnb.Collections.ports.getOrFetch(1);
		var showView = new Starbnb.Views.ShowPort({model: port});
		this._swapView(showView)
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