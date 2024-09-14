
// Tabs
function OpenClassTable(evt, ClassN) {
    var i, tabcontent;

    // Get all elements with class "TabContent" and hide them
    tabcontent = document.getElementsByClassName("TabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(ClassN).style.display = "block";
}

// Button effect

let Buttons = document.getElementsByClassName("Button");
let ForEach = Array.prototype.forEach;

ForEach.call(Buttons, function (b)
{
    b.addEventListener("mousedown", AddElement);
});

function AddElement(e)
{
  let AddDiv = document.createElement("div");
  let MValue = Math.max(this.clientWidth, this.clientHeight);
  let SDiv = AddDiv.style;
  let px = "px";
  let Rect = this.getBoundingClientRect();

  SDiv.width = SDiv.height = MValue + px;
  SDiv.left = e.clientX - Rect.left - (MValue / 2) + px;
  SDiv.top = e.clientY - Rect.top - (MValue / 2) + px;

  AddDiv.classList.add("Pulse");
  this.appendChild(AddDiv);

  AddDiv.addEventListener('animationend', RemoveDiv);
  
  function RemoveDiv()
  {
    this.remove()
  }

    // console.log(AddDiv);
    // console.log(MValue);
    // console.log(Rect)
}