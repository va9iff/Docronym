// inject the content to this
content = document.querySelector("#content");
// post names listed here
Dlist = document.querySelector("#Dlist");

// The path to the posts
// var pathToPosts = "/Dposts"; //is getting from html script tag

// the accent color of the page //is also getting from html script tag
// var hue = 150
document.documentElement.style.setProperty("--accenthue", hue);

// the list that will hold our post objects, which have its own downloaded ctns
Pobjs = [];

// get all the post names as list and do smthng with them
$.getJSON(
  // the path to the folder which the posts are in
  document.URL.substr(0, document.URL.lastIndexOf("/")) + pathToPosts,
  // the path names are given as paremeter allPostNames (:list) to this function
  (allPostNames) => {
    // for every post name
    allPostNames.forEach((P) => {
      // push a new post object to Pobjs
      l = Pobjs.push({
        // that has nam, for its buttons name
        nam: P,
        // a button that will be shown in left (Dlist)
        btn: document.createElement("button"),
        // and downloaded content for not downloading in every click, but once.
        ctn: null,
      });
      // gets the last pushed post
      let current = Pobjs[l - 1];
      // button's text is post's name
      current.btn.innerHTML = P;
      // when the button is clicked
      current.btn.addEventListener("click", (e) => {
        // get the file in the posts folder by its name
        fetch(`${pathToPosts}/` + P).then((r) => {
          // check if it has downloaded it
          if (current.ctn) {
            // if it has, then inject this
            content.innerHTML = current.ctn;
          }
          // if not, fetch and set this as new downloaded content
          else {
            // checking if it fetches only when it has to
            console.log("we needed to get this by fetching");
            // convert it to the text
            r.text().then((d) => {
              // and inject it to the content element
              content.innerHTML = d;
              // now it has ctn and won't fetch for this post again.
              current.ctn = d;
            });
          }
          // just checking ctns
          console.log(current);
        });
      });
      // add the button to the list
      Dlist.appendChild(current.btn);
    });
  }
);
