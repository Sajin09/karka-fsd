$(document).ready(function () {
    $("#button").click(function (e) {
        e.preventDefault();

        let name = $("#Username").val();
        let email = $("#Email").val();
        let number = $("#Phonenumber").val();
        let Address = $("#Address").val();
        let Objective = $("#Objective").val();
        let Hobbies =( $("#Hobbies").val()).split(',');

        let skills = [];
        $("#skills input[type='checkbox']").each(function () {
            if ($(this).prop("checked")) {
                skills.push($(this).val());
            }
        });

        let educational_details = [];

        let edu_name_1 = $("#name11").val();
        let inst_name_1 = $("#name12").val();
        let year_of_passing_1 = $("#name13").val();
        let presentage_1 = $("#name14").val();

        let edu_name_2 = $("#name21").val();
        let inst_name_2 = $("#name22").val();
        let year_of_passing_2 = $("#name23").val();
        let presentage_2 = $("#name24").val();

        let edu_name_3 = $("#name31").val();
        let inst_name_3 = $("#name32").val();
        let year_of_passing_3 = $("#name33").val();
        let presentage_3 = $("#name34").val();

        let edu1 = {
            edu_name: edu_name_1,
            inst_name: inst_name_1,
            year_of_passing: year_of_passing_1,
            presentage: presentage_1
        };

        let edu2 = {
            edu_name: edu_name_2,
            inst_name: inst_name_2,
            year_of_passing: year_of_passing_2,
            presentage: presentage_2
        };

        let edu3 = {
            edu_name: edu_name_3,
            inst_name: inst_name_3,
            year_of_passing: year_of_passing_3,
            presentage: presentage_3
        };

        educational_details.push(edu1, edu2, edu3);

        let userdata = {
            Username: name,
            Email: email,
            Phonenumber: number,
            Address: Address,
            Objective: Objective,
            skills: skills,
            Hobbies: Hobbies,
            educational_details: educational_details
        };



        console.log(userdata);

        let personal_information =[];

        let father_name = $("#fname").val();
        let mother_name = $("#mname").val();
        let sibilings_name = $("#sname").val();
        let marital_status = $("#mstatus").val();

        let per_information ={
            father_name : father_name,
            mother_name : mother_name,
            sibilings_name : sibilings_name,
            marital_status : marital_status
        }

        personal_information.push(per_information)

        console.log(personal_information)
    });
});


