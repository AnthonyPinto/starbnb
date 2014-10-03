$( function () {
  window.fadeAlertDivs = function () {
    var $alerts = $('.alert')
    $alerts.fadeOut(1600, function(){
        $alerts.remove();
    });
  }
  
  window.removeAlertDivs = function () {
    $('.alert').remove();
  }
  
  window.fadeAlertDivs()
})