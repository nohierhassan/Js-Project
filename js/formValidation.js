// a fucntion to check if the passed field is null or not
function checkNull(field) {
	if (field == null || field =="")
		return false;
	else
		return true;
}
// a function to validate the email address with regex
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// a function to send the submitted data to the API

function sendData(jsonObj)
{

	fetch('https://afternoon-falls-30227.herokuapp.com/api/v1/contact_us',

	{
		method:'POST',
		body: jsonObj
	}
		).then(function (response){
			return response.text();
		}).then(function (text){
			console.log(text);
		}).catch(function (error){
			console.error(error);
		})
}



// the form validation function
function formValidation()
{
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	var message = document.getElementById("message").value;
	var error_message = document.getElementById("error_message");
	var text;
	error_message.style.display = "inherit";
	if(! checkNull(name))
	{
		text = "Name Field is Required!";
		error_message.innerHTML = text;
		return false;
	}
	else if(name.length < 3 || name.length > 50)
	{
		text = "Name must be between 3 and 5 Characters";
		error_message.innerHTML = text;
		return false;
	}
	else if(! checkNull(email))
	{
		text = "Email Field is Required!";
		error_message.innerHTML = text;
		return false;
	}
	else if(! validateEmail(email))
	{
		text = "Please enter a valid email address";
		error_message.innerHTML = text;
		return false;
	}
	else if(! checkNull(subject))
	{
		text = "Subject Field is Required!";
		error_message.innerHTML = text;
		return false;
	}
	else if(! checkNull(message))
	{
		text = "Message Field is Required!";
		error_message.innerHTML = text;
		return false
	}

	jsonObj = 
	{
		'name':name,
		'email':email,
		'subject':subject,
		'message':message
	}
	sendData(jsonObj);
	



}