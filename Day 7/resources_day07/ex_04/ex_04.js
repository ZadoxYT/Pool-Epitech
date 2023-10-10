const plusButtons = document.querySelectorAll('.plus-btn');
const minusButtons = document.querySelectorAll('.minus-btn');
const deleteButtons = document.querySelectorAll('.delete-btn');
const likeButtons = document.querySelectorAll('.like-btn');

plusButtons.forEach(button => {
  button.addEventListener('click', increaseQuantity);
});

minusButtons.forEach(button => {
  button.addEventListener('click', decreaseQuantity);
});

deleteButtons.forEach(button => {
  button.addEventListener('click', deleteProduct);
});

likeButtons.forEach(button => {
  button.addEventListener('click', toggleLike);
});

function increaseQuantity(event) {
  const quantityInput = event.target.nextElementSibling;
  let quantity = parseInt(quantityInput.value);
  quantity++;
  quantityInput.value = quantity;
}

function decreaseQuantity(event) {
  const quantityInput = event.target.previousElementSibling;
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
  }
}

function deleteProduct(event) {
  const item = event.target.closest('.item');
  item.remove();
}

function toggleLike(event) {
  const likeButton = event.target;
  likeButton.classList.toggle('is-active');
}
