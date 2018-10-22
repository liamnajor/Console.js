var cons
var o
var c = 0
var inputtext
var div
var hidebutton
var inputCatchError = function(c){
		if (c.key === 'Enter'){
            if (inputtext.value != ""){
                try {
                  eval(inputtext.value);
                }
                catch(error) {
                  var string = error.stack.split("\n   ")
                  console.log(""+string+"");
            }
        }
        inputtext.value = ""
}
}
var console = {
    init:function(options){
    o = options
    cons = document.createElement("div")
    cons.id = "console"
    cons.style = "border: 1px solid; position: absolute; right: 0; top: 0; height: 105px;"
    cons.style.display = "true"
    document.getElementsByTagName("body")[0].appendChild(cons)
    
    cons =  document.getElementById( "console")
    cons.style.position = "absolute"
    cons.style.bottom = 0
    var input = document.createElement("textarea")
    input.rows = 1
    input.id = "input"
    input.addEventListener('keydown', function(e){inputCatchError(e)})
    cons.appendChild(input)
    inputtext = document.getElementById("input")
    var button = document.createElement("input")
    button.type ="button"
    button.id = "inputhide"
    button.value = "hide"
    cons.appendChild(button)
    hidebutton = document.getElementById("inputhide")
    window.addEventListener('error', function(e){
        errorstring = ""+e.error.stack+""
        console.vlog(errorstring, errorstring.length)
        })
        
}, log: function(input){
    var e = ""+input+""
    cons.removeChild(inputtext)
    cons.removeChild(hidebutton)
    inputtext.value = ""
    inputtext.addEventListener('keydown', function(e){inputCatchError(e)})
    console.vlog(input, e.length)
    var s = c + 1
    var pos = s * 64
    inputtext.style = "position: relative; top: "+pos+";"
    hidebutton.style = "position: relative; top: "+pos-20+";"
    cons.appendChild(inputtext)
    cons.appendChild(hidebutton)
}, vlog:function(input, width){
        var p = document.createElement("textarea")
        p.disabled = true
        p.cols = width
        p.rows = 1
        p.id = c
        p.innerHTML += ""+input+""
        var y = c + 1
        p.style = "position: relative; top: "+y*64+";"
        cons.appendChild(p)
        var br = document.createElement("br")
        br.id = ""+c+"b"
        cons.appendChild(br)
        p = document.getElementById(""+c+"")
        var width = parseInt(p.style.width, 10)
        p.cols = 304/12
        p.rows = width/304
        c += 1
        if (c === 3){
             cons.removeChild(document.getElementById("0"));
             cons.removeChild(document.getElementById("0b"));
             document.getElementById("1").id = 0
             document.getElementById("1b").id = "0b"
             document.getElementById("0").style =  "position: relative; top: 64;"
             document.getElementById("2").id = 1
             document.getElementById("2b").id = "1b"
             document.getElementById("1").style =  "position: relative; top: 128;"
             c -= 1
        }
}, clear: function(){
    cons.innerHTML = ""
}, assert: function(input){
    //unknown if this is correct
    try {
  eval(input);
}
catch(error) {
  console.log(""+error.stack+"", error)
}
}
}
document.getElementById("inputhide").onclick = function(){
	if(document.getElementById("console").style.display === "none"){
	    document.getElementById("console").style.display = "true"
    }
	if(document.getElementById("console").style.display === "true"){
	    document.getElementById("console").style.display = "none"
    }
}
/*
**assert()	Writes an error message to the console if the assertion is false
*clear()	Clears the console
count()	Logs the number of times that this particular call to count() has been called
error()	Outputs an error message to the console
group()	Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
groupCollapsed()	Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
groupEnd()	Exits the current inline group in the console
info()	Outputs an informational message to the console
log()	Outputs a message to the console
table()	Displays tabular data as a table
time()	Starts a timer (can track how long an operation takes)
timeEnd()	Stops a timer that was previously started by console.time()
trace()

* = done
** = done, but unsure if correct
*/


