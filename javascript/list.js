var listLink = document.getElementById("link-list");
var listView = document.getElementById("list-view");

//var homeLink = document.getElementById("link-home");
var homeView = document.getElementById("home-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();

homeView.classList.add("hidden");
  addView.classList.add("hidden");

  homeView.classList.add("visible");
  homeView.classList.remove("hidden");


  /*homeView.classList.add("hidden");
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");*/
});
