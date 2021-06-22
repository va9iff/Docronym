content = document.querySelector("#content");

document.querySelectorAll("h3").forEach((element) => {
  element.addEventListener(
    "click",
    (e) => (content.innerHTML = element.innerHTML)
  );
});
