$(document).ready(function () {
    var userData = [];
    let edit = false;

    function addUser(name, email, password, gender, place, skills) {
        var newRow = $("<tr>");
        newRow.append("<td>" + name + "</td>");
        newRow.append("<td>" + email + "</td>");
        newRow.append("<td>" + password + "</td>");
        newRow.append("<td>" + gender + "</td>");
        newRow.append('<td><button class="edit">Edit</button></td>');
        newRow.append('<td><button class="delete">Delete</button></td>');

        if (edit) {
            $("tbody tr:eq(" + editIndex + ")").replaceWith(newRow);
            userData[edit] = {
                name: name,
                email: email,
                password: password,
                gender: gender,
                place: place,
                skills: skills
            };
            edit = false;
        } else {
            $("tbody").append(newRow);
            userData.push({
                name: name,
                email: email,
                password: password,
                gender: gender,
                place: place,
                skills: skills
            });
        }
    }

    function clearForm() {
        $("#Name").val("");
        $("#Email").val("");
        $("#Phonenumber").val("");
        $("input[name='gender']").prop("checked", false);
        $("#dropdown").val("");
        $("input[type='checkbox']").prop("checked", false);
    }

    $("#submit").click(function (e) {
        e.preventDefault();

        var name = $("#Name").val();
        var email = $("#Email").val();
        var password = $("#Phonenumber").val();
        var gender = $("input[name='gender']:checked").val();
        var place = $("#dropdown").val();
        var skills = [];

        $("input[type='checkbox']:checked").each(function () {
            skills.push($(this).val());
        });

        addUser(name, email, password, gender, place, skills);
        clearForm();
    });

    $("table").on("click", ".delete", function () {
        var index = $(this).closest("tr").index();
        userData.splice(index, 1);
        $(this).closest("tr").remove();
    });

    $("table").on("click", ".edit", function () {
        edit = true;
        editIndex = $(this).closest("tr").index();
        var user = userData[editIndex];

        $("#Name").val(user.name);
        $("#Email").val(user.email);
        $("#Phonenumber").val(user.password);
        $("input[name='gender'][value='" + user.gender + "']").prop("checked", true);
        $("#dropdown").val(user.place);

        $("input[type='checkbox']").prop("checked", false);
        for (var i = 0; i < user.skills.length; i++) {
            $("input[value='" + user.skills[i] + "']").prop("checked", true);
        }
    });

    $("#clear").click(function (e) {
        e.preventDefault();
        clearForm();
        edit = false;
    });
});
