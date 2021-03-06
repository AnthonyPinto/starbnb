$( function () {
  
  $("#splash-button").on("click", function () {
    $("#login-modal").on("shown.bs.modal", function () {
      $("#login-username").val("Guest");
      $("#login-password").val(111111);
    });
  });
  
  $("#new-user-modal").on("shown.bs.modal", function () {
    var user = new Starbnb.Models.User();
    var users = new Starbnb.Collections.Users();
    users.fetch();
    var newUserView = new Starbnb.Views.NewUser({model: user, collection: users});
    $("#new-user-view-frame").html(newUserView.render().$el);
  });
  
  
  $("#login-modal").on("shown.bs.modal", function () {
    $("#login-username").focus()
  });
  
})