
// Initialize Firebase
var config = {
    apiKey: "",
    authDomain: "contact-c4457.f
    gdfgsdf
    gsfgsdfg
    sdfgsdfgsds
    "gsdfg
  };
  
  firebase.initializeApp(config);
  
  // ------------------ Database - Contact Form ----------------
  
  // Reference messages collection (since NOSQL DB, no need to create collection (similiar to tables in SQL))
  // collections are created "on the fly"
  
  var messagesRef = firebase.database().ref("messages");
  
  // Listen for form submit
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  // Submit form
  function submitForm(e) {
    e.preventDefault();
  
    // Get values
    var name = getInputVal("name");
    var company = getInputVal("company");
    var email = getInputVal("email");
    var phone = getInputVal("phone");
    var message = getInputVal("message");
  
    // Save Message
    saveMessage(name, company, email, phone, message);
  
    document.getElementById("contactForm").reset();         // -------------- refactor
  }
  
  // Function to get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  
  // save Messages to DB
  function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,                       // -------------- refactor
      company: company,                 // -------------- refactor
      email: email,
      phone: phone,
      message: message
    });
  }
  