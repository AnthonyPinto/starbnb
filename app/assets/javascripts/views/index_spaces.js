/*global Starbnb JST*/

Starbnb.Views.IndexSpaces = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  
  template: JST["spaces/index_spaces"],
  
  render: function () {
    var content = this.template({spaces: this.collection});
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