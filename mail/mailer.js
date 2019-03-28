var email 	= require("./mail/emailing/node_modules/emailjs/email");
var server 	= email.server.connect({
   user:    "gradeabovetherest.com", 
   password:"@9H5N26B", 
   host:    "smtp.gmail.com", 
   ssl:     true
});

function data()
{
server.send({
   text:    "i hope this works", 
   from:    "you <gradeabovetherest@gmail.com>", 
   to:      "someone <gradeabovetherest@gmail.com>",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });
}
data();