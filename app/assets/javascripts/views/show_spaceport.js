/*global Starbnb JST*/

Starbnb.Views.ShowSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/show_spaceport"],
	
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
    return this;
  }
});