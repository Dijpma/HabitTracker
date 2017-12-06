// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
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

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    li.id = "hbid";
    var inputValue = document.getElementById("taskname").value;
    var inputDescription = document.getElementById("taskdesc").value;
    //var inputStar1 = document.getElementById("star1");
    //var inputStar2 = document.getElementById("star2");
    var inputDate = document.getElementById("deadlinedate").value;
    var inputReminderDays = document.getElementById("reminderdays").value;

    //var inputStar = inputStar1.checked ? inputStar1.value : inputStar2.value;


    /*var t1 = document.createTextNode(
        inputValue +
        inputDescription
    );*/


    var t1 = document.createTextNode(
        inputValue
    );

    var t2 = document.createTextNode(
        inputDescription
    );


    var list = document.createElement("ul");
    list.id = "listID";

    var listObject = document.createElement("li");
    var paraH = document.createElement("p");
    paraH.id = "paraH";
    var x = document.createElement("LABEL");
    x.innerHTML = "Habbit:";
    listObject.appendChild(x);
    paraH.appendChild(t1);
    listObject.appendChild(paraH);
    list.appendChild(listObject);


    var listObject2 = document.createElement("li");
    var paraH2 = document.createElement("p");
    paraH2.id = "paraH";
    var y = document.createElement("LABEL");
    y.innerHTML = "Desc:";
    listObject2.appendChild(y);
    paraH2.appendChild(t2);
    listObject2.appendChild(paraH2);
    list.appendChild(listObject2);

    var listObject3 = document.createElement("li");
    list.appendChild(listObject3);
    var div = document.createElement("div");
    listObject3.appendChild(div);
    var table  = document.createElement("table");
    table.id = "customers";
    div.appendChild(table);

    var tbody  = document.createElement("tbody");
    table.appendChild(tbody);

    function createDay() {

    }

    function createDay(day) {
        var tbr  = document.createElement("tr");
        tbody.appendChild(tbr);
        var tbd1  = document.createElement("td");
        tbody.appendChild(tbd1);
        var lbl  = document.createElement("label");
        lbl.innerHTML = day;
        tbd1.appendChild(lbl);
    }

    function createConfirm(yesOrNo) {
        var tbd2  = document.createElement("td");
        tbody.appendChild(tbd2);
        var lb2  = document.createElement("label");
        lb2.innerHTML = yesOrNo;
        tbd2.appendChild(lb2);
    }

    createDay("Monday");
    createConfirm("Yes");
    createDay("Tuesday");
    createConfirm("Yes");
    createDay("Wednesday");
    createConfirm("Yes");
    createDay("Thursday");
    createConfirm("Yes");
    createDay("Friday");
    createConfirm("Yes");
    createDay("Saturday");
    createConfirm("Yes");
    createDay("Sunday");
    createConfirm("Yes");


    li.appendChild(list);

    var canEdit = false;

    var close_span = document.createElement("SPAN");
    var close_span_X = document.createTextNode("\u00D7");


    var editButton = document.createElement("button");
    var t = document.createTextNode("Edit");
    editButton.appendChild(t);
    editButton.id = "btnDIV";
    var elem = document.getElementById("btnDIV");
    editButton.onclick = function () {
        if(canEdit) {
            paraH.contentEditable = "false";
            paraH.style.color = "black";
            canEdit = false;
            editButton.textContent = "Edit";
        } else {
            paraH.contentEditable = "true";
            canEdit = true;
            paraH.style.color = "green";
            editButton.textContent = "Save";
        }
    };
    listObject.appendChild(editButton);

    var editButton2 = document.createElement("button");
    var t = document.createTextNode("Edit");
    editButton2.appendChild(t);
    editButton2.id = "btnDIV";
    var elem = document.getElementById("btnDIV");
    editButton2.onclick = function () {
        if(canEdit) {
            paraH2.contentEditable = "false";
            paraH2.style.color = "black";
            canEdit = false;
            editButton2.textContent = "Edit";
        } else {
            paraH2.contentEditable = "true";
            canEdit = true;
            paraH2.style.color = "green";
            editButton2.textContent = "Save";
        }
    };
    listObject2.appendChild(editButton2);

    //error message
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
    }
    else {
        document.getElementById("myUL").appendChild(li);
        registerEventListener();
    }


    document.getElementById("taskname").value = "";
    document.getElementById("taskdesc").value = "";
    document.getElementById("star").value = "";
    document.getElementById("deadlinedate").value = "";
    document.getElementById("reminderdays").value = "";

    // Delete button
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

function Habit(name, description, positive, reminder, deadline) {
    this.name = name;
    this.description = description;
    this.positive = positive;
    this.createionDate = new Date();
    this.reminderDays = reminder;
    this.deadlineDate = deadline;
    this.frequency;
}
// Setters
Habit.prototype.setName = function(n){this.name = n;};
Habit.prototype.setDescription = function (d) {this.description = d;};
Habit.prototype.setPositive = function (pos) {
    this.positive = pos;
};
Habit.prototype.setFrequency = function (freq) {
    this.frequency = freq;
};
// Getters
Habit.prototype.getName = function () {
    return this.name;
};
Habit.prototype.getDescription = function () {
    return this.description;
};
Habit.prototype.isPositive = function () {
    return this.positive;
};
Habit.prototype.getFrequency = function () {
    return this.frequency;
};
Habit.prototype.getDate = function () {
    return this.createionDate;
};
Habit.prototype.getReminderDay = function () {
    return this.reminderDays;
};
Habit.prototype.getDeadline = function () {
    return this.deadlineDate;
};

function createInput(ph,id) {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = ph;
    input.className = "edit";
    input.id = id;
    return input;
}