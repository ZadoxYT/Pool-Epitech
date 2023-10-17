async function my_fetch(url) {
    const resp = await fetch(url);
    const valeur = await resp.json();
    console.log(valeur)
}

my_fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528')
