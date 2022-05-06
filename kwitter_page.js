var firebaseConfig = {
    apiKey: "AIzaSyCqtWOSKNNEH1RIY1Q7W5EwqK5I_DiPLjU",
    authDomain: "kwitter-p-5cedc.firebaseapp.com",
    databaseURL: "https://kwitter-p-5cedc-default-rtdb.firebaseio.com",
    projectId: "kwitter-p-5cedc",
    storageBucket: "kwitter-p-5cedc.appspot.com",
    messagingSenderId: "770544175412",
    appId: "1:770544175412:web:88625e6fd82730f8a63d61",
    measurementId: "G-16KHLDBHG9"
  };
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
    } });  }); }
getData();