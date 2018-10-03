
var console = {
    init:function(options){
    var cons = document.createElement("div")
    if(options.w != null || options.w != undefined){
        cons.width = options.w
    } else {
        cons.width = window.availWidth
    }
    if(options.h != null || options.h != undefined){
        cons.height = options.h
    } else {
        cons.height = 64
    }
    cons.id = "console"
    if(options.location != null || options.location != undefined){
        if(options.location = "l"){
            cons.style = "left:0;"
        } else if(options.location = "r"){
            cons.style = "right:0;"
        } else if(options.location = "d"){
            cons.style = "bottom:0;"
        } else if(options.location = "u"){
            cons.style = "top:0;"
        } else {
            console.log("invalid location")
        }
        getElementsByTagName("body")[0].appendChild(cons)
    }
    window.addEventListener('error', function(e){
        var errorstring = e.error.stack.split(":")
        var type = errorstring[0]
        var message = errorstring[1].split("at")
        var tempmess = message[0]
        var location = errorstring[2]
        message = tempmess
        var line = errorstring[3]
        var col = errorstring[4]
        window.alert("TEMPORARY WORKAROUND: "+type+":"+message+" at "+location+", line "+line+", column "+col+"")
        console.log(""+type+":"+message+" at "+location+", line "+line+", column "+col+"", "error")
        })
}, log:function(input, type){
        var p = document.createElement("p")
        p.innerHTML = ""+input+""
        if(type === "error"){
            p.style = "color: red;"
        }
        console.appendChild(p)
}, clear: function(){
    
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


