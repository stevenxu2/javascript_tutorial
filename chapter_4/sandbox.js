let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

const ul = document.querySelector(".people");

let html = "";

people.forEach(function (person) {
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);

ul.innerHTML = html;
