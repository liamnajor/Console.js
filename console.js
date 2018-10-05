var cons
var o
var c = 0
var inputtext
var div
var inputCatchError = function(c){
		if (c.key === 'Enter'){
            if (inputtext.value != null){
                try {
                  eval(inputtext.value);
                }
                catch(error) {
                  var string = error.stack.split("\n   ")
                  console.log(""+string+"");
                  // expected output: SyntaxError: unterminated string literal
                  // Note - error messages will vary depending on browser
                } {
                  eval(inputtext.value);
                }
                
            }
        }
}
var console = {
    init:function(options){
    o = options
    cons = document.createElement("div")
    cons.id = "console"
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
    window.addEventListener('error', function(e){
        errorstring = ""+e.error.stack+""
        console.vlog(errorstring, errorstring.length)
        })
        
}, log: function(input){
    var e = ""+input+""
    cons.removeChild(inputtext)
    inputtext.value = ""
    inputtext.addEventListener('keydown', function(e){inputCatchError(e)})
    console.vlog(input, e.length)
    cons.appendChild(inputtext)
}, vlog:function(input, width){
        var p = document.createElement("textarea")
        p.disabled = true
        p.cols = width
        p.rows = 1
        p.id = c
        p.innerHTML += ""+input+""
        cons.appendChild(p)
        var br = document.createElement("br")
        cons.appendChild(br)
        p = document.getElementById(""+c+"")
        var width = parseInt(p.style.width, 10)
        //console.log(width)
        p.cols = 304/12
        p.rows = width/304//math.ceil(width/163)
        c += 1
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
}/*
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


