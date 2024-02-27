$(document).ready(function(){
    $("#home-tab, #profile-tab, #contact-tab, #disabled-tab, #dis-tab").click(function(){
        $("#home-tab, #profile-tab, #contact-tab, #disabled-tab, #dis-tab").css("background-color", "");
        $("#home-tab, #profile-tab, #contact-tab, #disabled-tab, #dis-tab").css("color", "gold");
        $(this).css("background-color", "transparent");
        $(this).css("color", "white");
    });
});
    