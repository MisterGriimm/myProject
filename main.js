document.onreadystatechange = () => {
  var element = document.getElementById("test");
  element.onclick = function(e) {
    element.style.backgroundColor = "red";
  };

  element.onkeydown = function(e) {
    element.style.backgroundColor = "red";
  };

  var body = document.body;

  element.style.position = "absolute";
  body.onclick = e => {
    console.log(e.clientX, e.clientY);
    element.style.left = e.clientX + "px";
    element.style.top = e.clientY + "px";
  };
};
