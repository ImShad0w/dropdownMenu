const dropdown = document.getElementById("dropDown");
const content = document.getElementById("dropDownContent");

function toggleVisibility() {
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none"
  }
}

dropdown.addEventListener("click", () => {
  toggleVisibility();
})
