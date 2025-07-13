// elements
// --breeze
// --sentence
// url bg
// ul li
// learn more
// flex
// year


const images = {
  rooms: "rooms.jpg",
  dining: "dinig.jpg",
  about: "View.jpg"
};

Object.keys(images).forEach(id => {
  document.getElementById(id).addEventListener("click", () => {
    document.getElementById("section-1").style.display = "none";
    setTimeout(() => {
        document.getElementById("nav-bar").style.display = "flex";
        document.getElementById("section-1").style.display = "block";
        if (id == "rooms"){
            document.getElementById("sentence").innerHTML = "Recharge your phone?.<br> Nah — recharge your soul."
            document.getElementById("learn-more").innerHTML = "Check out <i class='bx bx-right-arrow-alt'>";
        } else if (id == "about"){
            document.getElementById("sentence").innerHTML = "More than a stay <br> More than a moment, it’s a memory."
            document.querySelector(".flex").style.display = "flex";
            document.getElementById("learn-more").innerHTML = "Learn more <i class='bx bx-right-arrow-alt'>";
        }else if (id == "dining"){
            document.getElementById("sentence").innerHTML = "Table for one? <br> Nah bring the whole gang"
            document.getElementById("learn-more").innerHTML = "Menu <i class='bx bx-right-arrow-alt'>";
        }
    });
  });
});