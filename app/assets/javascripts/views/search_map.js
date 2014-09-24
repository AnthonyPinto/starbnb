/*global Starbnb JST*/

Starbnb.Views.Map = Backbone.CompositeView.extend({
  template: JST["search_map"],
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});