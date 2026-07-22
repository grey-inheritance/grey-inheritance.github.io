document.body.addEventListener("click", (ev) => {
  const isExpTitle = !!ev.target.closest(".spoiler__title-bar");
  const spoiler = ev.target.closest(".spoiler");

  if (!isExpTitle) {
    return;
  }

  spoiler.classList.toggle("spoiler--open")
});

// Fetch the "your-text-file.txt" file and inject it into the "text-container" div
fetch('your-text-file.txt')
  .then(response => response.text())
  .then(data => {
      document.getElementById('text-container').innerText = data;
  })
  .catch(error => console.error('Error loading file:', error));

// Character backgrounds
(async () => {
    const text = await (await fetch("/bgs/sully.txt")).text();
    sully_bg.innerHTML = text;
})();
