//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDBpi1PRIX-oG0040u3vfEXf93Uahh9Dw4",
    authDomain: "let-s-chat-web-app-5b813.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-5b813-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-5b813",
    storageBucket: "let-s-chat-web-app-5b813.appspot.com",
    messagingSenderId: "841377945465",
    appId: "1:841377945465:web:cbdf7b234edbd063d741a8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

//Start code

//End code
    } });  }); }
getData();