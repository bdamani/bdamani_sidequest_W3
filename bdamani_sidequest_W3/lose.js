function drawLose() {
  background(255, 200, 200);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("Oh no… bad outfit choice 😭", width / 2, height / 2);

  textSize(18);
  text("Click to try again", width / 2, height / 2 + 50);
}

function loseMousePressed() {
  weatherChoice = null;
  currentScreen = "closet";
}
