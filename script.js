var listContainer = $(".listContainer");
var list = $(".container");
var add = $(".submit");
var del = $(".clear");

add.on("click", addToList);
del.on("click", clearList);

function addToList() {
  event.preventDefault();
  var item = $(".item").val();
  var input = $(".item");
  listContainer.append(`<li class="remove">${item}</li>`);
  input.val("");
}

listContainer.on("click", delItem);

function delItem() {
  if (event.target.className === "remove") {
    event.target.remove();
  }
}

function clearList() {
  listContainer.text("");
}
