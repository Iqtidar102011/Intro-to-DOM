// STEP -1. GIVE AN ID TO THE PARENT (HERE UL)
// where to add
// step-2: get elemt by id
const placesList = document.getElementById("places_list");
// step 3: create a li (we want to add this li); WHAT TO be ADDed
const li = document.createElement("li");
// step 4: input text in this li by sing innerText
li.innerText = "new place added by js"
// step 5 : add the child
placesList.appendChild(li);

// 1. where to add
const mainContainer = document.getElementById("main_container");
// what to be added
// 1. section -- hi,--ul--li
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "this is added by javascript"
section.appendChild(h1);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Item 1";
ul.appendChild(li1);
const li2 = document.createElement("li");
li2.innerText = "Item 2";
ul.appendChild(li2);
const li3 = document.createElement("li");
li3.innerText = "Item 3";
ul.appendChild(li3);
const li4 = document.createElement("li");
li4.innerText = "Item 4";
ul.appendChild(li4);

// ad the childs

section.appendChild(ul);


mainContainer.appendChild(section);

// set innerHTML directlys
const newSection = document.createElement("section");
newSection.innerHTML = `

<h1> new section created by innerHTML</h1
<ul>
<li>item 1</li>
<li>item 2</li>
<li>item 3</li>
<li>item 4</li>


</ul>


`
mainContainer.appendChild(newSection);

