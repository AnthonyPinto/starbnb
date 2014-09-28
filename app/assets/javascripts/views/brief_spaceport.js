/*global Starbnb JST*/

Starbnb.Views.BriefSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/brief_spaceport"],
	
	initialize: function () {
		$('div.brief-user-img-frame').click(function(e){
		    //your code here
		    e.stopPropagation();
		});
	},
	
	
	events: {
		"click" : "goToShow"
	},
  
  attributes: {
    "class": "brief col-sm-12 col-md-6 col-lg-4",
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