// Exercise #1
document.getElementById("node1").textContent = `I used the getElementById("node1") method to access this`;
//Select Node #2 and change the text to : "I used the getElementByClassName("node2") method to access all of these" */
const node2 = document.getElementsByClassName


//Select all the h3 tags and change the text to: "I used the getElementByTagName("h3")method to access all of these" */
const h3tags = document.getElementsByTagName("h3");
 for(let i = 0; i < h3tags.length; i++) {  
  h3tags[i].textContent = `I used the getElementByTagName("h3") method to access all of these`;
  consolw.log(h3tags);
}

// Exercise #2
const myPara = document.createElement("p");
myPara.textContent = "This node was created using the createElement() method";
//TODO: Append the created node to the parent node using the element.appendChild() method
const parentDiv = document.querySelector("#parent");
console.log(myPara);
parentDiv.appendChild(myPara);
//TODO: Create a <a> element using this document createElement()and put this text inside "I am a <a> tag"   
const myAnchor = document.createElement("a");
myAnchor.textContent = "I am a <a> tag";
//Bonus add a link href to the <a>
myAnchor.href = "https://truecoders.io";
myAnchor.target = "_blank";
//TODO:Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore()method
parentDiv.insertBefore(myAnchor, myPara);


// ------Exercise #3: Removing/Replacing Elements/Objects ----------

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newChildPara = document.createElement("p");
newChildPara.textContent = "New Child Node";
// Reference two elements for replacing
const parentExercise3 = document.getElementById("exercise-container3");
const nodeToReplace = document.getElementById("N1");
// Now actually replace it
parentExercise3.replaceChild(newChildPara, nodeToReplace);
// TODO: Remove the "New Child Node" after 2500 milliseconds (2.5 seconds)
setTimeout(() => {
  newChildPara.remove();
}, 2500);

/*------ Exercise #4: LIST ITEMS------*/

// Use the following array of values to generate a list on the DOM
let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)"
];

// TODO: Create an unordered list element
const groceryUL = document.createElement("ul");

// TODO: Iterate over the array values and create a list item element for each
for (let i = 0; i < list.length; i++) {
  const newLI = document.createElement("li");
  // TODO: Set the text content of the new list item
  newLI.textContent = list[i];
  // TODO: Append the new list items to the unordered element
  groceryUL.append(newLI);
}

// TODO: Append the unordered list to the `div#container` under exercise 4
document.querySelector("#container").append(groceryUL);






//------ Exercise #5-----//
function show() {
  const modalDiv = document.createElement("div");
  const modalCard = document.createElement("div");
  const modalPara = document.createElement("p");
  const modalCloseBtn = document.createElement("button");
  //Modifications
  modalPara.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
  modalDiv.id = "modal";
  modalCard.classList.add("modal-card");
  modalCloseBtn.textContent = "X";
  modalCloseBtn.addEventListener("click", () => { 
    modalDiv.remove();
  });
   //attaching the element to the page
  document.getElementsByClassName("exercise5")[0].append(modalDiv);
  modalDiv.append(modalCard);
  modalCard.append(modalCloseBtn, modalPara);
}
  //Select the button
  const createModalBtn = document.querySelector("#btn");
  //Give it an event Listener
  //And have that listener invoke the show function
  createModalBtn.addEventListener("click", show);
  //BONUS//
   document.addEventListener('DOMContentLoaded', function () {
  // Get modal container and buttons
  var modalContainer = document.getElementById('modalContainer');
  var openModalBtn = document.getElementById('openModalBtn');
  var closeModalBtn = document.getElementById('closeModalBtn');
   
  // Open modal function
  openModalBtn.addEventListener('click', function () {
    modalContainer.style.display = 'block';
  });

  // Close modal function
  closeModalBtn.addEventListener('click', function () {
  
  // Close modal if the overlay is clicked
  modalContainer.addEventListener('click', function (event) {
    if (event.target === modalContainer) {
      modalContainer.style.display = 'none';
    }});
  });
});

