/*global Starbnb*/

Starbnb.Routers.SearchRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  
  routes: {
    "" : "search",
		"spaceports/:id" : "showSpaceport",
		"users/:id" : "showUser"
  },
  
  search: function () {
    var spaceports = Starbnb.Collections.spaceports;
    spaceports.fetch();
    var searchView = new Starbnb.Views.Search({collection: spaceports});
    this._swapView(searchView);
  },
	
	showSpaceport: function (id) {
		var spaceport = Starbnb.Collections.spaceports.getOrFetch(id);
		var showView = new Starbnb.Views.ShowSpaceport({model: spaceport});
		this._swapView(showView);
	},
	
	showUser: function (id) {
		var user = new Starbnb.Models.User({id: id});
		user.fetch();
		var showView = new Starbnb.Views.ShowUser({model: user});
		this._swapView(showView);
	},
	
  
  _swapView: function (newView) {
    if (this.currentView) {
      this.currentView.remove();
      this._resetNav();
    }
    this.currentView = newView;
    this.$rootEl.html(newView.render().$el);
    newView.onRender();
  },
	
	_resetNav: function () {
		var $nav = $("nav");
		$nav.addClass('navbar-standard-mix');
		$nav.removeClass('navbar-fixed-top');
	}
	
  
  
});