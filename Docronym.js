content = document.querySelector("#content");

document.querySelectorAll("button").forEach((element) => {
  let cont = element.innerHTML;
  for (let times = 0; times < 9; times++) {
    cont = cont + cont;
  }
  element.addEventListener("click", (e) => (content.innerHTML = cont));
});
