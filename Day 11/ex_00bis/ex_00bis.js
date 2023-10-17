function check_route(url) {
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log("all is good");
            } else {
                throw new Error("shit happens");
            }
        })
        .catch(error => {
            console.error(error.message);
        });
}


check_route('https://v2.jokeapi.dev/joke/Any?lang=fr')