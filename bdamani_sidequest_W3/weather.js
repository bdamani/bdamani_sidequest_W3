// ------------------------------
// weather.js
// ------------------------------

const sunnyBtn = { x: 400, y: 350, w: 260, h: 60 };
const rainyBtn = { x: 400, y: 450, w: 260, h: 60 };

function drawWeather() {
  background(200, 220, 255);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(0);
  text("What’s the weather today?", width / 2, 180);

  drawWeatherButton(sunnyBtn, "Sunny ☀️");
  drawWeatherButton(rainyBtn, "Rainy 🌧️");
}

function weatherMousePressed() {
  if (isWeatherHover(sunnyBtn)) {
    weatherChoice = "sunny";
    currentScreen = "outfit";
  } else if (isWeatherHover(rainyBtn)) {
    weatherChoice = "rainy";
    currentScreen = "outfit";
  } else {
    // clicked somewhere else – do nothing
  }
}

// ------------------------------
// Local helpers (ONLY for weather)
// ------------------------------

function drawWeatherButton(btn, label) {
  rectMode(CENTER);
  stroke(0);
  if (isWeatherHover(btn)) {
    fill(180);
  } else {
    fill(220);
  }
  rect(btn.x, btn.y, btn.w, btn.h, 12);

  noStroke();
  fill(0);
  text(label, btn.x, btn.y);
}

function isWeatherHover(btn) {
  if (
    mouseX > btn.x - btn.w / 2 &&
    mouseX < btn.x + btn.w / 2 &&
    mouseY > btn.y - btn.h / 2 &&
    mouseY < btn.y + btn.h / 2
  ) {
    return true;
  } else {
    return false;
  }
}
