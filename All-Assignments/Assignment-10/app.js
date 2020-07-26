// var list = document.getElementById("list");

// function addTodo(){
//     var todo_item = document.getElementById("todo-item");

//     // create li tag with text node
//     var li = document.createElement("li");
//     var liText = document.createTextNode(todo_item.value)
//     li.appendChild(liText)

//     // create delete button
//     var delBtn = document.createElement("button");
//     var delText = document.createTextNode("DELETE");
//     delBtn.setAttribute("onclick", "deleteItem(this)")
//     delBtn.appendChild(delText)

//     // create edit button
//     var editBtn = document.createElement("button");
//     var editText = document.createTextNode("EDIT");
//     editBtn.appendChild(editText)
//     editBtn.setAttribute("onclick", "editItem(this)")
    

//     li.appendChild(delBtn)
//     li.appendChild(editBtn)

//     list.appendChild(li)

//     todo_item.value = "";

// }

// function deleteItem(a){
//     a.parentNode.remove()
// }

// function editItem(a){
//     // first method from class
//     var val = a.parentNode.firstChild.nodeValue;
//     var editValue = prompt("Enter edit value", val)
//     a.parentNode.firstChild.nodeValue = editValue

//     // // second method from class
//     // var val = prompt("Enter updated value", a.parentNode.firstChild.nodeValue)
//     // a.parentNode.firstChild.nodeValue = val;
// }

// function deleteAll(){
//     list.innerHTML = "";
// }












var list = document.getElementById("list");

var cancel_data = "";

function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // create span tag
    var span = document.createElement("span");
    var spanText = document.createTextNode(todo_item.value)
    span.setAttribute("class", "span_text w-75")
    span.appendChild(spanText)

    // create li tag with text node
    var li = document.createElement("li");
    li.setAttribute("class", "input-group bg-white rounded-lg mt-3")
    li.appendChild(span)

    // create edit button
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("Edit");
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")
    editBtn.setAttribute("class", "btn btn-success mx-2")

    // create delete button
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.setAttribute("class", "btn btn-danger")
    delBtn.appendChild(delText)

    // create save button
    var saveBtn = document.createElement("button");
    var saveText = document.createTextNode("Save");
    saveBtn.appendChild(saveText)
    saveBtn.setAttribute("onclick", "saveItem(this)")
    saveBtn.setAttribute("class", "btn btn-warning mx-2")
    saveBtn.setAttribute("style", "display: none")

    // create cancel button
    var cancelBtn = document.createElement("button");
    var cancelText = document.createTextNode("Cancel");
    cancelBtn.appendChild(cancelText)
    cancelBtn.setAttribute("onclick", "cancelItem(this)")
    cancelBtn.setAttribute("class", "btn btn-secondary")
    cancelBtn.setAttribute("style", "display: none")
    

    li.appendChild(editBtn)
    li.appendChild(delBtn)
    li.appendChild(saveBtn)
    li.appendChild(cancelBtn)

    list.appendChild(li)

    todo_item.value = "";

}

function deleteItem(a){
    a.parentNode.remove()
}

function editItem(a){
    // "a.parentNode" gives full li <li></li>
    var edit_row = a.parentNode;
    console.log(edit_row)

    // the "a" parameter is the edit button and its next sibling is save button
    a.style.display="none";
    a.nextSibling.style.display="none";
    a.nextSibling.nextSibling.style.display="inline";
    a.nextSibling.nextSibling.nextSibling.style.display="inline";

    // the  "edit_row.childNodes[0].innerHTML" is the todo name inside the <span> ... </span> tag so the "edit_row.childNodes[0]" targets the whole span tag
    var todo_item = edit_row.childNodes[0].innerHTML;


    cancel_data = todo_item;

    // this line puts the input field along with old todo name to be edited and overrite on the todo name
    edit_row.childNodes[0].innerHTML = "<input class='form-control span_text' type='text'  value='" + todo_item + "'>";
    // console.log(edit_row)
}


function saveItem(a){
    // "a.parentNode" gives full li <li></li>
    var save_row = a.parentNode;

    // the "a" parameter is the save button and its next sibling is cancel button , previous sibling is edit button and previous of previous sibling is delete button
    a.previousSibling.previousSibling.style.display="inline";
    a.previousSibling.style.display="inline";
    a.style.display="none";
    a.nextSibling.style.display="none";

    // the  "row_edit.childNodes[1].firstChild.value" is the name of student in input filed and  "row_edit.childNodes[2].firstChild.value" is the class of student in input field 
    var todo_item = save_row.childNodes[0].firstChild.value

    // this line puts the edited todo name from input field and overrite on the input field
    save_row.childNodes[0].innerHTML = todo_item
}

function cancelItem(a){
    // "a.parentNode" gives full li <li></li>
    var cancel_row = a.parentNode;

    // the "a" parameter is the cancel button and its previous sibling is save button and  previous of previous sibling is edit button and previous of previous of previous sibling is delete button
    a.previousSibling.previousSibling.previousSibling.style.display="inline";
    a.previousSibling.previousSibling.style.display="inline";
    a.previousSibling.style.display="none";
    a.style.display="none";

    // this line puts the edited todo name from input field and overrite on the input field
    cancel_row.childNodes[0].innerHTML = cancel_data
}

function deleteAll(){
    list.innerHTML = "";
}
