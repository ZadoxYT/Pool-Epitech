var paragraphs = document.querySelectorAll('p');
var lastParagraph = paragraphs[paragraphs.length - 1];
var newParagraph = document.createElement('p');

newParagraph.textContent = 'Now featuring a headphone jack!';
lastParagraph.insertAdjacentElement('afterend', newParagraph);

document.addEventListener('DOMContentLoaded', function() {
    var paragraphs = document.querySelectorAll('p');
var lastParagraph = paragraphs[paragraphs.length - 1];
var newParagraph = document.createElement('p');

newParagraph.textContent = 'Now featuring a headphone jack!';
lastParagraph.insertAdjacentElement('afterend', newParagraph);
});
