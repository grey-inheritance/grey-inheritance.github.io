document.body.addEventListener("click", (ev) => {
  const isExpTitle = !!ev.target.closest(".spoiler__title-bar");
  const spoiler = ev.target.closest(".spoiler");

  if (!isExpTitle) {
    return;
  }

  spoiler.classList.toggle("spoiler--open")
});
