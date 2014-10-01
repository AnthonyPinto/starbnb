/*global Starbnb JST*/

Starbnb.Views.NewUser = Backbone.CompositeView.extend({
  template: JST["users/new_user"],
	
  
  render: function () {
    var content = this.template({user: this.model});
    this.$el.html(content);
    filepicker.constructWidget(this.$(".new-user-img-button")[0]);
    return this;
  }
});