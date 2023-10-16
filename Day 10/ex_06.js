function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function worker(task, timeRequired) {
    await sleep(timeRequired);
    return task + ' done';
}

async function factory(tasks) {
    const workers = [];

    for (const task of tasks['tasks']) {
        const workerPromise = worker(task['task'], parseInt(task['timeRequired']));
        workers.push(workerPromise);
    }

    let time = 0;
    for (const workerPromise of workers) {
        await new Promise(resolve => setTimeout(resolve, time));
        const result = await workerPromise;
        console.log(result);
        time += parseInt(tasks['tasks'][0]['timeRequired']);
    }
}



let tasks = {
    'tasks': [
        {
            'task': 'Teaching Astronomy',
            'timeRequired': '500',
        },
        {
            'task': 'Refill fuel',
            'timeRequired': '1500',
        },
        {
            'task': 'Repair module',
            'timeRequired': '1000',
        },
    ],
};

worker("Going to work", 1000).then(value => {
    console.log(value);
});

factory(tasks);
