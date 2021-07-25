var To_do =  document.getElementById("to-do-list")

function getValue(){
    var input = document.getElementById("input");
    console.log(input.value);
    if(input.value === ""){
        alert("Please Fill out input field");
        input.value = prompt("Enter Value");
    }
    
    var li = document.createElement("li");
    var liTxt = document.createTextNode(input.value);
    li.appendChild(liTxt)
    console.log(li)

    To_do.appendChild(li);


    // create delete button
    // var delBtn = document.createElement("Button");
    // var delBtnTxt = document.createTextNode("DELETE");
    // delBtn.appendChild(delBtnTxt)
    // delBtn.setAttribute("onclick","del_Item(this)")
    // li.appendChild(delBtn)

    // console.log(delBtn);

    // // create edit button
    // var editBtn = document.createElement("Button");
    // var editBtnTxt = document.createTextNode("EDIT");
    // editBtn.appendChild(editBtnTxt)
    // editBtn.setAttribute("onclick","edit_Item(this)")
    // li.appendChild(editBtn)

    // console.log(editBtn);
var del = document.createElement("class")
del.className = "delicon";


    // create delete icon
    var delimg = document.createElement("img");
    delimg.setAttribute("src", "https://img.icons8.com/material-outlined/24/000000/trash--v2.png")
    delimg.setAttribute("class","delicon")
    // delimg.style.width = "50px";
    // delimg.style.marginLeft = "250px"
    // delimg.style.position = "absolute"
    // delimg.style.top = "-5px"
    delimg.setAttribute("onclick","del_Item(this)")
    li.appendChild(delimg)


     // create edit icon
     var editimg = document.createElement("img");
     editimg.setAttribute("src", "https://img.icons8.com/plumpy/24/000000/edit--v2.png")
     editimg.setAttribute("class","editicon")
    //  editimg.style.width = "50px";
    //  editimg.style.marginLeft = "320px";
    //  editimg.style.position = "absolute";
    //  editimg.style.top = "-5px";
     editimg.setAttribute("onclick","edit_Item(this)")
     li.appendChild(editimg)
 
    input.value = "";
}

function del_Item(delBtn){
    console.log(delBtn.parentNode)
    delBtn.parentNode.remove()
}


function edit_Item(editBtn){
        var edit_value = prompt("Enter Edit Value")
    editBtn.parentNode.firstChild.nodeValue = edit_value
    console.log(editBtn.parentNode.firstChild.nodeValue)

}
function delAll(){
    To_do.innerHTML = "";
}