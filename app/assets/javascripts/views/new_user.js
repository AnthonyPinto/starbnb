/*global Starbnb JST*/

Starbnb.Views.NewUser = Backbone.CompositeView.extend({
  template: JST["users/new_user"],
  
  initialize: function () {
    this.usersLoaded = false;
    this.listenTo(this.collection, "sync", this.buildNames);
  },
  
  
  events: {
    "click #new-img-button": "firePicker",
    "keyup #new-user-username" : "checkName",
    "keyup #new-user-password" : "checkPassword",
    "click #new-user-submit" : "trySubmit"
  },
	
  
  render: function () {
    var content = this.template({user: this.model});
    this.$el.html(content);
    return this;
  },
  
  trySubmit: function (event) {
    event.preventDefault();
    this.model.set(this.$('form').serializeJSON());
    var view = this;
    this.model.save(
      {},
      {
        success: function (model) {
          view.createAvatar(model.escape("id"));
        },
        error: function () {
          view.$(".has-error").addClass("problem-field");
        }
      }
    );
  },
  
  createAvatar: function (user_id) {
    var avatar = new Starbnb.Models.Photo();
    avatar.set({
      url: this.$(".new-user-img").attr("src"),
      photable_type: "User",
      photable_id: user_id
    })
    avatar.save(
      {},
      {
        success: function () {
          document.location.href="/";
        }
      }
    )
  },
  
  
  buildNames: function () {
    this.usersLoaded = true;
    this.names = this.collection.pluck("username");
    console.log(this.names);
  },
  
  
  checkName: function (event) {
    console.log("checkName");
    if (this.usersLoaded) {
      var $input = $(event.currentTarget);
      var currentName = $input.val();
      var index = $.inArray(currentName, this.names);
      if (index !== -1) {
        this.addNameWarning($input);
      } else {
        this.removeNameWarning($input);
      }
    }
  },
  
  addNameWarning: function ($input) {
    console.log("add warning");
    this.$("#new-user-username-group").addClass("has-error");
    this.$(".help-block-username").html("That username is taken");
  },
  
  removeNameWarning: function ($input) {
    console.log("remove warning");
    this.$("#new-user-username-group").removeClass("has-error");
    this.$("#new-user-username-group").removeClass("problem-field");
    this.$(".help-block-username").html("");
  },
  
  
  
  checkPassword: function (event) {
    console.log("checkPassword");
    var $input = $(event.currentTarget);
    var currentPassword = $input.val();
    if (currentPassword.length < 6) {
      this.addPasswordWarning($input);
    } else {
      this.removePasswordWarning($input);
    }
  },
  
  addPasswordWarning: function ($input) {
    console.log("add warning");
    this.$("#new-user-password-group").addClass("has-error");
    this.$(".help-block-password").html("Password must be at least 6 characters");
  },
  
  removePasswordWarning: function ($input) {
    console.log("remove warning");
    this.$("#new-user-password-group").removeClass("has-error");
    this.$("#new-user-password-group").removeClass("problem-field");
    this.$(".help-block-password").html("");
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