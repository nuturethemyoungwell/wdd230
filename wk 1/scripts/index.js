const options = {weekly: "long", day: "numeric", month: "long", year: "Numeric"};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en Us", options);