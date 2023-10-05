function newt() {
    let price = document.getElementById("price");
    price.textContent = '0 €';
}
window.onload = function(){
    newt()
}
function reloadPage() {
    location.reload();
}
    