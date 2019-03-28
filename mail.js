
var mailer = require('nodemailer');

var mailInfo = mailer.createTransport({
		service: 'gmail',
		auth: {
    user: 'gradeabovetherest@gmail.com',
    pass: '@9H5N26B'
  }
});


var mailMessage = {
  from: document.write(document.getElementById("Email").value,
  to: 'gradeabovetherest@gmail.com',
  subject: document.write(document.getElementById("Subject").value,
  text: document.write(document.getElementById("First_Name").value + "<br>" + 
						document.getElementById("Last_Name").value) + "<br><br>" +
						document.getElementById("Message_Box").value) + "<br><br>") 
};



function data()
{
	mailInfo.sendMail(mailMessage, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
	}); 	
}