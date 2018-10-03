var cons
var o
var c = 0
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
    input.addEventListener('keydown', function(e){
		if (e.key === 'Enter'){
            if (input.value != null){
                console.log(input.value)
            }
        }
    })
    cons.appendChild(input)
    window.addEventListener('error', function(e){
        
        window.alert("TEMPORARY WORKAROUND: "+e.error.stack+"")
        errorstring = ""+e.error.stack+""
        console.vlog(errorstring, errorstring.length)
        })
        
}, log: function(input){
    var e = ""+input+""
    console.vlog(input, e.length)
}, vlog:function(input, width){
        var p = document.createElement("textarea")
        p.disabled = true
        p.cols = width/2
        p.rows = 2
        p.id = c
        p.innerHTML += ""+input+""
        cons.appendChild(p)
        var br = document.createElement("br")
        cons.appendChild(br)
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


