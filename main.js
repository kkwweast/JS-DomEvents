
// select node #1 and change the text
document.getElementById("node1").textContent = 'I used the getElementById("node1") method to access this';

// select Node #2 and change the text
const node2 = document.getElementsByClassName('node2');

node2.textContent = "I used the getElementByClassName('node2') method to access this";
//Select All the h3 tags and change the text to: "I used the getELementByTagName("h3") method to access all of these" */
const h3Tags = document.getElementsByTagName("h3");
for (let i = 0; i < h3Tags.length; i++) {
  h3Tags[i].textContent = `I used the getElementByTagName("h3")method to access all of these`; 
}

// Exercise #2: Creating/Appending/Inserting document..createdElement/objects

// create a paragraph element using the document.createElement() and put this text inside
const myPara = document.createElement("p");
myPara.textContent = 'This node was created using the createElement() method';

// Append the created node to the parent node using the parent.appendChild() method
const parentDiv = document.querySelector("#parent");
parentDiv.appendChild(myPara);

// create the <a> element using the document.createElement() and put this text inside
const myAnchor = document.createElement("a");
myAnchor.textContent = "I am an <a> tag";
//TODO:BONUS: Add a link href to the <a>
myAnchor.href = "http://gooogle.com";
//TODO : Insert the created <a> in the parent but before the <a> you just created using the element.insertBefore()method
parentDiv.insertBefore(myAnchor, myPara);
myAnchor.target = "_blank";



// Exercise 3: Removing/Replacing elements/objects
const exercise3Container = document.querySelector("#excerise-conatiner3");
let oldChild = document.querySelector("#N1")

let newChildNode = document.createElement("p");
newChildNode.textContent = "Child Node that replace old child";
// TODO: remove the "New Child Node"
setTimeout(() => {
  newChildPara.remove();
}, 3000);



/*----------- Exercise #4: LIST ITEMS ----------- */
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
"juice(any kind)",
];

// Create an unordered list element
const groceryUL = document.createElement('ul');
// Iterate over the array values, and create a list item element for each
list.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  //TODO:Append the unordered list to the 'div#container' under exercise 4
  ul.appendChild(li);

});

for(const index in list) {
  const newLI = document.createElement("li");
  newLI.textContent = list[index];
  groceryUL.append(newLI);
}


for(const hullabaloo of list) {
  const newLI = document.createdElement("li")
  newLI.textContent = hullabaloo;
  groceryUL.append(newLI);
}
list.forEach((grocery) => {
  const newLI = document.createElement("li");
  newLI.textContent = grocery;
  //TODO: Append the new list items to the unordered list element.
  groceryUL.append(newLI);
});
// Append the unordered list to the `div#container` under exercise 4
document.querySelector("#container"),appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/
// Function to display the modal
const triggerBtn = document.getElementById("triggerBtn")g;
triggerBtn.addEventListener("click", show);

function show () {
  //Creation
  let modalContainer = document.createElement("div");
  let modalCard = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let CloseBtn = document.createElement("button");

  
  //Modifications
  h2.textContent = "Modal Header";
  p.textContent = 'Clicking the button triggers the oneclick event, which calls the JS function show()...which alerts the user';
  modalDiv.id = "Modal";
  modalCard.classList.add("modal-card");
  modalCloseBtn.textContent = "X";
  modalCloseBtn.addEventListener("click" , () => {      
  modalDiv.remove();


  })}
 
  
   //add an event listner to the closebtn
  //that removes the modalContainer from the body
  document.body.removeChild(modalContainer);


  modalCard.append(h2, p, closeBtn);
  modalCard.classList.add("modal-card");

 //add the modalCard to the model
 modalContainer.id = "modal";
 modalContainer.appendChild(modalCard);

 //add the modal to the body
 document.body.appendChild(modalContainer);



let button = document.querySelector("#btn");
button.addEventListener("click" , show);

//This div should be a "modal"that covers the main content on the screen.
  modalPara.textContent = 'Clicking the button triggers the oneclick event, which calls the JS function show()...which alerts the user';
  modalDiv.id='modal';
  modalCard.classList.add("modal-card");
  modalCloseBtn.textContent = "X";
  modalCloseBtn.addEventListener("click", () => { 
    modalDiv.remove();
  });

  //attaching the element to the page
  document.getelementByClassName("exercises5")[0].append(modalDiv);
  modalDiv.append(modalCard);
  modalCard.append(modalCloseBtn, modalPara);

//select the button
const createModalBtn = document.querySelector("#btn");
//Give it an event listner
//and have that listner invoke the show function
createModalBtn.addEventListener("click", show);
  modal.addEventListener("click", function(){
    modal.remove();
  })