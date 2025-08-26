const dropdown = document.querySelectorAll(".dropDown");

dropdown.forEach(menu => {
  menu.addEventListener("click", () => {
    toggleVisibility(menu.children[1]);
  })
});

function toggleVisibility(child) {
  if (child.style.display === "none") {
    child.style.display = "block";
  } else {
    child.style.display = "none"
  }
}
