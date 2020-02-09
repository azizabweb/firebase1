var firebaseConfig = {
    apiKey: "AIzaSyCftyI483OaWtB4RgE94LiiVZmaReFLo7o",
    authDomain: "checkpoint-jquery.firebaseapp.com",
    databaseURL: "https://checkpoint-jquery.firebaseio.com",
    projectId: "checkpoint-jquery",
    storageBucket: "checkpoint-jquery.appspot.com",
    messagingSenderId: "393137458039",
    appId: "1:393137458039:web:6a93a1e4cfae910ffbaf72",
    measurementId: "G-YHKMXNMPR0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  document.getElementById("contactform").addEventListener('submit',submitForm);
  
  var messageRef= firebase.database().ref('contact-form');


  function submitForm(event){
      event.preventDefault();
      // Get values from the HTML form
      var name= document.getElementById("exampleInputName").value;
      var email= document.getElementById("exampleInputEmail1").value;
      var number= document.getElementById("exampleInputNumber1").value;
      var birthday= document.getElementById("exampleInputBirthday").value;
      var password= document.getElementById("exampleInputPassword1").value;

      sendMessage(name,email,number,birthday,password); 
  }

  function sendMessage(name,email,number,birthday,password){
      var newMessageRef= messageRef.push();
      alert('Sumbission Done!');
      newMessageRef.set({
          user_name:name,
          user_email:email,
          user_number:number,
          user_birthday:birthday,
          user_password:password
      })
  }