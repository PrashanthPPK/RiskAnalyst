// Handle checkbox select all
const mainCheckbox = document.querySelector("thead input");

mainCheckbox.addEventListener("change", () => {
  document.querySelectorAll("tbody input[type='checkbox']")
    .forEach(cb => cb.checked = mainCheckbox.checked);
});

// Button click logging
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(btn.innerText + " clicked");
  });
});
``
