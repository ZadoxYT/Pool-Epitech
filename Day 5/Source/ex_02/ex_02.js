document.addEventListener('DOMContentLoaded', function() {
  const paragraphs = document.querySelectorAll('p');
  let counter = 0;
  paragraphs.forEach((paragraph) => {
    paragraph.textContent = counter.toString();
    counter++;
  });
});