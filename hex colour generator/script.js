const colour = document.querySelector(".colour");
const btn = document.querySelector(".generate");

const generateColour = () => {
  const randomColour = Math.random().toString(16).substring(2,8);
document.body.style.backgroundColor = "#" + randomColour;
colour.innerHTML = "#" + randomColour;
}

btn.addEventListener ("click", generateColour);

generateColour();
















