function initializeMachine(machineName, timeRequired) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${machineName.trim()} initialized`);
        }, timeRequired * 1000);
    });
}

initializeMachine("Computer", 3).then((value) => {
    console.log(value);
});
