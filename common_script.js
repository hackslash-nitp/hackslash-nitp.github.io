
  // // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyApPqV50wqW_pxUrqqHl4ZB-0O-a1BoTFY",
  //   authDomain: "hackslash-17.firebaseapp.com",
  //   databaseURL: "https://hackslash-17.firebaseio.com",
  //   projectId: "hackslash-17",
  //   storageBucket: "hackslash-17.appspot.com",
  //   messagingSenderId: "981722954585",
  //   appId: "1:981722954585:web:e2ed3d02d85a5445c86a48",
  //   measurementId: "G-BF8Y47X72L"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  // for Join Us pop-up
$(document).ready(function () {
  $('a.login-window').click(function () {

    var loginBox = $(this).attr('href');

    $(loginBox).fadeIn(300);

    var popMargTop = ($(loginBox).height() + 24) / 2;
    var popMargLeft = ($(loginBox).width() + 24) / 2;

    $(loginBox).css({
      'margin-top': -popMargTop,
      'margin-left': -popMargLeft
    });

    $('body').append('<div id="mask"></div>');
    $('#mask').fadeIn(300);

    return false;
  });

  // When clicking on the button close or the mask layer the popup closed
  $('a.close-btn, #mask').live('click', function () {
    $('#mask , .login-popup').fadeOut(300, function () {
      $('#mask').remove();
    });
    return false;
  });
});
