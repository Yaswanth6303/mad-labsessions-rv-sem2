const count = document.getElementById("count");
const button = document.getElementById("button");

let countValue = 0;

button.addEventListener("click", () => {
  countValue++;
  count.textContent = countValue;
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log(`Service worker registered`))
      .catch((err) =>
        console.log(`Service worker registration failed: ${err}`),
      );
  });
}
