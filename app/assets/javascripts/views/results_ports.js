/*global Starbnb JST*/

Starbnb.Views.ResultsPorts = Backbone.CompositeView.extend({
  template: JST["ports/results_ports"],
  
  render: function () {
    var content = this.template({port: this.model});
    this.$el.html(content);
    this.renderBriefs();
    return this;
  },
  
  renderBriefs: function () {
    this.collection.each(this.addBrief.bind(this));
  },
  
  addBrief: function (brief) {
    var view = new Starbnb.Views.BriefPort({
      model: brief
    });
    this.addSubview('.briefs', view);
  }
});