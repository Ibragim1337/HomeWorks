
// const socialLinks = [
//   { name: "Facebook", url: "#" },
//   { name: "Twitter", url: "#" },
//   { name: "Instagram", url: "#" },
//   { name: "LinkedIn", url: "#" },
//   { name: "Pinterest", url: "#" },
//   { name: "Tumblr", url: "#" },
//   { name: "Snapchat", url: "#" },
//   { name: "WhatsApp", url: "#" },
//   { name: "YouTube", url: "#" },
//   { name: "Reddit", url: "#" },
//   { name: "GitHub", url: "#" },
//   { name: "Dribbble", url: "#" }
// ];


// let socialList = document.createElement("ul");
// document.body.appendChild(socialList);

// socialLinks.forEach(link => {
//   let listItem = document.createElement("li");
//   let anchor = document.createElement("a");


//   anchor.textContent = link.name;
//   anchor.href = link.url;


//   anchor.classList.add("social-link");


//   anchor.addEventListener("mouseover", function () {

//       let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
//       anchor.style.color = randomColor;
//   });

//   anchor.addEventListener("click", function (event) {
//       event.preventDefault();
//   });

//   listItem.appendChild(anchor);
//   socialList.appendChild(listItem);
// });

//-=---------------------------------------------2 задание ---------------------------------------

let button = document.createElement("button");
button.textContent = "Нажми меня!";
document.body.appendChild(button);


for (let i = 1; i <= 10; i++) {
    button.addEventListener("click", function () {
        console.log("Сообщение от слушателя №" + i);
    });
}


function promptForNumber(min, max) {
    let input;
    do {
        input = parseInt(prompt("Введите число от " + min + " до " + max + ":"));
    } while (isNaN(input) || input < min || input > max);
    return input;
}


let userNumber = promptForNumber(1, 10);


button.addEventListener("click", function () {
    for (let i = 1; i <= userNumber; i++) {
        console.log("Сообщение " + i);
    }
});