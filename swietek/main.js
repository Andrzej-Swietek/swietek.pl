
var trip = document.querySelector(".day11");
trip.addEventListener("click", function () {
  var isExpanded = trip.getAttribute("aria-expanded");
  console.log(isExpanded);
  if (isExpanded === "false") {
    document.querySelector(".magic-col").classList.add("discription-opened");
    trip.setAttribute("aria-expanded", "true");
  } else {
    document.querySelector(".magic-col").classList.remove("discription-opened");
    trip.setAttribute("aria-expanded", "false");
  }
}, false);
trip.setAttribute("role", "button");
trip.setAttribute("aria-controls", "navigation");
trip.setAttribute("aria-expanded", "false");
document.body.classList.add("js");
