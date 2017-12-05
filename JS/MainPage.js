// The Habit Object
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

function createInput(ph) {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = ph;
    input.className = "edit";
    return input;
}

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
    var inputName = document.getElementById("taskname").value;
    var inputDescription = document.getElementById("taskdesc").value;
    var inputGood = document.getElementById("star1");
    var inputBad = document.getElementById("star2");
    var inputDate = document.getElementById("deadlinedate").value;
    var inputReminderDays = document.getElementById("reminderdays").value;

    var inputStar = inputGood.checked ? inputGood.value : inputBad.value;

    var habit = new Habit(inputName, inputDescription, inputStar, inputReminderDays, inputDate);

    var divName = document.createElement("div");
    var divDes = document.createElement("div");
    var divStar = document.createElement("div");
    var divReminderDay = document.createElement("div");

    var textName = document.createTextNode("Name: " + habit.getName());
    var textDes = document.createTextNode("Description: " + habit.getDescription());
    var textStar = document.createTextNode(habit.isPositive() + ", ");
    var textReminder = document.createTextNode(habit.reminderDays);

    divName.appendChild(textName);
    divDes.appendChild(textDes);
    divStar.appendChild(textStar);
    divReminderDay.appendChild(textReminder);

    var t1 = document.createTextNode(
        inputDate
    );

    li.appendChild(divName);
    li.appendChild(divDes);
    li.appendChild(t1);
    li.appendChild(divReminderDay);

    // Create edit button
    var editButton = document.createElement("Button");
    var buttonText = document.createTextNode("Edit");
    editButton.onclick = function () {
        document.getElementById("reminderdays").style.color = "blue";
    };
    editButton.appendChild(buttonText);


    li.appendChild(editButton);

    var replaceName = createInput("name");
    var replaceDes = createInput("Description");
    var replaceTimes = createInput("times");
    replaceName.onsubmit = function () {
      divName.replaceChild(document.createTextNode(replaceName.value), textName);
    };
    var divRName = document.createElement("div").appendChild(replaceName);
    divRName.id = "replaceName";
    li.appendChild(divRName);
    li.appendChild(replaceDes);
    li.appendChild(replaceTimes);


    editButton.onclick = function () {
    var el = li.getElementById("replaceName");
        /*console.log("Iets");
        if(el.style.display === "none") {
            el.style.display.value = "inline";
        } else {
            el.style.display.value = "none";
        }*/
    };

    if(inputGood.checked) {
        li.style.background = 'rgb(0,255,0)';
    }
     else {
        li.style.background = 'rgb(255,0,0)';
    }

    var close_span = document.createElement("SPAN");
    var close_span_X = document.createTextNode("\u00D7");
    close_span.className = "close";
    close_span.appendChild(close_span_X);
    li.appendChild(close_span);
    if (
        inputName === "" ||
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
    /*document.getElementById("star").value = "";*/
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

