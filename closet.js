const closetStartBtn = { x: 400, y: 420, w: 280, h: 60 };

function drawCloset() {
  background(245);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("Your Closet 👗", width / 2, 200);

  textSize(20);
  text("Hit enter to start picking your outfit", width / 2, 260);
}

function closetKeyPressed() {
  if (key === "Enter") {
    currentScreen = "weather";
  }

  // in closet.js
  function closetMousePressed() {
    currentScreen = "weather"; // force jump for testing
  }
}
