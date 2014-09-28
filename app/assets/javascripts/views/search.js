/*global Starbnb JST*/

Starbnb.Views.Search = Backbone.CompositeView.extend({
  initialize: function () {
  },
  
  template: JST["search"],
  
  render: function () {
    this.fixNav();
    var content = this.template();
    this.$el.html(content);
    this.renderMap();
    this.renderSidebar();
    return this;
  },
  
  fixNav: function () {
		var $nav =  $("nav")
		$nav.removeClass('navbar-standard-mix')
    $nav.addClass('navbar-fixed-top');
		
  },
  
  renderMap: function () {
    var view = new Starbnb.Views.Map({collection: this.collection});
    this.addSubview('.search-map-frame', view);
  },
  
  renderSidebar: function () {
    var view = new Starbnb.Views.SearchSidebar({collection: this.collection});
    this.addSubview('.search-sidebar-frame', view);
  }

});