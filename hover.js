for (let i = 0; i <= 4; ++i) {
  let div = document.createElement("div");

  div.style.width = "100px";
  div.style.height = "100px";
  div.style.border = "1px solid black";

  div.addEventListener("mouseover", function () {
    div.style.width = "110px";
    div.style.height = "110px";
    div.style.border = "5px solid black";
  });

  div.addEventListener("mouseout", function () {
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.border = "1px solid black";
  });

  document.body.appendChild(div);
}

let body = document.querySelector("body");

body.style.display = "flex";



// я потерял код с галереей так что просто сделал обычные дивы