/*global Starbnb JST*/

Starbnb.Views.BriefPort = Backbone.CompositeView.extend({
  template: JST["ports/brief_port"],
  
  attributes: {
    "class": "brief" 
  },
  
  render: function () {
    var content = this.template({port: this.model});
    this.$el.html(content);
    return this;
  }
});