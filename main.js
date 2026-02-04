let currentScreen = "closet"; // "closet" | "weather" | "outfit" | "win" | "lose"
let weatherChoice = null; // "sunny" or "rainy"

function setup() {
  createCanvas(800, 800);
  textFont("sans-serif");
}

function draw() {
  if (currentScreen === "closet") drawCloset();
  else if (currentScreen === "weather") drawWeather();
  else if (currentScreen === "outfit") drawOutfit();
  else if (currentScreen === "win") drawWin();
  else if (currentScreen === "lose") drawLose();
}

function mousePressed() {
  if (currentScreen === "closet") closetMousePressed();
  else if (currentScreen === "weather") weatherMousePressed();
  else if (currentScreen === "outfit") outfitMousePressed();
  else if (currentScreen === "win") winMousePressed();
  else if (currentScreen === "lose") loseMousePressed();
}

function keyPressed() {
  if (currentScreen === "closet") closetKeyPressed?.();
  else if (currentScreen === "weather") weatherKeyPressed?.();
  else if (currentScreen === "outfit") outfitKeyPressed?.();
  else if (currentScreen === "win") winKeyPressed();
  else if (currentScreen === "lose") loseKeyPressed();
}
