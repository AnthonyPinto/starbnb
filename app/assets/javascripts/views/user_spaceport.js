/*global Starbnb JST*/

Starbnb.Views.UserSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/user_spaceport"],
	
	events: {
		"click" : "goToShow"
	},
  
	
	goToShow: function (args) {
    window.location= this.$("a").attr("href"); 
    return false;
	},
	
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
    return this;
  }
});