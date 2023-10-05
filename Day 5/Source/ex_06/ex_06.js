document.addEventListener('DOMContentLoaded', function() {
  const phoneImage = document.getElementsByTagName('img');

  phoneImage.addEventListener('mouseover', function() {
    alert("Pretty, isn't it?");
  });
  addEventListener("resize", (event) => {
      alert("Size matters");
  });
});