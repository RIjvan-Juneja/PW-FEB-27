const boxElement0 = document.getElementById("c0");
const boxElement1 = document.getElementById("c1");
const boxElement2 = document.getElementById("c2");
const boxElement3 = document.getElementById("c3");
const boxElement4 = document.getElementById("c4");
const boxElement5 = document.getElementById("c5");


// add a click event listener to the element
boxElement0.addEventListener("click", function () {
  alert("you just clicked me ");
});
boxElement1.addEventListener("dblclick", function () {
    alert("you just dblclick clicked me ");
  });
  boxElement2.addEventListener("mouseover", function () {
    alert("you just mouseover me ");
  });
  boxElement3.addEventListener("mouseout", function () {
    alert("you just Mouseout me ");
  });
  boxElement4.addEventListener("onkeypress", function () {
    alert("you just onkeypress me ");
  });
  boxElement5.addEventListener("keydownkeyup", function () {
    alert("you just keydownkeyup me ");
  });