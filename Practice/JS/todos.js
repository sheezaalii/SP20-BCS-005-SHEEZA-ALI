
 window.onload = function()
 {
    var btn = document.getElementById("btn");
    btn.onclick = addhandle;
    var elements = document.getElementsByClassName("delbtn");
    for (var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", removeItem);
}
};
  

function addhandle() {
    var input = document.getElementById("newinput");
    var li = document.createElement("li");
    var todos = document.getElementById("todos");
    li.appendChild(document.createTextNode(input.value));
    todos.appendChild(li);
    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delbtn");
    deleteButton.appendChild(document.createTextNode("delete"));
    todos>li.appendChild(deleteButton).addEventListener("click", removeItem); 
    //append "delete button" to newly added "li"
}

  
    function removeItem(){
    this.parentNode.remove();
    }  
    
    

