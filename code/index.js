document.body.addEventListener("click", (ev) => {
  const isExpTitle = !!ev.target.closest(".spoiler__title-bar");
  const spoiler = ev.target.closest(".spoiler");

  if (!isExpTitle) {
    return;
  }

  spoiler.classList.toggle("spoiler--open")
});

// Fetch the "your-text-file.txt" file and inject it into the "text-container" div
fetch('/bgs/sully.txt')
  .then(response => response.text())
  .then(data => {
      document.getElementById('sully_bg').innerText = data;
  })
  .catch(error => console.error('Error loading file:', error));

