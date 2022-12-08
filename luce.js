let NameError = document.getElementById('name-error')
let PhoneError = document.getElementById('phone-error')
let EmailError = document.getElementById('email-error')
let MessageError = document.getElementById('message-error')
let submitError = document.getElementById('submit-error')

function validateName(){
    let name = document.getElementById("contact-name").value

    if(name.length == 0)
    {
        NameError.innerHTML = 'Name is required'
        return false
    }
    if(!name.match( /^[a-zA-Z]+( [a-zA-Z]+)+$/ ))
    {
        NameError.innerHTML = 'Write full name'
        return false
    }
    NameError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}

function validatePhone (){
    let phone = document.getElementById("contact-phone").value

    if(phone.length == 0)
    {
        PhoneError.innerHTML = 'Phone number is required'
        return false
    }
    if(phone.length != 10)
    {
        PhoneError.innerHTML = 'Phone number should be 10 digits'
        return false
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        PhoneError.innerHTML = 'Phone number should be number'
        return false
    }
    PhoneError.innerHTML = '<i class="fas fa-check-circle"></i>' 
    return true
}

function validateEmail(){
    let email = document.getElementById("contact-email").value

    if(email.length == 0)
    {
        EmailError.innerHTML = 'Email is required'
        return false
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) // /^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/
    {
        EmailError.innerHTML = 'Email format not correct'
        return false
    }
    EmailError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}

function validateMessage(){
    let message = document.getElementById("contact-message").value
    let required = 20
    let left = required - message.length

    if(left > 0)
    {
        MessageError.innerHTML = left + 'more characters required'
        return false
    }
    MessageError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}

function validateForm(){
    if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage())
    {
        submitError.style.display='block'
        submitError.innerHTML='First fix error to submit'
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false
    }
    else
    {
        let name = document.getElementById("contact-name").value
        let phone = document.getElementById("contact-phone").value
        let email = document.getElementById("contact-email").value
        let message = document.getElementById("contact-message").value
        /*document.write(name,phone,email,message)*/

        let total=("Your message is sent.\nFull name: " + name + "\nPhone number: " + phone + "\nEmail: " + email + "\nYour message: " + message)
        alert(total)

    }
}



  //Get the button
  var mybutton = document.getElementById("myBtn");
      
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


