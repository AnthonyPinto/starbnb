/*global Starbnb JST*/

Starbnb.Views.IndexSpaces = Backbone.CompositeView.extend({
  template: JST["spaces/index_spaces"],
  
  render: function () {
    var content = this.template({spaces: this.collection});
    this.$el.html(content);
    return this;
  }
  
});