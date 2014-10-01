/*global Starbnb JST*/

Starbnb.Views.NewUser = Backbone.CompositeView.extend({
  template: JST["users/new_user"],
  
  initialize: function () {
    this.usersLoaded = false;
    this.listenTo(this.collection, "sync", this.buildNames)
  },
  
  
  events: {
    "click #new-user-img-button": "firePicker",
    "keyup #new-user-username" : "checkName",
    "click #new-user-submit" : "trySubmit"
  },
	
  
  render: function () {
    var content = this.template({user: this.model});
    this.$el.html(content);
    return this;
  },
  
  buildNames: function () {
    this.usersLoaded = true;
    this.names = this.collection.pluck("username");
    console.log(this.names);
  },
  
  
  checkName: function (event) {
    console.log("checkName")
    if (this.usersLoaded) {
      var $input = $(event.currentTarget);
      var currentName = $input.val();
      var index = $.inArray(currentName, this.names);
      if (index !== -1) {
        this.addWarning($input);
      } else {
        this.removeWarning($input);
      }
    }
  },
  
  addWarning: function ($input) {
    console.log("add warning")
    this.$("#new-user-username-group").addClass("has-error has-feedback")
    this.$(".help-block").html("That username is taken")
  },
  
  removeWarning: function ($input) {
    console.log("remove warning")
    this.$("#new-user-username-group").removeClass("has-error")
    this.$("#new-user-username-group").removeClass("has-feedback")
    this.$(".help-block").html("")
  },
  
  
  
  firePicker: function (event) {
    view = this;
    event.preventDefault();
    filepicker.pick( {
          mimetypes: ['image/*'],
        },
    
      function(Blob){
        console.log(Blob.url);
        view.$(".new-user-img").attr("src", Blob.url);
      }
    );
  }
});