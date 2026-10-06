const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentId = button.getAttribute("aria-controls");
    const content = document.querySelector(`#${contentId}`);

    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", !isOpen);
    content.hidden = isOpen;

    if (isOpen) {
      button.textContent = "Lees meer";
    } else {
      button.textContent = "Lees minder";
    }
  });
});
