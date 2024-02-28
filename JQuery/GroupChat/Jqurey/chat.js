$(document).ready(function(){
    $("#showPasswordButton").click(function(){
        var passwordInput = $("#password");
        passwordInput.attr("type", (passwordInput.attr("type") === "password") ? "text" : "password");
    });
});

function updateValue(value) {
    $('#selectedValue').text( value);
}

    $(document).ready(function () {
        let empty = [];

        $("#signup").click(function () {
            let email = $("#ea").val();
            let password = $("#np").val();

            if (email !== "" && password !== "") {
                let data = {
                    ea: email,
                    np: password
                };
                empty.push(data);
                console.log(empty);
                
            }
        });
        $("#loginButton").click(function(event){
            event.preventDefault()
            let username = $("#username").val();
            // console.log(username,'uhhhu')
            let pass = $("#password").val();
            for(i=0;i<empty.length;i++){
                if(empty[i].ea==username && empty[i].np==pass){
                    $("#page1").css("display","none")
                    $(".page3").css("display","block")

                }
            }

        })
    });


   
