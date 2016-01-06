
//Click Functions

//Active nav update
$('.nav-link').click(function () {
  $('.nav-link').removeAttr('id','active');
  $(this).prop('id','active');
});

//login open login module
$('.btn-login').click(function () {
  console.log("SUMMON THE LOGIN");
})
