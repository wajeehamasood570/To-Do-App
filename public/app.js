var To_do =  document.getElementById("to-do-list")
console.log(firebase);

firebase.database().ref('todos').on('child_added',function(data){
   // create li tag with text node
    var li = document.createElement("li");
    var liTxt = document.createTextNode(data.val().value);
    li.appendChild(liTxt)
    console.log(li)

    To_do.appendChild(li);

     // ***************
var del = document.createElement("class")
del.className = "delicon";
// ************************************

    // create delete icon
    var delimg = document.createElement("img");
    delimg.setAttribute("src", "https://img.icons8.com/material-outlined/24/000000/trash--v2.png")
    delimg.setAttribute("class","delicon")
    delimg.setAttribute('id',data.val().key)
    delimg.setAttribute("onclick","del_Item(this)")
    li.appendChild(delimg)

    //////create edit icon
    var editimg = document.createElement("img");
     editimg.setAttribute("src", "https://img.icons8.com/plumpy/24/000000/edit--v2.png")
     editimg.setAttribute("class","editicon")
     editimg.setAttribute('id',data.val().key)
     editimg.setAttribute("onclick","edit_Item(this)")
     li.appendChild(editimg)

     input.value = "";



     console.log(data.val())
})

function getValue(){
    var input = document.getElementById("input");
    // console.log(input.value);

    var database = firebase.database().ref('todos');
    var key = database.push().key;
    var input = {
        value: input.value,
        key: key
    }

    database.child(key).set(input);
    // console.log(key);

    
    // if(input.value === ""){
    //     alert("Please Fill out input field");
    //     input.value = prompt("Enter Value");
    // }
    
   


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
   
    // // delimg.style.width = "50px";*******
    // // delimg.style.marginLeft = "250px"
    // // delimg.style.position = "absolute"
    // // delimg.style.top = "-5px"
    // 


     // create edit icon
    //  
    //  editimg.style.width = "50px";*************************
    //  editimg.style.marginLeft = "320px";
    //  editimg.style.position = "absolute";
    //  editimg.style.top = "-5px";
    // 
 
    input.value = "";
}

function del_Item(delBtn){
    firebase.database().ref('todos').child(delBtn.id).remove()
    // console.log(delBtn.parentNode)
    delBtn.parentNode.remove()
}


function edit_Item(editBtn){
        var edit_value = prompt("Enter Edit Value",editBtn.parentNode.firstChild.nodeValue)
        var editTodo = {
            value : edit_value,
            key: editBtn.id
        }


        firebase.database().ref('todos').child(editBtn.id).set(editTodo)
        editBtn.parentNode.firstChild.nodeValue = edit_Item;
        
    editBtn.parentNode.firstChild.nodeValue = edit_value
    console.log(editBtn.parentNode.firstChild.nodeValue)

}
function delAll(){
    
    To_do.innerHTML = "";
}