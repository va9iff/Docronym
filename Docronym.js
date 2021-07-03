// inject the content to this
content = document.querySelector("#content");
// post names listed here
Dlist = document.querySelector("#Dlist");

// The path to the posts
// var pathToPosts = "/Dposts"; //is getting from html script tag

// the accent color of the page
// var hue = 150
document.documentElement.style.setProperty("--accenthue", hue);

// get all the post names as list and do smthng with them
$.getJSON(
  // the path to the folder which the posts are in
  document.URL.substr(0, document.URL.lastIndexOf("/")) + pathToPosts,
  // the path names are given as paremeter allPostNames (as list) to this function
  (allPostNames) => {
    // for every post name
    allPostNames.forEach((P) => {
      // make a button for this
      element = document.createElement("button");
      // button's text is post's name
      element.innerHTML = P;
      // when the button is clicked
      element.addEventListener("click", (e) => {
        // get the file in the posts folder by its name
        fetch(`${pathToPosts}/` + P).then((r) => {
          // convert it to the text
          r.text().then((d) => {
            // and inject it to the content element
            content.innerHTML = d;
          });
        });
      });
      // add the button to the list
      Dlist.appendChild(element);
    });
  }
);
