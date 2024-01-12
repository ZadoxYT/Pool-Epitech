document.getElementsByClassName("btn_solide").onclick = function () { console.log("T'as de beaux yeux tu sais ;)"); };

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

function search() {
  const temp = document.getElementsByClassName("search-input").value;
  console.log(temp);
  const frodisp = ["le pule","le moose cheese","le white stilton gold","le wyke farms cheddar","le bitto storico","le rogue river blue","le caciocavallo podolico"];
  temp.toLowerCase();
  if (frodisp.includes(tempr)) {
    console.log(tempr);
  }
}

const filterButtons = document.querySelectorAll('.filterButton');
const filterItems = document.querySelectorAll('.filterItem');

// Add click event listeners to the filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');

    // Get the filter value
    const filterValue = button.getAttribute('data-filter');

    // Show/hide items based on the filter value
    filterItems.forEach(item => {
      if (filterValue === 'all' || item.classList.contains(filterValue)) {
        item.classList.add('show');
      } else {
        item.classList.remove('show');
      }
    });
  });
});

console.log("Bonjour mon correcteur préféré, j'espère que tu vas bien ;)")
console.log("On t'as déjà dit que t'avais de beaux yeux ?")
console.log("Rawr")