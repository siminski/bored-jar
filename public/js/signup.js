$(document).ready(() => {
  console.log("signup page connected");
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email) {
      emailInput.val("");
      passwordInput.val("");
      $(".login-alerts").text("Input a valid email address");
      setTimeout(fadeOut, 3000);
      function fadeOut() {
        $(".login-alerts").text("");
      }
      return;
    } else if (!userData.password) {
      emailInput.val("");
      passwordInput.val("");
      $(".login-alerts").text("Input a valid pasword");
      setTimeout(fadeOut, 3000);
      function fadeOut() {
        $(".login-alerts").text("");
      }
      return;
    } else if (!userData.email && !userData.password) {
      emailInput.val("");
      passwordInput.val("");
      $(".login-alerts").text("Input a valid email and password");
      setTimeout(fadeOut, 3000);
      function fadeOut() {
        $(".login-alerts").text("");
      }
      return;
    }

    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  async function signUpUser(email, password) {
    await $.post("/api/signup", {
      email: email,
      password: password
    });
    window.location.replace("/jar");
    if (err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  }
});
