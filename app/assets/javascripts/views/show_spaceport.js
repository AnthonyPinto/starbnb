/*global Starbnb JST*/

Starbnb.Views.ShowSpaceport = Backbone.CompositeView.extend({
  template: JST["spaceports/show_spaceport"],
	
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
	
  initDate: function () {
    this.$('.datetimepicker').datetimepicker({
      pickTime: false
    });
  },
  
  render: function () {
    var content = this.template({spaceport: this.model});
    this.$el.html(content);
		this.initDate()
    return this;
  }
});