function promiseMe(promise) {
    return new Promise((resolve, reject) => {
        resolve("I promise you to " + promise.trim());
    });
}

promiseMe("fly to the moon").then((value) => {
    console.log(value);
});
