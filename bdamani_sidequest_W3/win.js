function drawWin() {
  background(200, 255, 200);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("Great Outfit Choice! 😎", width / 2, height / 2);

  textSize(18);
  text("Click to play again", width / 2, height / 2 + 50);
}

function winMousePressed() {
  weatherChoice = null;
  currentScreen = "closet";
}
