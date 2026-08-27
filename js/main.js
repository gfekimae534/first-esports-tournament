const buttons = document.querySelectorAll(".rule-button");
const contents = document.querySelectorAll(".rule-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("クリックされました");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const game = button.dataset.game;

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    document.getElementById(game).classList.add("active");
  });
});
