console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth

  let middleEarth = document.createElement("section");
  middleEarth.id = "middle-earth";

  // 2. use a for loop to iterate over the lands array that does the following:

  for (i = 0; i < lands.length; i++) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)

    newArt = document.createElement("article");

    //   2b. gives each land article an `id` tag of the corresponding land name

    newArt.setAttribute("id", lands[i]);

    //   2c. includes an h1 with the name of the land inside each land article
    let h1 = document.createElement("h1");
    h1.innerText = lands[i];
    newArt.appendChild(h1);

    //   2d. appends each land to the middle-earth section

    middleEarth.appendChild(newArt);

    // 3. append the section to the body of the DOM.

    document.body.append(middleEarth);
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

// Got it to display on the page but doesn't add in the elements section when clicked
function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire

  let hobbitUl = document.createElement("ul");
  hobbitUl.id = "theBoys";

  // document.body.append(hobbitUl);
  // console.log(hobbitUl);

  // give each hobbit a class of `hobbit`
  for (i = 0; i < hobbits.length; i++) {
    let addTheBoys = document.createElement("li");
    addTheBoys.innerHTML = hobbits[i];
    addTheBoys.setAttribute("class", "hobbits");
    hobbitUl.appendChild(addTheBoys);
  }
  console.log(hobbitUl);

  let shire = document.getElementById("The-Shire");
  shire.appendChild(hobbitUl);

  // let theBoys = document.getElementById("theBoys");
  // addTheBoys.className = "Hobbit";
}
// hint: create a 'ul' outside the loop into which to append the 'li's

// hint: get 'The-Shire' by using its id

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  let oneRing = document.createElement("div");
  oneRing.id = "the-ring";
  // console.log(oneRing);

  // give the div a class of `'magic-imbued-jewelry'`
  oneRing.setAttribute("class", "magic-imbued-jewelry");
  // console.log(oneRing);

  // add the ring as a child of `Frodo`
  let elijahWood = document.querySelector(".hobbits");
  elijahWood.appendChild(oneRing);
  console.log(elijahWood);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
  let orcsNmore = document.createElement("ul");
  // give each of the baddies a class of "baddy"

  for (i = 0; i < baddies.length; i++) {
    let addTheBaddies = document.createElement("li");
    addTheBaddies.innerHTML = baddies[i];
    addTheBaddies.setAttribute("class", "baddy");
    orcsNmore.appendChild(addTheBaddies);
  }
  // remember to append them to Mordor
  let mordor = document.getElementById("Mordor");
  mordor.appendChild(orcsNmore);
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
  let aside = document.createElement("aside");

  // put an `unordered list` of the `'buddies'` in the aside
  let nonHobbits = document.createElement("ul");

  for (i = 0; i < buddies.length; i++) {
    let addBuddies = document.createElement("li");
    addBuddies.innerHTML = buddies[i];
    nonHobbits.appendChild(addBuddies);
  }

  aside.appendChild(nonHobbits);
  let rivendell = document.getElementById("Rivendell");
  rivendell.appendChild(aside);

  // insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`

  for (i = 0; i < hobbits.length; i++) {
    let addTheBoys = document.createElement("li");
    let rivendell = document.getElementById("Rivendell");
    addTheBoys.innerHTML = hobbits[i];
    addTheBoys.setAttribute("class", "hobbits");
    rivendell.appendChild(addTheBoys);
  }
  let shire = document.getElementById("The-Shire");
  let shireTeam = document.getElementById("theBoys");
  shire.removeChild(shireTeam);
  let oneRing = document.createElement("div");
  oneRing.id = "the-ring";
  // console.log(oneRing);

  // give the div a class of `'magic-imbued-jewelry'`
  oneRing.setAttribute("class", "magic-imbued-jewelry");
  // console.log(oneRing);

  // add the ring as a child of `Frodo`
  let elijahWood = document.querySelector(".hobbits");
  elijahWood.appendChild(oneRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  let searchStrider = document.getElementsByTagName("li");
  console.log(searchStrider);
  for (i = 0; i < searchStrider.length; i++) {
    if (searchStrider[i].innerHTML === "Strider") {
      searchStrider[i].innerHTML = "Aragorn";
      break;
    }
  }
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  let theFellowship = document.createElement("div");
  theFellowship.setAttribute("class", "the-fellowship");
  console.log(theFellowship);
  let rivendell = document.getElementById("Rivendell");
  rivendell.appendChild(theFellowship);

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
  let = fellowshipMembers = rivendell.querySelectorAll("li");
  for (i = 0; i < fellowshipMembers.lenght; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);
    alert(fellowshipMembers[i].textContent + " has joined the fellowship.");
  }
  console.log(fellowshipMembers);

  // after each character is added make an alert that they // have joined your party

  // NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  let gandalf = fellowshipMembers[0];
  console.log(gandalf);
  gandalf.textContent = "Gandalf the White";
  // apply the following style to the element, make the // background 'white', add a grey border
  gandalf.style.border = "5px solid gray";
  gandalf.style.backgroundColor = "white";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of Gondor has been blown!");
  // Boromir's been killed by the Uruk-hai!
  console.log(fellowshipMembers[4]);
  let boromir = fellowshipMembers[4];
  boromir.parentNode.removeChild(boromir);
  // Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  // add a div with an id of `'mount-doom'` to `Mordor`
  let sam = fellowshipMembers[6];
  let frodo = fellowshipMembers[5];
  let mordor = document.getElementById("Mordor");
  mordor.appendChild(sam);

  mordor.appendChild(frodo);
  console.log(frodo);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  let gollum = document.createElement("div");
  gollum.setAttribute("id", "gollum");
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  let theRing = document.getElementById("the-ring");
  gollum.appendChild(theRing);
  // Move Gollum into Mount Doom
  let mordor = document.getElementById("Mordor");
  // let mountDoom = mordor.getElementsByTagName("div")[0];
  mordor.appendChild(gollum);
  console.log(theRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  let gollum = document.getElementById("gollum");
  gollum.parentElement.removeChild(gollum);
  // Move all the `hobbits` back to `the shire`
  let allHobs = document.querySelectorAll(".hobbits");
  let hobbitUl = document.createElement("ul");
  for (i = 0; i < hobbits.length; i++) {
    let addTheBoys = document.createElement("li");
    addTheBoys.innerHTML = hobbits[i];
    hobbitUl.appendChild(addTheBoys);
  }
  console.log(hobbitUl);
  shire = document.getElementById("The-Shire");
  shire.appendChild(hobbitUl);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
