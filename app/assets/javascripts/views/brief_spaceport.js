/*global Starbnb JST*/

Starbnb.Views.BriefSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/brief_spaceport"],
  
  attributes: {
    "class": "brief col-sm-12 col-md-6 col-lg-4",
  },
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
    return this;
  }
});