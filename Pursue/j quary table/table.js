$(document).ready(function () {
    let sl = 1
    $("#buttonadd").click(function () {
        let input = $("#input").val()
        Row(input)
        $("#input").val("");
    
    })
    function Row(todo) {
        let newRow = "<tr>"
        newRow += "<td>" + sl++ + "</td>"
        newRow += "<td>" + todo + "</td>"
        newRow += "<td>" + "<button click='edit()'>Edit</button>" + "</td>"
        newRow += "<td>" + "<button click='delete()'>Delete</button>" + "</td>"

        newRow += "</tr>"
        $("#tbody").append(newRow)

    }
})