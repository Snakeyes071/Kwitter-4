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

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}