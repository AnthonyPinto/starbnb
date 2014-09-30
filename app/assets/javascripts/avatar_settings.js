$( function () {
  $("#new-user-modal").on("shown.bs.modal", function () {
    console.log("wow")
    $("#new-user-username").focus()
  })
  $("#login-modal").on("shown.bs.modal", function () {
    console.log("wow")
    $("#login-username").focus()
  })
  
})