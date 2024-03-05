function isPasswordStrong(password) {
    if (password.length < 8) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[a-z]/.test(password)) {
        return false;
    }
    if (!/\d/.test(password)) {
        return false;
    }
    if (!/[@#$%^&*()_+!-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
        return false;
    }

    return true;
}

$(document).ready(function () {
    let empty = [];

    $("#signup").click(function () {
        let email = $("#ea").val();
        let password = $("#np").val();

        if (email !== "" && password !== "") {
            if (isPasswordStrong(password)) {
                let data = {
                    ea: email,
                    np: password
                };
                empty.push(data);
                console.log(empty);
            } else {
                alert("Please choose a stronger password.");
            }
        } else {
            alert("Please fill in both email and password fields.");
        }
    });

    $("#loginButton").click(function (event) {
        event.preventDefault();
        let username = $("#username").val();
        let pass = $("#password").val();

        if (username !== "" && pass !== "") {
            let validUser = false;

            for (let i = 0; i < empty.length; i++) {
                if (empty[i].ea == username && empty[i].np == pass) {
                    validUser = true;
                    break;
                }
            }

            if (validUser) {
                $("#page1").css("display", "none");
                $(".page3").css("display", "block");
            } else {
                alert("Invalid username or password.");
            }
        } else {
            alert("Please enter both username and password.");
        }
    });

    function sendMessage(message) {
        $("#chat22").append('<p>' + message + '</p>');
        $("#msg").val("");
    }

    $(".btn").click(function () {
        let message = $("#msg").val();
        if (message !== "") {
            sendMessage(message);
        } else {
            alert("Please enter a message before sending.");
        }
    });
});

