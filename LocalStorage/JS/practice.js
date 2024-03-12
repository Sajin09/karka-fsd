$(document).ready(function(){
    $("#add").click(function(){
        let input = $("#input").val();
        let itemArray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];

        $("#input").val('');

        itemArray.push(input);
        localStorage.setItem('item', JSON.stringify(itemArray));

        displayItems();
    });

    function displayItems() {
        let gets = JSON.parse(localStorage.getItem('item'));
        let list = $("#list");
        list.empty();

        for (let i = 0; i < gets.length; i++) {
            list.append("<li>" + gets[i] + "</li>");
        }
    }

    displayItems();
});

$(document).ready(function(){
    $("#remove").click(function(){
        localStorage.removeItem('item')
    });
});