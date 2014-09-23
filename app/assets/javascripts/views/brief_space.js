/*global Starbnb JST*/

Starbnb.Views.BriefSpace = Backbone.CompositeView.extend({
  template: JST["spaces/brief_space"],
  
  render: function () {
    var content = this.template({space: this.model});
    this.$el.html(content);
    return this;
  }
});