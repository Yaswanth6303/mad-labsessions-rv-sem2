// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")

    .then((registration) => {
      console.log("Service Worker Registered");

      if (registration.active === null) {
        console.log("Service Worker Installing...");
      }
    })

    .catch((error) => {
      console.log("Service Worker Error:", error);
    });
} else {
  console.log("Browser does not support Service Workers");
}

// Fetch Stock Data
fetch("stock.json")
  .then((response) => {
    return response.json();
  })
  .then((stock) => {
    // Create Table
    let table = `
      <table>
        <tr>
          <th>Company</th>
          <th>Description</th>
          <th>Initial Price</th>
          <th>Price in 2007</th>
          <th>Symbol</th>
        </tr>
    `;

    // Add Rows
    for (let item of stock) {
      table += `
        <tr>
          <td>${item.company}</td>
          <td>${item.description}</td>
          <td>${item.initial_price}</td>
          <td>${item.price_2007}</td>
          <td>${item.symbol}</td>
        </tr>
      `;
    }

    table += "</table>";

    // Insert Table into HTML
    document.getElementById("stock").innerHTML = table;
  })

  .catch((error) => {
    console.log("Fetch Error:", error);

    document.getElementById("stock").innerHTML =
      "<h3>Unable to load stock data</h3>";
  });
