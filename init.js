
var frame = document.createElement("iframe")
frame.src = "console.html"
frame.id = "console"
frame.style = "position: absolute; right: 0; bottom: 0;"
var min = document.createElement("button")
var minimized = false
min.oclick = function(){
    if(minimized === false){
        //minimize
    } else if(minimized === true){
        //maximize
    }
}
document.getElementsByTagName("body")[0].appendChild(frame)