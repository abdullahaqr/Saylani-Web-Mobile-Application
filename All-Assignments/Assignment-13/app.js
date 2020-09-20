var myName = "";

let fb_login = () => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...

            myName = user.displayName

            var fb_login = document.getElementById("fb-login")
            fb_login.classList.add("d-none")

            var chat_screen = document.getElementById("chat-screen")
            chat_screen.classList.remove("d-none")


        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...

        });
}

function sendMessage() {
    // to get message
    var message = document.getElementById("message").value;

    // to save data in database
    firebase.database().ref("chat-app").push().set({
        "sender": myName,
        "message": message
    });

    document.getElementById("message").value = "";

    // to prevent form from submitting automatically
    return false;
}


// to listen for incoming messages
firebase.database().ref("chat-app").on("child_added", function (snapshot) {
    var html = "";

    // to show delete button if message is sent by sender

    if (snapshot.val().sender == myName) {

        html += `<div id='message-${snapshot.key}' class="rounded-lg bg-primary text-light mb-3 py-2 px-2"><b>${snapshot.val().sender}:</b><br>${snapshot.val().message}<br>`;

        html += `<div class="d-flex flex-row-reverse"><button data-id='${snapshot.key}' onclick='deleteMessage(this);' class="btn btn-danger btn-sm rounded">Delete</button></div>`;

        html += `</div>`;
    }
    else {
        // to give each message a unique ID
        html += `<div id='message-${snapshot.key}' class="rounded-lg bg-secondary text-light mb-3 py-2 px-2"><b>${snapshot.val().sender}:</b><br> ${snapshot.val().message}</div>`;

    }

    document.getElementById("messages").innerHTML += html;
});



function deleteMessage(self) {
    // get message ID
    var messageId = self.getAttribute("data-id");

    // delete message
    firebase.database().ref("chat-app").child(messageId).remove();
}

// attach listener for delete message
firebase.database().ref("chat-app").on("child_removed", function (snapshot) {
    // remove message node
    document.getElementById(`message-${snapshot.key}`).innerHTML = "This message has been removed";
});