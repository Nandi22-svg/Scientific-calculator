let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleScientific() {
  const wrapper = document.getElementById("scientificWrapper");
  const buttons = document.querySelector(".scientific-buttons");
  const button = document.querySelector(".mode-btn");

  wrapper.classList.toggle("active");
  buttons.classList.toggle("active");

  if (wrapper.classList.contains("active")) {
    button.textContent = "Standard Calculator";
  } else {
    button.textContent = "Scientific Calculator";
  }
}

function square() {
  display.value = Math.pow(Number(display.value), 2);
}

function squareRoot() {
  display.value = Math.sqrt(Number(display.value));
}

function sin() {
  display.value = Math.sin(Number(display.value) * Math.PI / 180);
}

function cos() {
  display.value = Math.cos(Number(display.value) * Math.PI / 180);
}

function tan() {
  display.value = Math.tan(Number(display.value) * Math.PI / 180);
}