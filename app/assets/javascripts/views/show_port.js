/*global Starbnb JST*/

Starbnb.Views.ShowPort = Backbone.CompositeView.extend({
  template: JST["ports/show_port"],
	
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({port: this.model});
    this.$el.html(content);
    return this;
  }
});