if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log(`Service worker registered`))
      .catch((err) =>
        console.log(`Error in registering service worker ${err}`),
      );
  });
}

localStorage.setItem("uname", "Yaswanth");
localStorage.setItem("pass", "Qwerty@123");

function verify() {
  const form = document.querySelector("form");
  const uname = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (
    uname === localStorage.getItem("uname") &&
    pass === localStorage.getItem("pass")
  ) {
    alert("Login successful");
  } else {
    alert("Invalid credentials");
  }

  form.reset();
}
