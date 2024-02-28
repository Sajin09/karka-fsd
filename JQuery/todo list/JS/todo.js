$(document).ready(function(){
    $("#add").click(function(){
       let input= $("#input").val()
       $("#output").append("<li>"+input+"</li>")
       $("#input").val(" ");
    })

    $("#list").dblclick(function(){
        $("#output").remove();
    })
    
})