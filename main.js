document.onreadystatechange = () => {
    var element = document.getElementById('test')
    element.onclick = function (e) {
        element.style.backgroundColor = "red"
    }
    
    element.onkeydown = function (e) {
        element.style.backgroundColor = "red"
    }


    var body = document.body;

    body.onclick = (e) => {
        element.style.position = 'absolute'
        console.log(e.clientX, e.clientY)
        element.style.left = e.clientX+"px"
        element.style.top = e.clientY+"px"
    }
}