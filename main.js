var moveQuantity = 10;

document.onreadystatechange = () => {
  /* var element = document.getElementById("test");
  element.onclick = function(e) {
    element.style.backgroundColor = "red";
  };

  */

  var body = document.body;
  body.onclick = e => {
    element.style.position = "absolute";
    console.log(e.clientX, e.clientY);
    element.style.left = e.clientX + "px";
    element.style.top = e.clientY + "px";
  };
  var rocketShip = document.getElementById("myRocket").style;
  var rocketPositionX = 0;
  var rocketPositionY = 0;
  body.onkeydown = e => {
    switch (e.keyCode) {
      case 37:
        rocketPositionX -= moveQuantity;
        rocketShip.marginLeft = rocketPositionX + "px";
        break;
      case 39:
        rocketPositionX += moveQuantity;
        rocketShip.marginLeft = rocketPositionX + "px";
        break;
      case 38:
        rocketPositionY += moveQuantity;
        rocketShip.marginBottom = rocketPositionY + "px";
        break;
      case 40:
        rocketPositionY -= moveQuantity;
        rocketShip.marginBottom = rocketPositionY + "px";
        break;
      case 32:
        var positionBullet = 0;
        let myInterval = setInterval(() => {
          var bullet = document.getElementById("bullet");
          bullet.style.display = "";
          positionBullet += 5;
          bullet.style.bottom = positionBullet + "px";
          if (bullet.offsetTop < 0) {
            clearInterval(myInterval);
          }
        }, 10);
        break;
      default:
        break;
    }
    console.log(e.keyCode);
  };
  var persons = [
    {
      name: "Liam",
      first: "some info",
      final: "stuff",
      extra: "other things"
    },
    {
      name: "Andres",
      first: "more info",
      final: "stuff2",
      extra: "other things2"
    }
  ];
  var htmlString = "";
  
  persons.map((person)=>{
    htmlString += `
    <tr>
      <td>
        ${person.name}
      </td>
      <td>
        ${person.first}
      </td>
      <td>
        ${person.final}
      </td>
      <td>
        ${person.extra}
      </td>
    </tr>
    `;
  })
  
  var dataPersons = document.getElementById("dataPersons");
  /*   dataPersons.innerHTML = `
    <tr>
      <td>stuff1</td>
      <td>stuff2</td>
      <td>stuff3</td>
      <td>stuff4</td>
    </tr>
`; */
  dataPersons.innerHTML = htmlString;
};
