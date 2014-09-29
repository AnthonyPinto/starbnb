/*global Starbnb JST*/

Starbnb.Views.BriefSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/brief_spaceport"],
	
	initialize: function () {
		$('div.brief-user-img-frame').click(function(e){
		    //your code here
		    e.stopPropagation();
		}.bind(this));
	},
	
	
	events: {
		"click" : "goToShow",
    "mouseenter" : "hovering",
    "mouseleave" : "notHovering"
	},
  
  attributes: {
    "class": "brief col-sm-12 col-md-6 col-lg-4",
  },
	
	goToShow: function (args) {
    window.location= this.$("a").attr("href"); 
    return false;
	},
  
  hovering: function () {
    this.model.hovering();
  },
  
  notHovering: function (e) {
    this.model.notHovering();
    e.stopPropagation();
  },
	
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
    return this;
  }
});