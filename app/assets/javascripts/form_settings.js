$( function () {
  
  $("#new-user-modal").on("shown.bs.modal", function () {
    var user = new Starbnb.Models.User();
    var newUserView = new Starbnb.Views.NewUser({model: user});
    $("#new-user-view-frame").html(newUserView.render().$el);
  })
  
  
  $("#login-modal").on("shown.bs.modal", function () {
    $("#login-username").focus()
  })
  
})