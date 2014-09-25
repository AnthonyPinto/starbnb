/*global Starbnb JST*/

Starbnb.Views.ResultsSpaces = Backbone.CompositeView.extend({
  template: JST["spaces/results_spaces"],
  
  render: function () {
    var content = this.template({space: this.model});
    this.$el.html(content);
    this.renderBriefs();
    return this;
  },
  
  renderBriefs: function () {
    this.collection.each(this.addBrief.bind(this));
  },
  
  addBrief: function (brief) {
    var view = new Starbnb.Views.BriefSpace({
      model: brief
    });
    this.addSubview('.briefs', view);
  }
});