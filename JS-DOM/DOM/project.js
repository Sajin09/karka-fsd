function add() {
    let userinput = document.getElementById("name").value;
    
    if (userinput.trim() !== "") {
        let list = document.createElement("li");
        list.innerHTML = userinput;
        let output = document.getElementById("output");
        output.appendChild(list);

        document.getElementById("name").value = "";
    }
}
