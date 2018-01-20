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

  		else if
  		else {
  			$("#errors").append("<b>-Invalid Email Address</b>")
  		}


  });
});