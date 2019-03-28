var email     = require("./node_modules/emailjs/email");
var server     = email.server.connect({
   user:    "troyamlee19@gmail.com", 
   password: "savage1337", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

function data()
{
server.send({
   text:    "i hope this works", 
   from:    "you <troyamlee19@gmail.com>", 
   to:      "someone <gradeabovetherest@gmail.com>",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });
}
data();