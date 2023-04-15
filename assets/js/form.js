function Validation(){
    var name = document.getElementById('name').value
    // var phone = document.getElementById('phone').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
  
    // Name Validaton
    if(name.trim = ""){
    document.getElementById('name-error').innerHTML="Enter your name"
    return false
    }else if (name.length<3){
    document.getElementById('name-error').innerHTML="Enter a valid name"
    return false
    }
    else{
    document.getElementById('name-error').innerHTML=""
    name=true
    }
   // Email validation
   if(email.trim == ""){
    document.getAnimations("email-error").innerHTML="Please enter email id"
    return false
    }else if(email.length<3) {
    document.getElementById("email-error").innerHTML='please enter a valid email id'
    return false
    }else{
    document.getElementById("email-error").innerHTML=""
    email = true
    }
    // Message validation
    if(message.trim == ""){
    document.getElementById("message-error").innerHTML="Please enter any messages"
    return false
    }else{
    document.getElementById("message-error").innerHTML=""
    message = true
    }
  }
  
  
  $("#submit-form").submit((e)=>{
  e.preventDefault()
  
  $.ajax({
    url:"https://script.google.com/macros/s/AKfycbwExjG54yNWLqvO5uzho1zvfMqu7cd9Y86fwRWpTRJDdBIne51vE3zYPAfBPnLbvE2D/exec",
    data:$("#submit-form").serialize(),
    method:"post",
    success:function (response){
      alert("Form submitted successfully")
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error:function (err){
      alert("Something Error")
  
    }
  })
  })