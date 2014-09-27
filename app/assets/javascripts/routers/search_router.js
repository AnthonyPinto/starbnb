/*global Starbnb*/

Starbnb.Routers.SearchRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "" : "search",
		"spaceports/:id" : "show"
  },
  
  search: function () {
    var spaceports = Starbnb.Collections.spaceports;
    spaceports.fetch();
    var searchView = new Starbnb.Views.Search({collection: spaceports});
    this._swapView(searchView);
  },
	
	show: function (id) {
		var spaceport = Starbnb.Collections.spaceports.getOrFetch(1);
		var showView = new Starbnb.Views.ShowSpaceport({model: spaceport});
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