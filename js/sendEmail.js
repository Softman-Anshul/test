function sendCallMe() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "softmannotification@gmail.com",
        Password: "softmanrajan",
        To: 'rajan.chauhan.bly@gmail.com',
        From: "softmannotification@gmail.com",
        Subject: "Website Call Me",
        Body: "Name :- " + document.getElementById("lname").value + " Phone :- " + document.getElementById("lphone").value + " Email :- " + document.getElementById("lemail").value + " Product :- " + document.getElementById("lselect").value ,
      })
        .then(function (message) {
            alert("You message has been sent")
        });
}

function sendContact() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "softmannotification@gmail.com",
        Password: "softmanrajan",
        To: 'rajan.chauhan.bly@gmail.com',
        From: "softmannotification@gmail.com",
        Subject: "Website Call Me",
        Body: "Name :- " + document.getElementById("cname").value + " Email :- " + document.getElementById("cemail").value + " Message :- " + document.getElementById("cmessage").value ,
      })
        .then(function (message) {
            alert("You message has been sent")
        });
}