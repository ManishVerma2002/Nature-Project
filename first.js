document.getElementById("navigation__checkbox").addEventListener("click", function() {
    let navigation__list = document.getElementById("navigation__list");
    if (navigation__list.style.display === "block") {
        navigation__list.style.display = "none";
    } else {
        navigation__list.style.display = "block";
    }
  });