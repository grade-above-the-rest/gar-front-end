
var traffic = require('nodemailer');

var mailInfo = traffic.createTransport({
		service: 'gmail',
		auth: {
    user: 'gradeabovetherest@gmail.com',
    pass: '@9H5N26B'
  }
});




var Message = {
  from: 'gradeabovetherest@gmail.com',
  to: 'gradeabovetherest@gmail.com',
  subject: 'test nodemailer',
  text: 'nodemailer text test' 
};

function data()
{
	mailInfo.sendMail(Message, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
	}); 
}	

data();