/*   
  TODO REQUIRE:
        Remove items from ToDoList  -   Remove the correct item
        Why can't handle if empty
        Make the code more Clean - Remove repeating code
 */
function getTodoItems(dataObj) {
    for (var i = 0; i < dataArray.length; i++) {
        if (!dataArray[i].listItem.length) return;
        var itemList = document.getElementById("my-todo-list");
        var list = document.createElement("li");
        itemList.appendChild(list);
        list.innerHTML = dataArray[i].listItem;
        var spanItem = document.createElement('span');
        spanItem.style.float = 'right';
        var myCloseSymbol = document.createTextNode('\u00D7');
        spanItem.classList.add("closeBtn");
        spanItem.appendChild(myCloseSymbol);
        listItems[i].appendChild(spanItem);
        close[i].onclick = (function(item) {
            return function() {
                var div = this.parentElement;
                div.style.display = "none";
                var position = dataArray.indexOf(item); // Fix denne her linje
                dataArray.splice(position, 1); // Fix denne her linje
                localStorage.setItem("itemListRecord", JSON.stringify(dataArray));
                console.log(dataArray);
            }
        })(dataArray[i]);
        // close[i].onclick = function() {
        //     var div = this.parentElement;
        //     div.style.display = "none";
        //     var position = dataArray.findIndex(function(e) {
        //         return dataObj === e.dataObj;
        //     });
        //     dataArray.splice(position, 1);
        //     // var position = dataArray.splice(dataArray.indexOf('c'), 1); // Fix denne her linje            
        //     localStorage.setItem("itemListRecord", JSON.stringify(dataArray));
        //     console.log(dataArray);
        // }
        var list = document.getElementsByTagName('li');
        list[i].onclick = function() {
            this.classList.toggle("checked");
        }

    }
}
var keyAdd = false;
// Data Object
var dataArray = [];

dataArray = JSON.parse(localStorage.getItem("itemListRecord"));

// Add Close Button to <li></li> element
var listItems = document.getElementsByTagName('li');
for (var i = 0; i < listItems.length; i++) {
    var spanItem = document.createElement('span');
    spanItem.style.float = 'right';
    var myCloseSymbol = document.createTextNode('\u00D7');
    spanItem.classList.add("closeBtn");
    spanItem.appendChild(myCloseSymbol);
    listItems[i].appendChild(spanItem);
}

// Remove <li></li> element from the list
var close = document.getElementsByClassName("closeBtn");
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Add value from the input field
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
        keyAdd = true;
        var itemValue = document.getElementById("my-input").value;
        if (itemValue) {
            listTodoItem(itemValue);
        }
    }
});

document.getElementById("new-btn").addEventListener('click', function() {
    var itemValue = document.getElementById("my-input").value;
    if (itemValue) {
        listTodoItem(itemValue);
    }
});

// Create <li></li> to the todo list
function listTodoItem(textInput) {

    var dataObj = {
        listItem: textInput,
    };
    dataArray.push(dataObj);

    localStorage.setItem("itemListRecord", JSON.stringify(dataArray));

    console.log(dataArray);
    console.log(dataObj);

    var list = document.createElement("li");
    var textNode = document.createTextNode(textInput);
    list.appendChild(textNode);
    if (textNode === '') {
        alert("Nothing to add!");
    } else {
        var uList = document.getElementById("my-todo-list");
        uList.insertBefore(list, uList.childNodes[0]);
    }
    inputField = document.getElementById("my-input").value = '';

    var spanItem = document.createElement('span');
    spanItem.style.float = 'right';
    var myCloseSymbol = document.createTextNode('\u00D7');
    spanItem.classList.add("closeBtn");
    spanItem.appendChild(myCloseSymbol);
    listItems[0].appendChild(spanItem);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }

    }
    checkedAdded(dataObj);
}

// Add class "checked" to the li elemment when clicked
function checkedAdded(dataObj) {
    var list = document.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        list[i].onclick = function() {
            this.classList.toggle("checked");
        }
    }
    return dataObj;
}
getTodoItems(checkedAdded);
console.log(JSON.parse(localStorage.getItem("itemListRecord")));