
// Tabs
function OpenClassTable(evt, ClassN) {
  const element = document.getElementById(ClassN);
  element?.current.scrollIntoView()
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