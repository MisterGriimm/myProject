document.onreadystatechange = () => {
    var element = document.getElementById('test')
    element.onclick = function (e) {
        element.style.backgroundColor = "red"
    }
}