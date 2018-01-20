// shorthand for $(document).ready();
$(document).ready(function(){

  $("form").on("submit", function(e) {
  	e.preventDefault();
  	var email = document.getElementById("emailID").value;
  	var password = document.getElementById("passwordID").value;
  		
// check if there is an @ in the email using RegExp //
  		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
  			return true
  		}
  		else {
  			$("#errors").append("<b class='message'>-Invalid Email Address</b>")
  		}

 // check if there is a number in the password using RegExp //
 		if(/^(?=.*[0-9])$/.test(password)) {
 			return true
 		}
 		else {
 			$("#errors").append("<b class='message'>-Password must contain a number</b>")
 		}
  });
});