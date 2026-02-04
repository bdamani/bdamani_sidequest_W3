// ------------------------------
// outfit.js
// ------------------------------

const hoodieBtn = { x: 400, y: 350, w: 260, h: 60 };
const tshirtBtn = { x: 400, y: 450, w: 260, h: 60 };

function drawOutfit() {
  background(255, 235, 220);
  textAlign(CENTER, CENTER);
  textSize(28);
  fill(0);
  text("Pick your outfit:", width / 2, 180);

  drawOutfitButton(hoodieBtn, "Hoodie 🧥");
  drawOutfitButton(tshirtBtn, "T-shirt 👕");
}

function outfitMousePressed() {
  if (isOutfitHover(tshirtBtn) && weatherChoice === "rainy") {
    currentScreen = "lose"; // losing branch
  } else if (isOutfitHover(hoodieBtn)) {
    currentScreen = "win";
  } else if (isOutfitHover(tshirtBtn)) {
    currentScreen = "win";
  } else {
    // clicked somewhere else — do nothing
  }
}

// ------------------------------
// Local helpers (ONLY for outfit)
// ------------------------------

function drawOutfitButton(btn, label) {
  rectMode(CENTER);
  stroke(0);
  if (isOutfitHover(btn)) {
    fill(180);
  } else {
    fill(220);
  }
  rect(btn.x, btn.y, btn.w, btn.h, 12);

  noStroke();
  fill(0);
  text(label, btn.x, btn.y);
}

function isOutfitHover(btn) {
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
