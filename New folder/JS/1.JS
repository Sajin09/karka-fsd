$(document).ready(function () {
    $("#buttonhide").click(function (e) { 
        e.preventDefault();
        
        let username = $("#Username").val();
        let password = $("#Password").val();
        let DateofBirth = $("#dob").val();
        let gender=$("input[name='gender']:checked").val();
        let skills=[];
        $("input[name='skills']:checked").each(function(){;
            skills.push($(this).val());
               });

        let selectedValue = $("#citySelect").val();

        let userdata = {
            username: username,
            password: password,
            dob: DateofBirth,
            gender:gender,
            skills:skills,
            citySelect: selectedValue
            

        };

        console.log(userdata);
        
    });
});
