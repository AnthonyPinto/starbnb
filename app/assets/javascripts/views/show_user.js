/*global Starbnb JST*/

Starbnb.Views.ShowUser = Backbone.CompositeView.extend({
  template: JST["users/show_user"],
	
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  render: function () {
    var content = this.template({user: this.model});
    this.$el.html(content);
    this.renderSpaceports();
    return this;
  },
  
  renderSpaceports: function () {
    this.model.spaceports().each(this.addSpaceport.bind(this));
  },
  
  addSpaceport: function (spaceports) {
    var view = new Starbnb.Views.UserSpaceport({
      model: spaceports
    });
    this.addSubview('.spaceports', view);
  }
});