/*global Starbnb JST*/

Starbnb.Views.ShowComment = Backbone.CompositeView.extend({
  template: JST["comments/show_comment"],
	
	events: {
    "click .brief-user-img-frame" : "goToUser",
	},
  
  attributes: {
    "class": "comment",
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
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  }
});