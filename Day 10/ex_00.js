async function asyncFunc() {
    return new Promise((resolve, reject) => {
        resolve("Hello World!");
    });
}

asyncFunc().then((result) => {
    console.log(result);
});