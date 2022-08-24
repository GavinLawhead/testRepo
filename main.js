import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWlMGxRnBjanPp6EO5uBAdjqnmkwHqSQs",
  authDomain: "test-repo-ce783.firebaseapp.com",
  databaseURL: "https://test-repo-ce783-default-rtdb.firebaseio.com",
  projectId: "test-repo-ce783",
  storageBucket: "test-repo-ce783.appspot.com",
  messagingSenderId: "481214118159",
  appId: "1:481214118159:web:aa49f7a4664df0345ba67a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// reference messages collection

let messagesRef = firebase.database().ref("messages");

//listen for form SubmitEvent

document.querySelector("#thebutton").addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();

  // these are related to the input values
  var name = getInputVal("name");
  var email = getInputVal("email");
  var subject = getInputVal("subject");
  var message = getInputVal("message");

  // save message
  saveMessage(name, email, subject, message);
  console.log(name);
}

// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// save the message to firebase

function saveMessage(name, email, subject, message) {
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
}
