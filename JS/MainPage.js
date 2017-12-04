// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// Click on a close button to hide the current list item
function registerEventListener () {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
    "click",
    function(ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("taskname").value;
    var inputDescription = document.getElementById("taskdesc").value;
    var inputStar1 = document.getElementById("star1");
    var inputStar2 = document.getElementById("star2");
    var inputDate = document.getElementById("deadlinedate").value;
    var inputReminderDays = document.getElementById("reminderdays").value;

    var inputStar = inputStar1.checked ? inputStar1.value : inputStar2.value;

    var t1 = document.createTextNode(
        inputValue +
        ", " +
        inputDescription +
        ", " +
        inputStar +
        ", " +
        inputDate +
        ", " +
        inputReminderDays
    );
    li.appendChild(t1);
    var close_span = document.createElement("SPAN");
    var close_span_X = document.createTextNode("\u00D7");
    close_span.className = "close";
    close_span.appendChild(close_span_X);
    li.appendChild(close_span);
    if (
        inputValue === "" ||
        inputDescription === "" ||
        inputReminderDays === "" ||
        inputDate === ""
    ) {
        alert("Your fields are empty, please write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        registerEventListener();
    }
    document.getElementById("taskname").value = "";
    document.getElementById("taskdesc").value = "";
    document.getElementById("star").value = "";
    document.getElementById("deadlinedate").value = "";
    document.getElementById("reminderdays").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}

registerEventListener();