// slide to go to next app screen

const slider = document.getElementById("mySlider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");
  if (value > 70) {
    label.textContent = "";
    displayAppScreen();
  } else {
    label.textContent = "Slide to Unlock";
  }
});

const displayAppScreen = () => {
  // hide home Screen
  document.querySelector(".homeScreen").remove();

  // show app screen
  document.querySelector(".appScreen").style.display = "block";
};
