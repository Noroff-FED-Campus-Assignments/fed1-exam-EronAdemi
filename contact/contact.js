function validateForm() {
    let n = document.forms["myForm"]["fname"].value;
    let l = document.forms["myForm"]["fsubject"].value;
    let e = document.forms["myForm"]["femail"].value;
    let m = document.forms["myForm"]["fmessage"].value;
  
      var valEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    if (n == "") {
      document.forms["myForm"]["fname"].style.borderColor = "red";
      alert("Name must be filled out!");
      return false;
    } else {
      document.forms["myForm"]["fname"].style.borderColor = "black";
    }
    if (l.length < 15) {
      document.forms["myForm"]["fsubject"].style.borderColor = "red";
      alert("Subject must be at least 15 characters!");
      return false;
    } else {
      document.forms["myForm"]["fsubject"].style.borderColor = "black";
    }
    if (e == "" || !valEmail.test(e)) {
      document.forms["myForm"]["femail"].style.borderColor = "red";
      alert("Your Email is invaild!");
      return false;
    } else {
      document.forms["myForm"]["femail"].style.borderColor = "black";
    }
    if (m.length < 25) {
      document.forms["myForm"]["fmessage"].style.borderColor = "red";
      alert("message must be at least 25 characters!");
      return false;
    } else {
      document.forms["myForm"]["fmessage"].style.borderColor = "black";
    }
    return true;
  }
  