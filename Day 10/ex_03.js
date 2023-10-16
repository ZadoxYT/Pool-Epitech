function promiseMe(promise) {
    return new Promise((resolve, reject) => {
        resolve("I promise you to " + promise.trim());
    });
}

function checkStatus(machine) {
    machine
        .then((message) => {
            console.log(message);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("Checking status over");
        });
}

checkStatus(promiseMe("fly to the moon"));
