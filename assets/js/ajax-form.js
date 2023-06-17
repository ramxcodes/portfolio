// Get form elements
var fullNameInput = document.getElementById('full-name');
var emailInput = document.getElementById('email');
var subjectInput = document.getElementById('subject');
var messageInput = document.getElementById('message');
var sendMessageBtn = document.getElementById('send-message-btn');

// Function to encode text for use in WhatsApp URL
function encodeText(text) {
  return encodeURIComponent(text).replace(/%20/g, '+');
}

// Function to generate and open WhatsApp link
function openWhatsApp() {
  var fullName = fullNameInput.value.trim();
  var email = emailInput.value.trim();
  var subject = subjectInput.value.trim();
  var message = messageInput.value.trim();

  // Construct the WhatsApp link
  var whatsappURL = 'https://wa.me/916263219134?text=' +
    encodeText('Hey, I\'m ' + fullName) +
    encodeText('\nEmail: ' + email) +
    encodeText('\nSubject: ' + subject) +
    encodeText('\nMessage: ' + message);

  // Open the WhatsApp link in a new tab/window
  window.open(whatsappURL, '_blank');
}

// Attach event listener to the Send Message button
sendMessageBtn.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  openWhatsApp();
});