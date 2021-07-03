content = document.querySelector("#content");
Dlist = document.querySelector("#Dlist");

$.getJSON(
  document.URL.substr(0, document.URL.lastIndexOf("/")) + "/Dposts",
  (data) => {
    // console.log(data); //["doc1.jpg", "doc2.jpg", "doc3.jpg"]
    var allPosts = data;
    console.log(allPosts.length);
    for (let index = 0; index < allPosts.length; index++) {
      let P = allPosts[index];
      console.log("asfjd");
      element = document.createElement("button");
      element.innerHTML = P;
      element.addEventListener("click", (e) => {
        // content.innerHTML = element.innerHTML + "VVVVVVVVVVVV";
        fetch("./Dposts/" + P).then((r) => {
          r.text().then((d) => {
            // let CONTENT = d;
            content.innerHTML = d;
          });
        });
      });
      Dlist.appendChild(element);
    }
  }
);
