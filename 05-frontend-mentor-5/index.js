const titleElements = document.querySelectorAll(".title");

titleElements.forEach(titleEl => {
  titleEl.addEventListener("click", () => {
    const faqEl = titleEl.parentElement;
    const textEl = titleEl.nextElementSibling;
    faqEl.classList.toggle("open");

    if (faqEl.classList.contains("open")) {
      textEl.style.height = textEl.scrollHeight + "px";
    } else {
      textEl.style.height = "0px";
    }
  });
});
