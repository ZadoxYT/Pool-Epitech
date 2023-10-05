
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('addToCart')
    let x = document.getElementsByClassName('cart-btn')
    for(var i = 0; i < x.length; i++){
        x[i].innerText="CHANGE COLOR";    // Change the content
    }
    button.addEventListener('click', function() {
        randomBackground()
    });

    function randomBackground(){
        let x = Math.floor(Math.random() * 256)
        let y = Math.floor(Math.random() * 256)
        let z = Math.floor(Math.random() * 256)
        let bgColor = `rgb(${x}, ${y}, ${z})`
        document.body.style.background = bgColor;
    }

});