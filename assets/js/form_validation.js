function validation() {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var phone = document.getElementById('phone').value

  var message = document.getElementById('m').value
  var nameValidation = /^[A-Za-z]+$/;


  if (name == '' && email == '' && phone == '' && message == '') {

    alert("Enter all fields");
    return false

  }

  if (name == '') {
    alert("Enter  name");
    return false
  } else if (name.indexOf(" ") >= 0) {
    alert("Name not entered.")
    return false
  } else if (!nameValidation.test(name)) {
    alert("Invalid characters");
    return false
  }
  else if (name.length <= 3) {
    alert("The  name must be atleast 3 character")
    return false
  }

  else {
    document.getElementById('name').innerHTML = ""
    name = true
  }


  if (email == '') {
    alert("Please enter your  email")
    return false
  } else if (email.length < 10) {
    alert("Please enter  your correct E-mail")
    return false
  }
  else {
    document.getElementById('email').innerHTML = ""
    email = true
  }


  if (phone == '') {
    alert("Mobile number must not be Blank")
    return false
  } else if (phone.length != 10) {
    alert("Enter valid mobile number")
    return false
  }
  else {
    document.getElementById('phone').innerHTML = ""
    message = true
  }


  if (message == '') {
    alert("Message must not be Blank")
    return false
  } else if (message.length < 5) {
    alert("Message must be more than 5  char")
    return false
  }
  else {
    document.getElementById('message').innerHTML = ""
    message = true
  }


}






$("#submit-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbySyp0A7muiS75f_41H6joI6xIWt7U6dsW7P--r4ySpI3d2gcf0UZ4RpfDjZ-VIDPAw/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully")
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error")

    }
  })
})
