var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
document.getElementById("contact-name").addEventListener("keyup", validateName);
function validateName() {
  var name = document.getElementById("contact-name").value;
  console.log(1);
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter full name";
    return false;
  }
  nameError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500 ">' +
    '<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />' +
    '</svg>';
  return true;
}
document.getElementById("contact-phone").addEventListener("keyup", validatePhone);
function validatePhone() {
  var phone = document.getElementById("contact-phone").value;
  if (phone.length == 0) {
    phoneError.innerHTML = "Phone no. is required";
    return false;
  }
  if (!phone.match(/^\d+$/)) {
    phoneError.innerHTML = "Only digits allowed";
    return false;
  }
  if (phone.length != 10) {
    phoneError.innerHTML = "Phone no. should be 10 digits";
    return false;
  }
  phoneError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500 ">' +
    '<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />' +
    '</svg>';
  return true;
}
document.getElementById("contact-email").addEventListener("keyup", validateEmail);
function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Enter a valid email address";
    return false;
  }
  emailError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500 ">' +
    '<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />' +
    '</svg>';
  return true;
}
document.getElementById("contact-message").addEventListener("keyup", validateMessage);
function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let left = 30 - message.length;
  if (left > 0) {
    messageError.innerHTML = left + " more words required";
    return false;
  }
  messageError.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-500 ">' +
    '<path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />' +
    '</svg>';
  return true;
}
document.getElementById('submit').addEventListener('click', function (event) {
  event.preventDefault();
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitError.innerHTML = 'Please fix errors to submit <span style="vertical-align: middle; display: inline-block;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" /></svg></span>';
    setTimeout(function () {
      submitError.innerHTML = "";
    }, 3000);
    return false;
  }
  submitError.innerHTML = "Form Submitted Successfully <span style=\"vertical-align: middle; display: inline-block;\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\" class=\"w-5 h-5 text-green-500\"><path fill-rule=\"evenodd\" d=\"M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z\" clip-rule=\"evenodd\" /></svg></span>";
  return true;
});
