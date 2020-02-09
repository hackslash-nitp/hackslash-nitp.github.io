// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyApPqV50wqW_pxUrqqHl4ZB-0O-a1BoTFY",
  authDomain: "hackslash-17.firebaseapp.com",
  databaseURL: "https://hackslash-17.firebaseio.com",
  projectId: "hackslash-17",
  storageBucket: "hackslash-17.appspot.com",
  messagingSenderId: "981722954585",
  appId: "1:981722954585:web:e2ed3d02d85a5445c86a48",
  measurementId: "G-BF8Y47X72L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

 
  // // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyApPqV50wqW_pxUrqqHl4ZB-0O-a1BoTFY",
    authDomain: "hackslash-17.firebaseapp.com",
    databaseURL: "https://hackslash-17.firebaseio.com",
    projectId: "hackslash-17",
    storageBucket: "hackslash-17.appspot.com",
    messagingSenderId: "981722954585",
    appId: "1:981722954585:web:e2ed3d02d85a5445c86a48",
    measurementId: "G-BF8Y47X72L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

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
    if (loginBox != "#") {
      $('body').append('<div id="mask"></div>');
      $('#mask').fadeIn(300);
    }

    return false;
  });

  // When clicking on the button close or the mask layer the popup closed
  $('body').on('click', 'a.close-btn, #mask', function () {
    $('#mask , .login-popup').fadeOut(300, function () {
      $('#mask').remove();
    });
    return false;
  });
});

const userSignIn = function () {
  var userEmail = $('#signin-email').val();
  var userPass = $('#signin-pass').val();

  console.log(userEmail, userPass);

  console.log(firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage, errorCode);

  }))
}

const userSignUp = function () {
  var userEmail = $('#signup-email').val();
  var userPass = $('#signup-pass').val();
  var userConfPass = $('#signup-conf-pass').val();

  console.log(userEmail, userPass, userConfPass);

  if (userPass == userConfPass) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage, errorCode);

    });
  } else {
    alert("password does not match!!!");
  }
}

const userSignOut = function () {
  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    console.log(error);

  });
}

const signInWithGoogle = function () {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().useDeviceLanguage();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(token, user);

  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

    console.log(errorCode, errorMessage, email, credential);

  });
};

const signInWithGithub = function () {
  var provider = new firebase.auth.GithubAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(token, user);

  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);

  });
};

firebase.auth().onAuthStateChanged(function (user) {

  var joinUsBtn = document.querySelector("a.join-us-btn");
  if (user) {
    // User is signed in.
    var email = user.email;
    var uid = user.uid;
    console.log(`user is ${email} with uid ${uid}`);
    $("#mask , .login-popup").fadeOut(1, function () {
      $("#mask").remove();
    });
    joinUsBtn.textContent = "Sign Out";
    joinUsBtn.setAttribute('href', "#");
    joinUsBtn.classList.remove('login-window');
    joinUsBtn.setAttribute('onclick', "userSignOut()");
  } else {
    // User is signed out.
    joinUsBtn.textContent = "Join Us";
    joinUsBtn.setAttribute("href", "#login-box");
    joinUsBtn.classList.add("login-window");
    joinUsBtn.setAttribute('onclick', "");
    console.log("user is signed out");

  }
});

$(function() {
  $(".toggle").on("click", function() {
      if ($(".item").hasClass("active")) {
          $(".item").removeClass("active");
          $(".logo").css({display: "block"});
          $(this).find("a").html("<i class='fas fa-bars'></i>");
      } else {
          $(".item").addClass("active");
          $(".logo").css({display: "none"});
          $(this).find("a").html("<i class='fas fa-times'></i>");
      }
  });
});
