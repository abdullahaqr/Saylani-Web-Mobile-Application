var list = document.getElementById("list");

var cancel_data = "";

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // create div tag of list with textnode
    var div_List = document.createElement("div");
    var div_ListText = document.createTextNode(todo_item.value)
    div_List.setAttribute("class", "input-group span_text bg-white rounded-lg mt-3")
    div_List.appendChild(div_ListText)

    // create div tag for buttons
    var div_Buttons = document.createElement("div");
    div_Buttons.setAttribute("class", "input-group-append ml-auto")
    div_List.appendChild(div_Buttons)

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.setAttribute("class", "btn btn-sm btn-success mx-2 rounded")

    // create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.setAttribute("class", "btn btn-sm btn-danger rounded")
    delBtn.appendChild(delText)

    // create save button
    var saveBtn = document.createElement("button");
    var saveText = document.createTextNode("Save");
    saveBtn.appendChild(saveText)
    saveBtn.setAttribute("onclick", "saveItem(this)")
    saveBtn.setAttribute("class", "btn btn-sm btn-warning mx-2 rounded")
    saveBtn.setAttribute("style", "display: none")

    // create cancel button
    var cancelBtn = document.createElement("button");
    var cancelText = document.createTextNode("Cancel");
    cancelBtn.appendChild(cancelText)
    cancelBtn.setAttribute("onclick", "cancelItem(this)")
    cancelBtn.setAttribute("class", "btn btn-sm btn-secondary rounded")
    cancelBtn.setAttribute("style", "display: none")
    

    div_Buttons.appendChild(editBtn)
    div_Buttons.appendChild(delBtn)
    div_Buttons.appendChild(saveBtn)
    div_Buttons.appendChild(cancelBtn)

    list.appendChild(div_List)

    todo_item.value = "";

}

function deleteItem(a){
    a.parentNode.parentNode.remove()
}

function editItem(a){
    // "a.parentNode" gives full main div
    var edit_row = a.parentNode.parentNode;

    // the "a" parameter is the edit button and its next sibling is save button
    a.style.display="none";
    a.nextSibling.style.display="none";
    a.nextSibling.nextSibling.style.display="inline";
    a.nextSibling.nextSibling.nextSibling.style.display="inline";

    // the  "edit_row.childNodes[0].innerHTML" is the todo name inside the main div tag so the "edit_row.childNodes[0]" targets the first child that is entered by todo input field
    var todo_item = edit_row.childNodes[0].nodeValue;


    cancel_data = document.createTextNode(todo_item);

    var inputField = document.createElement("input")
    inputField.setAttribute("class","form-control span_text")
    inputField.setAttribute("type","text")
    inputField.setAttribute("value", todo_item)
    

    // this line puts the input field along with old todo name to be edited and overrite on the todo name
    edit_row.replaceChild(inputField, edit_row.childNodes[0]);
}


function saveItem(a){
    // "a.parentNode" gives full main div
    var save_row = a.parentNode.parentNode;

    // the "a" parameter is the save button and its next sibling is cancel button , previous sibling is edit button and previous of previous sibling is delete button
    a.previousSibling.previousSibling.style.display="inline";
    a.previousSibling.style.display="inline";
    a.style.display="none";
    a.nextSibling.style.display="none";

    var todo_item = document.createTextNode(save_row.childNodes[0].value) 

    // this line puts the edited todo name from input field and overrite on the input field
    save_row.replaceChild(todo_item, save_row.childNodes[0]);
}

function cancelItem(a){
    // "a.parentNode" gives full main div
    var cancel_row = a.parentNode.parentNode;

    // the "a" parameter is the cancel button and its previous sibling is save button and  previous of previous sibling is edit button and previous of previous of previous sibling is delete button
    a.previousSibling.previousSibling.previousSibling.style.display="inline";
    a.previousSibling.previousSibling.style.display="inline";
    a.previousSibling.style.display="none";
    a.style.display="none";

    // this line puts the old todo name from input field and overrite on the edited todo name
    cancel_row.replaceChild(cancel_data, cancel_row.childNodes[0]);
}

function deleteAll(){
    list.innerHTML = "";
}
