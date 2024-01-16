let colorInputs = document.querySelectorAll(".inputs input");
let gradientColor = document.querySelector(".gradient-color");
let selectMenu = document.querySelector(".select-box select");
let textArea = document.querySelector("textarea");
let refreshBtn = document.querySelector(".refresh-btn");
let copyBtn = document.querySelector(".copy-btn");

const generateRandomHex = () => {
  let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  randomHex = `#${randomHex.padStart(6, "0")}`;

  return randomHex;
};

const generateGradient = (isRandom) => {
  if (isRandom) {
    console.log(generateRandomHex());
    colorInputs[0].value = generateRandomHex();
    colorInputs[1].value = generateRandomHex();
  }

  let gradinet = ` linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;

  gradientColor.style.background = gradinet;
  textArea.value = `background:${gradinet};`;
};

const copyCode = () => {
  navigator.clipboard.writeText(textArea.value);
  copyBtn.innerText = "Code Copied";

  setTimeout(() => {
    copyBtn.innerText = "Copy Code";
  }, 1000);
};

colorInputs.forEach((input) => {
  input.addEventListener("input", generateGradient);
});
selectMenu.addEventListener("change", generateGradient);
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
