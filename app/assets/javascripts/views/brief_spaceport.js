/*global Starbnb JST*/

Starbnb.Views.BriefSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/brief_spaceport"],
	
	events: {
    "click .brief-user-img-frame" : "goToUser",
		"click" : "goToShow",
    "mouseenter" : "hovering",
    "mouseleave" : "notHovering"
	},
  
  attributes: {
    "class": "brief col-sm-12 col-md-6 col-lg-4",
  },
	
	goToShow: function () {
    Backbone.history.navigate("spaceports/" + this.model.escape("id"), {trigger: true});
	},
  
  goToUser: function (event) {
    event.stopPropagation();
    Backbone.history.navigate("users/" + this.model.escape("user_id"), {trigger: true});
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